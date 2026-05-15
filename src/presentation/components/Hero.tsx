"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./Button";
import { ArrowRight, CheckCircle, Star, Shield, Award, Users, TrendingUp, Globe, MapPin } from "lucide-react";

const trustStats = [
  { value: "50+", label: "US Businesses", icon: Users },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "2.8x", label: "Avg Lead Increase", icon: TrendingUp },
  { value: "100%", label: "Satisfaction Guarantee", icon: Shield },
];

const benefits = [
  "Premium Brand Identity",
  "High-Converting Website",
  "Done-For-You Growth Strategy",
  "Results in 3-6 Weeks",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-primary/30 to-background-primary"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 rounded-full blur-[180px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.03)_0%,_transparent_70%)]"></div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,215,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.15) 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/8 border border-accent/20">
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">Based in Pakistan • Serving USA Small Businesses</span>
          </div>
        </motion.div>

        {/* Main Headline - Clean & Impactful */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 tracking-tight"
        >
          <span className="text-foreground-primary">
            Stop Losing Clients to
          </span>
          <br className="hidden md:block" />
          <span className="text-gradient">
            Outdated Websites
          </span>
        </motion.h1>

        {/* Subheadline - Clean & Focused */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-foreground-secondary text-center max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Get a <span className="text-foreground-primary font-medium">premium, high-converting website</span> that attracts more clients and grows your business.
        </motion.p>

        {/* Benefits Pills - Clean Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {benefits.map((benefit, i) => (
            <div key={benefit} className="flex items-center gap-2 px-4 py-2 rounded-full bg-background-secondary/40 border border-border/50">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-foreground-secondary text-sm">{benefit}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="/growth-audit">
            <Button variant="primary" size="lg" className="min-w-[240px]">
              Get Free Website Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="secondary" size="lg" className="min-w-[160px]">
              See Our Work
            </Button>
          </Link>
        </motion.div>

        {/* Social Proof Stats - Elegant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
        >
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <stat.icon className="w-5 h-5 text-accent/70" />
                <span className="text-3xl font-bold text-foreground-primary">{stat.value}</span>
              </div>
              <span className="text-foreground-tertiary text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Price Tag - Subtle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-foreground-tertiary"
        >
          Premium packages from <span className="text-accent font-semibold text-lg">$1,199</span>
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
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
  );
}