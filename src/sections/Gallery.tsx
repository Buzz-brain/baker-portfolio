import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { GALLERY_ITEMS } from '../constants';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  const categories = ['All', ...Array.from(new Set(GALLERY_ITEMS.map(item => item.category)))];
  
  const filteredItems = activeFilter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);
    
  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentImage((prev) => (prev + 1) % filteredItems.length);
    } else {
      setCurrentImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="My Creations" 
          subtitle="Browse through some of my favorite baked goods and pastry creations"
        />
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-amber-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02] bg-white"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold font-serif">{item.title}</h3>
                <p className="text-amber-200 text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && filteredItems.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white p-2 hover:text-amber-300"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/20 hover:bg-black/40"
            onClick={() => navigateLightbox('prev')}
          >
            <ChevronLeft size={32} />
          </button>
          
          <div className="max-w-4xl max-h-[80vh] relative">
            <img 
              src={filteredItems[currentImage].image} 
              alt={filteredItems[currentImage].title} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4 text-white">
              <h3 className="text-xl font-serif">{filteredItems[currentImage].title}</h3>
              <p className="text-amber-200 mt-1">{filteredItems[currentImage].description}</p>
            </div>
          </div>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/20 hover:bg-black/40"
            onClick={() => navigateLightbox('next')}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;