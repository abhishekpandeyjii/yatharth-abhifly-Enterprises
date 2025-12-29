'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Download, Phone } from 'lucide-react';
import { ICONS } from '@/lib/constants';
import Link from 'next/link';
import productCategories from '@/lib/product-data.json';

export default function ProductsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight font-headline uppercase">
            Our Product Categories
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We offer a comprehensive range of hardware and construction materials sourced from trusted brands.
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {productCategories.map((category) => {
            const Icon = ICONS[category.icon as string];
            return (
              <section key={category.id} id={category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')} className="bg-card p-6 sm:p-8 rounded-xl shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                      {Icon ? <Icon className="h-8 w-8" /> : <div className="h-8 w-8 bg-gray-200 rounded-lg" />}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold font-headline">{category.name}</h2>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.products.map((product) => {
                    return (
                      <Card key={product.name} className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-0">
                          <div className="relative aspect-square">
                            <Image
                              src={product.imageUrl}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={product.imageHint}
                            />
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 bg-card">
                          <p className="font-semibold text-sm w-full text-center">{product.name}</p>
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
        
        <Alert className="mt-16 bg-primary/5 border-primary/20">
          <Phone className="h-5 w-5 text-primary" />
          <AlertTitle className="font-headline text-lg text-primary">Prices available on inquiry!</AlertTitle>
          <AlertDescription>
            As a wholesale supplier, our prices vary based on quantity. Please contact us via Call or WhatsApp for the best bulk rates.
          </AlertDescription>
        </Alert>

      </div>
    </div>
  );
}
