import { FileImage, FileOutput, Shield } from 'lucide-react';
import { FeatureCard } from './FeatureCard';


const features = [
  {
    icon: FileImage,
    title: 'Multiple Image Support',
    description: 'Convert multiple images at once and combine them into a single PDF file.'
  },
  {
    icon: Shield,
    title: 'Secure Conversion',
    description: 'All processing happens in your browser. Your files never leave your device.'
  },
  {
    icon: FileOutput,
    title: 'High Quality Output',
    description: 'Maintain the original quality of your images in the converted PDF.'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-t from-indigo-900/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Why Choose Our Converter?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}