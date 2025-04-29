import React from 'react';
import Button from '../components/Button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 animate-fadeIn">
          Abasiono's <span className="text-amber-300">Bakery</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Handcrafted pastries and artisan breads made with passion, creativity, and the finest ingredients.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Gallery
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:bg-opacity-10 focus-visible:ring-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white transition-opacity hover:opacity-80"
        aria-label="Scroll down"
      >
        <ChevronDown className="animate-bounce" size={32} />
      </a>
    </section>
  );
};

export default Hero;