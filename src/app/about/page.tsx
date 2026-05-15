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
    description:
      "We prioritize your business goals and work tirelessly to exceed your expectations.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every solution we deliver is designed to produce measurable results for your business.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication, honest pricing, and open collaboration throughout every project.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We never settle for mediocre. Every project receives our full attention and expertise.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-background-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-8 text-foreground-primary">
              Building Digital <span className="text-gradient">Futures</span>
            </h1>
            <p className="text-foreground-secondary max-w-2xl mx-auto text-lg">
              We are a premium digital growth partner dedicated to helping small
              businesses in the USA succeed online.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground-primary">
                  {stat.value}
                </div>
                <div className="text-foreground-secondary text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent text-sm font-medium tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="text-3xl font-bold text-foreground-primary mt-2 mb-6">
                From Passion to Purpose
              </h2>
              <div className="space-y-4 text-foreground-secondary">
                <p>
                  Founded with a vision to bridge the gap between premium digital
                  services and small businesses, 911MAKERS has grown from a
                  small team of passionate developers to a full-service digital
                  agency.
                </p>
                <p>
                  We saw that small businesses often had to settle for
                  subpar websites and generic marketing. Our mission is to change
                  that - providing enterprise-quality digital solutions at
                  accessible prices.
                </p>
                <p>
                  Today, we're proud to serve clients across the USA, helping
                  them transform their online presence and achieve real business
                  growth through premium digital solutions.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="text-8xl font-bold text-accent opacity-20">
                  911
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              Our Values
            </span>
            <h2 className="text-4xl font-bold text-foreground-primary mt-4">
              What Drives <span className="text-gradient">Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-foreground-secondary">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground-primary mb-4">
              Let's Work Together
            </h2>
            <p className="text-foreground-secondary mb-8">
              We're always looking for new challenges and exciting projects.
              Specializing in premium websites for tax offices, restaurants, clinics, clothing brands, delivery businesses, and corporate companies across all 50 US states.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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