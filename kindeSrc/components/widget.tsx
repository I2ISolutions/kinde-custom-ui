"use client";

import React from "react";
import { Logo } from "./logo";
import { ENTERPRISE_MODULES } from "../constants";

interface WidgetProps {
  heading: string;
  description: string;
  kindeWidget?: any;
}

export const Widget: React.FC<WidgetProps> = ({ heading, description, kindeWidget }) => {
  // Replace undefined with your logo URL if you have one
  const brandLogoUrl = undefined; 

  return (
    <div style={{
      width: "100%",
      maxWidth: "560px", // Reduced max-width for compactness
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "clamp(1rem, 2vh, 2rem) 1.5rem", // Tighter padding
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", // Ensure Inter is used
      position: "relative",
      minHeight: "100vh" // Ensure vertical centering works well
    }}>
      {/* Background decoration - subtle */}
      <div style={{
        position: "absolute",
        top: "-10%",
        right: "-10%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(99, 102, 241, 0.02) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        {/* Primary Logo Placement Area */}
        <div style={{ 
          display: "flex", 
          justifyContent: "flex-start", 
          alignItems: "center", 
          marginBottom: "24px", // Reduced margin
        }}>
          <Logo src={brandLogoUrl} />
        </div>

        <div style={{ marginBottom: "28px" }}>
          <h1 style={{
            fontSize: "clamp(1.75rem, 3vh, 2.25rem)", // Slightly tighter heading
            fontWeight: 800, // Slightly lighter than 900 for elegance
            color: "#0f172a",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "8px"
          }}>
            {heading}
          </h1>
          <p style={{
            fontSize: "0.9375rem", // 15px
            color: "#64748b",
            lineHeight: 1.5,
            fontWeight: 400,
            maxWidth: "480px"
          }}>
            {description}
          </p>
        </div>

        {/* Compact Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(2, 1fr)", 
          gap: "10px", // Tighter gap
          marginBottom: "32px"
        }}>
          {ENTERPRISE_MODULES.map((mod, i) => (
            <div 
              key={i} 
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "4px",
                padding: "12px 16px", // Compact padding
                backgroundColor: "#fff",
                borderRadius: "12px", // Slightly smaller radius
                border: "1px solid #f1f5f9",
                transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#cbd5e1";
                e.currentTarget.style.backgroundColor = "#fafafa";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#f1f5f9";
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ 
                  width: "20px", 
                  height: "20px", 
                  backgroundColor: "#eff6ff", 
                  borderRadius: "5px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  border: "1px solid #dbeafe"
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  </svg>
                </div>
                <span style={{ fontSize: "9px", fontWeight: 800, color: "#1e40af", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {mod.name}
                </span>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 600, color: "#475569", marginTop: "2px", lineHeight: "1.3" }}>
                {mod.detail}
              </span>
            </div>
          ))}
        </div>

        <div style={{ position: "relative", marginBottom: "28px" }}>
          <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", backgroundColor: "#e2e8f0" }} />
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <span style={{ 
              backgroundColor: "#fff", 
              padding: "0 16px", 
              fontSize: "9px", 
              fontWeight: 700, 
              color: "#94a3b8", 
              textTransform: "uppercase", 
              letterSpacing: "0.25em" 
            }}>
              Secure Identity Portal
            </span>
          </div>
        </div>

        <div style={{ width: "100%" }}>
          {/* Kinde Widget */}
          {kindeWidget} 
        </div>
        
        {/* Footer Removed as requested */}
      </div>
    </div>
  );
};
