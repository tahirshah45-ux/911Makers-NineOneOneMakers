"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a conversation to understand your business, goals, challenges, and vision.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Strategy & Design",
    description:
      "We create a detailed plan and design mockups for your approval before writing any code.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description:
      "Our team builds your solution using cutting-edge technology, keeping you updated throughout.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy your project and provide training, documentation, and ongoing support.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-28 bg-background-primary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground-primary">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="text-foreground-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            A proven process that ensures every project succeeds. We keep things
            simple, transparent, and results-driven.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border -z-10"></div>
              )}

              <div className="bg-background-secondary/50 border border-border/40 rounded-2xl p-8 hover:border-accent/80 hover:shadow-[0_20px_40px_rgba(255,215,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                {/* Step Number */}
                <span className="text-accent text-sm font-mono mb-4 block">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground-secondary text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full text-accent hover:shadow-[0_8px_20px_rgba(255,215,0,0.1)] transition-shadow">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Ready to start? Let's talk!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}