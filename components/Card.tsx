
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, hover = true }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        bg-slate-900/60 backdrop-blur-lg border border-white/10 rounded-3xl p-5
        ${onClick ? 'cursor-pointer active:scale-95 transition-all' : ''}
        ${hover && onClick ? 'hover:bg-slate-800/80 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
