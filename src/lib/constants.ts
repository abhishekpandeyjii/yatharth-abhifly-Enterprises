
import type { LucideIcon } from 'lucide-react';
import { Nut, Hammer, Drill, Scissors, PlugZap, Package, CheckCircle2, LucideProps } from 'lucide-react';

export const COMPANY_NAME = 'Yatharth Abhifly Enterprise';
export const TAGLINE = 'Your Reliable Wholesale Hardware Partner';
export const PHONE_NUMBER = '8104525517';
export const WHATSAPP_NUMBER = '918104525517';
export const EMAIL_ADDRESS = 'YatharthAbhifly@gmail.com';
export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.864759235312!2d72.8286950759323!3d19.28784324546419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1e1a5f5a5f5%3A0x1b1b1b1b1b1b1b1b!2sHardware%20Store!5e0!3m2!1sen!2sin!4v1678886000000!5m2!1sen!2sin';


export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

export const ICONS: { [key: string]: React.FC<LucideProps> } = {
  Nut,
  Hammer,
  Drill,
  Scissors,
  PlugZap,
  Package,
  CheckCircle2
};

export const WHY_CHOOSE_US_POINTS = [
    { title: 'Wholesale Pricing', description: 'Get the best market rates for bulk orders to maximize your business profits.' },
    { title: 'Genuine Products', description: 'We source directly from reputed manufacturers, ensuring 100% authentic products.' },
    { title: 'Reliable Supply Chain', description: 'Our efficient logistics ensure fast and timely delivery to your doorstep.' },
    { title: 'GST-Compliant Billing', description: 'Receive proper GST invoices for all purchases, making your accounting seamless.' },
];

export const SERVICE_AREAS = 'Serving businesses across Vasai, Palghar, Mumbai, and surrounding regions.';
