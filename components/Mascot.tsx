
import React from 'react';

interface MascotProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
}

const Mascot: React.FC<MascotProps> = ({ size = 'md', className = '', animate = true }) => {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64'
  };

  return (
    <div className={`relative flex items-center justify-center ${sizeMap[size]} ${className}`}>
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl ${animate ? 'animate-pulse' : ''}`}></div>
      
      {/* Robot SVG */}
      <svg 
        viewBox="0 0 200 200" 
        className={`w-full h-full drop-shadow-2xl ${animate ? 'animate-[bounce_3s_ease-in-out_infinite]' : ''}`}
      >
        <defs>
          <linearGradient id="robotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#4C1D95" />
          </linearGradient>
        </defs>
        
        {/* Head */}
        <rect x="50" y="40" width="100" height="80" rx="20" fill="white" />
        <rect x="60" y="50" width="80" height="60" rx="15" fill="#1E293B" />
        
        {/* Eyes */}
        <circle cx="85" cy="80" r="10" fill="#06B6D4">
          <animate attributeName="r" values="10;8;10" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="115" cy="80" r="10" fill="#06B6D4">
          <animate attributeName="r" values="10;8;10" dur="2s" repeatCount="indefinite" />
        </circle>
        
        {/* Antennas */}
        <line x1="100" y1="40" x2="100" y2="20" stroke="white" strokeWidth="6" strokeLinecap="round" />
        <circle cx="100" cy="15" r="8" fill="#FACC15" />
        
        {/* Body */}
        <path d="M60 120 L140 120 L150 170 L50 170 Z" fill="url(#robotGrad)" />
        <rect x="80" y="130" width="40" height="30" rx="5" fill="#0F172A" />
        <circle cx="90" cy="140" r="4" fill="#EF4444" />
        <circle cx="110" cy="140" r="4" fill="#10B981" />
      </svg>
    </div>
  );
};

export default Mascot;
