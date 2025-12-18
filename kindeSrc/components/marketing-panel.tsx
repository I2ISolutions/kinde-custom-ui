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
        justifyContent: "center",
        padding: "5rem 4rem",
        overflow: "hidden",
        position: "relative",
        background: "linear-gradient(135deg, #0a0e1a 0%, #0f172a 50%, #1e293b 100%)",
        boxSizing: "border-box",
      }}
    >
      {/* Enhanced Gradient Overlay */}
      <div 
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 75% 25%, rgba(99, 102, 241, 0.2) 0%, transparent 60%), radial-gradient(circle at 25% 75%, rgba(59, 130, 246, 0.15) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
        }}
      />

      {/* Animated Grid Pattern */}
      <div 
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.4,
            pointerEvents: 'none',
        }}
      />

      <div style={{ width: "100%", textAlign: "left", marginBottom: "3rem", position: "relative", zIndex: 10, flexShrink: 0 }}>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 900,
            color: "white",
            lineHeight: "0.92",
            marginBottom: "1.5rem",
            letterSpacing: "-0.04em",
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          UNIFIED CORE.
          <br />
          <span style={{ background: "linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            ELASTIC SCALE.
          </span>
        </h2>
        <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap" }}>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255, 255, 255, 0.85)",
              lineHeight: "1.7",
              maxWidth: "480px",
              fontWeight: 400,
              letterSpacing: "0.01em",
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              textShadow: "0 2px 10px rgba(0,0,0,0.2)",
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
              borderLeft: "3px solid #6366f1",
              paddingLeft: "1.5rem",
              background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), transparent)",
              padding: "1rem 1.5rem",
              borderRadius: "0.5rem",
            }}
          >
            <span style={{ fontSize: "0.625rem", fontWeight: 800, color: "#a5b4fc", letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: '"Inter", sans-serif' }}>
              ARCHITECTURE
            </span>
            <span style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.05em", fontFamily: '"JetBrains Mono", "SF Mono", Monaco, monospace', textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
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
            transform: "perspective(2000px) rotateX(6deg) rotateY(-2deg) scale(0.8)",
            transformOrigin: "center center",
            filter: "drop-shadow(0 50px 100px rgba(0,0,0,0.6))",
            transition: "transform 0.3s ease",
          }}
        >
          <DashboardMockup />
        </div>
      </div>
    </div>
  );
};

export default MarketingPanel;
