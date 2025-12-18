import React from "react";

interface LogoProps {
  src: string;
}

export const Logo = ({ src }: LogoProps) => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      marginBottom: '3rem',
      width: '100%'
    }}>
      <img
        src={src}
        alt="Zopkit"
        style={{
          height: '5rem',
          width: 'auto',
          maxWidth: '200px',
          objectFit: 'contain',
          display: 'block'
        }}
        crossOrigin="anonymous"
      />
    </div>
  );
};
