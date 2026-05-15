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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-primary/30 to-background-primary"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 rounded-full blur-[180px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.03)_0%,_transparent_70%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/8 border border-accent/20">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium">6 Premium Services</span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground-primary tracking-tight">
              Complete <span className="text-gradient">Digital Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto mb-10">
              From brand identity to ongoing growth, everything you need to succeed online and attract more clients.
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border border-foreground-tertiary/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-accent/50"
            ></motion.div>
          </div>
        </motion.div>
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