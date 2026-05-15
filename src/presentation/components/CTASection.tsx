"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./Button";

export function CTASection() {
  return (
    <section className="py-28 bg-background-secondary relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium tracking-wider uppercase mb-6">
            Get Started Today
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground-primary">
            Ready to Transform Your <span className="text-gradient">Business?</span>
          </h2>
          <p className="text-foreground-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Book a free discovery call and let's discuss how we can help you
            achieve your business goals. No commitment, just a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/growth-audit">
              <Button variant="primary" size="lg">
                Get Free Growth Audit
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}