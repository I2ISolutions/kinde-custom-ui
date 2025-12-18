import React from 'react';
import DashboardMockup from './dashboard-mockup';

const MarketingPanel: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at top right, rgb(30 41 59), rgb(15 23 42) 70%)',
      borderRadius: '1.5rem',
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      overflowX: 'hidden',
      position: 'relative',
      boxShadow: 'inset 0 0 100px rgba(0,0,0,0.5)',
      border: '1px solid rgba(255,255,255,0.05)'
    }}>
      {/* Dynamic Background Orbs */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'pulse-soft 8s infinite ease-in-out'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        animation: 'pulse-soft 10s infinite ease-in-out reverse'
      }}></div>

      {/* Header Section */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        marginBottom: '3rem',
        padding: '0 1rem',
        paddingTop: '1rem',
        opacity: 0,
        animation: 'fadeIn 0.8s ease-out 0.2s forwards'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          color: 'white',
          marginBottom: '1rem',
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
          Effortlessly manage your <br/>
          <span style={{ 
            background: 'linear-gradient(to right, #60a5fa, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>team and operations.</span>
        </h2>
        <p style={{
          color: 'rgba(203, 213, 225, 0.9)',
          fontSize: '1.125rem',
          fontWeight: 500,
          lineHeight: '1.6',
          maxWidth: '480px',
          margin: '0 auto'
        }}>
          Log in to access your CRM dashboard and manage your team with real-time insights.
        </p>
      </div>

      {/* Dashboard Preview Component */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 0,
        opacity: 0,
        animation: 'slideInRight 0.8s ease-out 0.4s forwards'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '80rem',
          margin: '0 auto',
          filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.4))',
          transform: 'perspective(1000px) rotateY(-2deg) rotateX(2deg)',
          transition: 'transform 0.5s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'perspective(1000px) rotateY(-2deg) rotateX(2deg)';
        }}>
          <DashboardMockup />
        </div>
      </div>
    </div>
  );
};

export default MarketingPanel;
