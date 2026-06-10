export default function Slide5Deployed() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A1628",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "5vh 5vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10vh" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
          property.ai
        </div>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.9vw",
          color: "#A0AEC0",
          display: "flex",
          gap: "3vw",
        }}>
          <div>Built on Replit</div>
          <div>June 2026</div>
        </div>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        textAlign: "center",
      }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "30vw",
              height: "8vh",
              backgroundColor: "#FFFFFF",
              opacity: 0.05,
              zIndex: 0,
            }}
          />
          <h2
            style={{
              fontSize: "6vw",
              fontWeight: 900,
              color: "#FFFFFF",
              margin: "0 0 3vh 0",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              position: "relative",
              zIndex: 1,
            }}
          >
            Deployed.
          </h2>
        </div>
        <p style={{
          fontSize: "1.8vw",
          color: "#E2E8F0",
          maxWidth: "50vw",
          lineHeight: 1.5,
          margin: "0 0 8vh 0",
          fontWeight: 400,
        }}>
          The app is live on Replit.
          Ask it anything about your tenants.
        </p>
        <div style={{ width: "6vw", height: "1px", backgroundColor: "rgba(255,255,255,0.2)" }} />
      </div>

      <div style={{
        position: "absolute",
        bottom: "5vh",
        left: "5vw",
        right: "5vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid rgba(255,255,255,0.15)",
        paddingTop: "2vh",
      }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>
          Property Manager AI
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#FFFFFF", fontWeight: 600 }}>05</div>
      </div>
    </div>
  );
}
