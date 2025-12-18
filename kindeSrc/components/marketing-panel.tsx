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
        justifyContent: "flex-start", // Changed from center to allow better top spacing
        height: "100%",
        padding: "4rem 2rem", // Added padding
        overflow: "hidden", // Prevent scrollbars from tilt effect
      }}
    >
      <div style={{ width: "100%", textAlign: "left", marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 5rem)", // Reduced max size to prevent overflow
            fontWeight: 900,
            color: "white",
            lineHeight: "0.9",
            marginBottom: "2rem",
            letterSpacing: "0.02em",
          }}
        >
          UNIFIED CORE.
          <br />
          ELASTIC SCALE.
        </h2>
        <div style={{ display: "flex", gap: "4rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255, 255, 255, 0.6)",
              lineHeight: "1.6",
              maxWidth: "480px",
              fontWeight: 500,
              letterSpacing: "0.01em",
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
              borderLeft: "1px solid rgba(255,255,255,0.12)",
              paddingLeft: "1.5rem",
            }}
          >
            <span style={{ fontSize: "0.5rem", fontWeight: 900, color: "#4F46E5", letterSpacing: "0.6em" }}>
              ARCHITECTURE
            </span>
            <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.05em" }}>
              Multi-Tenant Mesh v5.0
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          transform: "perspective(2000px) rotateX(10deg) scale(0.9)", // Adjusted scale to fit better
          transformOrigin: "top center",
          filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.6))",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          marginTop: "1rem"
        }}
      >
        <DashboardMockup />
      </div>
    </div>
  );
};

export default MarketingPanel;
