"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Send } from "lucide-react";
import { ContactFormData, FormErrors } from "@/types";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
    serviceRequired: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success">("idle");

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Full Name is required";
    }

    if (!formData.emailAddress.trim()) {
      tempErrors.emailAddress = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      tempErrors.emailAddress = "Invalid email format";
    }

    if (!formData.mobileNumber.trim()) {
      tempErrors.mobileNumber = "Mobile number is required";
    } else if (!/^[+0-9\s-]{8,15}$/.test(formData.mobileNumber)) {
      tempErrors.mobileNumber = "Invalid phone number format";
    }

    if (!formData.serviceRequired) {
      tempErrors.serviceRequired = "Please select a service";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error as the user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          mobileNumber: "",
          emailAddress: "",
          serviceRequired: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Failed to submit request. Please try again.");
        setSubmitStatus("idle");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      alert("A network connection error occurred. Please verify your connection and try again.");
      setSubmitStatus("idle");
    }
  };

  return (
    <div className="bg-[#1D1D1D]/60 border border-white/[0.08] backdrop-blur-md rounded-3xl p-8 sm:p-10 md:p-12 relative overflow-hidden h-full">
      {/* Background radial glow inside the card */}
      <div className="absolute top-[-10%] right-[-10%] w-[250px] h-[250px] bg-gold/5 blur-[80px] pointer-events-none rounded-full" />

      <AnimatePresence mode="wait">
        {submitStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center text-center h-full min-h-[400px]"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="h-20 w-20 rounded-full bg-gold/10 border border-gold flex items-center justify-center text-gold mb-6"
            >
              <CheckCircle2 className="h-10 w-10" />
            </motion.div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Request Received!</h3>
            <p className="text-sm text-[#9CA3AF] max-w-sm leading-relaxed mb-8">
              Thank you for choosing SYS Creatives. A creative director will contact you within 24 hours to align on your event parameters.
            </p>
            
            <Button variant="gold" onClick={() => setSubmitStatus("idle")}>
              Submit Another Request
            </Button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
            noValidate
          >
            <div className="text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Request Our Services</h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF]">Fill in the fields below to schedule a luxury consultation.</p>
            </div>

            {/* Grid for Name & Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col text-left">
                <label htmlFor="fullName" className="text-xs text-[#E5E7EB] font-bold uppercase tracking-wider mb-2.5">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    disabled={submitStatus === "loading"}
                    className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 ${
                      errors.fullName ? "border-red-500" : "border-white/[0.08] focus:border-gold"
                    }`}
                    placeholder="Enter name"
                  />
                  {errors.fullName && (
                    <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1.5 font-medium">
                      <AlertCircle className="h-3 w-3" />
                      {errors.fullName}
                    </span>
                  )}
                </div>
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col text-left">
                <label htmlFor="mobileNumber" className="text-xs text-[#E5E7EB] font-bold uppercase tracking-wider mb-2.5">
                  Mobile Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    disabled={submitStatus === "loading"}
                    className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 ${
                      errors.mobileNumber ? "border-red-500" : "border-white/[0.08] focus:border-gold"
                    }`}
                    placeholder="+91 123456789"
                  />
                  {errors.mobileNumber && (
                    <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1.5 font-medium">
                      <AlertCircle className="h-3 w-3" />
                      {errors.mobileNumber}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Grid for Email & Service Dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email Address */}
              <div className="flex flex-col text-left">
                <label htmlFor="emailAddress" className="text-xs text-[#E5E7EB] font-bold uppercase tracking-wider mb-2.5">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    disabled={submitStatus === "loading"}
                    className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 ${
                      errors.emailAddress ? "border-red-500" : "border-white/[0.08] focus:border-gold"
                    }`}
                    placeholder="name@email.com"
                  />
                  {errors.emailAddress && (
                    <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1.5 font-medium">
                      <AlertCircle className="h-3 w-3" />
                      {errors.emailAddress}
                    </span>
                  )}
                </div>
              </div>

              {/* Service Required Dropdown */}
              <div className="flex flex-col text-left">
                <label htmlFor="serviceRequired" className="text-xs text-[#E5E7EB] font-bold uppercase tracking-wider mb-2.5">
                  Service Required
                </label>
                <div className="relative">
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleInputChange}
                    disabled={submitStatus === "loading"}
                    className={`w-full bg-[#181818] border rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 appearance-none cursor-pointer ${
                      errors.serviceRequired ? "border-red-500" : "border-white/[0.08] focus:border-gold"
                    }`}
                  >
                    <option value="" disabled>Select a Service</option>
                    <option value="Live Streaming">Live Streaming</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="QR Photo Scanning">QR Photo Scanning</option>
                  </select>
                  {/* Custom Dropdown Arrow */}
                  <div className="absolute right-4 top-[18px] pointer-events-none text-[#9CA3AF]">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.516 7.548c.436-.446 1.043-.481 1.576 0L10 10.305l2.908-2.757c.533-.481 1.141-.446 1.576 0 .436.445.408 1.197 0 1.615l-3.415 3.31c-.419.407-1.091.407-1.51 0L5.516 9.163c-.408-.418-.436-1.17 0-1.615z" />
                    </svg>
                  </div>
                  {errors.serviceRequired && (
                    <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1.5 font-medium">
                      <AlertCircle className="h-3 w-3" />
                      {errors.serviceRequired}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col text-left">
              <label htmlFor="message" className="text-xs text-[#E5E7EB] font-bold uppercase tracking-wider mb-2.5">
                Message Detail
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={submitStatus === "loading"}
                  className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold transition-all duration-300 resize-none ${
                    errors.message ? "border-red-500" : "border-white/[0.08] focus:border-gold"
                  }`}
                  placeholder="Describe your event needs (date, location, scale...)"
                />
                {errors.message && (
                  <span className="flex items-center gap-1 text-[11px] text-red-400 mt-1.5 font-medium">
                    <AlertCircle className="h-3 w-3" />
                    {errors.message}
                  </span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-2">
              <Button
                type="submit"
                variant="gold"
                size="lg"
                disabled={submitStatus === "loading"}
                className="w-full text-center"
              >
                {submitStatus === "loading" ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing Request...
                  </>
                ) : (
                  <>
                    <Send className="h-4.5 w-4.5 mr-2" />
                    Submit Request
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
