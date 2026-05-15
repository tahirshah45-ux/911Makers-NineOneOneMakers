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
    <footer className="bg-background-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-accent font-display">
                911<span className="text-foreground-primary">MAKERS</span>
              </span>
            </Link>
            <p className="text-foreground-secondary mb-6 max-w-sm">
              Premium Digital Growth Partner for small businesses in the USA.
              Complete branding, websites, automation, and ongoing growth support.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground-secondary">
                <Mail className="w-5 h-5 text-accent" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground-secondary">
                <Phone className="w-5 h-5 text-accent" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-accent transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-foreground-secondary">
                <MapPin className="w-5 h-5 text-accent" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground-secondary">
                <Clock className="w-5 h-5 text-accent" />
                <span>{contactInfo.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground-primary font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground-secondary hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-foreground-primary font-semibold mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground-secondary hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground-primary font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground-secondary hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-foreground-tertiary text-sm">
              © {new Date().getFullYear()} 911MAKERS. All rights reserved.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-background-primary border border-border rounded-full">
              <Flag className="w-4 h-4 text-accent" />
              <span className="text-foreground-tertiary text-xs">
                Based in Pakistan • <span className="text-accent">Serving United States</span>
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-foreground-tertiary text-sm hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-foreground-tertiary text-sm hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}