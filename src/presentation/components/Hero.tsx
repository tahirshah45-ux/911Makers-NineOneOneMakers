"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./Button";
import { ArrowRight, CheckCircle, Star, Flag, MapPin, Shield, Award, Users, TrendingUp, Globe, Handshake } from "lucide-react";

// Key cities we serve in the USA
const citiesWeServe = [
  "New York", "Los Angeles", "Houston", "Chicago", "Miami",
  "Dallas", "Philadelphia", "Atlanta", "Phoenix", "San Diego",
  "San Francisco", "Boston", "Austin", "Seattle", "Denver"
];

const benefits = [
  "Premium Brand Identity That Builds Trust & Credibility",
  "High-Converting Website That Turns Visitors into Clients",
  "Done-For-You Growth Strategy With Ongoing Support",
  "Professional Results Delivered in 3-6 Weeks",
];

const trustStats = [
  { value: "50+", label: "US Businesses Served", icon: Users },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "2.8x", label: "Average Lead Increase", icon: TrendingUp },
  { value: "100%", label: "Satisfaction Guarantee", icon: Shield },
];

// Top states
const topStates = ["California", "Texas", "New York", "Florida", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina", "Michigan"];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-primary/50 to-background-primary"></div>
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]"></div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pakistan → USA Trust Bridge - PROMINENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-4 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/40 mb-10 mx-auto"
        >
          <Globe className="w-5 h-5 text-accent flex-shrink-0" />
          <span className="text-foreground-primary text-sm font-medium whitespace-nowrap">
            Pakistan-Based Team | <span className="text-accent font-semibold">Proven Results for American Small Businesses</span>
          </span>
          <Handshake className="w-5 h-5 text-accent flex-shrink-0" />
        </motion.div>

        {/* Main Heading - SEO Optimized, USA-Focused */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 text-center leading-tight"
        >
          <span className="text-foreground-primary">
            Stop Losing Clients to
          </span>
          <br className="hidden md:block" />
          <span className="text-gradient">
            Outdated Websites
          </span>
          <br className="hidden lg:block" />
          <span className="text-foreground-primary">
            Get a Premium Website That Converts
          </span>
        </motion.h1>

        {/* Subheading - Benefit-Driven, City-Focused with Trust Bridge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-foreground-secondary max-w-3xl mx-auto mb-10 text-center leading-relaxed"
        >
          We help small business owners across{" "}
          <span className="text-accent font-semibold">New York, Los Angeles, Houston, Chicago, Miami, Dallas, Atlanta, Phoenix, and all 50 states</span>{" "}
          dominate their market with stunning, high-converting websites and done-for-you growth strategies.
        </motion.p>

        {/* Trust Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-center text-foreground-primary font-medium mb-10"
        >
          Premium branding + professional website design + ongoing growth support = <span className="text-accent">More leads, more sales, more revenue.</span>
        </motion.p>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 px-5 py-2.5 rounded-lg bg-background-secondary/50 border border-border"
            >
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground-secondary text-sm font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
        >
          <Link href="/growth-audit">
            <Button variant="primary" size="lg" className="group">
              Get Your Free Website Audit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="secondary" size="lg">
              See Our Work
            </Button>
          </Link>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12"
        >
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground-primary">
                {stat.value}
              </div>
              <div className="text-foreground-tertiary text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cities We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-8"
        >
          <p className="text-center text-foreground-tertiary text-sm mb-4">
            Proudly serving business owners in:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {citiesWeServe.map((city) => (
              <span
                key={city}
                className="px-3.5 py-1.5 bg-background-secondary/50 border border-border rounded-full text-xs text-foreground-secondary"
              >
                {city}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Price Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-foreground-tertiary text-sm">
            Premium packages starting from{" "}
            <span className="text-accent font-semibold text-xl">$1,199</span>
          </span>
        </motion.div>

        {/* Trust Badge - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center"
        >
          <div className="flex items-center gap-4 px-8 py-5 bg-background-secondary/70 border-2 border-accent/40 rounded-2xl">
            <div className="flex flex-col items-center">
              <Flag className="w-6 h-6 text-accent" />
              <span className="text-foreground-tertiary text-xs mt-1">Pakistan</span>
            </div>
            <div className="h-8 w-px bg-border"></div>
            <div className="flex flex-col items-center">
              <Globe className="w-6 h-6 text-accent" />
              <span className="text-foreground-tertiary text-xs mt-1">USA</span>
            </div>
            <div className="px-3">
              <span className="text-foreground-primary text-sm font-medium">
                Delivering <span className="text-accent font-bold">Premium Digital Results</span> to American Small Businesses Since 2020
              </span>
            </div>
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
        <div className="w-6 h-10 rounded-full border-2 border-foreground-tertiary flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}