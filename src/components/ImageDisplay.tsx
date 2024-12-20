import React from 'react';
import { ImageIcon } from 'lucide-react';

interface ImageDisplayProps {
  image: string | null;
}

export function ImageDisplay({ image }: ImageDisplayProps) {
  return (
    <div className="border-2 border-indigo-950 rounded-lg p-8 min-h-[400px] glow-effect bg-black/20 backdrop-blur-sm">
      {image ? (
        <img 
          src={image} 
          alt="Generated" 
          className="max-w-full h-auto rounded-lg shadow-[0_0_30px_rgba(79,70,229,0.1)]"
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-indigo-400/20">
          <ImageIcon className="w-20 h-20 mb-4" />
          <p className="text-xl">Your creation will appear here</p>
        </div>
      )}
    </div>
  );
}