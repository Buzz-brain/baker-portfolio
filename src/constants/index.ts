import { NavItem, Testimonial, GalleryItem, Skill, SocialLink } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Artisan Bread Collection',
    description: 'Handcrafted sourdough and artisan breads made with traditional techniques.',
    image: 'https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg',
    category: 'Bread',
  },
  {
    id: 2,
    title: 'French Pastries',
    description: 'Delicate French pastries including croissants and pain au chocolat.',
    image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg',
    category: 'Pastry',
  },
  {
    id: 3,
    title: 'Celebration Cakes',
    description: 'Custom celebration cakes for weddings, birthdays, and special occasions.',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    category: 'Cake',
  },
  {
    id: 4,
    title: 'Seasonal Fruit Tarts',
    description: 'Fresh seasonal fruit tarts with homemade custard and buttery crust.',
    image: 'https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg',
    category: 'Tart',
  },
  {
    id: 5,
    title: 'Chocolate Collection',
    description: 'Decadent chocolate creations from truffles to rich chocolate cakes.',
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg',
    category: 'Chocolate',
  },
  {
    id: 6,
    title: 'Artisanal Cookies',
    description: 'Hand-decorated cookies featuring seasonal designs and flavors.',
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg',
    category: 'Cookies',
  },
];

export const SKILLS: Skill[] = [
  {
    id: 1,
    title: 'Artisan Bread Baking',
    description: 'Specialized in sourdough and traditional bread making techniques.',
    icon: 'Wheat',
  },
  {
    id: 2,
    title: 'French Pastry',
    description: 'Expert in creating delicate French pastries with perfect lamination.',
    icon: 'Croissant',
  },
  {
    id: 3,
    title: 'Cake Design',
    description: 'Creative cake designs from simple elegance to elaborate custom creations.',
    icon: 'Cake',
  },
  {
    id: 4,
    title: 'Chocolate Work',
    description: 'Advanced chocolate tempering and decoration techniques.',
    icon: 'Cookie',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Wedding Client',
    content: 'Abasiono created the most beautiful wedding cake for us! Not only was it stunning, but the taste was incredible. Our guests are still talking about it months later.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    id: 2,
    name: 'Michael Thompson',
    role: 'Cafe Owner',
    content: 'We\'ve been ordering pastries from Abasiono for our cafe for over a year. The quality and consistency is outstanding, and our customers love everything she makes.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Birthday Celebration',
    content: 'The custom birthday cake Abasiono made for my daughter was beyond my expectations. She captured exactly what we wanted and made the celebration extra special.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 1,
    platform: 'Instagram',
    url: 'https://instagram.com',
    icon: 'Instagram',
  },
  {
    id: 2,
    platform: 'Facebook',
    url: 'https://facebook.com',
    icon: 'Facebook',
  },
  {
    id: 3,
    platform: 'Pinterest',
    url: 'https://pinterest.com',
    icon: 'PinterestIcon',
  },
  {
    id: 4,
    platform: 'Twitter',
    url: 'https://twitter.com',
    icon: 'Twitter',
  },
];