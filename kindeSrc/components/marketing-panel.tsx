import React from "react";
import DashboardMockup from "./dashboard-mockup";

const MarketingPanel: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: "6rem 4rem 4rem 4rem", // Increased top padding to avoid cutoff
        overflow: "hidden",
        position: "relative",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", // Clean, deep gradient
      }}
    >
      {/* Subtle Mesh Gradient Overlay - Smooth, no patches */}
      <div 
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            pointerEvents: 'none',
        }}
      />

      <div style={{ width: "100%", textAlign: "left", marginBottom: "3rem", position: "relative", zIndex: 10 }}>
        <h2
          style={{
            fontSize: "clamp(3rem, 5vw, 5rem)",
            fontWeight: 900,
            color: "white",
            lineHeight: "0.9",
            marginBottom: "1.5rem",
            letterSpacing: "-0.04em",
            fontFamily: '"Inter", sans-serif',
          }}
        >
          UNIFIED CORE.
          <br />
          ELASTIC SCALE.
        </h2>
        <div style={{ display: "flex", gap: "4rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: "1.5",
              maxWidth: "500px",
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
              borderLeft: "2px solid #6366f1",
              paddingLeft: "1.5rem",
            }}
          >
            <span style={{ fontSize: "0.6rem", fontWeight: 800, color: "#a5b4fc", letterSpacing: "0.25em", textTransform: "uppercase" }}>
              ARCHITECTURE
            </span>
            <span style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.05em", fontFamily: '"JetBrains Mono", monospace' }}>
              Multi-Tenant Mesh v5.0
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          transform: "perspective(2000px) rotateX(10deg) rotateY(-5deg) rotateZ(2deg) scale(0.9)", // Dynamic 3D angle
          transformOrigin: "center center",
          filter: "drop-shadow(0 50px 100px rgba(0,0,0,0.6))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
          position: "relative",
          zIndex: 10
        }}
      >
        <DashboardMockup />
      </div>
    </div>
  );
};

export default MarketingPanel;
