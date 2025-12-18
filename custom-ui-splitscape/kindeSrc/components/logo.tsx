"use client";

import React from "react";

interface LogoProps {
  src: string;
}

export const Logo: React.FC<LogoProps> = ({ src }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;
//TODO: Add a logo animation
  return (
    <div className="flex items-center justify-center mb-3">
      <div className="relative group">
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-indigo-500/30 rounded-2xl blur-xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
        {/* Logo container with glassmorphism */}
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
          <img
            src={src}
            alt="Zopkit"
            className="h-20 w-auto object-contain rounded-2xl drop-shadow-2xl filter brightness-110"
            onError={() => setIsVisible(false)}
          />
        </div>
      </div>
    </div>
  );
};
