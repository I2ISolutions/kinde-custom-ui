import React from "react";
import MarketingPanel from "../components/marketing-panel";

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="kinde-layout-wrapper">
      <div className="kinde-layout-container">
        {/* Left side - Login Form */}
        <div className="kinde-login-panel">
          {props.children}
        </div>

        {/* Right side - Marketing Panel */}
        <div className="kinde-marketing-panel" id="marketing-panel">
          <MarketingPanel />
        </div>
      </div>
    </div>
  );
};