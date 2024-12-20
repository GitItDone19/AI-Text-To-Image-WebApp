import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({ loading, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        px-8 py-4 rounded-lg
        bg-indigo-950/50 backdrop-blur-sm
        border-2 border-indigo-800 text-indigo-300
        transition-all duration-300 
        hover:bg-indigo-900/30 hover:border-indigo-600
        disabled:opacity-50 disabled:cursor-not-allowed
        relative overflow-hidden
        glow-effect
        ${props.className || ''}
      `}
    >
      {loading ? (
        <Loader2 className="w-6 h-6 animate-spin mx-auto" />
      ) : (
        <span className="relative z-10">{children}</span>
      )}
    </button>
  );
}