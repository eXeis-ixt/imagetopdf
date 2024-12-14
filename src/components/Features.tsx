import { FileImage, FileOutput, Shield } from 'lucide-react';

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
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Our Converter?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}