"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, BarChart3, Target, Zap } from "lucide-react";
import { Button } from "@/presentation/components";

const auditSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  website: z.string().optional(),
  industry: z.string().min(1, "Please select your industry"),
  challenge: z.string().min(10, "Please describe your main challenge"),
});

type AuditFormData = z.infer<typeof auditSchema>;

const industries = [
  { value: "tax", label: "Tax Office / Accounting" },
  { value: "restaurant", label: "Restaurant / Food Business" },
  { value: "clinic", label: "Clinic / Salon / Healthcare" },
  { value: "clothing", label: "Clothing Brand / Fashion" },
  { value: "delivery", label: "Delivery / Logistics" },
  { value: "corporate", label: "Corporate / Industrial" },
  { value: "other", label: "Other" },
];

const benefits = [
  {
    icon: BarChart3,
    title: "Website Analysis",
    description: "Detailed review of your current website's performance and design",
  },
  {
    icon: Target,
    title: "Growth Opportunities",
    description: "Identified areas where you can improve and grow your business",
  },
  {
    icon: Zap,
    title: "Actionable Insights",
    description: "Clear recommendations to transform your online presence",
  },
];

export default function GrowthAuditPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuditFormData>({
    resolver: zodResolver(auditSchema),
  });

  const onSubmit = async (data: AuditFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Audit form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-3xl font-bold text-foreground-primary mb-4">
            Audit Request Received!
          </h2>
          <p className="text-foreground-secondary mb-8">
            Thank you for your interest in our Free Growth Audit. Our team will
            review your information and reach out within 24 hours with your
            personalized audit report.
          </p>
          <Button onClick={() => setIsSuccess(false)} variant="secondary">
            Submit Another Request
          </Button>
        </motion.div>
      </div>
    );
  }

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
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              FREE
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground-primary">
              Free <span className="text-gradient">Growth Audit</span>
            </h1>
            <p className="text-foreground-secondary max-w-2xl mx-auto text-lg">
              Discover how to transform your online presence. Get a
              comprehensive analysis of your website with actionable insights to
              grow your business.
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-secondary border border-border/60 rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground-secondary text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background-primary border border-border rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-foreground-primary mb-6 text-center">
              Get Your Free Audit
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-foreground-primary text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    {...register("name")}
                    className="w-full px-5 py-4 bg-background-secondary border border-border rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-foreground-primary text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-5 py-4 bg-background-secondary border border-border rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground-primary text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full px-5 py-4 bg-background-secondary border border-border rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-foreground-primary text-sm font-medium mb-2">
                    Website (if any)
                  </label>
                  <input
                    {...register("website")}
                    className="w-full px-5 py-4 bg-background-secondary border border-border rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                    placeholder="www.yourwebsite.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground-primary text-sm font-medium mb-2">
                  Industry *
                </label>
                <select
                  {...register("industry")}
                  className="w-full px-5 py-4 bg-background-secondary border border-border rounded-xl text-foreground-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                >
                  <option value="">Select your industry</option>
                  {industries.map((ind) => (
                    <option key={ind.value} value={ind.value}>
                      {ind.label}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.industry.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-foreground-primary text-sm font-medium mb-2">
                  What's your biggest online challenge? *
                </label>
                <textarea
                  {...register("challenge")}
                  rows={4}
                  className="w-full px-4 py-3 bg-background-secondary border border-border rounded-lg text-foreground-primary focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your main challenge..."
                />
                {errors.challenge && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.challenge.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                isLoading={isSubmitting}
              >
                <Send className="w-5 h-5 mr-2" />
                Get My Free Audit
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}