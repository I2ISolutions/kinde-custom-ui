import React from "react";
import { getKindeWidget, getLogoUrl } from "@kinde/infrastructure";
import { Logo } from "./logo";
import { MockKindeWidget } from "./mock-widget";

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

  // Kinde widget content in real runtime; mock in local/dev.
  const widgetContent = getKindeWidget();
  const isLocalDev =
    typeof widgetContent === "string" ||
    widgetContent === null ||
    widgetContent === undefined ||
    (typeof widgetContent === "object" && !React.isValidElement(widgetContent));

  const modules = [
    { name: "REVENUE CRM", detail: "Modern CRM for B2B Sales Teams" },
    { name: "HCM CORE", detail: "Complete HRMS & Workforce Insights" },
    { name: "FINANCIALS", detail: "Multi-Entity Accounting & Treasury" },
    { name: "OPS CONTROL", detail: "Inventory, Procurement & Fulfillment" },
    { name: "PROJECT HUB", detail: "Enterprise Project & Resource Planning" },
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
        height: "100%",
        position: "relative",
        paddingTop: "2rem", // Added padding for safety
      }}
    >
      <div style={{ marginBottom: "2rem" }}> {/* Changed from absolute positioning to normal flow */}
        <Logo src={logoUrl} />
      </div>

      <div style={{ marginBottom: "2.5rem" }}>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vh, 3rem)", // Slightly smaller
            fontWeight: 800,
            color: "#0f172a",
            marginBottom: "1rem",
            letterSpacing: "-0.03em",
            lineHeight: "1",
            fontFamily: '"Inter", sans-serif',
          }}
        >
          {heading}
        </h1>
        <p
          style={{
            color: "#64748b",
            fontSize: "0.95rem",
            lineHeight: "1.5",
            fontWeight: 400,
            marginBottom: "3rem",
            letterSpacing: "0.01em",
            maxWidth: "420px",
            fontFamily: '"Inter", sans-serif',
          }}
        >
          {description ||
            "Sign in to access your unified business operations suite across CRM, HRMS, Finance, Operations, Projects, and Affiliate Connect."}
        </p>

        {/* Enterprise Module Portfolio */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem 2rem", // Reduced gap
            marginBottom: "2rem",
          }}
        >
          {modules.map((mod, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                borderLeft: "2px solid #e2e8f0", // Thicker accent
                paddingLeft: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.5rem",
                  fontWeight: 900,
                  color: "#6366f1", // Indigo-500
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: '"Inter", sans-serif',
                }}
              >
                {mod.name.replace(/_/g, " ")}
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
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

      <div style={{ width: "100%", maxWidth: "100%" }}> {/* Full width container for button */}
        {isLocalDev ? <MockKindeWidget /> : widgetContent}
      </div>
    </div>
  );
};