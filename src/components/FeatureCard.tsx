import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative group" id='features'>
      {/* Gradient border using pseudo-element */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-800 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity blur-sm"></div>
      
      {/* Card content */}
      <div className="relative p-6 bg-gray-900/80 backdrop-blur-xl rounded-xl">
        <Icon className="w-12 h-12 text-blue-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}