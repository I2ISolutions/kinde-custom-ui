import React from "react";

export const MockKindeWidget: React.FC = () => {
  // Note: keep this component hook-free for Kinde runtime compatibility.
  return (
    <div style={{ width: "100%" }}>
      <button
        style={{
          width: "100%",
          backgroundColor: "#0f172a",
          color: "white",
          padding: "1.25rem 1.5rem",
          borderRadius: "4px",
          border: "none",
          fontSize: "0.75rem",
          fontWeight: 800,
          cursor: "pointer",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: "0 10px 20px -8px rgba(15, 23, 42, 0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "0.55em",
          textTransform: "uppercase",
        }}
      >
        ACCESS DASHBOARD
      </button>

      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
        }}
      >
        <div style={{ flex: 1, height: "1px", backgroundColor: "#f1f5f9" }} />
        <span
          style={{
            fontSize: "0.6rem",
            fontWeight: 900,
            color: "#cbd5e1",
            letterSpacing: "0.5em",
          }}
        >
          MULTI TENANT SECURE AUTH
        </span>
        <div style={{ flex: 1, height: "1px", backgroundColor: "#f1f5f9" }} />
      </div>
    </div>
  );
};
