import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Cake, Clock, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know the baker behind the delicious creations"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://res.cloudinary.com/df2q6gyuq/image/upload/v1745921748/uwem_pfajri.jpg" 
                alt="Abasiono Uwem baking" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-100 p-4 rounded-lg shadow-lg">
              <p className="font-serif font-bold text-3xl text-amber-900">10+</p>
              <p className="text-amber-800">Years Experience</p>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h3 className="text-2xl font-serif text-amber-900 mb-6">Okpokpo Abasiono Uwem</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              "Warm, whimsical, and always ready to bake up a storm! I'm a passionate baker with a sweet tooth and a love for creating treats that bring joy to others. With a dash of creativity and a pinch of perfectionism, I craft delicious baked goods that are almost too pretty to eat (almost!). From classic cakes and pastries to innovative flavor combinations, I'm always experimenting with new recipes and techniques to satisfy my baking cravings. Whether you're a fellow foodie or just looking for a sweet escape, I'm thrilled to share my baking adventures with you!"
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                  <Cake size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Artisan Quality</h4>
                  <p className="text-gray-600">Handcrafted with premium ingredients</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Made with Love</h4>
                  <p className="text-gray-600">Each creation is crafted with care</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Fresh Daily</h4>
                  <p className="text-gray-600">Baked fresh every morning</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-700">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Award Winning</h4>
                  <p className="text-gray-600">Recognized for exceptional quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;