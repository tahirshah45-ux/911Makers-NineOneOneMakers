"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Calculator,
  UtensilsCrossed,
  Stethoscope,
  Shirt,
  Truck,
  Building2,
  ArrowRight,
} from "lucide-react";
import { getAllIndustriesUseCase } from "@/application";
import { Button } from "@/presentation/components";
import { cn } from "@/presentation/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator,
  UtensilsCrossed,
  Stethoscope,
  Shirt,
  Truck,
  Building2,
};

export default function IndustriesPage() {
  const industries = getAllIndustriesUseCase.execute();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-background-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              Industries
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground-primary">
              Tailored for <span className="text-gradient">Your Industry</span>
            </h1>
            <p className="text-foreground-secondary max-w-2xl mx-auto text-lg">
              We specialize in creating digital solutions for specific industries.
              Each package is designed to address the unique challenges and
              opportunities of your sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon] || Building2;
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/industries/${industry.slug}`}>
                    <div className="group bg-background-primary border border-border rounded-2xl p-8 hover:border-accent hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all duration-300 h-full">
                      {/* Icon */}
                      <div
                        className={cn(
                          "w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
                          "bg-accent/10"
                        )}
                        style={{ backgroundColor: `${industry.accentColor}15` }}
                      >
                        <span style={{ color: industry.accentColor }}>
                          <Icon className="w-8 h-8" />
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-foreground-primary mb-3 group-hover:text-accent transition-colors">
                        {industry.displayName}
                      </h3>
                      <p className="text-foreground-secondary text-sm mb-6 line-clamp-2">
                        {industry.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {industry.features.slice(0, 3).map((feature: any) => (
                          <li
                            key={feature.name || feature}
                            className="text-foreground-secondary text-sm flex items-center gap-2"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: industry.accentColor }}
                            />
                            {feature.name || feature}
                          </li>
                        ))}
                      </ul>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <span className="text-foreground-tertiary text-xs">
                            Starting from
                          </span>
                          <div
                            className="text-xl font-bold"
                            style={{ color: industry.accentColor }}
                          >
                            ${industry.startingPrice.toLocaleString()}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-foreground-tertiary group-hover:text-accent transition-colors" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground-primary mb-4">
              Not Sure Which Package is Right for You?
            </h2>
            <p className="text-foreground-secondary mb-8">
              Get a free consultation and we'll help you choose the perfect
              solution for your business.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}