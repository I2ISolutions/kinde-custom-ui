import React from "react";

export const MockKindeWidget: React.FC = () => {
  // Note: This is a mock component for local development.
  // In production, Kinde's widget (from getKindeWidget()) handles authentication automatically.
  // Google connection ID: conn_0196a419c28c04d267fd32d2354a4cd8
  
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Google Sign-In Button */}
      <button
        style={{
          width: "100%",
          backgroundColor: "white",
          color: "#3c4043",
          padding: "0.875rem 1rem",
          borderRadius: "0.5rem",
          border: "1px solid #dadce0",
          fontSize: "0.875rem",
          fontWeight: 500,
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
          boxShadow: "0 1px 2px 0 rgba(60, 64, 67, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 2px 4px 0 rgba(60, 64, 67, 0.15)";
          e.currentTarget.style.backgroundColor = "#f8f9fa";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 1px 2px 0 rgba(60, 64, 67, 0.1)";
          e.currentTarget.style.backgroundColor = "white";
        }}
      >
        {/* Google Icon SVG */}
        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <g fill="#000" fillRule="evenodd">
            <path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"/>
            <path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.21 1.18-.84 2.18-1.79 2.91l2.73 2.12c1.9-1.75 2.99-4.33 2.99-7.53z" fill="#4285F4"/>
            <path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"/>
            <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.73-2.12c-.76.53-1.78.9-3.23.9-2.38 0-4.4-1.57-5.12-3.74L.96 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"/>
          </g>
        </svg>
        <span>Continue with Google</span>
      </button>

      <div
        style={{
          marginTop: "2rem",
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
            letterSpacing: "0.25em",
          }}
        >
          SECURE MULTI-TENANT PLATFORM • SOC 2 COMPLIANT
        </span>
        <div style={{ flex: 1, height: "1px", backgroundColor: "#f1f5f9" }} />
      </div>
    </div>
  );
};
