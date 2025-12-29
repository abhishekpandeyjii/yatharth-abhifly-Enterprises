import Link from 'next/link';
import {
  COMPANY_NAME,
  EMAIL_ADDRESS,
  NAV_LINKS,
  PHONE_NUMBER,
  TAGLINE,
  WHATSAPP_NUMBER,
} from '@/lib/constants';
import { Mail, MapPin, Phone } from 'lucide-react';
import { WhatsAppIcon } from './icons/whatsapp-icon';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
             <div>
                <h3 className="text-2xl font-bold text-primary font-headline uppercase">
                  {COMPANY_NAME}
                </h3>
                <p className="mt-2 text-sm max-w-md">{TAGLINE}</p>
                 <p className="mt-1 text-sm max-w-md">
                  Your one-stop source for all hardware and construction materials at wholesale prices.
                </p>
              </div>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider uppercase text-primary font-headline">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider uppercase text-primary font-headline">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                <span>Vasai, Palghar, Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-primary transition-colors">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center">
                 <WhatsAppIcon className="h-5 w-5 mr-3 text-primary" />
                 <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Chat with us
                 </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="hover:text-primary transition-colors break-all"
                >
                  {EMAIL_ADDRESS}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
