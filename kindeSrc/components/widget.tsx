import React from "react";
import { getKindeWidget } from "@kinde/infrastructure";
import { Logo } from "./logo";
import { MockKindeWidget } from "./mock-widget";

export const Widget = (props: { heading: string; description: string }) => {
  // Use provided logo or fallback to Kinde's
  const logoUrl = "https://res.cloudinary.com/dr9vzaa7u/image/upload/v1765126845/Zopkit_Simple_Logo_glohfr.jpg";

  // Check if we're in local development (getKindeWidget returns a string ID or invalid content)
  const widgetContent = getKindeWidget();
  const isLocalDev = typeof widgetContent === 'string' || 
                     widgetContent === null ||
                     widgetContent === undefined ||
                     (typeof widgetContent === 'object' && !React.isValidElement(widgetContent));

  return (
    <main style={{ width: '100%', maxWidth: '400px', margin: '0 auto', padding: '0 1.5rem' }}>
      <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'center' }}>
        <Logo src={logoUrl} />
      </div>

      <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: 700, 
          color: 'rgb(15 23 42)', 
          marginBottom: '0.75rem',
          letterSpacing: '-0.025em',
          lineHeight: '1.25'
        }}>
          {props.heading}
        </h1>
        <p style={{ 
          color: 'rgb(100 116 139)', 
          fontWeight: 500, 
          fontSize: '1.125rem',
          lineHeight: '1.625'
        }}>
          {props.description}
        </p>
      </div>

      <div style={{ width: '100%' }}>
        {/* Kinde Widget Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {isLocalDev ? <MockKindeWidget /> : widgetContent}
        </div>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.875rem', color: 'rgb(148 163 184)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <a href="#" style={{ fontWeight: 500, color: 'rgb(100 116 139)', textDecoration: 'none' }}>Privacy</a>
          <a href="#" style={{ fontWeight: 500, color: 'rgb(100 116 139)', textDecoration: 'none' }}>Terms</a>
          <a href="#" style={{ fontWeight: 500, color: 'rgb(100 116 139)', textDecoration: 'none' }}>Help</a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Zopkit Inc. All rights reserved.
        </p>
      </div>
    </main>
  );
};