import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };
  
  const goToPrev = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };
  
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-amber-900 text-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Customer Testimonials" 
          subtitle="What people are saying about my baking creations"
        />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Quote icon */}
          <div className="absolute -top-10 -left-4 opacity-20">
            <Quote size={64} />
          </div>
          
          {/* Testimonials carousel */}
          <div className="relative h-[300px] md:h-64">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <div className="text-center p-8">
                  <p className="text-lg md:text-xl italic mb-6">{testimonial.content}</p>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-amber-500">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-amber-300">{testimonial.name}</h4>
                    <p className="text-amber-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0">
            <button 
              className="p-2 rounded-full bg-amber-800 hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              onClick={goToPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="p-2 rounded-full bg-amber-800 hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-amber-300' : 'bg-amber-700 hover:bg-amber-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;