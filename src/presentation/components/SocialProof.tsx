"use client";

import { motion } from "framer-motion";
import { Star, Award, Users, Clock, CheckCircle, Globe, Rocket, Flag } from "lucide-react";

const stats = [
  { value: "50+", label: "Businesses Served", icon: Flag },
  { value: "98%", label: "Client Satisfaction", icon: Users },
  { value: "2.8x", label: "Avg. Lead Increase", icon: TrendingUp },
  { value: "3-6", label: "Weeks Delivery", icon: Clock },
];

// USA-focused results
const results = [
  {
    metric: "Lead Increase",
    value: "2.8x",
    description: "Average increase in leads within first 3 months"
  },
  {
    metric: "Revenue Growth",
    value: "+120%",
    description: "Average revenue increase in first 6 months"
  },
  {
    metric: "Conversion Rate",
    value: "+65%",
    description: "Average improvement in website conversion rates"
  },
];

const whyChoose = [
  {
    title: "USA Market Experts",
    desc: "We understand American small business needs, preferences, and expectations",
    icon: Globe,
  },
  {
    title: "Fast Turnaround",
    desc: "Professional website ready in 3-6 weeks, not months - we're fast",
    icon: Rocket,
  },
  {
    title: "Ongoing Support",
    desc: "Free support included with every package - we don't disappear after launch",
    icon: Award,
  },
  {
    title: "Proven Results",
    desc: "47+ US businesses have grown their leads and revenue with us",
    icon: TrendingUp,
  },
];

function TrendingUp(props: any) {
  return <Rocket {...props} />;
}

export function SocialProof() {
  return (
    <section className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Trusted by American Business Owners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground-primary">
            Results That <span className="text-gradient">Speak For Themselves</span>
          </h2>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            We don&apos;t just build websites. We build businesses that grow.
          </p>
        </motion.div>

        {/* Stats Grid - USA Focused */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-background-primary border border-border rounded-2xl"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground-primary mb-1">
                {stat.value}
              </div>
              <div className="text-foreground-secondary text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us - 4 Column Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-foreground-primary text-center mb-10">
            Why US Business Owners Choose 911MAKERS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center p-6 bg-background-primary border border-border rounded-2xl hover:border-accent transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-foreground-primary font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-foreground-secondary text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-background-primary border border-border rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Flag className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-bold text-foreground-primary">
              Average Results for US Clients
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent mb-2">
                  {result.value}
                </div>
                <div className="text-foreground-primary font-semibold mb-2">
                  {result.metric}
                </div>
                <div className="text-foreground-secondary text-sm">
                  {result.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          {[
            "100% Satisfaction Guarantee",
            "No Hidden Costs",
            "Dedicated Account Manager",
            "On-Time Delivery",
          ].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-foreground-secondary"
            >
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}