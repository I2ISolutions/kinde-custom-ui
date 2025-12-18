import React from 'react';
import DashboardMockup from './dashboard-mockup';

const MarketingPanel: React.FC = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to bottom right, rgb(15 23 42), rgb(15 23 42), rgb(30 27 75))',
      borderRadius: '1.5rem',
      padding: '2.5rem',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      overflowX: 'hidden',
      position: 'relative',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
      border: '1px solid rgba(255,255,255,0.1)'
    }}>
      {/* Background Decor */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '500px',
        height: '500px',
        background: 'rgba(59, 130, 246, 0.1)',
        borderRadius: '50%',
        marginRight: '-250px',
        marginTop: '-250px',
        filter: 'blur(60px)',
        mixBlendMode: 'overlay'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '500px',
        height: '500px',
        background: 'rgba(99, 102, 241, 0.1)',
        borderRadius: '50%',
        marginLeft: '-250px',
        marginBottom: '-250px',
        filter: 'blur(60px)',
        mixBlendMode: 'overlay'
      }}></div>

      {/* Header Section */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        marginBottom: '2rem',
        padding: '0 1rem',
        paddingTop: '1rem'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: 'white',
          marginBottom: '0.75rem',
          lineHeight: '1.25'
        }}>
          Effortlessly manage your team and operations.
        </h2>
        <p style={{
          color: 'rgba(219, 234, 254, 1)',
          fontSize: '1.125rem',
          fontWeight: 500,
          opacity: 0.95
        }}>
          Log in to access your CRM dashboard and manage your team.
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
        minHeight: 0
      }}>
        <div style={{
          width: '100%',
          maxWidth: '80rem',
          margin: '0 auto',
          filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.25))'
        }}>
          <DashboardMockup />
        </div>
      </div>
    </div>
  );
};

export default MarketingPanel;
