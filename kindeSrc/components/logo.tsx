import React from "react";

interface LogoProps {
  dark?: boolean;
  src?: string;
}

export const Logo: React.FC<LogoProps> = ({ dark = false, src }) => {
  // If an image source is provided, render the brand image.
  if (src) {
    return (
      <div style={{ display: "flex", alignItems: "center", userSelect: "none", cursor: "pointer" }}>
        <img 
          src={src} 
          alt="Brand Logo" 
          style={{ 
            height: "48px", 
            width: "auto", 
            objectFit: "contain",
            display: "block" 
          }} 
        />
      </div>
    );
  }

  // High-fidelity fallback SVG logo
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", userSelect: "none", cursor: "pointer" }}>
      <div style={{ position: "relative", flexShrink: 0 }}>
        <div style={{
          width: "42px",
          height: "42px",
          backgroundColor: dark ? "#fff" : "#0f172a",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease"
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill={dark ? "#0f172a" : "#fff"} />
            <path d="M2 17L12 22L22 17" stroke={dark ? "#0f172a" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12L12 17L22 12" stroke={dark ? "#0f172a" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{ 
          fontSize: "22px", 
          fontWeight: 900, 
          letterSpacing: "-0.04em", 
          color: dark ? "#fff" : "#0f172a",
          fontFamily: "'Inter', sans-serif"
        }}>
          Zopkit
        </span>
        <span style={{ 
          fontSize: "10px", 
          fontWeight: 800, 
          letterSpacing: "0.2em", 
          textTransform: "uppercase", 
          color: dark ? "rgba(255,255,255,0.5)" : "#6366f1",
          marginTop: "2px"
        }}>
          Operating System
        </span>
      </div>
    </div>
  );
};
