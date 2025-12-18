import React from "react";
import { Logo } from "./logo";
import { MockKindeWidget } from "./mock-widget";
import { ENTERPRISE_MODULES } from "../constants";

interface WidgetProps {
  heading: string;
  description: string;
}

export const Widget: React.FC<WidgetProps> = ({ heading, description }) => {
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
      padding: "clamp(2rem, 8vh, 6rem) 2rem",
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Primary Logo Placement Area */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: "64px",
        padding: "0 4px" 
      }}>
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "8px" 
        }}>
          <Logo src={brandLogoUrl} />
        </div>
        
        <div style={{
          padding: "8px 16px",
          borderRadius: "99px",
          backgroundColor: "#f8fafc",
          border: "1px solid #f1f5f9",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.02)"
        }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10b981", boxShadow: "0 0 6px rgba(16, 185, 129, 0.4)" }} />
          <span style={{ fontSize: "10px", fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            Instance: Prod-East
          </span>
        </div>
      </div>

      <div style={{ marginBottom: "56px" }}>
        <h1 style={{
          fontSize: "clamp(2.5rem, 5vh, 3.25rem)",
          fontWeight: 900,
          color: "#0f172a",
          letterSpacing: "-0.045em",
          lineHeight: 1.05,
          marginBottom: "20px"
        }}>
          {heading}
        </h1>
        <p style={{
          fontSize: "1.125rem",
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
        gap: "20px", 
        marginBottom: "56px"
      }}>
        {ENTERPRISE_MODULES.map((mod, i) => (
          <div 
            key={i} 
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "8px",
              padding: "24px",
              backgroundColor: "#fff",
              borderRadius: "20px",
              border: "1px solid #f1f5f9",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "default",
              boxShadow: "0 2px 8px rgba(0,0,0,0.01)"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#e2e8f0";
              e.currentTarget.style.boxShadow = "0 12px 20px -8px rgba(0,0,0,0.05)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "#f1f5f9";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.01)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ 
                width: "28px", 
                height: "28px", 
                backgroundColor: "#f8fafc", 
                borderRadius: "8px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                border: "1px solid #f1f5f9"
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                </svg>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 900, color: "#4f46e5", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {mod.name}
              </span>
            </div>
            <span style={{ fontSize: "14px", fontWeight: 600, color: "#334155", marginTop: "4px", lineHeight: "1.4" }}>
              {mod.detail}
            </span>
          </div>
        ))}
      </div>

      <div style={{ position: "relative", marginBottom: "40px" }}>
        <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", backgroundColor: "#f1f5f9" }} />
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <span style={{ 
            backgroundColor: "#fff", 
            padding: "0 24px", 
            fontSize: "11px", 
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
        <MockKindeWidget />
      </div>

      <footer style={{ 
        marginTop: "72px", 
        display: "flex", 
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems: "center", 
        paddingTop: "32px", 
        borderTop: "1px solid #f1f5f9" 
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <p style={{ fontSize: "11px", color: "#94a3b8", fontWeight: 700, margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            &copy; 2025 Zopkit Global Technologies
          </p>
          <span style={{ fontSize: "9px", color: "#cbd5e1", fontWeight: 600 }}>Enterprise Edition v4.2.1-stable</span>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          {['Compliance', 'Uptime', 'Terms'].map(link => (
            <a 
              key={link} 
              href="#" 
              style={{ 
                textDecoration: "none", 
                fontSize: "11px", 
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
  );
};
