'use client';

import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';
import {
  COMPANY_NAME,
  NAV_LINKS,
  PHONE_NUMBER,
  TAGLINE,
} from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from './ui/separator';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { WhatsAppIcon } from './icons/whatsapp-icon';

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="bg-card shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary font-headline uppercase">
                {COMPANY_NAME}
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-primary after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100',
                  pathname === link.href
                    ? 'text-primary after:scale-x-100'
                    : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-2">
            <Button asChild variant="ghost">
              <a href={`tel:${PHONE_NUMBER}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button asChild>
              <a href={`https://wa.me/${PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="text-primary font-headline uppercase">
                    {COMPANY_NAME}
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full py-6">
                  <nav className="flex flex-col space-y-4">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setSheetOpen(false)}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary',
                          pathname === link.href
                            ? 'text-primary'
                            : 'text-foreground'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <Separator className="my-6" />
                  <div className="flex flex-col space-y-3">
                     <Button asChild>
                      <a href={`tel:${PHONE_NUMBER}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={`https://wa.me/${PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon className="mr-2 h-5 w-5" />
                        WhatsApp Us
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
