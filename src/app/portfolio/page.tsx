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
                <ExternalLink className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium">50+ Projects Delivered</span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground-primary tracking-tight">
              Our <span className="text-gradient">Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto mb-10">
              A showcase of premium websites and branding we've created for businesses across America.
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