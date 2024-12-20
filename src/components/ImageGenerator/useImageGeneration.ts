import { useState } from 'react';
import { generateImageFromPrompt } from '../../utils/api';

export function useImageGeneration() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateImage = async (prompt: string) => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const imageData = await generateImageFromPrompt(prompt);
      setImage(imageData);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    generateImage,
    image,
    loading,
    error
  };
}