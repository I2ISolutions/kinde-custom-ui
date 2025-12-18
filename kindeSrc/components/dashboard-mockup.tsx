import React from "react";

const DashboardMockup: React.FC = () => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: "rgba(13, 15, 23, 0.95)", // Slightly lighter/translucent
    borderRadius: "4px",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)", // Inner highlight
    backdropFilter: "blur(10px)",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.45rem",
    fontWeight: 900,
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: "0.25em", // Reduced from 0.35em
    marginBottom: "0.75rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const valueStyle: React.CSSProperties = {
    fontSize: "1.5rem", // Reduced from 1.75rem
    fontWeight: 800,
    color: "#ffffff",
    letterSpacing: "0.02em",
    fontFamily: '"JetBrains Mono", monospace',
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: "2px", // Slightly increased gap for definition
        padding: "2px",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "6px", // Added outer radius
        boxShadow: "0 0 0 1px rgba(0,0,0,0.5), 0 50px 100px -20px rgba(0,0,0,0.7)", // Deep shadow
      }}
    >
      {/* Row 1: High-Level Portfolio Telemetry */}
      <div style={{ ...cardStyle, gridColumn: "span 4", padding: "1.25rem" }}>
        <div>
          <p style={labelStyle}>FISCAL_LIQUIDITY</p>
          <h3 style={valueStyle}>$128.4M</h3>
          <div
            style={{
              marginTop: "0.75rem",
              fontSize: "0.55rem",
              fontWeight: 900,
              color: "#10B981",
              fontFamily: '"JetBrains Mono"',
              letterSpacing: "0.1em",
            }}
          >
            +22.4%{" "}
            <span style={{ color: "#475569", fontWeight: 600 }}>
              CASH_ACCOUNTING
            </span>
          </div>
        </div>
      </div>

      <div style={{ ...cardStyle, gridColumn: "span 4", padding: "1.25rem" }}>
        <div>
          <p style={labelStyle}>PROJECT_PRECISION</p>
          <h3 style={valueStyle}>98.2%</h3>
          <div
            style={{
              height: "24px",
              display: "flex",
              alignItems: "flex-end",
              gap: "2px",
              marginTop: "0.75rem",
            }}
          >
            {[30, 80, 50, 95, 70, 85, 40, 100, 60, 110].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  backgroundColor: "#6366f1",
                  opacity: 0.3 + i * 0.07,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ ...cardStyle, gridColumn: "span 4", padding: "1.25rem" }}>
        <div>
          <p style={labelStyle}>HCM_RETENTION</p>
          <h3 style={valueStyle}>94.1%</h3>
          <div
            style={{
              marginTop: "0.75rem",
              fontSize: "0.55rem",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "0.15em",
            }}
          >
            STABLE{" "}
            <span style={{ color: "#475569", fontWeight: 600 }}>
              [Q3_ACTIVE]
            </span>
          </div>
        </div>
      </div>

      {/* Row 2: Deep Core Operations */}
      <div style={{ ...cardStyle, gridColumn: "span 12", padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "2.5rem",
          }}
        >
          <div>
            <h4
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "0.05em",
                lineHeight: 1,
                margin: 0,
                fontFamily: '"Inter", sans-serif',
              }}
            >
              TENANT_CORE_OPERATIONS
            </h4>
            <p
              style={{
                fontSize: "0.6rem",
                color: "#64748b",
                fontWeight: 600,
                marginTop: "0.5rem",
                marginBottom: 0,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
              }}
            >
              Live Multi-Tenant Execution Stream
            </p>
          </div>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "0.4rem 1rem",
              fontSize: "0.5rem",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "0.4em",
            }}
          >
            SYSTEM_SYNC: NOMINAL
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem", // Reduced gap significantly to fit
          }}
        >
          {[
            { label: "CRM_VELOCITY", val: "12.4X", pct: "84%", color: "#4F46E5" },
            { label: "OPS_EFFICIENCY", val: "99.8", pct: "99%", color: "#10B981" },
            { label: "FIN_SOLVENCY", val: "1.82", pct: "72%", color: "#ffffff" },
            { label: "DELIVERY_RATE", val: "OPTIMAL", pct: "100%", color: "#4F46E5" },
          ].map((item, i) => (
            <div key={i}>
              <p style={{ ...labelStyle, marginBottom: "1.25rem" }}>
                {item.label}
              </p>
              <p style={{ ...valueStyle, fontSize: "1.5rem", marginBottom: "1rem" }}>
                {item.val}
              </p>
              <div
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ width: item.pct, height: "100%", backgroundColor: item.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;