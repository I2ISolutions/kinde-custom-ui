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
        padding: "2rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Grid Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />
      
      {/* Ambient Glow */}
      <div 
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15), transparent 60%)',
            pointerEvents: 'none',
        }}
      />

      <div style={{ width: "100%", textAlign: "left", marginBottom: "2.5rem", position: "relative", zIndex: 10 }}>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 3.5vw, 4rem)",
            fontWeight: 900,
            color: "white",
            lineHeight: "0.95",
            marginBottom: "1.5rem",
            letterSpacing: "-0.03em",
            fontFamily: '"Inter", sans-serif',
            textShadow: "0 10px 30px rgba(0,0,0,0.5)",
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
              color: "rgba(255, 255, 255, 0.8)",
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
              borderLeft: "2px solid rgba(99, 102, 241, 0.5)", // Brighter indigo border
              paddingLeft: "1.5rem",
            }}
          >
            <span style={{ fontSize: "0.5rem", fontWeight: 800, color: "#a5b4fc", letterSpacing: "0.2em", textTransform: "uppercase" }}>
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
          transform: "perspective(2000px) rotateX(5deg) scale(0.85)", // Subtle tilt, slightly larger scale
          transformOrigin: "center center",
          filter: "drop-shadow(0 50px 100px rgba(0,0,0,0.5))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "0",
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
