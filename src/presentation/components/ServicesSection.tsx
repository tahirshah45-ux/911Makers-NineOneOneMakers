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
    <section className="py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground-primary">
            Everything You Need to <span className="text-gradient">Grow Online</span>
          </h2>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            From brand identity to ongoing marketing, we provide comprehensive
            digital solutions that drive real results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="bg-background-primary border border-border rounded-2xl p-8 hover:border-accent hover:shadow-[0_0_30px_rgba(255,215,0,0.1)] transition-all duration-300 h-full">
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
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-background-primary border border-border rounded-lg text-foreground-secondary hover:text-accent hover:border-accent transition-all">
              View All Services
              <span className="text-lg">→</span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}