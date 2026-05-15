"use client";

import { motion } from "framer-motion";
import { Award, Clock, Headphones, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We don't just build websites - we craft digital experiences that represent your brand at its best.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect your timeline. Every project comes with a clear deadline and we deliver on our promises.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end at launch. We provide continued support to ensure your success.",
  },
  {
    icon: Rocket,
    title: "Growth Focused",
    description:
      "Every solution we build is designed to help your business grow - more leads, more sales, more revenue.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-28 bg-background-primary">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground-primary">
            The <span className="text-gradient">911MAKERS</span> Difference
          </h2>
          <p className="text-foreground-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver
            solutions that actually move the needle for your business.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-8 bg-background-secondary/50 border border-border/40 rounded-2xl hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground-secondary">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "150+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "100%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 bg-background-secondary/50 border border-border/40 rounded-2xl hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-accent/30 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-foreground-secondary text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}