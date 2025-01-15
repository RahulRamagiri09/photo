import React from 'react';

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-[80vh] text-white flex items-center justify-center" style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}>
      <h1 className="text-4xl md:text-6xl font-bold text-center">Capture Moments, Create Memories</h1>
    </div>
  );
};

export default Hero;
