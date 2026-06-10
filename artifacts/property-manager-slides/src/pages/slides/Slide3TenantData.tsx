export default function Slide3TenantData() {
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
              width: "22vw",
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
            Six Tenants, Real Data
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.02em" }}>
          property.ai
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "3vh", flex: 1 }}>
        <div style={{ display: "flex", gap: "3vw", alignItems: "flex-start", paddingBottom: "3vh", borderBottom: "1px solid #E2E8F0" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.4vw", color: "#A0AEC0", fontWeight: 600, flexShrink: 0, width: "3vw" }}>01</div>
          <div>
            <h3 style={{ fontSize: "1.6vw", fontWeight: 900, color: "#0A1628", margin: "0 0 0.8vh 0", letterSpacing: "-0.02em" }}>Rent Status</h3>
            <p style={{ fontSize: "1.3vw", color: "#4A5568", margin: 0, lineHeight: 1.5 }}>
              3 of 6 tenants paid — Marcus Williams, James Carter, and David Kim are outstanding
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "3vw", alignItems: "flex-start", paddingBottom: "3vh", borderBottom: "1px solid #E2E8F0" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.4vw", color: "#A0AEC0", fontWeight: 600, flexShrink: 0, width: "3vw" }}>02</div>
          <div>
            <h3 style={{ fontSize: "1.6vw", fontWeight: 900, color: "#0A1628", margin: "0 0 0.8vh 0", letterSpacing: "-0.02em" }}>Maintenance Issues</h3>
            <p style={{ fontSize: "1.3vw", color: "#4A5568", margin: 0, lineHeight: 1.5 }}>
              5 open tickets across units — leaky faucet, AC not cooling, broken window latch, mold, dishwasher
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "3vw", alignItems: "flex-start", paddingBottom: "3vh", borderBottom: "1px solid #E2E8F0" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.4vw", color: "#A0AEC0", fontWeight: 600, flexShrink: 0, width: "3vw" }}>03</div>
          <div>
            <h3 style={{ fontSize: "1.6vw", fontWeight: 900, color: "#0A1628", margin: "0 0 0.8vh 0", letterSpacing: "-0.02em" }}>Reminder Emails</h3>
            <p style={{ fontSize: "1.3vw", color: "#4A5568", margin: 0, lineHeight: 1.5 }}>
              Generated on demand — addressed to each tenant with their unit number and amount owed
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "3vw", alignItems: "flex-start" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.4vw", color: "#A0AEC0", fontWeight: 600, flexShrink: 0, width: "3vw" }}>04</div>
          <div>
            <h3 style={{ fontSize: "1.6vw", fontWeight: 900, color: "#0A1628", margin: "0 0 0.8vh 0", letterSpacing: "-0.02em" }}>Live Stats</h3>
            <p style={{ fontSize: "1.3vw", color: "#4A5568", margin: 0, lineHeight: 1.5 }}>
              Rent collected vs. outstanding calculated in real time from in-memory tenant records
            </p>
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
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Tenant Data / Property Manager AI</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>03</div>
      </div>
    </div>
  );
}
