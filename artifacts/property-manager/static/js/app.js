const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

let conversationHistory = [];
let isStreaming = false;

function autoResize(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 140) + 'px';
}

function handleKeydown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
}

function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
}

function formatMarkdown(text) {
    return text
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/```[\w]*\n?([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        .replace(/^---$/gm, '<hr>')
        .replace(/^\* (.+)$/gm, '<li>$1</li>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>\n?)+/g, m => '<ul>' + m + '</ul>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
}

function addMessage(role, text, isTyping = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${role}`;

    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';

    if (role === 'assistant') {
        avatarDiv.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>`;
    } else {
        avatarDiv.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
        </svg>`;
    }

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';

    if (isTyping) {
        textDiv.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
    } else {
        textDiv.innerHTML = '<p>' + formatMarkdown(text) + '</p>';
    }

    contentDiv.appendChild(textDiv);
    msgDiv.appendChild(avatarDiv);
    msgDiv.appendChild(contentDiv);
    messagesEl.appendChild(msgDiv);
    scrollToBottom();

    return textDiv;
}

async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text || isStreaming) return;

    inputEl.value = '';
    inputEl.style.height = 'auto';

    addMessage('user', text);
    conversationHistory.push({ role: 'user', content: text });

    isStreaming = true;
    sendBtn.disabled = true;

    const typingTextDiv = addMessage('assistant', '', true);

    let responseText = '';
    let firstChunk = true;

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: conversationHistory })
        });

        if (!response.ok) throw new Error('Server error: ' + response.status);

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop();

            for (const line of lines) {
                if (!line.startsWith('data: ')) continue;
                const dataStr = line.slice(6).trim();
                if (!dataStr) continue;

                try {
                    const data = JSON.parse(dataStr);
                    if (data.done) break;
                    if (data.content) {
                        if (firstChunk) {
                            typingTextDiv.innerHTML = '';
                            firstChunk = false;
                        }
                        responseText += data.content;
                        typingTextDiv.innerHTML = '<p>' + formatMarkdown(responseText) + '</p>';
                        scrollToBottom();
                    }
                } catch (_) {}
            }
        }

        conversationHistory.push({ role: 'assistant', content: responseText });

    } catch (err) {
        typingTextDiv.classList.add('message-error');
        typingTextDiv.innerHTML = '<p>⚠ Error connecting to AI. Please try again.</p>';
        console.error(err);
    } finally {
        isStreaming = false;
        sendBtn.disabled = false;
        inputEl.focus();
    }
}

function sendQuick(prompt) {
    if (isStreaming) return;
    inputEl.value = prompt;
    sendMessage();
}

function clearChat() {
    conversationHistory = [];
    const msgs = messagesEl.querySelectorAll('.message');
    msgs.forEach((m, i) => { if (i > 0) m.remove(); });
}

async function loadStats() {
    try {
        const res = await fetch('/tenants');
        const tenants = await res.json();

        const total = tenants.length;
        const paid = tenants.filter(t => t.rent_paid).length;
        const unpaid = total - paid;
        const openIssues = tenants.reduce((sum, t) =>
            sum + t.maintenance_issues.filter(i => i.status !== 'resolved').length, 0);

        document.getElementById('stat-total').textContent = total;
        document.getElementById('stat-paid').textContent = paid;
        document.getElementById('stat-unpaid').textContent = unpaid;
        document.getElementById('stat-issues').textContent = openIssues;
    } catch (_) {}
}

loadStats();
inputEl.focus();
