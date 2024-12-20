import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { Input } from './Input';
import { Button } from './Button';
import { ImageDisplay } from './ImageDisplay';

export function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateImage = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_STABILITY_API_KEY}`,
        },
        body: JSON.stringify({
          text_prompts: [{ text: prompt }],
          cfg_scale: 7,
          height: 1024,
          width: 1024,
          steps: 30,
          samples: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      setImage(`data:image/png;base64,${data.artifacts[0].base64}`);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-4">
        <div className="flex gap-4">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your imagination..."
            disabled={loading}
          />
          <Button onClick={generateImage} disabled={loading || !prompt.trim()} loading={loading}>
            <span className="flex items-center gap-2">
              <Wand2 className="w-5 h-5" />
              Create Visual
            </span>
          </Button>
        </div>
        
        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}
      </div>

      <ImageDisplay image={image} />
    </div>
  );
}