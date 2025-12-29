'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  PHONE_NUMBER,
  WHATSAPP_NUMBER,
  WHY_CHOOSE_US_POINTS,
  SERVICE_AREAS,
  ICONS,
} from '@/lib/constants';
import { CheckCircle, HardHat, Phone, Warehouse, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import productCategories from '@/lib/product-data.json';

function HeroSection() {
  const heroImage = {
    imageUrl: "https://images.unsplash.com/photo-1668874184010-87aa286683dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxoYXJkd2FyZSUyMHRvb2xzfGVufDB8fHx8MTc2NjkyNTk0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "hardware tools"
  };
  return (
    <section className="relative text-center py-20 sm:py-28 md:py-32 lg:py-40 overflow-hidden">
       <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{backgroundImage: `url(${heroImage.imageUrl})`}}
        data-ai-hint={heroImage.imageHint}
        >
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-headline uppercase">
          Bulk Hardware Supply at Best Market Rates
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90">
          Yatharth Abhifly Enterprise is your trusted wholesale partner for all hardware and construction material needs.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
           <Button asChild size="lg" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 h-6 w-6" /> WhatsApp for Orders
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary"  className="w-full sm:w-auto">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Phone className="mr-2" /> Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProductCategoriesPreview() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-headline uppercase">
            Our Product Categories
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Explore our wide range of high-quality hardware products. Full catalogue available on request.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {productCategories.map((category) => {
            const Icon = ICONS[category.icon as string];
            return (
              <Link key={category.id} href="/products" passHref>
                <Card className="text-center hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col justify-center items-center p-4 group">
                  {Icon ? <Icon className="h-12 w-12 text-primary mb-4 transition-colors group-hover:text-primary/80" /> : <div className="h-12 w-12 bg-gray-200 rounded-full mb-4" />}
                  <p className="font-semibold text-base font-headline">{category.name}</p>
                </Card>
              </Link>
            )
          })}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/products">View All Products <ArrowRight className="ml-2"/></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-secondary/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-headline uppercase">
            Why Partner With Us?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We are committed to helping your business grow by providing reliable service and quality products.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US_POINTS.map((point) => (
            <Card key={point.title} className="text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-5">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold font-headline">{point.title}</h3>
              <p className="mt-2 text-muted-foreground">{point.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  const serviceAreaImg = {
    imageUrl: "https://images.unsplash.com/photo-1594411440266-7a8a65231a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtdW1iYWklMjBjaXR5fGVufDB8fHx8MTc2NzA3NTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "mumbai city"
  }
  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden shadow-lg border-none">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <HardHat className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-headline uppercase">
                Our Service Areas
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                We provide prompt and reliable delivery services to our partners located in:
              </p>
              <p className="mt-2 font-semibold text-primary text-xl">{SERVICE_AREAS}</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Don't see your location? Contact us to inquire about serviceability in your area.
              </p>
              <Button asChild className="mt-6 w-fit" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="relative min-h-[300px] md:min-h-full">
              <Image 
                src={serviceAreaImg.imageUrl}
                alt={serviceAreaImg.imageHint}
                fill
                className="object-cover"
                data-ai-hint={serviceAreaImg.imageHint}
              />
               <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background via-background/70 to-transparent"></div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCategoriesPreview />
      <WhyChooseUs />
      <ServiceAreas />
    </>
  );
}
