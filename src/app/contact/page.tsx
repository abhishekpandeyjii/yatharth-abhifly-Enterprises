
import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import {
  COMPANY_NAME,
  EMAIL_ADDRESS,
  GOOGLE_MAPS_URL,
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
} from '@/lib/constants';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${COMPANY_NAME} for wholesale hardware inquiries. Contact us via phone, WhatsApp, email, or our inquiry form.`,
};

function ContactDetails() {
  const contactMethods = [
    {
      icon: WhatsAppIcon,
      title: 'WhatsApp',
      value: 'Chat with us',
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I have a question.`,
      actionText: 'Send a Message',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: PHONE_NUMBER,
      href: `tel:${PHONE_NUMBER}`,
      actionText: 'Call Us Now',
    },
    {
      icon: Mail,
      title: 'Email',
      value: EMAIL_ADDRESS,
      href: `mailto:${EMAIL_ADDRESS}`,
      actionText: 'Send an Email',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Vasai, Palghar, Mumbai',
      href: '#map',
      actionText: 'View on Map',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {contactMethods.map((method) => (
        <a key={method.title} href={method.href} target={method.title === 'WhatsApp' ? '_blank' : '_self'} rel="noopener noreferrer">
          <Card className="h-full hover:bg-primary/5 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{method.title}</CardTitle>
              <method.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold">{method.value}</div>
              <p className="text-xs text-muted-foreground">{method.actionText}</p>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}

function MapEmbed() {
  return (
    <div id="map" className="aspect-video w-full mt-12">
      <iframe
        src={GOOGLE_MAPS_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-md"
      ></iframe>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight font-headline">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground animate-pulse">
            We're here to help with your bulk order needs. Reach out to us directly through any of the methods below.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold font-headline mb-6 text-center">Direct Contact</h2>
            <ContactDetails />
        </div>

        <MapEmbed />
      </div>
    </div>
  );
}
