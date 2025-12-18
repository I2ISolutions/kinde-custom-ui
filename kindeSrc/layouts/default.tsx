import React from "react";
import MarketingPanel from "../components/marketing-panel";

export const DefaultLayout = (props: { children: React.ReactNode }) => {
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(to bottom right, rgb(248 250 252), rgb(241 245 249))',
      padding: '1rem',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        minHeight: '600px',
        maxHeight: '900px',
        aspectRatio: '16/9',
        maxWidth: '1600px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '2rem',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
        overflow: 'hidden',
        border: '1px solid rgba(226, 232, 240, 0.5)'
      }}>
        {/* Left side - Login Form */}
        <div style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '3rem',
          position: 'relative',
          zIndex: 10,
          overflowY: 'auto'
        }}>
          {props.children}
        </div>

        {/* Right side - Hero/Image - Hidden on mobile, shown on desktop via CSS */}
        <div id="marketing-panel" style={{
          display: 'none',
          width: '58.333333%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'rgb(15 23 42)'
        }}>
          <MarketingPanel />
        </div>
      </div>
    </div>
  );
};