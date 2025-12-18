import React from "react";

interface LogoProps {
  src?: string;
}

export const Logo: React.FC<LogoProps> = ({ src }) => {
  // If a logo URL is provided, render the image. Otherwise render the text mark.
  if (src) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "12px", userSelect: "none" }}>
        <img
          src={src}
          alt="Zopkit"
          style={{
            height: "56px",
            width: "auto",
            maxWidth: "240px",
            objectFit: "contain",
            display: "block",
          }}
          crossOrigin="anonymous"
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: "6px", userSelect: "none" }}>
      <span
        style={{
          fontSize: "1.1rem",
          fontWeight: 900,
          letterSpacing: "0.18em",
          color: "#0f172a",
          lineHeight: 1,
        }}
      >
        ZOPKIT
      </span>
      <div style={{ width: "6px", height: "6px", backgroundColor: "#4F46E5", borderRadius: "50%" }} />
    </div>
  );
};
