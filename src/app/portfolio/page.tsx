"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Wilson Tax Services",
    industry: "Tax Office",
    description:
      "Complete brand identity and website with client portal and appointment scheduling.",
    image: "tax",
    color: "#FFD700",
    link: "/industries/tax",
  },
  {
    id: 2,
    title: "Bella Italia Ristorante",
    industry: "Restaurant",
    description:
      "Elegant restaurant website with online reservations, menu management, and online ordering.",
    image: "restaurant",
    color: "#FF6B35",
    link: "/industries/restaurant",
  },
  {
    id: 3,
    title: "Radiance Dental Clinic",
    industry: "Clinic & Salon",
    description:
      "Professional dental clinic website with online booking and patient portal.",
    image: "clinic",
    color: "#10B981",
    link: "/industries/clinic",
  },
  {
    id: 4,
    title: "Urban Threads",
    industry: "Clothing Brand",
    description:
      "Full e-commerce store with inventory management and secure checkout.",
    image: "clothing",
    color: "#EC4899",
    link: "/industries/clothing",
  },
  {
    id: 5,
    title: "Swift Deliveries",
    industry: "Delivery Business",
    description:
      "Modern delivery business website with real-time order tracking system.",
    image: "delivery",
    color: "#3B82F6",
    link: "/industries/delivery",
  },
  {
    id: 6,
    title: "Adams Manufacturing",
    industry: "Corporate",
    description:
      "Corporate website with project showcase and lead generation integration.",
    image: "corporate",
    color: "#8B5CF6",
    link: "/industries/corporate",
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-background-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              Our Work
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground-primary">
              Portfolio of <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-foreground-secondary max-w-2xl mx-auto text-lg">
              Browse through our completed projects and see how we've helped
              businesses transform their online presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={project.link}>
                  <div className="group bg-background-primary border border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all duration-300 h-full">
                    {/* Image Placeholder */}
                    <div
                      className="h-48 relative overflow-hidden"
                      style={{ backgroundColor: `${project.color}15` }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="text-6xl font-bold opacity-20"
                          style={{ color: project.color }}
                        >
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-background-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-8 h-8 text-accent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span
                        className="text-sm font-medium"
                        style={{ color: project.color }}
                      >
                        {project.industry}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground-primary mt-2 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-foreground-secondary text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
              Start Your Project
            </h2>
            <p className="text-foreground-secondary mb-8">
              Ready to create something amazing? Let's discuss your project.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-accent text-background-primary font-medium rounded-lg hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all">
                Get Started
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}