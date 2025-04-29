import React from 'react';
import { SOCIAL_LINKS, NAV_ITEMS } from '../constants';
import * as LucideIcons from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Dynamic icon component rendering
  const IconComponent = (iconName: string) => {
    const Icon = LucideIcons[iconName as keyof typeof LucideIcons];
    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <footer className="bg-amber-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">Abasiono Bakery</h3>
            <p className="text-gray-600 mb-6 pr-8">
              Creating delicious memories one treat at a time. Specializing in artisan baked goods with love and creativity.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:text-amber-500 transition-colors"
                  aria-label={link.platform}
                >
                  {IconComponent(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-amber-900 mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-amber-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-amber-900 mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-600">
              <p>Eziobodo, FUTO road</p>
              <p>Phone: 09054866435</p>
              <p>Email: abasionouwem081@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-200 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Abasiono Uwem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;