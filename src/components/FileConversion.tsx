import React, { forwardRef, useState } from 'react';
import { DropZone } from './DropZone';
import { Button } from './Button';
import { FileList } from './FileList';
import { convertImagesToPdf } from '../utils/pdfUtils';

export const FileConversion = forwardRef<HTMLDivElement>((_, ref) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);

  const handleFilesDrop = (files: File[]) => {
    setSelectedFiles(files);
  };

  const handleConvert = async () => {
    if (selectedFiles.length === 0) return;

    setConverting(true);
    try {
      const pdfBlob = await convertImagesToPdf(selectedFiles);
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'converted-images.pdf';
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error converting images:', error);
    } finally {
      setConverting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 bg-black" ref={ref}>
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Upload Your Images
      </h2>
      <DropZone onFilesDrop={handleFilesDrop} />
      
      {selectedFiles.length > 0 && (
        <div className="mt-6">
          <FileList files={selectedFiles} />
          <Button
            onClick={handleConvert}
            disabled={converting}
            className="w-full"
          >
            {converting ? 'Converting...' : 'Convert to PDF'}
          </Button>
        </div>
      )}
    </div>
  );
});