// import {PlaneIcon } from 'lucide-react';
import {PlaneIcon } from 'lucide-react';

import { Button } from './Button';

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 my-4">
        <nav className="max-w-7xl mx-auto px-6 py-4 bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <PlaneIcon className="w-8 h-8 text-white" />
              <span className="text-xl font-semibold text-white">
              <a href="/">
                Midline PDF
              </a>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#pdf" className="text-gray-300 hover:text-white transition-colors">
                Make PDF
              </a>
              <Button variant="primary" >
                Get Started
              </Button>
            </div>

            <button className="md:hidden p-2 rounded-lg hover:bg-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}