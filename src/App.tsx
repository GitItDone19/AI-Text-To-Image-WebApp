import React from 'react';
import { Sparkles } from 'lucide-react';
import { Background } from './components/Background';
import { ImageGenerator } from './components/ImageGenerator';

export default function App() {
  return (
    <>
      <Background />
      <div className="min-h-screen text-slate-200">
        <header className="pt-12 pb-8 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-3 flex items-center justify-center gap-3">
              <Sparkles className="w-10 h-10 text-indigo-400" />
              Dream to Reality
            </h1>
            <p className="text-lg text-indigo-300/60">Transform your imagination into stunning visuals</p>
          </div>
        </header>
        
        <main className="max-w-4xl mx-auto py-8 px-4">
          <ImageGenerator />
        </main>
      </div>
    </>
  );
}