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
      <section className="py-24 bg-background-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent text-sm font-medium tracking-wider uppercase">Our Services</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-8 text-foreground-primary">
              Complete <span className="text-gradient">Digital Solutions</span>
            </h1>
            <p className="text-foreground-secondary max-w-2xl mx-auto text-lg">
              From brand identity to ongoing growth, we provide everything you need to succeed online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const category = categories[index % categories.length];
              const Icon = iconMap[service.icon] || Globe;
              return (
                <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <div className="group bg-background-primary border border-border rounded-2xl p-8 hover:border-accent hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all duration-300 h-full">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${category.color}15` }}>
                      <span style={{ color: category.color }}><Icon className="w-7 h-7" /></span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground-primary mb-3 group-hover:text-accent transition-colors">{service.name}</h3>
                    <p className="text-foreground-secondary text-sm mb-6">{service.shortDescription}</p>
                    <p className="text-accent font-medium text-sm">
                      {service.pricingType === 'monthly' ? `$${service.startingPrice}/mo` : `Starting from $${service.startingPrice}`}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-foreground-primary mb-4">Need a Custom Solution?</h2>
            <p className="text-foreground-secondary mb-8">We create custom packages tailored to your specific needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/industries"><Button variant="primary" size="lg">View Industry Packages <ArrowRight className="w-5 h-5 ml-2" /></Button></Link>
              <Link href="/contact"><Button variant="secondary" size="lg">Talk to an Expert</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}