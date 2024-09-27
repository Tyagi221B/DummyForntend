import React from 'react';

const images = [
  '/path-to-image1.jpg',
  '/path-to-image2.jpg',
  '/path-to-image3.jpg',
  '/path-to-image4.jpg',
  '/path-to-image5.jpg',
  '/path-to-image6.jpg',
];

const ImageCarousel: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex space-x-4 py-4 animate-scroll">
        {images.concat(images).map((src, index) => (
          <img key={index} src={src} alt={`Carousel image ${index + 1}`} className="w-64 h-40 object-cover flex-shrink-0" />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;