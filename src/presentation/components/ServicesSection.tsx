"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Palette,
  Globe,
  ShoppingCart,
  Workflow,
  TrendingUp,
  Search,
} from "lucide-react";
import { getAllServicesUseCase } from "@/application";
import { cn } from "@/presentation/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Globe,
  ShoppingCart,
  Workflow,
  TrendingUp,
  Search,
};

export function ServicesSection() {
  const services = getAllServicesUseCase.execute();

  return (
    <section className="py-28 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground-primary">
            Everything You Need to <span className="text-gradient">Grow Online</span>
          </h2>
          <p className="text-foreground-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            From brand identity to ongoing marketing, we provide comprehensive
            digital solutions that drive real results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-background-primary/50 border border-border/40 rounded-2xl p-8 hover:border-accent/80 hover:shadow-[0_20px_40px_rgba(255,215,0,0.1)] hover:-translate-y-1 transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground-primary mb-3 group-hover:text-accent transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-foreground-secondary text-sm mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Price */}
                  <p className="text-accent font-medium text-sm">
                    {service.pricingType === 'monthly' ? `$${service.startingPrice}/mo` : `Starting from $${service.startingPrice}`}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-background-primary/50 border border-border/40 rounded-lg text-foreground-secondary hover:text-accent hover:border-accent hover:shadow-[0_8px_20px_rgba(255,215,0,0.1)] transition-all">
              View All Services
              <span className="text-lg">→</span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}