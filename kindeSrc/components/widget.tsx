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
  // Use the provided Cloudinary URL as the primary logo to ensure visibility
  const logoUrl = "https://res.cloudinary.com/dr9vzaa7u/image/upload/v1765126845/Zopkit_Simple_Logo_glohfr.jpg";

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
        justifyContent: "center", // Changed to center vertically
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
          <div style={{ flexShrink: 0 }}>
            <Logo src={logoUrl} />
          </div>

          <div style={{ flexShrink: 0 }}>
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
                maxWidth: "100%", // Allowed full width
            }}>
                {description}
            </p>
          </div>

          {/* Module Grid - More subtle and aligned */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)", // Strict 2 column
              gap: "1.5rem",
              paddingTop: "1rem",
              borderTop: "1px solid #f1f5f9",
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
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#475569",
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
