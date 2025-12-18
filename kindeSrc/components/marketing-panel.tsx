import React from 'react';
import DashboardMockup from './dashboard-mockup';

const MarketingPanel: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at top right, rgb(15 23 42), rgb(10 15 30))', // Darker, cleaner gradient
      borderRadius: '1.5rem',
      padding: '4rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Center content vertically
      overflow: 'hidden',
      position: 'relative',
      boxShadow: 'inset 0 0 150px rgba(0,0,0,0.6)',
      border: '1px solid rgba(255,255,255,0.03)'
    }}>
      {/* Dynamic Background Orbs - Softer & Slower */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-20%',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'pulse-soft 12s infinite ease-in-out'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-20%',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'pulse-soft 15s infinite ease-in-out reverse'
      }}></div>

      {/* Header Section */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        marginBottom: '4rem',
        padding: '0 1rem',
        opacity: 0,
        animation: 'fadeIn 0.8s ease-out 0.2s forwards'
      }}>
        <h2 style={{
          fontSize: '3rem', // Larger font
          fontWeight: 700,
          color: 'white',
          marginBottom: '1.25rem',
          lineHeight: '1.1',
          letterSpacing: '-0.03em',
          textShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}>
          Effortlessly manage your <br/>
          <span style={{ 
            background: 'linear-gradient(to right, #93c5fd, #c4b5fd)', // Softer gradient text
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>team and operations.</span>
        </h2>
        <p style={{
          color: 'rgba(203, 213, 225, 0.8)',
          fontSize: '1.25rem',
          fontWeight: 400,
          lineHeight: '1.6',
          maxWidth: '520px',
          margin: '0 auto',
          letterSpacing: '-0.01em'
        }}>
          Log in to access your CRM dashboard and manage your team with real-time insights.
        </p>
      </div>

      {/* Dashboard Preview Component - 3D Tilt Effect */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        animation: 'fadeIn 1s ease-out 0.4s forwards'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '72rem', // Constrain width for elegance
          margin: '0 auto',
          filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.5))',
          transform: 'perspective(1500px) rotateX(5deg) scale(0.95)', // Slight tilt for depth
          transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'perspective(1500px) rotateX(0deg) scale(1.0)'; // Lift on hover
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'perspective(1500px) rotateX(5deg) scale(0.95)';
        }}>
          <DashboardMockup />
        </div>
      </div>
    </div>
  );
};

export default MarketingPanel;
