import React from "react";
import DashboardMockup from "./dashboard-mockup";

const MarketingPanel: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "3rem 2.5rem",
        overflow: "hidden",
        position: "relative",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        boxSizing: "border-box",
      }}
    >
      {/* Subtle Mesh Gradient Overlay */}
      <div 
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.12) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.12) 0%, transparent 50%)',
            pointerEvents: 'none',
        }}
      />

      <div style={{ width: "100%", textAlign: "left", marginBottom: "2rem", position: "relative", zIndex: 10, flexShrink: 0 }}>
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 900,
            color: "white",
            lineHeight: "0.95",
            marginBottom: "1rem",
            letterSpacing: "-0.03em",
            fontFamily: '"Inter", sans-serif',
          }}
        >
          UNIFIED CORE.
          <br />
          ELASTIC SCALE.
        </h2>
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          <p
            style={{
              fontSize: "0.95rem",
              color: "rgba(255, 255, 255, 0.75)",
              lineHeight: "1.5",
              maxWidth: "420px",
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
              gap: "0.4rem",
              borderLeft: "2px solid #6366f1",
              paddingLeft: "1.25rem",
            }}
          >
            <span style={{ fontSize: "0.55rem", fontWeight: 800, color: "#a5b4fc", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              ARCHITECTURE
            </span>
            <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.03em", fontFamily: '"JetBrains Mono", monospace' }}>
              Multi-Tenant Mesh v5.0
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          flex: "1 1 0",
          minHeight: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 10,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "100%",
            transform: "perspective(2000px) rotateX(8deg) rotateY(-3deg) scale(0.75)",
            transformOrigin: "center center",
            filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.5))",
          }}
        >
          <DashboardMockup />
        </div>
      </div>
    </div>
  );
};

export default MarketingPanel;
