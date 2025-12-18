import React from "react";
import DashboardMockup from "./dashboard-mockup";

const MarketingPanel: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center", // Centered vertically
        height: "100%",
        padding: "2rem", // Reduced padding
        overflow: "hidden",
      }}
    >
      <div style={{ width: "100%", textAlign: "left", marginBottom: "2rem" }}>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 4vw, 4rem)", // Reduced max size
            fontWeight: 900,
            color: "white",
            lineHeight: "0.9",
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em", // Tighter tracking
            fontFamily: '"Inter", sans-serif', // Explicit font
          }}
        >
          UNIFIED CORE.
          <br />
          ELASTIC SCALE.
        </h2>
        <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          <p
            style={{
              fontSize: "0.95rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: "1.6",
              maxWidth: "460px",
              fontWeight: 400,
              letterSpacing: "0.01em",
              fontFamily: '"Inter", sans-serif',
            }}
          >
            The definitive multi-tenant architecture for the modern enterprise.
            Consolidate CRM, HRMS, and Global Finance into a single source of truth.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              borderLeft: "1px solid rgba(255,255,255,0.15)",
              paddingLeft: "1.5rem",
            }}
          >
            <span style={{ fontSize: "0.5rem", fontWeight: 800, color: "#818cf8", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              ARCHITECTURE
            </span>
            <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.02em", fontFamily: '"JetBrains Mono", monospace' }}>
              Multi-Tenant Mesh v5.0
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          transform: "perspective(2000px) rotateX(8deg) scale(0.8)", // Reduced scale and tilt
          transformOrigin: "top center",
          filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.6))",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          marginTop: "0"
        }}
      >
        <DashboardMockup />
      </div>
    </div>
  );
};

export default MarketingPanel;
