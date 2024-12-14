import React, { useRef, useState } from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { FileConversion } from './FileConversion';

export function AppContent() {
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const scrollToDropZone = () => {
    dropZoneRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-24">
      <Hero onGetStarted={scrollToDropZone} />
      <Features />
      <FileConversion ref={dropZoneRef} />
    </div>
  );
}