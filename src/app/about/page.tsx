
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Shield, Truck, Users } from 'lucide-react';
import { COMPANY_NAME, TAGLINE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${COMPANY_NAME}, our mission to be a reliable wholesale hardware partner, and our commitment to long-term dealer relationships.`,
};

export default function AboutPage() {
  const aboutImage = {
    imageUrl: "https://images.unsplash.com/photo-1563823223069-424a1a0f35a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A well-stocked hardware warehouse representing our extensive inventory.",
    imageHint: "hardware warehouse"
  };

  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We build trust through consistent quality and dependable service, ensuring you have the stock you need, when you need it.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We see our clients as partners. Your growth is our success, and we are dedicated to supporting your business goals.',
    },
    {
      icon: CheckCircle2,
      title: 'Quality Assurance',
      description: 'Every product in our inventory is sourced from genuine, reputed brands to guarantee performance and durability.',
    },
    {
      icon: Truck,
      title: 'Efficient Supply Chain',
      description: 'Our streamlined logistics ensure that your orders are delivered quickly and accurately, minimizing downtime for your projects.',
    },
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight font-headline">
            About {COMPANY_NAME}
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            {TAGLINE}
          </p>
        </div>

        <Card className="mt-12 overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold font-headline text-primary">
                Our Story
              </h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                Yatharth Abhifly Enterprise was founded with a clear mission: to simplify the procurement process for hardware retailers, contractors, and builders. With years of experience in the hardware industry, we recognized the need for a wholesale supplier that not only offers competitive pricing but also prioritizes reliability and long-term relationships.
              </p>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                We are not just suppliers; we are partners in your success. Our business model is built on understanding the unique demands of the B2B market. We focus on providing a curated selection of genuine products, ensuring bulk availability, and maintaining an efficient supply chain to serve our clients in Vasai, Palghar, Mumbai, and beyond.
              </p>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                Our commitment is to provide an honest, professional, and straightforward service, allowing you to focus on what you do best: running your business.
              </p>
            </div>
          </div>
        </Card>

        <section className="py-16 sm:py-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-headline">
              Our Core Values
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              The principles that guide our business and our relationships.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 bg-card rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold font-headline">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center bg-primary/5 rounded-lg p-8 sm:p-12 mt-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-headline">
            Ready to Partner with Us?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Let's build a strong business relationship. Contact us today for your bulk hardware needs.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
