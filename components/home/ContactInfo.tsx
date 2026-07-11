"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import Card from "@/components/ui/Card";

export default function ContactInfo() {
  const contactDetails = [
    {
      title: "Call Us",
      value: "+91 8500622735",
      description: "Direct lines to studio scheduling.",
      icon: Phone,
      actionHref: "tel:850057 242735"
    },
    {
      title: "WhatsApp Chat",
      value: "+91 8500622735",
      description: "Instant replies for quick bookings.",
      icon: MessageSquare,
      actionHref: "https://wa.me/+918500622735"
    },
    {
      title: "Email Studio",
      value: "yaswanth777ys@gmail.com",
      description: "Send project briefs and proposals.",
      icon: Mail,
      actionHref: "mailto:srinupanja@gmail.com"
    },
    {
      title: "Studio",
      value: "Someswaram",
      description: "Rayavram",
      icon: MapPin
    },
    {
      title: "Working Hours",
      value: "10:00 AM - 6:00 PM IN ",
      description: "Monday - Saturday (Support 24/7 for live events)",
      icon: Clock
    }
  ];

  return (
    <div className="flex flex-col gap-6 h-full text-left">
      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contactDetails.map((detail, idx) => {
          const Icon = detail.icon;
          const Wrapper = detail.actionHref ? "a" : "div";
          const isFullWidth = idx === 4; // Make the last card (Working Hours) full-width

          return (
            <Card
              key={detail.title}
              className={`p-6 h-full flex flex-col justify-between group ${
                isFullWidth ? "sm:col-span-2" : ""
              }`}
            >
              <Wrapper
                {...(detail.actionHref ? { href: detail.actionHref, target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex flex-col h-full"
              >
                <div className="h-10 w-10 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] text-gold rounded-xl mb-4 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">{detail.title}</h4>
                  <p className="text-white text-base font-bold group-hover:text-gold transition-colors duration-300 mb-1">{detail.value}</p>
                  <p className="text-[#9CA3AF] text-xs">{detail.description}</p>
                </div>
              </Wrapper>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
