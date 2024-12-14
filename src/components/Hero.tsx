import { FileImage } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="" id='hero'>
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <FileImage className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Convert Images to PDF
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your images into professional PDF documents in seconds. 
            Free, secure, and entirely browser-based.
          </p>
          <Button onClick={onGetStarted}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}