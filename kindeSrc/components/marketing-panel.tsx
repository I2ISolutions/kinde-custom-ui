"use client";

import React, { useState, useEffect } from "react";
import { WORKFLOW_STEPS } from "../constants";

const MarketingPanel: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 50, 
        y: (e.clientY / window.innerHeight - 0.5) * 50 
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const containerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    background: "#020617",
    display: "flex",
    flexDirection: "column",
    padding: "clamp(2rem, 4vw, 3rem)",
    overflow: "hidden",
    color: "#fff",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
  };

  const meshStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: `
      radial-gradient(circle at ${50 + mousePos.x * 0.5}% ${30 + mousePos.y * 0.5}%, rgba(99, 102, 241, 0.18) 0%, transparent 50%),
      radial-gradient(circle at ${80 - mousePos.x}% ${70 - mousePos.y}%, rgba(16, 185, 129, 0.08) 0%, transparent 40%),
      radial-gradient(circle at ${20 + mousePos.x}% ${80 + mousePos.y}%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)
    `,
    pointerEvents: "none",
    zIndex: 1
  };

  const gridStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
    backgroundSize: "80px 80px",
    maskImage: "radial-gradient(ellipse at center, black 20%, transparent 90%)",
    pointerEvents: "none",
    zIndex: 0
  };

  return (
    <div style={containerStyle}>
      <div style={meshStyle} />
      <div style={gridStyle} />

      {/* Dynamic Data Nodes */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          style={{
            position: "absolute",
            width: i % 2 === 0 ? "6px" : "3px",
            height: i % 2 === 0 ? "6px" : "3px",
            borderRadius: "50%",
            backgroundColor: i % 3 === 0 ? "#10b981" : "#6366f1",
            boxShadow: `0 0 20px ${i % 3 === 0 ? "#10b981" : "#6366f1"}`,
            top: `${15 + (i * 12)}%`,
            left: `${10 + (i * 9)}%`,
            transform: `translate(${mousePos.x * (0.1 + i * 0.05)}px, ${mousePos.y * (0.1 + i * 0.05)}px)`,
            transition: "transform 0.15s cubic-bezier(0.23, 1, 0.32, 1)",
            opacity: 0.3 + (i * 0.05),
            zIndex: 2
          }}
        />
      ))}

      <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "6px 12px",
          borderRadius: "99px",
          backgroundColor: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          marginBottom: "24px",
          alignSelf: "flex-start",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#6366f1", boxShadow: "0 0 8px #6366f1" }} />
          <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "#94a3b8" }}>
            Zopkit Enterprise Core v4.0
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(3.5rem, 6.5vw, 6rem)",
          fontWeight: 900,
          lineHeight: 0.9,
          letterSpacing: "-0.05em",
          marginBottom: "24px",
          color: "#ffffff"
        }}>
          <span style={{ color: "#ffffff", display: "block" }}>Unified core.</span>
          <span style={{
            background: "linear-gradient(135deg, #a5b4fc 20%, #6366f1 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block"
          }}>
            Limitless scale.
          </span>
        </h1>

        <p style={{
          fontSize: "1.125rem",
          color: "#94a3b8",
          lineHeight: 1.6,
          maxWidth: "480px",
          fontWeight: 500,
          marginBottom: "40px"
        }}>
          One infrastructure. Infinite possibilities. Orchestrate your global revenue, operations, and workforce from a single sovereign control plane.
        </p>

        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
          {WORKFLOW_STEPS.map((step, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: "8px", borderLeft: "2px solid rgba(99, 102, 241, 0.2)", paddingLeft: "20px" }}>
              <span style={{ color: "#6366f1", fontSize: "14px", fontWeight: 900, letterSpacing: "0.1em" }}>{step.number}</span>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#f8fafc" }}>{step.title}</span>
              <p style={{ fontSize: "12px", color: "#64748b", maxWidth: "160px", margin: 0 }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ 
        position: "relative", 
        zIndex: 10, 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        paddingTop: "24px", 
        borderTop: "1px solid rgba(255,255,255,0.06)" 
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "32px", height: "32px", backgroundColor: "#fff", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#020617" strokeWidth="2.5">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" />
              <path d="M2 12L12 17L22 12" />
            </svg>
          </div>
          <span style={{ fontSize: "12px", fontWeight: 900, letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>
            Zopkit Systems
          </span>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          {['SOC-II Type 2', 'ISO 27001', 'End-to-End Encrypted'].map(tag => (
            <div key={tag} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3">
                <path d="M20 6L9 17L4 12" />
              </svg>
              <span style={{ fontSize: "10px", fontWeight: 800, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingPanel;
