'use client';

import Link from 'next/link';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { Button } from './button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function FloatingWhatsAppButton() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello! I have an inquiry about bulk orders.`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            size="icon"
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg z-50 animate-bounce"
            aria-label="Contact us on WhatsApp"
          >
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-9 w-9" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Chat on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
