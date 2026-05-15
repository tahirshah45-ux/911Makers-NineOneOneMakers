"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/core";

export function WhatsAppButton() {
  const handleClick = () => {
    const phoneNumber = contactInfo.whatsapp.replace(/\s+/g, "");
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <motion.a
      href={`https://wa.me/${contactInfo.whatsapp.replace(/\s+/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] md:z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
        <div className="relative bg-accent text-black p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
      </div>
    </motion.a>
  );
}