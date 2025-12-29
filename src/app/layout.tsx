import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import FloatingWhatsAppButton from '@/components/ui/floating-whatsapp-button';
import { COMPANY_NAME, TAGLINE } from '@/lib/constants';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Oswald, Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_NAME} | ${TAGLINE}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: 'Trusted Wholesale Hardware & Construction Material Supplier for retailers, contractors, and builders in Vasai, Palghar, and Mumbai. Bulk hardware at best market rates.',
};

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${oswald.variable} ${roboto.variable}`}>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <FloatingWhatsAppButton />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
