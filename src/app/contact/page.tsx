"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { contactInfo, budgetRanges } from "@/core";
import { Button } from "@/presentation/components";
import { cn } from "@/presentation/lib/utils";
import Link from "next/link";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  company: z.string().optional(),
  industry: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const industries = [
  "Tax Office",
  "Restaurant",
  "Clinic & Salon",
  "Clothing Brand",
  "Delivery Business",
  "Corporate",
  "Other",
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
          <h2 className="text-4xl font-bold text-foreground-primary mb-4">Message Sent!</h2>
          <p className="text-foreground-secondary text-lg mb-8">We'll get back to you within 24 hours.</p>
          <Button onClick={() => setIsSuccess(false)} variant="secondary">Send Another Message</Button>
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
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium">Response within 24 hours</span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground-primary tracking-tight">
              Let's <span className="text-gradient">Grow Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed max-w-2xl mx-auto mb-10">
              Ready to transform your online presence? Let's start a conversation and build something great.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} variant="primary" size="lg">
                Send a Message <Send className="w-5 h-5 ml-2" />
              </Button>
              <Link href="/growth-audit">
                <Button variant="secondary" size="lg">
                  Get Free Audit
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

      {/* Contact Content */}
      <section className="py-28 bg-background-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground-primary mb-6">Get in Touch</h2>
                <p className="text-foreground-secondary text-lg leading-relaxed mb-8">
                  We're here to help you grow your business with premium digital solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground-tertiary text-sm">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-foreground-primary text-lg hover:text-accent transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground-tertiary text-sm">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-foreground-primary text-lg hover:text-accent transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground-tertiary text-sm">Working Hours</p>
                    <p className="text-foreground-primary text-lg">{contactInfo.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-10 rounded-2xl bg-background-primary/50 border border-border/40 shadow-xl shadow-black/10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-foreground-primary text-sm font-medium mb-3">Name *</label>
                      <input
                        {...register("name")}
                        className={cn(
                          "w-full px-5 py-4 bg-background-secondary border rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300",
                          errors.name ? "border-red-500" : "border-border/50"
                        )}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-foreground-primary text-sm font-medium mb-3">Email *</label>
                      <input
                        {...register("email")}
                        className={cn(
                          "w-full px-5 py-4 bg-background-secondary border rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300",
                          errors.email ? "border-red-500" : "border-border/50"
                        )}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-foreground-primary text-sm font-medium mb-3">Phone *</label>
                      <input
                        {...register("phone")}
                        className={cn(
                          "w-full px-5 py-4 bg-background-secondary border rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300",
                          errors.phone ? "border-red-500" : "border-border/50"
                        )}
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-foreground-primary text-sm font-medium mb-3">Company</label>
                      <input
                        {...register("company")}
                        className="w-full px-5 py-4 bg-background-secondary border border-border/50 rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-foreground-primary text-sm font-medium mb-3">Industry</label>
                      <select
                        {...register("industry")}
                        className="w-full px-5 py-4 bg-background-secondary border border-border/50 rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                      >
                        <option value="">Select industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-foreground-primary text-sm font-medium mb-3">Budget Range</label>
                      <select
                        {...register("budget")}
                        className="w-full px-5 py-4 bg-background-secondary border border-border/50 rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range.value} value={range.value}>{range.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-foreground-primary text-sm font-medium mb-3">Message *</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className={cn(
                        "w-full px-5 py-4 bg-background-secondary border rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300 resize-none",
                        errors.message ? "border-red-500" : "border-border/50"
                      )}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"} <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}