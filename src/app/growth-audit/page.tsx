"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Search, BarChart3, Target, Rocket, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/presentation/components";
import { cn } from "@/presentation/lib/utils";
import Link from "next/link";

const auditSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  website: z.string().url("Valid URL required"),
  industry: z.string().min(1, "Industry is required"),
  mainGoal: z.string().min(1, "Main goal is required"),
});

type AuditData = z.infer<typeof auditSchema>;

const industries = ["Tax Office", "Restaurant", "Clinic & Salon", "Clothing Brand", "Delivery", "Corporate", "Other"];
const goals = ["More Leads", "More Sales", "Better Branding", "Website Redesign", "SEO Rankings", "Other"];

export default function GrowthAuditPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<AuditData>({
    resolver: zodResolver(auditSchema),
  });

  const onSubmit = async (data: AuditData) => {
    console.log("Audit request:", data);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-accent/20 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-4xl font-bold text-foreground-primary mb-4">Audit Requested!</h2>
          <p className="text-foreground-secondary text-lg mb-8">We'll analyze your website and get back to you within 48 hours.</p>
          <Link href="/"><Button variant="secondary">Back to Home</Button></Link>
        </motion.div>
      </div>
    );
  }

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
                <BarChart3 className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium">100% Free • No Commitment</span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground-primary tracking-tight">
              Discover Your <span className="text-gradient">Growth Potential</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto mb-10">
              Get a comprehensive analysis of your website and actionable insights to grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="#audit-form">
                <Button variant="primary" size="lg">
                  Get Your Free Audit <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Talk to an Expert
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

      {/* Benefits */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Website Analysis", desc: "Deep dive into your site's performance, SEO, and user experience" },
              { icon: Target, title: "Growth Opportunities", desc: "Identify untapped potential and conversion gaps" },
              { icon: Rocket, title: "Action Plan", desc: "Receive a prioritized roadmap to improve results" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-background-primary/50 border border-border/40 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground-primary mb-3">{item.title}</h3>
                <p className="text-foreground-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-28 bg-background-primary">
        <div className="max-w-2xl mx-auto px-6">
          <div className="p-10 rounded-2xl bg-background-secondary/50 border border-border/40 shadow-xl shadow-black/10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-foreground-primary text-sm font-medium mb-3">Name *</label>
                  <input
                    {...register("name")}
                    className={cn("w-full px-5 py-4 bg-background-secondary border border-border/50 rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 transition-all", errors.name && "border-red-500")}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-foreground-primary text-sm font-medium mb-3">Email *</label>
                  <input
                    {...register("email")}
                    className={cn("w-full px-5 py-4 bg-background-secondary border border-border/50 rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 transition-all", errors.email && "border-red-500")}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-foreground-primary text-sm font-medium mb-3">Website URL *</label>
                <input
                  {...register("website")}
                  className={cn("w-full px-5 py-4 bg-background-secondary border border-border/50 rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 transition-all", errors.website && "border-red-500")}
                  placeholder="https://yourwebsite.com"
                />
                {errors.website && <p className="text-red-500 text-sm mt-2">{errors.website.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-foreground-primary text-sm font-medium mb-3">Industry *</label>
                  <select
                    {...register("industry")}
                    className="w-full px-5 py-4 bg-background-secondary border border-border/50 rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 transition-all"
                  >
                    <option value="">Select industry</option>
                    {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                  {errors.industry && <p className="text-red-500 text-sm mt-2">{errors.industry.message}</p>}
                </div>
                <div>
                  <label className="block text-foreground-primary text-sm font-medium mb-3">Main Goal *</label>
                  <select
                    {...register("mainGoal")}
                    className="w-full px-5 py-4 bg-background-secondary border border-border/50 rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 transition-all"
                  >
                    <option value="">Select goal</option>
                    {goals.map((g) => <option key={g} value={g}>{g}</option>)}
                  </select>
                  {errors.mainGoal && <p className="text-red-500 text-sm mt-2">{errors.mainGoal.message}</p>}
                </div>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Get My Free Audit <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}