export default function Slide2WhatItDoes() {
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
              width: "14vw",
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
            What It Does
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.02em" }}>
          property.ai
        </div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <p style={{ fontSize: "1.6vw", fontWeight: 500, color: "#4A5568", lineHeight: 1.5, margin: 0 }}>
            Ask questions in plain English. Get instant answers about your tenants.
          </p>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", color: "#A0AEC0", fontWeight: 600, flexShrink: 0, paddingTop: "0.2vh" }}>01</div>
            <p style={{ fontSize: "1.4vw", fontWeight: 700, color: "#0A1628", margin: 0, lineHeight: 1.4 }}>Ask who has paid rent this month</p>
          </div>
          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", color: "#A0AEC0", fontWeight: 600, flexShrink: 0, paddingTop: "0.2vh" }}>02</div>
            <p style={{ fontSize: "1.4vw", fontWeight: 700, color: "#0A1628", margin: 0, lineHeight: 1.4 }}>View all open maintenance issues</p>
          </div>
          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", color: "#A0AEC0", fontWeight: 600, flexShrink: 0, paddingTop: "0.2vh" }}>03</div>
            <p style={{ fontSize: "1.4vw", fontWeight: 700, color: "#0A1628", margin: 0, lineHeight: 1.4 }}>Get a professional reminder email drafted in seconds</p>
          </div>
          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", color: "#A0AEC0", fontWeight: 600, flexShrink: 0, paddingTop: "0.2vh" }}>04</div>
            <p style={{ fontSize: "1.4vw", fontWeight: 700, color: "#0A1628", margin: 0, lineHeight: 1.4 }}>See a live summary of the full property</p>
          </div>
        </div>

        <div style={{
          flex: 1,
          backgroundColor: "#F7FAFC",
          border: "1px solid #E2E8F0",
          padding: "4vh 3vw",
          display: "flex",
          flexDirection: "column",
        }}>
          <h4 style={{
            fontSize: "1vw",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#718096",
            margin: "0 0 3vh 0",
            fontFamily: "'DM Mono', monospace",
          }}>
            No more spreadsheets
          </h4>
          <p style={{
            fontSize: "2vw",
            fontWeight: 800,
            color: "#0A1628",
            lineHeight: 1.3,
            margin: "0 0 4vh 0",
            letterSpacing: "-0.02em",
          }}>
            "Who hasn't paid rent this month?" — answered instantly, with names and amounts.
          </p>
          <div style={{ marginTop: "auto" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0" }}>Powered by Groq LLaMA 3.3 70B</div>
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
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Overview / Property Manager AI</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>02</div>
      </div>
    </div>
  );
}
