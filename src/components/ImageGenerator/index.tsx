import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { Input } from '../Input';
import { Button } from '../Button';
import { ImageDisplay } from '../ImageDisplay';
import { useImageGeneration } from './useImageGeneration';
import { PromptInput } from './PromptInput';

export function ImageGenerator() {
  const { generateImage, image, loading, error } = useImageGeneration();
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateImage(prompt);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <PromptInput
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          loading={loading}
          error={error}
        />
      </form>

      <ImageDisplay image={image} />
    </div>
  );
}