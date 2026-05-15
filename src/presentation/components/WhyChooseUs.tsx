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
    <section className="py-24 bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground-primary">
            The <span className="text-gradient">911MAKERS</span> Difference
          </h2>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
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
              className="flex gap-6"
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
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "150+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "100%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-background-secondary rounded-xl"
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