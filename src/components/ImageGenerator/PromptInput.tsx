import React from 'react';
import { Wand2 } from 'lucide-react';
import { Input } from '../Input';
import { Button } from '../Button';

interface PromptInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  error: string;
}

export function PromptInput({ value, onChange, loading, error }: PromptInputProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <Input
          value={value}
          onChange={onChange}
          placeholder="Describe your imagination..."
          disabled={loading}
        />
        <Button type="submit" disabled={loading || !value.trim()} loading={loading}>
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
  );
}