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
} from "lucide-react";
import { getAllIndustriesUseCase } from "@/application";
import { cn } from "@/presentation/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator,
  UtensilsCrossed,
  Stethoscope,
  Shirt,
  Truck,
  Building2,
};

export function IndustryGrid() {
  const industries = getAllIndustriesUseCase.execute();

  return (
    <section className="py-24 bg-background-primary">
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
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground-primary">
            Tailored Solutions for <span className="text-gradient">Every Business</span>
          </h2>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            We specialize in creating digital solutions for specific industries,
            understanding unique challenges and opportunities.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = iconMap[industry.icon] || Building2;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/industries/${industry.slug}`}>
                  <div className="group relative bg-background-secondary border border-border rounded-2xl p-8 hover:border-accent hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all duration-300 h-full">
                    {/* Icon */}
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
                        "bg-accent/10"
                      )}
                      style={{ backgroundColor: `${industry.accentColor}15` }}
                    >
                      <span style={{ color: industry.accentColor }}>
                        <Icon className="w-7 h-7" />
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground-primary mb-3 group-hover:text-accent transition-colors">
                      {industry.displayName}
                    </h3>
                    <p className="text-foreground-secondary text-sm mb-4 line-clamp-2">
                      {industry.description}
                    </p>

                    {/* Price Tag */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-foreground-tertiary text-sm">
                        Starting from
                      </span>
                      <span className="text-accent font-semibold">
                        ${industry.startingPrice.toLocaleString()}
                      </span>
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-accent text-2xl">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
          >
            View All Industries
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}