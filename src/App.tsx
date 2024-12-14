import React from 'react';
import { AppContent } from './components/AppContent';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      


      <Navbar />
      <AppContent />
    </div>
  );
}