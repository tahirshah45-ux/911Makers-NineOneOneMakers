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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
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

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-3xl font-bold text-foreground-primary mb-4">
            Message Sent!
          </h2>
          <p className="text-foreground-secondary mb-8">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
          <Button onClick={() => setIsSuccess(false)} variant="secondary">
            Send Another Message
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-background-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground-primary">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-foreground-secondary max-w-2xl mx-auto text-lg">
              Have a project in mind? We'd love to hear about it. Fill out the
              form below and we'll be in touch shortly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground-primary text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      {...register("name")}
                      className={cn(
                        "w-full px-4 py-3 bg-background-primary border rounded-lg text-foreground-primary focus:outline-none focus:border-accent transition-colors",
                        errors.name ? "border-red-500" : "border-border"
                      )}
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
                      className={cn(
                        "w-full px-4 py-3 bg-background-primary border rounded-lg text-foreground-primary focus:outline-none focus:border-accent transition-colors",
                        errors.email ? "border-red-500" : "border-border"
                      )}
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
                      className={cn(
                        "w-full px-4 py-3 bg-background-primary border rounded-lg text-foreground-primary focus:outline-none focus:border-accent transition-colors",
                        errors.phone ? "border-red-500" : "border-border"
                      )}
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
                      Company
                    </label>
                    <input
                      {...register("company")}
                      className="w-full px-4 py-3 bg-background-primary border border-border rounded-lg text-foreground-primary focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-foreground-primary text-sm font-medium mb-2">
                      Industry
                    </label>
                    <select
                      {...register("industry")}
                      className="w-full px-4 py-3 bg-background-primary border border-border rounded-lg text-foreground-primary focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-foreground-primary text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      {...register("budget")}
                      className="w-full px-4 py-3 bg-background-primary border border-border rounded-lg text-foreground-primary focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-foreground-primary text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className={cn(
                      "w-full px-4 py-3 bg-background-primary border rounded-lg text-foreground-primary focus:outline-none focus:border-accent transition-colors resize-none",
                      errors.message ? "border-red-500" : "border-border"
                    )}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
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
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-background-primary border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground-primary mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-foreground-tertiary text-sm">
                        Email
                      </div>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-foreground-primary hover:text-accent transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-foreground-tertiary text-sm">
                        Phone
                      </div>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-foreground-primary hover:text-accent transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-foreground-tertiary text-sm">
                        Location
                      </div>
                      <div className="text-foreground-primary">
                        {contactInfo.address}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-foreground-tertiary text-sm">
                        Working Hours
                      </div>
                      <div className="text-foreground-primary">
                        {contactInfo.workingHours}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground-primary mb-4">
                  Prefer WhatsApp?
                </h3>
                <p className="text-foreground-secondary mb-4">
                  Chat with us directly on WhatsApp for quick responses.
                </p>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}