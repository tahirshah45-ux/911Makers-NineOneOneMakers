"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { getAllTestimonialsUseCase } from "@/application";

export function TestimonialsSection() {
  const testimonials = getAllTestimonialsUseCase.execute();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-28 bg-background-secondary">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground-primary">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-foreground-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business owners like you
            have to say about working with 911MAKERS.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-background-primary/50 border border-border/40 rounded-2xl p-10 md:p-12 hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-lg text-foreground-secondary mb-8 italic leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-semibold">
                    {testimonials[currentIndex].clientName.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-foreground-primary font-semibold">
                    {testimonials[currentIndex].clientName}
                  </div>
                  <div className="text-foreground-tertiary text-sm">
                    {testimonials[currentIndex].role} of {testimonials[currentIndex].companyName}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border/40 flex items-center justify-center text-foreground-secondary hover:text-accent hover:border-accent hover:shadow-[0_8px_20px_rgba(255,215,0,0.1)] transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border/40 flex items-center justify-center text-foreground-secondary hover:text-accent hover:border-accent hover:shadow-[0_8px_20px_rgba(255,215,0,0.1)] transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-8 bg-accent"
                    : "bg-foreground-tertiary"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}