export default function Slide4TechStack() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "5vh 5vw 14vh 5vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6vh" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "-1vw",
              top: "1.5vh",
              width: "12vw",
              height: "3vh",
              backgroundColor: "#0A1628",
              opacity: 0.1,
              zIndex: 0,
            }}
          />
          <h2
            style={{
              fontSize: "3.5vw",
              fontWeight: 900,
              color: "#0A1628",
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              position: "relative",
              zIndex: 1,
            }}
          >
            Tech Stack
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.02em" }}>
          property.ai
        </div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ paddingBottom: "3vh", borderBottom: "1px solid #E2E8F0" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", marginBottom: "1vh" }}>Backend</div>
            <div style={{ fontSize: "1.6vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>Python Flask</div>
            <div style={{ fontSize: "1.2vw", color: "#4A5568", marginTop: "0.5vh" }}>Gunicorn with 4 workers, production-ready</div>
          </div>

          <div style={{ paddingBottom: "3vh", borderBottom: "1px solid #E2E8F0" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", marginBottom: "1vh" }}>AI Model</div>
            <div style={{ fontSize: "1.6vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>Groq LLaMA 3.3 70B Versatile</div>
            <div style={{ fontSize: "1.2vw", color: "#4A5568", marginTop: "0.5vh" }}>Fast inference via Groq cloud API</div>
          </div>

          <div style={{ paddingBottom: "3vh", borderBottom: "1px solid #E2E8F0" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", marginBottom: "1vh" }}>Streaming</div>
            <div style={{ fontSize: "1.6vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>Server-Sent Events (SSE)</div>
            <div style={{ fontSize: "1.2vw", color: "#4A5568", marginTop: "0.5vh" }}>Live token streaming in the browser as AI responds</div>
          </div>

          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", marginBottom: "1vh" }}>Deployment</div>
            <div style={{ fontSize: "1.6vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>Replit</div>
            <div style={{ fontSize: "1.2vw", color: "#4A5568", marginTop: "0.5vh" }}>Registered artifact with artifact.toml run config</div>
          </div>
        </div>

        <div style={{
          flex: 0.8,
          backgroundColor: "#0A1628",
          color: "#FFFFFF",
          padding: "4vh 3vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", marginBottom: "2vh" }}>
            In-memory data layer
          </div>
          <div style={{ fontSize: "5vw", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: "2vh" }}>
            6
          </div>
          <div style={{ fontSize: "1.3vw", color: "#E2E8F0", lineHeight: 1.5, marginBottom: "4vh" }}>
            Tenants with rent status, maintenance tickets, lease dates, and contact info
          </div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.15)", marginBottom: "4vh" }} />
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", marginBottom: "1vh" }}>No database required</div>
          <div style={{ fontSize: "1.3vw", color: "#E2E8F0", lineHeight: 1.5 }}>
            All tenant context is injected directly into the system prompt at startup
          </div>
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: "5vh",
        left: "5vw",
        right: "5vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid #E2E8F0",
        paddingTop: "2vh",
      }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Tech Stack / Property Manager AI</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>04</div>
      </div>
    </div>
  );
}
