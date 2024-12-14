import { jsPDF } from 'jspdf';

export async function convertImagesToPdf(images: File[]): Promise<Blob> {
  const pdf = new jsPDF();
  let isFirstPage = true;

  for (const image of images) {
    const imageUrl = URL.createObjectURL(image);
    
    try {
      const img = await loadImage(imageUrl);
      const imgProps = pdf.getImageProperties(img);
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = imgProps.width;
      const imgHeight = imgProps.height;
      
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const width = imgWidth * ratio;
      const height = imgHeight * ratio;
      
      const x = (pdfWidth - width) / 2;
      const y = (pdfHeight - height) / 2;

      if (!isFirstPage) {
        pdf.addPage();
      }
      
      pdf.addImage(img, 'JPEG', x, y, width, height);
      isFirstPage = false;
    } finally {
      URL.revokeObjectURL(imageUrl);
    }
  }

  return pdf.output('blob');
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}