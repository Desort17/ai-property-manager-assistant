export default function Slide1Title() {
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
        padding: "5vh 5vw",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.02em" }}>
          property.ai
        </div>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.9vw",
          color: "#4A5568",
          display: "flex",
          flexDirection: "column",
          gap: "1vh",
          textAlign: "right",
        }}>
          <div><span style={{ color: "#A0AEC0", marginRight: "1vw" }}>Project:</span>Property Manager AI</div>
          <div><span style={{ color: "#A0AEC0", marginRight: "1vw" }}>Date:</span>June 2026</div>
          <div><span style={{ color: "#A0AEC0", marginRight: "1vw" }}>Built with:</span>Flask + Groq</div>
          <div><span style={{ color: "#A0AEC0", marginRight: "1vw" }}>Status:</span>Deployed</div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "15vh", left: "5vw", width: "90vw" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "-2vw",
              top: "2vh",
              width: "34vw",
              height: "5vh",
              backgroundColor: "#0A1628",
              opacity: 0.1,
              zIndex: 0,
            }}
          />
          <h1
            style={{
              fontSize: "7vw",
              fontWeight: 900,
              color: "#0A1628",
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              position: "relative",
              zIndex: 1,
            }}
          >
            Property Manager AI
          </h1>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: "6vh",
        }}>
          <p
            style={{
              fontSize: "1.8vw",
              fontWeight: 500,
              color: "#4A5568",
              margin: 0,
              maxWidth: "55vw",
              lineHeight: 1.4,
              textWrap: "balance",
            }}
          >
            An AI chatbot that manages tenants, tracks rent, and drafts reminder emails — built in Python.
          </p>
          <div style={{ width: "28vw", height: "1px", backgroundColor: "#E2E8F0" }} />
        </div>
      </div>
    </div>
  );
}
