import os
import json
from flask import Flask, render_template, request, jsonify, Response, stream_with_context
from groq import Groq

app = Flask(__name__)

client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

TENANTS = [
    {
        "id": 1,
        "name": "Sarah Johnson",
        "unit": "101",
        "email": "sarah.johnson@email.com",
        "phone": "555-0101",
        "rent": 1200,
        "rent_paid": True,
        "paid_date": "2026-06-01",
        "lease_end": "2026-12-31",
        "maintenance_issues": []
    },
    {
        "id": 2,
        "name": "Marcus Williams",
        "unit": "102",
        "email": "marcus.w@email.com",
        "phone": "555-0102",
        "rent": 1350,
        "rent_paid": False,
        "paid_date": None,
        "lease_end": "2026-09-30",
        "maintenance_issues": [
            {"id": "M001", "description": "Leaky faucet in bathroom", "status": "pending", "reported": "2026-06-05"}
        ]
    },
    {
        "id": 3,
        "name": "Priya Patel",
        "unit": "103",
        "email": "priya.patel@email.com",
        "phone": "555-0103",
        "rent": 1100,
        "rent_paid": True,
        "paid_date": "2026-06-03",
        "lease_end": "2027-01-31",
        "maintenance_issues": [
            {"id": "M002", "description": "AC not cooling properly", "status": "in_progress", "reported": "2026-06-07"}
        ]
    },
    {
        "id": 4,
        "name": "James Carter",
        "unit": "201",
        "email": "j.carter@email.com",
        "phone": "555-0201",
        "rent": 1500,
        "rent_paid": False,
        "paid_date": None,
        "lease_end": "2026-08-31",
        "maintenance_issues": [
            {"id": "M003", "description": "Broken window latch", "status": "pending", "reported": "2026-06-08"},
            {"id": "M004", "description": "Mold in bathroom ceiling", "status": "pending", "reported": "2026-06-09"}
        ]
    },
    {
        "id": 5,
        "name": "Elena Rossi",
        "unit": "202",
        "email": "elena.rossi@email.com",
        "phone": "555-0202",
        "rent": 1400,
        "rent_paid": True,
        "paid_date": "2026-06-02",
        "lease_end": "2027-03-31",
        "maintenance_issues": []
    },
    {
        "id": 6,
        "name": "David Kim",
        "unit": "203",
        "email": "d.kim@email.com",
        "phone": "555-0203",
        "rent": 1250,
        "rent_paid": False,
        "paid_date": None,
        "lease_end": "2026-11-30",
        "maintenance_issues": [
            {"id": "M005", "description": "Dishwasher not draining", "status": "resolved", "reported": "2026-05-28"}
        ]
    }
]

SYSTEM_PROMPT = f"""You are an AI property manager assistant. You have access to real-time tenant data for a residential property.

Here is the current tenant data:
{json.dumps(TENANTS, indent=2)}

You can help the property manager with:
1. Checking rent payment status (who has paid, who hasn't)
2. Viewing and summarizing maintenance issues (pending, in-progress, resolved)
3. Generating professional reminder emails for late rent payments
4. Providing tenant contact information
5. Summarizing the overall property status

When generating reminder emails, make them professional, firm but polite, and include:
- The tenant's name and unit number
- The amount owed
- A clear call to action
- Contact information (use: manager@propertyco.com, (555) 999-0000)

Today's date is June 10, 2026. Rent was due June 1st, 2026.

Always be helpful, professional, and provide clear, organized information. When listing data, use formatted responses with clear sections."""


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    messages = data.get("messages", [])

    if not messages:
        return jsonify({"error": "No messages provided"}), 400

    def generate():
        stream = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "system", "content": SYSTEM_PROMPT}] + messages,
            stream=True
        )
        for chunk in stream:
            delta = chunk.choices[0].delta
            if delta.content:
                yield f"data: {json.dumps({'content': delta.content})}\n\n"
        yield f"data: {json.dumps({'done': True})}\n\n"

    return Response(
        stream_with_context(generate()),
        mimetype="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "X-Accel-Buffering": "no"
        }
    )


@app.route("/tenants", methods=["GET"])
def get_tenants():
    return jsonify(TENANTS)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
