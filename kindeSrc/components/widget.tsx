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
      maxWidth: "680px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "clamp(1.5rem, 3vh, 3rem) 2rem",
      fontFamily: "'Inter', sans-serif",
      position: "relative"
    }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        top: "-20%",
        right: "-20%",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Primary Logo Placement Area */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "32px",
          padding: "0 4px" 
        }}>
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "8px" 
          }}>
            <Logo src={brandLogoUrl} />
          </div>
        </div>

        <div style={{ marginBottom: "32px" }}>
          <h1 style={{
            fontSize: "clamp(2rem, 4vh, 2.75rem)",
            fontWeight: 900,
            color: "#0f172a",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            marginBottom: "12px"
          }}>
            {heading}
          </h1>
          <p style={{
            fontSize: "1.05rem",
            color: "#64748b",
            lineHeight: 1.6,
            fontWeight: 500,
            maxWidth: "520px"
          }}>
            {description}
          </p>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(2, 1fr)", 
          gap: "16px", 
          marginBottom: "40px"
        }}>
          {ENTERPRISE_MODULES.map((mod, i) => (
            <div 
              key={i} 
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "8px",
                padding: "16px 20px",
                backgroundColor: "#fff",
                borderRadius: "16px",
                border: "1px solid #f1f5f9",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default",
                boxShadow: "0 2px 4px rgba(0,0,0,0.01)"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "#cbd5e1";
                e.currentTarget.style.boxShadow = "0 8px 16px -4px rgba(0,0,0,0.08)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#f1f5f9";
                e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.01)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ 
                  width: "24px", 
                  height: "24px", 
                  backgroundColor: "#eff6ff", 
                  borderRadius: "6px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  border: "1px solid #dbeafe"
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  </svg>
                </div>
                <span style={{ fontSize: "10px", fontWeight: 900, color: "#1e40af", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {mod.name}
                </span>
              </div>
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#334155", marginTop: "2px", lineHeight: "1.3" }}>
                {mod.detail}
              </span>
            </div>
          ))}
        </div>

        <div style={{ position: "relative", marginBottom: "32px" }}>
          <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", backgroundColor: "#e2e8f0" }} />
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <span style={{ 
              backgroundColor: "#fff", 
              padding: "0 24px", 
              fontSize: "10px", 
              fontWeight: 800, 
              color: "#94a3b8", 
              textTransform: "uppercase", 
              letterSpacing: "0.3em" 
            }}>
              Secure Identity Portal
            </span>
          </div>
        </div>

        <div style={{ width: "100%" }}>
          {/* This renders the actual Kinde widget placeholder */}
          {kindeWidget} 
        </div>

        <footer style={{ 
          marginTop: "40px", 
          display: "flex", 
          flexDirection: "row",
          justifyContent: "space-between", 
          alignItems: "center", 
          paddingTop: "24px", 
          borderTop: "1px solid #f1f5f9" 
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <p style={{ fontSize: "9px", color: "#94a3b8", fontWeight: 700, margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              &copy; 2025 Zopkit Global Technologies
            </p>
            <span style={{ fontSize: "8px", color: "#cbd5e1", fontWeight: 600 }}>Enterprise Edition v4.2.1-stable</span>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            {['Compliance', 'Uptime', 'Terms'].map(link => (
              <a 
                key={link} 
                href="#" 
                style={{ 
                  textDecoration: "none", 
                  fontSize: "9px", 
                  fontWeight: 800, 
                  color: "#64748b", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.1em",
                  transition: "color 0.2s ease" 
                }}
                onMouseOver={(e) => e.currentTarget.style.color = "#4f46e5"}
                onMouseOut={(e) => e.currentTarget.style.color = "#64748b"}
              >
                {link}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};
