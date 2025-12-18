import React from "react";

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
        padding: "clamp(3rem, 8vw, 6rem)",
        overflow: "hidden",
        position: "relative",
        background: "#020617", // Richer, deeper black/slate
        boxSizing: "border-box",
      }}
    >
      {/* Sophisticated Ambient Background */}
      <div 
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `
                radial-gradient(circle at 100% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 0% 100%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)
            `,
            pointerEvents: 'none',
        }}
      />

      {/* Subtle Grid - clearer and finer */}
      <div 
        style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 100%)',
            pointerEvents: 'none',
        }}
      />

      <div style={{ 
        width: "100%", 
        maxWidth: "800px", 
        textAlign: "center", 
        position: "relative", 
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem"
      }}>
        <div style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            marginBottom: "1rem"
        }}>
            <span style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#e2e8f0",
                letterSpacing: "0.02em",
                fontFamily: '"Inter", sans-serif',
            }}>
                The Operating System for Business
            </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: 800,
            color: "white",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            margin: 0,
          }}
        >
          Unified Control.
          <br />
          <span style={{ 
            background: "linear-gradient(135deg, #fff 30%, #94a3b8 100%)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent", 
            backgroundClip: "text" 
          }}>
            Limitless Growth.
          </span>
        </h2>
        
        <p
          style={{
            fontSize: "1.25rem",
            color: "#94a3b8",
            lineHeight: "1.6",
            maxWidth: "600px",
            fontWeight: 400,
            fontFamily: '"Inter", sans-serif',
            margin: 0,
          }}
        >
          Zopkit consolidates your entire enterprise stack—Revenue, HR, Finance, and Operations—into a single, intelligent source of truth.
        </p>

        {/* Abstract Visual Element instead of dashboard */}
        <div style={{
            marginTop: "4rem",
            width: "100%",
            height: "2px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            position: "relative"
        }}>
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "200px",
                height: "100px",
                background: "radial-gradient(ellipse at center, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
                filter: "blur(20px)",
            }} />
        </div>
      </div>
    </div>
  );
};

export default MarketingPanel;
