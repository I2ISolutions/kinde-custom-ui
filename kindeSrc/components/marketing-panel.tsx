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
        justifyContent: "center",
        height: "100%",
        padding: "0",
      }}
    >
      <div style={{ width: "100%", textAlign: "left", marginBottom: "5rem" }}>
        <h2
          style={{
            fontSize: "clamp(3rem, 10vh, 6.25rem)",
            fontWeight: 900,
            color: "white",
            lineHeight: "0.85",
            marginBottom: "2.5rem",
            letterSpacing: "0.05em",
          }}
        >
          UNIFIED CORE.
          <br />
          ELASTIC SCALE.
        </h2>
        <div style={{ display: "flex", gap: "8rem", alignItems: "flex-start" }}>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255, 255, 255, 0.45)",
              lineHeight: "1.6",
              maxWidth: "520px",
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            The definitive multi-tenant architecture for the modern enterprise.
            Consolidate CRM, HRMS, and Global Finance into a single source of truth with
            Zopkit&apos;s unified command intelligence.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
              borderLeft: "1px solid rgba(255,255,255,0.12)",
              paddingLeft: "2rem",
            }}
          >
            <span style={{ fontSize: "0.5rem", fontWeight: 900, color: "#4F46E5", letterSpacing: "0.6em" }}>
              ARCHITECTURE
            </span>
            <span style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.05em" }}>
              Multi-Tenant Mesh v5.0
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          transform: "perspective(1800px) rotateX(5deg)",
          filter: "drop-shadow(0 60px 100px rgba(0,0,0,0.8))",
          maxHeight: "52vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <DashboardMockup />
      </div>
    </div>
  );
};

export default MarketingPanel;
