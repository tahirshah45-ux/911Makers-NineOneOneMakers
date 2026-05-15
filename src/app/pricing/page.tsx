"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { getAllIndustryPricingUseCase } from "@/application";
import { Button } from "@/presentation/components";

const industryTypeMap: Record<string, string> = {
  tax_office: 'Tax Office',
  restaurant: 'Restaurant',
  clinic_salon: 'Clinic & Salon',
  clothing_brand: 'Clothing Brand',
  delivery: 'Delivery',
  corporate: 'Corporate',
};

const industrySlugMap: Record<string, string> = {
  tax_office: 'tax',
  restaurant: 'restaurant',
  clinic_salon: 'clinic',
  clothing_brand: 'clothing',
  delivery: 'delivery',
  corporate: 'corporate',
};

export default function PricingPage() {
  const pricing = getAllIndustryPricingUseCase.execute();

  return (
    <div>
      {/* Hero */}
      <section className="py-28 bg-background-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-6">
              Pricing
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground-primary">
              Industry-Specific <span className="text-gradient">Packages</span>
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed">
              Transparent pricing with no hidden costs. Everything you need included.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-28 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-10 rounded-2xl bg-background-primary/50 border border-border/40 hover:border-accent/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2"
              >
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-foreground-primary mb-2">
                    {item.name}
                  </h3>
                  <p className="text-foreground-secondary">
                    {industryTypeMap[item.industryType]} Industry
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold text-accent">
                    ${item.startingPrice.toLocaleString()}
                  </span>
                  <span className="text-foreground-tertiary ml-2">starting</span>
                </div>

                {/* Meta */}
                <div className="flex gap-6 mb-8 text-sm">
                  <div className="text-foreground-secondary">
                    <span className="text-foreground-tertiary">Delivery: </span>
                    {item.deliveryTime}
                  </div>
                  <div className="text-foreground-secondary">
                    <span className="text-foreground-tertiary">Revisions: </span>
                    {item.revisions}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {item.features.map((feature: any) => (
                    <li key={feature.name || feature} className="flex items-start gap-3 text-foreground-secondary">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature.name || feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/industries/${industrySlugMap[item.industryType] || item.industryType}`}>
                  <Button variant="secondary" className="w-full">
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-28 bg-background-primary">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="p-12 rounded-2xl bg-background-secondary/50 border border-border/40">
            <h3 className="text-2xl font-semibold text-foreground-primary mb-4">
              Custom Solutions Available
            </h3>
            <p className="text-foreground-secondary mb-8">
              Every business is unique. We offer custom packages for specific needs.
            </p>
            <Button variant="primary">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}