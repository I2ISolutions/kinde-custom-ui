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
    { name: "REVENUE_CRM", detail: "Modern CRM for B2B Sales Teams" },
    { name: "HCM_CORE", detail: "Complete HRMS & Workforce Insights" },
    { name: "FINANCIALS", detail: "Multi-Entity Accounting & Treasury" },
    { name: "OPS_CONTROL", detail: "Inventory, Procurement & Fulfillment" },
    { name: "PROJECT_HUB", detail: "Enterprise Project & Resource Planning" },
    { name: "AFFILIATE_CONNECT", detail: "Affiliate & Influencer Marketing Suite" },
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

      <div style={{ marginBottom: "4rem" }}>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vh, 3.75rem)",
            fontWeight: 900,
            color: "#0f172a",
            marginBottom: "1.5rem",
            letterSpacing: "0.04em",
            lineHeight: "0.95",
          }}
        >
          {heading}
        </h1>
        <p
          style={{
            color: "#64748b",
            fontSize: "0.9375rem",
            lineHeight: "1.6",
            fontWeight: 500,
            marginBottom: "4.5rem",
            letterSpacing: "0.02em",
            maxWidth: "440px",
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
            gap: "3rem 2.5rem",
            marginBottom: "2rem",
          }}
        >
          {modules.map((mod, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.65rem",
                borderLeft: "1px solid #f1f5f9",
                paddingLeft: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.55rem",
                  fontWeight: 900,
                  color: "#4F46E5",
                  letterSpacing: "0.55em",
                  textTransform: "uppercase",
                }}
              >
                {mod.name}
              </span>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#334155",
                  lineHeight: "1.3",
                  letterSpacing: "0.01em",
                }}
              >
                {mod.detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: "400px" }}>
        {isLocalDev ? <MockKindeWidget /> : widgetContent}
      </div>
    </div>
  );
};