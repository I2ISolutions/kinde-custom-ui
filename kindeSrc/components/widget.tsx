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
        justifyContent: "flex-start",
        minHeight: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ marginBottom: "1.5rem", flexShrink: 0 }}>
        <Logo src={logoUrl} />
      </div>

      <div style={{ marginBottom: "2rem", flexShrink: 0 }}>
        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vh, 2.5rem)",
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: "0.75rem",
            letterSpacing: "-0.03em",
            lineHeight: "1.1",
            fontFamily: '"Inter", sans-serif',
          }}
        >
          {heading}
        </h1>
        <p
          style={{
            color: "#64748b",
            fontSize: "0.875rem",
            lineHeight: "1.5",
            fontWeight: 400,
            marginBottom: "2rem",
            letterSpacing: "0.01em",
            maxWidth: "100%",
            fontFamily: '"Inter", sans-serif',
          }}
        >
          {description ||
            "Sign in to access your unified business operations platform. Manage CRM, HRMS, Finance, Operations, Projects, and Affiliate Marketing—all integrated in one secure, multi-tenant system."}
        </p>

        {/* Enterprise Module Portfolio */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem 1.25rem",
            marginBottom: "1.5rem",
          }}
        >
          {modules.map((mod, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
                borderLeft: "2px solid #e2e8f0",
                paddingLeft: "0.875rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.45rem",
                  fontWeight: 900,
                  color: "#6366f1",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                {mod.name.replace(/_/g, " ")}
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "#334155",
                  lineHeight: "1.3",
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                {mod.detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ 
        width: "100%", 
        flexShrink: 0, 
        marginTop: "1.5rem", 
        zIndex: 10, 
        position: "relative",
        minHeight: "200px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>
        <div style={{ width: "100%", opacity: 1, visibility: "visible" }}>
          {widgetContent}
        </div>
      </div>
    </div>
  );
};