import React from "react";
import { getKindeWidget, getLogoUrl } from "@kinde/infrastructure";
import { Logo } from "./logo";

interface WidgetProps {
  heading: string;
  description: string;
}

export const Widget: React.FC<WidgetProps> = ({ heading, description }) => {
  // Use Kinde's logo URL or fallback to Zopkit logo.
  const kindeLogoUrl = getLogoUrl();
  const logoUrl =
    kindeLogoUrl && kindeLogoUrl !== "/logo"
      ? kindeLogoUrl
      : "https://res.cloudinary.com/dr9vzaa7u/image/upload/v1765126845/Zopkit_Simple_Logo_glohfr.jpg";

  // Always use production Kinde widget
  const widgetContent = getKindeWidget();

  const modules = [
    { name: "REVENUE CRM", detail: "Modern CRM for Sales Teams" },
    { name: "HRMS", detail: "Complete HR & Workforce Management" },
    { name: "FINANCIAL ACCOUNTING", detail: "Multi-Entity Accounting & Treasury" },
    { name: "OPERATIONS MANAGEMENT", detail: "Inventory, Procurement & Supply Chain" },
    { name: "PROJECT MANAGEMENT", detail: "Enterprise Project & Resource Planning" },
    { name: "AFFILIATE CONNECT", detail: "Affiliate & Influencer Marketing Suite" },
  ];

  return (
    <div
      className="animate-fade-in"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Changed to flex-start
        minHeight: "100%", // Ensure full height
        position: "relative",
        overflow: "hidden",
        padding: "2rem 0", // Add some vertical padding
      }}
    >
      <div style={{ marginBottom: "2.5rem", flexShrink: 0 }}>
        <Logo src={logoUrl} />
      </div>

      <div style={{ marginBottom: "3rem", flexShrink: 0 }}>
        <h1
          style={{
            fontSize: "clamp(2rem, 4vh, 2.75rem)",
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: "1rem",
            letterSpacing: "-0.03em",
            lineHeight: "1.2",
            fontFamily: '"Inter", sans-serif',
          }}
        >
          {heading}
        </h1>
        <p style={{
            fontSize: "1.125rem",
            color: "#64748b",
            lineHeight: "1.6",
            maxWidth: "90%",
        }}>
            {description}
        </p>
      </div>

      {/* Enterprise Module Portfolio - Improved Styling */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Responsive grid
          gap: "2rem",
          marginBottom: "3rem",
        }}
      >
        {modules.map((mod, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              paddingLeft: "1rem",
              borderLeft: "2px solid #e2e8f0",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#6366f1";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e2e8f0";
            }}
          >
            <span
              style={{
                fontSize: "0.625rem",
                fontWeight: 700,
                color: "#6366f1",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontFamily: '"Inter", sans-serif',
              }}
            >
              {mod.name.replace(/_/g, " ")}
            </span>
            <span
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#334155",
                lineHeight: "1.4",
                fontFamily: '"Inter", sans-serif',
              }}
            >
              {mod.detail}
            </span>
          </div>
        ))}
      </div>

      <div style={{ 
        width: "100%", 
        flexShrink: 0, 
        marginTop: "auto", // Push to bottom if space permits
        zIndex: 10, 
        position: "relative",
      }}>
        <div style={{ width: "100%", opacity: 1, visibility: "visible" }}>
          {widgetContent}
        </div>
      </div>
    </div>
  );
};
