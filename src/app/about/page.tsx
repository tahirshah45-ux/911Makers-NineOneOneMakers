"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Eye, Heart, Award, Users, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/presentation/components";

const stats = [
  { icon: Award, value: "150+", label: "Projects Completed" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Globe, value: "6+", label: "Countries Served" },
  { icon: Target, value: "100%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "We prioritize your business goals and work tirelessly to exceed your expectations.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every solution we deliver is designed to produce measurable results for your business.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication, honest pricing, and open collaboration throughout every project.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We never settle for mediocre. Every project receives our full attention and expertise.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-primary/30 to-background-primary"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 rounded-full blur-[180px]"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]"></div>
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
                <Globe className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium">Serving 50+ US Businesses</span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground-primary tracking-tight">
              Building Digital <span className="text-gradient">Futures</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto mb-10">
              We're a premium digital growth partner helping small businesses in the USA succeed online with results-driven websites and branding.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/portfolio">
                <Button variant="primary" size="lg">
                  See Our Work <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Get in Touch
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

      {/* Stats */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-foreground-primary">
                  {stat.value}
                </div>
                <div className="text-foreground-tertiary text-sm mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 bg-background-primary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
                Our Story
              </span>
              <h2 className="text-4xl font-bold text-foreground-primary mb-6">
                From Passion to Purpose
              </h2>
              <div className="space-y-5 text-foreground-secondary leading-relaxed text-lg">
                <p>
                  Founded with a vision to bridge the gap between premium digital
                  services and small businesses, 911MAKERS has grown from a
                  small team to a full-service digital agency.
                </p>
                <p>
                  We saw that small businesses often had to settle for
                  subpar websites and generic marketing. Our mission is to change that—
                  to give every business owner access to the same quality of
                  digital presence that big corporations enjoy.
                </p>
                <p>
                  Today, we proudly serve businesses across all 50 US states,
                  delivering premium websites, brands, and growth strategies
                  that compete with (and beat) the big players.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-border/40 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-6xl font-bold text-accent">50+</span>
                  <p className="text-foreground-secondary mt-4 text-lg">US Businesses Served</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
              Our Values
            </span>
            <h2 className="text-4xl font-bold text-foreground-primary">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-background-primary/50 border border-border/40 hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground-secondary leading-relaxed">
                  {value.description}
                </p>
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
              Let's Work Together
            </h2>
            <p className="text-xl text-foreground-secondary mb-10">
              We're always looking for new challenges and exciting projects.
              Specializing in premium websites for businesses across all 50 US states.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/industries">
                <Button variant="primary" size="lg">
                  View Our Work <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}