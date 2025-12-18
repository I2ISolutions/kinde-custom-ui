import React from "react";

export const MockKindeWidget: React.FC = () => {
  const buttonStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#fff",
    color: "#0f172a",
    padding: "18px 24px",
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "14px",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
    fontFamily: "'Inter', sans-serif"
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
      <button 
        style={buttonStyle}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#f8fafc";
          e.currentTarget.style.borderColor = "#cbd5e1";
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0,0,0,0.08)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#fff";
          e.currentTarget.style.borderColor = "#e2e8f0";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0,0,0,0.05)";
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </button>

      <div style={{ marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "8px", 
          padding: "6px 12px", 
          backgroundColor: "#ecfdf5", 
          borderRadius: "99px",
          border: "1px solid #d1fae5"
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <span style={{ fontSize: "10px", fontWeight: 800, color: "#059669", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Secure End-to-End Encryption Active
          </span>
        </div>
      </div>
    </div>
  );
};
