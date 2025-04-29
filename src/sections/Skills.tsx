import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { SKILLS } from '../constants';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  // Dynamic icon component rendering
  const IconComponent = (iconName: string) => {
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons];
    return Icon ? <Icon size={36} /> : null;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Baking Specialties" 
          subtitle="Discover the skills and techniques that make my baked goods exceptional"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((skill) => (
            <div 
              key={skill.id}
              className="flex space-x-6 p-6 rounded-lg hover:shadow-lg transition-shadow bg-amber-50"
            >
              <div className="text-amber-700 flex-shrink-0 mt-1">
                {IconComponent(skill.icon)}
              </div>
              <div>
                <h3 className="text-xl font-serif text-amber-900 mb-2">{skill.title}</h3>
                <p className="text-gray-700">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional skills with decorative elements */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/3 h-px bg-amber-200"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-px bg-amber-200"></div>
            <h3 className="relative z-10 text-2xl font-serif text-center text-amber-800 mb-8">
              Other Specialties
            </h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
            {[
              'Gluten-Free Baking', 
              'Vegan Desserts', 
              'Wedding Cakes',
              'Custom Cookies',
              'Seasonal Specialties',
              'Bread Sculpting',
              'Sugar Work',
              'Traditional Pastries'
            ].map((item, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-amber-100 text-amber-900 hover:bg-amber-200 transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;