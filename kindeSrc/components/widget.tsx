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
        justifyContent: "center", 
        minHeight: "100%",
        position: "relative",
        overflow: "hidden",
        padding: "0",
      }}
    >
      <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "2.5rem",
          width: "100%",
      }}>
          <div style={{ flexShrink: 0, transform: "scale(1.1)", transformOrigin: "left top" }}>
            <Logo src={logoUrl} />
          </div>

          <div style={{ flexShrink: 0 }}>
            <h1
              style={{
                fontSize: "clamp(2rem, 3.5vh, 2.5rem)",
                fontWeight: 700,
                color: "#1e293b", // Slate 800
                marginBottom: "0.75rem",
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
                fontFamily: '"Inter", sans-serif',
              }}
            >
              {heading}
            </h1>
            <p style={{
                fontSize: "1rem",
                color: "#64748b",
                lineHeight: "1.6",
                maxWidth: "100%", 
            }}>
                {description}
            </p>
          </div>

          {/* Module Grid - Refined text styles */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            {modules.map((mod, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    color: "#4f46e5", // Indigo 600
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  {mod.name.replace(/_/g, " ")}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "#475569", // Slate 600
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
            marginTop: "1rem",
          }}>
            <div style={{ width: "100%", opacity: 1, visibility: "visible" }}>
              {widgetContent}
            </div>
          </div>
      </div>
    </div>
  );
};
