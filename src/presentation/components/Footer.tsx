"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Globe, Flag } from "lucide-react";
import { contactInfo } from "@/core";

const footerLinks = {
  services: [
    { label: "Brand Identity", href: "/services" },
    { label: "Premium Websites", href: "/services" },
    { label: "E-Commerce", href: "/services" },
    { label: "Business Automation", href: "/services" },
    { label: "Digital Marketing", href: "/services" },
    { label: "SEO Optimization", href: "/services" },
  ],
  industries: [
    { label: "Tax Office", href: "/industries/tax" },
    { label: "Restaurant", href: "/industries/restaurant" },
    { label: "Clinic & Salon", href: "/industries/clinic" },
    { label: "Clothing Brand", href: "/industries/clothing" },
    { label: "Delivery Business", href: "/industries/delivery" },
    { label: "Corporate", href: "/industries/corporate" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
    { label: "Free Growth Audit", href: "/growth-audit" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-accent font-display">
                911<span className="text-foreground-primary">MAKERS</span>
              </span>
            </Link>
            <p className="text-foreground-secondary mb-8 max-w-sm leading-relaxed">
              Premium Digital Growth Partner for small businesses in the USA. Complete branding, websites, automation, and growth support.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground-secondary">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors">{contactInfo.email}</a>
              </div>
              <div className="flex items-center gap-3 text-foreground-secondary">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-accent transition-colors">{contactInfo.phone}</a>
              </div>
              <div className="flex items-center gap-3 text-foreground-secondary">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{contactInfo.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground-primary font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-foreground-secondary hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-foreground-primary font-semibold mb-6">Industries</h4>
            <ul className="space-y-4">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-foreground-secondary hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground-primary font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-foreground-secondary hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground-tertiary text-sm">
            © {new Date().getFullYear()} 911MAKERS. All rights reserved.
          </p>
          <div className="flex items-center gap-2 px-4 py-2 bg-background-primary/50 border border-border/50 rounded-full">
            <Flag className="w-4 h-4 text-accent" />
            <span className="text-foreground-tertiary text-sm">
              Based in Pakistan • <span className="text-accent">Serving United States</span>
            </span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-foreground-tertiary text-sm hover:text-accent transition-colors">Privacy</Link>
            <Link href="/terms" className="text-foreground-tertiary text-sm hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}