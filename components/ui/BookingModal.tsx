"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Radio, 
  Film, 
  Code, 
  Palette, 
  QrCode, 
  Heart, 
  Briefcase, 
  Sparkles, 
  Calendar, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  Loader2,
  CheckCircle2
} from "lucide-react";
import { useBookingModal } from "@/context/BookingContext";
import Button from "@/components/ui/Button";

interface ServiceOption {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const serviceOptions: ServiceOption[] = [
  { id: "live-streaming", name: "Live Streaming", icon: Radio },
  { id: "video-editing", name: "Video Editing", icon: Film },
  { id: "web-development", name: "Web Development", icon: Code },
  { id: "graphic-design", name: "Graphic Design", icon: Palette },
  { id: "qr-photo-scanning", name: "QR Photo Scanning", icon: QrCode },
  { id: "wedding-media", name: "Wedding Media", icon: Heart },
  { id: "corporate-summits", name: "Corporate Summits", icon: Briefcase },
  { id: "complete-production", name: "Full Production", icon: Sparkles },
];

export default function BookingModal() {
  const { isBookingOpen, closeBookingModal, preselectedService } = useBookingModal();

  const [step, setStep] = useState<1 | 2>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [proposedDate, setProposedDate] = useState("");
  const [proposedLocation, setProposedLocation] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const [validationError, setValidationError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Synchronize preselected service when opened
  useEffect(() => {
    if (isBookingOpen) {
      if (preselectedService) {
        // Find matching option or map slug
        const matched = serviceOptions.find(
          (s) => s.name.toLowerCase() === preselectedService.toLowerCase() || s.id === preselectedService.toLowerCase()
        );
        setSelectedServices(matched ? [matched.name] : [preselectedService]);
      } else {
        setSelectedServices(["Live Streaming"]); // Default selection
      }
      setStep(1);
      setIsSuccess(false);
      setValidationError("");
    }
  }, [isBookingOpen, preselectedService]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isBookingOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBookingOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isBookingOpen) {
        closeBookingModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isBookingOpen, closeBookingModal]);

  const toggleService = (name: string) => {
    setValidationError("");
    setSelectedServices((prev) => {
      if (prev.includes(name)) {
        // Keep at least one selected, or allow unselecting if multiple
        const next = prev.filter((item) => item !== name);
        return next.length === 0 ? [name] : next;
      } else {
        return [...prev, name];
      }
    });
  };

  const handleNextStep = () => {
    if (selectedServices.length === 0) {
      setValidationError("Please select at least one service to continue.");
      return;
    }
    setValidationError("");
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!fullName.trim()) {
      setValidationError("Please enter your full name.");
      return;
    }
    if (!mobileNumber.trim()) {
      setValidationError("Please enter your mobile number.");
      return;
    }
    if (!emailAddress.trim()) {
      setValidationError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
      setValidationError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          mobileNumber,
          emailAddress,
          services: selectedServices,
          serviceRequired: selectedServices.join(", "),
          proposedDate: proposedDate || "To be aligned during consultation",
          proposedLocation: proposedLocation || "To be aligned during consultation",
          message: message || `Booking Builder submission for: ${selectedServices.join(", ")}`,
          isBookingPopup: true,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const data = await response.json();
        setValidationError(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Popup booking submission error:", err);
      setValidationError("Unable to connect to the server. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    closeBookingModal();
    setStep(1);
    setIsSuccess(false);
    setValidationError("");
    setFullName("");
    setMobileNumber("");
    setEmailAddress("");
    setProposedDate("");
    setProposedLocation("");
    setMessage("");
  };

  if (!isBookingOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#121212] border border-gold/25 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(212,175,55,0.1)] z-10 my-auto text-left"
        >
          {/* Close button */}
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 h-9 w-9 rounded-full bg-white/[0.05] border border-white/[0.08] text-[#9CA3AF] hover:text-white hover:bg-gold/20 hover:border-gold transition-all flex items-center justify-center cursor-pointer z-20"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>

          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <span className="text-[10px] sm:text-xs font-bold text-gold uppercase tracking-[0.25em] block mb-1">
                  PREMIUM SERVICE BUILDER
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  BOOK A <span className="text-gold font-normal">SERVICE</span>
                </h3>

                {/* Step Indicator Circles */}
                <div className="flex items-center justify-center gap-3 mt-4">
                  {/* Step 1 Circle */}
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      step === 1
                        ? "bg-gold text-black ring-4 ring-gold/20 font-extrabold"
                        : "bg-emerald-500 text-black font-bold ring-2 ring-emerald-500/20"
                    }`}
                  >
                    {step > 1 ? <Check className="h-4 w-4 stroke-[3]" /> : "1"}
                  </div>

                  {/* Connecting Line */}
                  <div
                    className={`h-[2px] w-10 sm:w-14 transition-colors duration-300 ${
                      step > 1 ? "bg-gold" : "bg-white/10"
                    }`}
                  />

                  {/* Step 2 Circle */}
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      step === 2
                        ? "bg-gold text-black ring-4 ring-gold/20 font-extrabold"
                        : "bg-white/[0.06] text-[#9CA3AF] border border-white/10"
                    }`}
                  >
                    2
                  </div>
                </div>
              </div>

              {/* Validation Alert */}
              {validationError && (
                <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium text-center">
                  {validationError}
                </div>
              )}

              {/* STEP 1: Service Selection, Date & Location */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-2">
                    <label className="text-[11px] font-bold text-[#E5E7EB] uppercase tracking-wider block mb-3">
                      SELECT SERVICES <span className="text-gold text-[10px] font-normal normal-case">(Multiple options selectable)</span>
                    </label>

                    {/* 8-Service Options Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
                      {serviceOptions.map((service) => {
                        const Icon = service.icon;
                        const isSelected = selectedServices.includes(service.name);
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => toggleService(service.name)}
                            className={`relative p-3 sm:p-3.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all duration-200 cursor-pointer min-h-[92px] ${
                              isSelected
                                ? "bg-gold/15 border-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                                : "bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05] hover:border-white/20"
                            }`}
                          >
                            {/* Checkmark in corner when selected */}
                            {isSelected && (
                              <span className="absolute top-2 right-2 h-4 w-4 rounded-full bg-gold text-black flex items-center justify-center text-[10px]">
                                <Check className="h-2.5 w-2.5 stroke-[3]" />
                              </span>
                            )}
                            <Icon
                              className={`h-5 w-5 mb-2 transition-colors ${
                                isSelected ? "text-gold" : "text-[#9CA3AF]"
                              }`}
                            />
                            <span
                              className={`text-[11px] font-bold uppercase tracking-tight leading-tight ${
                                isSelected ? "text-white" : "text-[#9CA3AF]"
                              }`}
                            >
                              {service.name}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Proposed Date & Location Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-gold" />
                        PROPOSED DATE
                      </label>
                      <input
                        type="date"
                        value={proposedDate}
                        onChange={(e) => setProposedDate(e.target.value)}
                        className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-[#6B7280] focus:border-gold focus:outline-none transition-all [color-scheme:dark]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-gold" />
                        PROPOSED LOCATION
                      </label>
                      <input
                        type="text"
                        placeholder="ENTER EVENT LOCATION (E.G. HYDERABAD)"
                        value={proposedLocation}
                        onChange={(e) => setProposedLocation(e.target.value)}
                        className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#6B7280] focus:border-gold focus:outline-none transition-all uppercase"
                      />
                    </div>
                  </div>

                  {/* Step 1 Footer Action */}
                  <div className="border-t border-white/[0.08] pt-4 flex items-center justify-between">
                    <span className="text-xs text-[#9CA3AF]">
                      {selectedServices.length} {selectedServices.length === 1 ? "service" : "services"} chosen
                    </span>
                    <Button variant="gold" size="md" onClick={handleNextStep} className="group">
                      <span>Next Step</span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Client Contact Details */}
              {step === 2 && (
                <motion.form
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSubmit}
                >
                  {/* Selected Services Pill summary */}
                  <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 mb-5 flex flex-wrap items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-gold tracking-wider mr-1">
                      Services:
                    </span>
                    {selectedServices.map((srv) => (
                      <span
                        key={srv}
                        className="text-[11px] bg-gold/10 border border-gold/20 text-gold px-2.5 py-0.5 rounded-full font-medium"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>

                  {/* Full Name Input */}
                  <div className="mb-4">
                    <label className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-gold" />
                      YOUR FULL NAME <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ENTER YOUR FULL NAME"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        setValidationError("");
                      }}
                      className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B7280] focus:border-gold focus:outline-none transition-all uppercase"
                    />
                  </div>

                  {/* Mobile & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-gold" />
                        MOBILE NUMBER <span className="text-gold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={mobileNumber}
                        onChange={(e) => {
                          setMobileNumber(e.target.value);
                          setValidationError("");
                        }}
                        className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B7280] focus:border-gold focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-gold" />
                        EMAIL ADDRESS <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="NAME@DOMAIN.COM"
                        value={emailAddress}
                        onChange={(e) => {
                          setEmailAddress(e.target.value);
                          setValidationError("");
                        }}
                        className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B7280] focus:border-gold focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Additional Notes Textarea */}
                  <div className="mb-6">
                    <label className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider block mb-1.5">
                      EVENT OR PROJECT REQUIREMENTS (OPTIONAL)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Describe your event needs, scale, timings, or specific requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#6B7280] focus:border-gold focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Step 2 Footer Actions */}
                  <div className="border-t border-white/[0.08] pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#9CA3AF] hover:text-white px-4 py-2.5 rounded-xl border border-white/[0.08] hover:border-white/20 transition-all cursor-pointer"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      BACK
                    </button>

                    <Button
                      variant="gold"
                      size="md"
                      type="submit"
                      disabled={isSubmitting}
                      className="group"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Booking</span>
                          <Check className="h-4 w-4 ml-1.5 stroke-[3]" />
                        </>
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </>
          ) : (
            /* SUCCESS VIEW */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 text-center"
            >
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                <CheckCircle2 className="h-9 w-9 stroke-[2.5]" />
              </div>

              <span className="text-[10px] font-bold text-gold uppercase tracking-[0.25em] block mb-1">
                CONFIRMED
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Booking Request Dispatched!
              </h3>
              <p className="text-sm text-[#9CA3AF] max-w-md mx-auto leading-relaxed mb-6">
                Thank you, <strong className="text-white">{fullName}</strong>. We have registered your request for{" "}
                <span className="text-gold font-medium">{selectedServices.join(", ")}</span>. A confirmation overview has been sent to{" "}
                <span className="text-white font-medium">{emailAddress}</span>.
              </p>

              <div className="max-w-md mx-auto bg-white/[0.02] border border-white/[0.06] rounded-2xl p-4 text-xs text-left mb-6 space-y-2">
                <div className="flex justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-[#9CA3AF]">Proposed Date:</span>
                  <span className="text-white font-semibold">{proposedDate || "Flexible / To Discuss"}</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-[#9CA3AF]">Proposed Location:</span>
                  <span className="text-white font-semibold">{proposedLocation || "Flexible / To Discuss"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Contact Number:</span>
                  <span className="text-white font-semibold">{mobileNumber}</span>
                </div>
              </div>

              <Button variant="gold" size="md" onClick={resetAndClose} className="px-8">
                Done
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
