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
  ArrowRight,
  Check,
} from "lucide-react";
import { getAllServicesUseCase } from "@/application";
import { Button } from "@/presentation/components";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Globe,
  ShoppingCart,
  Workflow,
  TrendingUp,
  Search,
};

const categories = [
  { name: "Branding", icon: Palette, color: "#FFD700" },
  { name: "Web Design", icon: Globe, color: "#FF6B35" },
  { name: "E-Commerce", icon: ShoppingCart, color: "#10B981" },
  { name: "Automation", icon: Workflow, color: "#3B82F6" },
  { name: "Growth", icon: TrendingUp, color: "#EC4899" },
  { name: "SEO", icon: Search, color: "#8B5CF6" },
];

export default function ServicesPage() {
  const services = getAllServicesUseCase.execute();

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
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground-primary">
              Complete <span className="text-gradient">Digital Solutions</span>
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed">
              From brand identity to ongoing growth, everything you need to succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-28 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const category = categories[index % categories.length];
              const Icon = iconMap[service.icon] || Globe;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="group h-full p-8 rounded-2xl bg-background-primary/50 border border-border/40 hover:border-accent/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <span style={{ color: category.color }}>
                        <Icon className="w-7 h-7" />
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold text-foreground-primary mb-3 group-hover:text-accent transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-foreground-secondary leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Price */}
                    <div className="pt-5 border-t border-border/50">
                      <span className="text-accent font-semibold text-lg">
                        {service.pricingType === 'monthly' ? `$${service.startingPrice}/mo` : `From $${service.startingPrice}`}
                      </span>
                    </div>
                  </div>
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
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-foreground-secondary mb-10">
              We create custom packages tailored to your specific business needs and growth goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/industries">
                <Button variant="primary" size="lg">
                  View Industry Packages <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}