import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={`
        w-full px-6 py-4 
        bg-black/20 backdrop-blur-sm
        border-2 border-indigo-950 
        rounded-lg text-slate-200 
        placeholder:text-indigo-300/20
        focus:border-indigo-700 focus:outline-none
        transition-all duration-300
        transform focus:scale-[1.02]
        glow-effect
        ${props.className || ''}
      `}
    />
  );
}