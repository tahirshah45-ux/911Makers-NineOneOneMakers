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
      {/* Hero Section */}
      <section className="py-24 bg-background-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent text-sm font-medium tracking-wider uppercase">Pricing</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground-primary">
              Industry-Specific <span className="text-gradient">Packages</span>
            </h1>
            <p className="text-foreground-secondary max-w-2xl mx-auto text-lg">
              Transparent pricing with no hidden costs. All packages include professional design, development, and ongoing support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                          className="bg-background-primary border border-border rounded-2xl p-8 hover:border-accent hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground-primary mb-2">{item.name}</h3>
                  <p className="text-foreground-secondary text-sm">
                    {industryTypeMap[item.industryType] || item.industryType} Industry
                  </p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-accent">${item.startingPrice.toLocaleString()}</span>
                  <span className="text-foreground-tertiary ml-2">Starting from</span>
                </div>
                <div className="flex gap-4 mb-6 text-sm">
                  <div className="text-foreground-secondary"><span className="text-foreground-tertiary">Delivery:</span> {item.deliveryTime}</div>
                  <div className="text-foreground-secondary"><span className="text-foreground-tertiary">Revisions:</span> {item.revisions}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {item.features.map((feature: any) => (
                    <li key={feature.name || feature} className="flex items-start gap-3 text-foreground-secondary text-sm">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      {feature.name || feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/industries/${industrySlugMap[item.industryType] || item.industryType}`}>
                  <Button variant="secondary" className="w-full">View Details <ArrowRight className="w-4 h-4 ml-2" /></Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-background-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-background-secondary border border-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground-primary mb-4">Custom Solutions Available</h3>
            <p className="text-foreground-secondary mb-6">
              Every business is unique. We offer custom packages tailored to your specific needs.
            </p>
            <Link href="/contact"><Button variant="primary">Get Custom Quote</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}