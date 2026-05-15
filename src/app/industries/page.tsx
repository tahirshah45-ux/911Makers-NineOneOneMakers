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
    <div>
      {/* Hero */}
      <section className="py-28 bg-background-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-6">
              Industries
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground-primary">
              Tailored for <span className="text-gradient">Your Industry</span>
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed">
              Specialized digital solutions designed for your sector's unique challenges and opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-28 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = iconMap[industry.icon] || Building2;
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/industries/${industry.slug}`} className="block h-full">
                    <div className="group h-full p-10 rounded-2xl bg-background-primary/50 border border-border/40 hover:border-accent/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2">
                      {/* Icon */}
                      <div
                        className={cn(
                          "w-16 h-16 rounded-2xl flex items-center justify-center mb-7 transition-transform duration-300 group-hover:scale-105",
                        )}
                        style={{ backgroundColor: `${industry.accentColor}15` }}
                      >
                        <span style={{ color: industry.accentColor }}>
                          <Icon className="w-8 h-8" />
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-semibold text-foreground-primary mb-4 group-hover:text-accent transition-colors">
                        {industry.displayName}
                      </h3>
                      <p className="text-foreground-secondary leading-relaxed mb-8">
                        {industry.description}
                      </p>

                      {/* Features Preview */}
                      <ul className="space-y-3 mb-8">
                        {industry.features.slice(0, 3).map((feature: any) => (
                          <li
                            key={feature.name || feature}
                            className="text-foreground-secondary text-sm flex items-center gap-3"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: industry.accentColor }}
                            />
                            {feature.name || feature}
                          </li>
                        ))}
                      </ul>

                      {/* Price */}
                      <div className="flex items-center justify-between pt-6 border-t border-border/50">
                        <div>
                          <span className="text-foreground-tertiary text-xs">
                            Starting from
                          </span>
                          <div
                            className="text-2xl font-bold"
                            style={{ color: industry.accentColor }}
                          >
                            ${industry.startingPrice.toLocaleString()}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-foreground-tertiary group-hover:text-accent group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-background-primary">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-foreground-primary mb-6">
              Not Sure Which Package?
            </h2>
            <p className="text-xl text-foreground-secondary mb-10">
              Get a free consultation and we'll help you choose the perfect solution.
            </p>
            <Button variant="primary" size="lg">
              Get Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}