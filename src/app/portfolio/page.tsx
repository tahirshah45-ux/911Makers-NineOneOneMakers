"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/presentation/components";

const projects = [
  {
    id: "1",
    title: "TaxPro CPA Firm",
    industry: "Tax & Accounting",
    description: "Complete brand identity and website design for a growing CPA firm serving clients across Texas.",
    color: "#FFD700",
    url: "#",
  },
  {
    id: "2",
    title: "Bella Italia Restaurant",
    industry: "Restaurant & Hospitality",
    description: "Elegant website with online reservations and menu management for an Italian fine dining restaurant.",
    color: "#FF6B35",
    url: "#",
  },
  {
    id: "3",
    title: "Zen Spa & Wellness",
    industry: "Health & Beauty",
    description: "Serene website design with online booking for a premium day spa in California.",
    color: "#10B981",
    url: "#",
  },
  {
    id: "4",
    title: "Urban Threads",
    industry: "E-Commerce",
    description: "Modern e-commerce platform with custom product pages for a streetwear brand.",
    color: "#3B82F6",
    url: "#",
  },
];

export default function PortfolioPage() {
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
              Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground-primary">
              Our <span className="text-gradient">Work</span>
            </h1>
            <p className="text-xl text-foreground-secondary leading-relaxed">
              A showcase of premium websites and branding we've created for businesses across America.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-28 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="group rounded-2xl bg-background-primary/50 border border-border/40 overflow-hidden hover:border-accent/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2">
                  {/* Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-background-secondary to-background-tertiary overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-foreground-tertiary text-lg">
                        {project.title}
                      </span>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-background-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-8 h-8 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <span
                      className="text-sm font-medium"
                      style={{ color: project.color }}
                    >
                      {project.industry}
                    </span>
                    <h3 className="text-2xl font-semibold text-foreground-primary mt-3 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-foreground-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-background-primary">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-foreground-primary mb-6">
              Ready to Stand Out?
            </h2>
            <p className="text-xl text-foreground-secondary mb-10">
              Let's create something remarkable for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Start a Project <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/growth-audit">
                <Button variant="secondary" size="lg">
                  Get Free Audit
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}