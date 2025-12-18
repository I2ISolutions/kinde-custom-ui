import React from "react";

interface LogoProps {
  src: string;
}

export const Logo = ({ src }: LogoProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
      <div style={{ position: 'relative' }}>
        {/* Logo container */}
        <div style={{
          position: 'relative',
          background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
          backdropFilter: 'blur(12px)',
          borderRadius: '1rem',
          padding: '1rem',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
        }}>
          <img
            src={src}
            alt="Zopkit"
            style={{
              height: '5rem',
              width: 'auto',
              objectFit: 'contain',
              borderRadius: '1rem',
              filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.15)) brightness(1.1)'
            }}
            onError={(e) => {
              // Fallback if image fails to load
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      </div>
    </div>
  );
};
