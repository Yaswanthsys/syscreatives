"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Maximize2, 
  Minimize2, 
  ArrowLeft, 
  Camera, 
  Youtube, 
  X, 
  ExternalLink,
  Share2,
  Check,
  Heart,
  Calendar,
  Clock,
  MapPin,
  Utensils,
  Sparkles,
  FileText
} from "lucide-react";

export interface EventConfig {
  studioName?: string;
  studioTagline?: string;
  photographyPartnerLogo?: string;
  themeTitle?: string;
  themeSubtitle?: string;
  twinNames?: string;
  familyName?: string;
  eventDate?: string;
  eventTime?: string;
  venueName?: string;
  venueAddress?: string;
  dinnerNote?: string;
  parents?: string;
  invitedBy?: string;
  blessingQuote?: string;
  childrenImage?: string;
  invitationCardImage?: string;
  qrCodeImage?: string;
  youtubeLiveUrl?: string;
  youtubeVideoId?: string;
  galleryUrl?: string;
  whatsappNumber?: string;
  displayPhone?: string;
  showWatchLive?: boolean;
}

export default function LiveQRView({
  studioName = "SYS CREATIVES",
  studioTagline = "PREMIUM CREATIVE AGENCY & LIVE STREAMING",
  photographyPartnerLogo = "/live-qr/snaps-by-rajesh.png",
  themeTitle = "Two Peas in a Pod",
  themeSubtitle = "TWINS BIRTHDAY CELEBRATION",
  twinNames = "Seren & Selena",
  familyName = "VIJJESWARAPU",
  eventDate = "8th September 2026 (Tuesday)",
  eventTime = "Evening starting at 5:00 PM",
  venueName = "D1 Convention",
  venueAddress = "1 Walkers rd, Venkateswara Nagar, Rajahmundry",
  dinnerNote = "Dinner to follow",
  parents = "Dr. Vinod Vijjeswarapu MBBS, MPH | Dr. Satya Sudha Daggumilli MBBS, MD",
  invitedBy = "Vijjeswarapu and Daggumilli Family",
  blessingQuote = "Children are a heritage from the Lord, offspring a reward from Him. — Psalm 127:3",
  childrenImage = "/live-qr/children-photo.jpg",
  invitationCardImage = "/live-qr/invitation-card.jpg",
  qrCodeImage = "/live-qr/event-qr.png",
  youtubeLiveUrl = "https://www.youtube.com",
  youtubeVideoId = "M7lc1UVf-VE",
  galleryUrl = "https://e.dslr.app/selfie-search/c89e18fe-e0a3-4596-810e-5699e91fcc7a",
  whatsappNumber = "918500622735",
  displayPhone = "+91 85006 22735",
  showWatchLive = false,
}: EventConfig) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [youtubeModalOpen, setYoutubeModalOpen] = useState(false);
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else if (document.exitFullscreen) {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error("Fullscreen toggle error:", err);
    }
  };

  const fallbackCopy = (text: string) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handleCopyLink = () => {
    const textToCopy = galleryUrl;
    if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }).catch(() => {
        fallbackCopy(textToCopy);
      });
    } else {
      fallbackCopy(textToCopy);
    }
  };

  return (
    <div className="relative w-full min-h-[100dvh] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EE] to-[#F5ECE0] text-[#2C2621] select-none overflow-x-hidden flex flex-col items-center justify-between">
      
      {/* 
        ================================================================
        1. PURE CSS/SVG RESPONSIVE BACKGROUND (NO AI GENERATED IMAGES)
        - Soft celebration ambient glow with pastel bokeh (pink, lavender, gold)
        - Delicate geometric golden border framing that fits ANY screen resolution
        ================================================================
      */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Soft pastel celebratory bokeh lights */}
        <div className="absolute -top-20 -left-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="absolute top-1/4 -right-20 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full bg-amber-200/25 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-purple-200/25 blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-emerald-100/30 blur-3xl" />

        {/* Elegant Golden Border Frame with Corner Flourishes */}
        <div className="absolute inset-3 sm:inset-5 md:inset-7 border border-[#D4AF37]/35 rounded-2xl sm:rounded-3xl pointer-events-none" />
        <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-[#D4AF37]/20 rounded-xl sm:rounded-2xl pointer-events-none" />

        {/* Corner Golden Flourishes */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 w-5 h-5 border-t-2 border-l-2 border-[#C5A059] rounded-tl-sm" />
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-5 h-5 border-t-2 border-r-2 border-[#C5A059] rounded-tr-sm" />
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-5 h-5 border-b-2 border-l-2 border-[#C5A059] rounded-bl-sm" />
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-5 h-5 border-b-2 border-r-2 border-[#C5A059] rounded-br-sm" />

        {/* Subtle celebration sparkle particles */}
        <div className="absolute top-16 left-[12%] text-amber-400/40 text-xs sm:text-sm animate-pulse">✦</div>
        <div className="absolute top-24 right-[15%] text-pink-400/40 text-sm sm:text-base animate-pulse">✦</div>
        <div className="absolute bottom-20 left-[18%] text-purple-400/40 text-xs sm:text-sm animate-pulse">✦</div>
        <div className="absolute bottom-32 right-[12%] text-amber-500/40 text-sm sm:text-base animate-pulse">✦</div>
      </div>

      {/* 
        ================================================================
        2. MAIN EVENT CONTENT CONTAINER
        - Perfectly balanced, cohesive, screen-scaled layout
        ================================================================
      */}
      <main className="relative z-10 w-full max-w-4xl min-h-[100dvh] flex flex-col items-center justify-between px-4 sm:px-8 py-6 sm:py-9 mx-auto">
        
        {/* ==============================================================
            A. TOP BRANDING: SYS CREATIVES + SNAPS BY RAJESH
            ============================================================== */}
        <header className="w-full flex items-center justify-between gap-4 pb-2 border-b border-[#D4AF37]/25 shrink-0 max-w-2xl">
          {/* Studio Brand: SYS CREATIVES */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#996515] flex items-center justify-center text-white shadow-xs">
              <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-sm sm:text-base tracking-[0.2em] text-[#2C2621] uppercase leading-tight">
                {studioName}
              </span>
              <span className="text-[8px] sm:text-[9.5px] font-medium tracking-[0.24em] text-[#8C6D23] uppercase leading-tight">
                LIVE BROADCAST & QR
              </span>
            </div>
          </div>

          {/* Photography Partner: SNAPS BY RAJESH */}
          <div className="flex items-center gap-2">
            <div className="flex flex-col text-right">
              <span className="text-[8px] sm:text-[9.5px] font-medium tracking-wider text-[#7A6B5C] uppercase">
                Photography by
              </span>
              <div className="relative h-5 sm:h-6 w-28 sm:w-36 flex items-center justify-end">
                <Image
                  src={photographyPartnerLogo}
                  alt="Snaps by Rajesh Photography"
                  width={140}
                  height={28}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        {/* ==============================================================
            B. CELEBRATION THEME & CHILDREN PHOTO
            ============================================================== */}
        <section className="w-full max-w-2xl flex flex-col items-center text-center my-auto py-2 sm:py-3">
          
          {/* Cute "Two Peas in a Pod" Celebration Ribbon Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-pink-50 via-amber-50 to-emerald-50 border border-[#D4AF37]/40 shadow-xs mb-2 sm:mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="font-serif text-[10px] sm:text-xs font-bold tracking-[0.24em] text-[#8C6D23] uppercase">
              {themeTitle} • {themeSubtitle}
            </span>
          </div>

          {/* Adorable Twins Landscape Photo in Gold/Champagne Frame */}
          <div className="relative w-full aspect-[1.5/1] sm:aspect-[1.65/1] max-h-[38vh] min-h-[200px] p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#F5D77F] via-[#D4AF37] to-[#B8860B] shadow-[0_12px_36px_-6px_rgba(212,175,55,0.35)] my-1.5 shrink-0 group">
            <div className="relative w-full h-full overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-white/60">
              <Image
                src={childrenImage}
                alt="Seren and Selena - Twins Birthday Celebration"
                fill
                priority
                className="object-cover object-center group-hover:scale-[1.015] transition-transform duration-500"
                sizes="(max-width: 768px) 95vw, 680px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 pointer-events-none" />
            </div>
          </div>

          {/* Children Names: Seren & Selena Vijjeswarapu */}
          <div className="mt-2.5 sm:mt-3">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#9E2A4B] drop-shadow-xs flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <span>Seren</span>
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#E11D48] fill-[#E11D48] animate-pulse inline-block" />
              <span>Selena</span>
            </h1>
            <span className="font-serif text-xs sm:text-sm tracking-[0.35em] text-[#8C6D23] uppercase font-semibold mt-0.5 block">
              {familyName}
            </span>
          </div>

          {/* Quick Event Summary Pills */}
          <div className="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-3 text-[11px] sm:text-xs text-[#5C5042]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#D4AF37]/30 shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
              {eventDate}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#D4AF37]/30 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#B8860B]" />
              {eventTime}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#D4AF37]/30 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
              {venueName}, Rajahmundry
            </span>
          </div>

          {/* ==============================================================
              C. ACTION BUTTONS: GET PHOTOS & VIEW INVITATION
              ============================================================== */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-3.5 sm:mt-4 w-full max-w-xs sm:max-w-sm mx-auto">
            {/* Optional Button 1: Watch Live on YouTube (Hidden by default) */}
            {showWatchLive && (
              <button
                onClick={() => setYoutubeModalOpen(true)}
                className="w-full flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#D71920] to-[#B31217] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_18px_rgba(215,25,32,0.4)] hover:brightness-110 active:scale-95 transition-all group cursor-pointer"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0">
                  <Youtube className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white fill-white" />
                </div>
                <span className="whitespace-nowrap tracking-tight">
                  Watch Live on YouTube
                </span>
              </button>
            )}

            {/* Button 2: Get Photos (Centered & prominent) */}
            <button
              onClick={() => setQrModalOpen(true)}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#996515] text-[#1A150D] font-bold text-sm sm:text-base shadow-[0_6px_22px_rgba(212,175,55,0.4)] hover:brightness-105 active:scale-98 transition-all group border border-[#F5E6B3] cursor-pointer"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-black/10 flex items-center justify-center group-hover:bg-black/15 transition-colors shrink-0">
                <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1A150D]" />
              </div>
              <span className="whitespace-nowrap tracking-wide">
                Get Photos
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#1A150D] ml-0.5" />
            </button>
          </div>

          {/* Button 3: View Full Invitation Card */}
          <button
            onClick={() => setCardModalOpen(true)}
            className="inline-flex items-center gap-1.5 mt-2.5 text-[11px] sm:text-xs text-[#8C6D23] hover:text-[#5C4512] font-medium underline underline-offset-4 transition-colors cursor-pointer"
          >
            <FileText className="w-3 h-3" />
            <span>View Full Invitation Card & Family Details</span>
          </button>
        </section>

        {/* ==============================================================
            D. FOOTER: EVENT DETAILS & WHATSAPP SUPPORT
            ============================================================== */}
        <footer className="w-full max-w-2xl flex flex-col items-center text-center pt-2 pb-1 shrink-0 border-t border-[#D4AF37]/25 mt-2">
          
          {/* Parents & Family credit from the card */}
          <div className="text-[10px] sm:text-[11px] text-[#7A6B5C] font-light max-w-lg mb-2">
            <p className="font-serif text-[#8C6D23] font-medium">Parents: {parents}</p>
            <p className="text-[#8F8172] text-[9.5px]">Invited by {invitedBy} • {dinnerNote}</p>
          </div>

          {/* WhatsApp Support Bar */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hi! I need help accessing Seren & Selena's birthday live stream or event photos.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#2C2621] border border-[#D4AF37]/35 shadow-2xs backdrop-blur-xs transition-all hover:scale-105 active:scale-95 group"
          >
            <div className="w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xs group-hover:scale-110 transition-transform shrink-0">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[8.5px] sm:text-[9.5px] text-[#7A6B5C] font-light leading-none">
                Need Help? Chat with Us
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-[#2C2621] tracking-wide leading-tight mt-0.5">
                {displayPhone}
              </span>
            </div>
          </a>
        </footer>
      </main>

      {/* 
        ================================================================
        MODAL 1: GET PHOTOS / AI FACE RECOGNITION LIVE QR
        ================================================================
      */}
      {qrModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-sm sm:max-w-md p-6 sm:p-7 rounded-3xl bg-[#FAF8F5] text-[#2C2621] border border-[#D4AF37]/50 shadow-2xl text-center">
            <button
              onClick={() => setQrModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#7A6B5C] hover:text-[#2C2621] transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center">
              <span className="font-serif text-xs text-[#8C6D23] font-semibold tracking-widest uppercase">
                {twinNames} • Birthday Gallery
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2C2621] mt-1">
                Scan for Instant Photos
              </h3>
              <p className="text-xs text-[#6B5E51] mt-1 max-w-xs">
                Scan this QR code with your phone camera, snap a quick selfie, and get all your photos from the celebration delivered instantly!
              </p>
            </div>

            <div className="relative my-5 p-4 rounded-2xl bg-white border border-[#D4AF37]/35 shadow-inner flex flex-col items-center justify-center mx-auto w-52 h-52 sm:w-56 sm:h-56">
              <div className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#B8860B]" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 border-t-2 border-r-2 border-[#B8860B]" />
              <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 border-b-2 border-l-2 border-[#B8860B]" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#B8860B]" />

              <div className="relative w-40 h-40 sm:w-44 sm:h-44 p-1">
                <Image
                  src={qrCodeImage}
                  alt="Scan QR for Event Photos"
                  width={176}
                  height={176}
                  className="w-full h-full object-contain [image-rendering:pixelated]"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-semibold text-xs sm:text-sm hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-xs"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-900" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? "Gallery Link Copied!" : "Copy Gallery Link"}</span>
              </button>

              <a
                href={galleryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs text-[#8C6D23] hover:text-[#5C4512] font-semibold underline underline-offset-4 transition-colors"
              >
                <span>Or open gallery directly</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setQrModalOpen(false)}
                className="w-full py-1 text-xs text-[#7A6B5C] hover:text-[#2C2621] transition-colors cursor-pointer"
              >
                Back to Celebration Page
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 
        ================================================================
        MODAL 2: YOUTUBE WATCH LIVE PLAYER
        ================================================================
      */}
      {youtubeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl p-4 sm:p-6 rounded-3xl bg-[#181818] border border-white/15 text-white shadow-2xl">
            <button
              onClick={() => setYoutubeModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
              title="Close Stream"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <Youtube className="w-6 h-6 text-red-600 fill-red-600" />
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold">
                  {twinNames} — Twins Birthday Live Stream
                </h3>
                <span className="text-xs text-red-500 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                  LIVE BROADCAST
                </span>
              </div>
            </div>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/10 shadow-lg">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1`}
                title={`${twinNames} Birthday Live Stream`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="flex items-center justify-between mt-4 text-xs">
              <span className="text-gray-400">
                Streaming powered by SYS Creatives
              </span>
              <a
                href={youtubeLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
              >
                <span>Open in YouTube App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 
        ================================================================
        MODAL 3: FULL INVITATION CARD VIEWER
        ================================================================
      */}
      {cardModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-lg w-full max-h-[92vh] flex flex-col items-center bg-[#FAF8F5] p-3 sm:p-5 rounded-3xl border border-[#D4AF37]/50 shadow-2xl overflow-y-auto">
            <button
              onClick={() => setCardModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/10 hover:bg-black/20 text-[#2C2621] transition-colors z-10"
              title="Close Card"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-serif text-xs tracking-widest text-[#8C6D23] font-bold uppercase mb-2">
              Official Invitation Card
            </span>

            {/* Invitation Card Image */}
            <div className="relative w-full aspect-[682/1024] rounded-xl overflow-hidden shadow-lg border border-[#D4AF37]/30">
              <Image
                src={invitationCardImage}
                alt="Two Peas In A Pod - Seren & Selena Twins Birthday Invitation Card"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 500px"
              />
            </div>

            <button
              onClick={() => setCardModalOpen(false)}
              className="mt-3 px-6 py-2 rounded-xl bg-[#2C2621] text-white text-xs font-semibold hover:bg-black transition-colors"
            >
              Close Invitation
            </button>
          </div>
        </div>
      )}

      {/* Discreet bottom controls (Home Link + Fullscreen) */}
      <div className="fixed bottom-3 right-3 z-40 flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <Link
          href="/"
          className="p-2 rounded-full bg-white/80 border border-gray-300 text-gray-700 hover:text-black hover:bg-white transition-colors shadow-2xs"
          title="Return to Home"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-full bg-white/80 border border-[#D4AF37]/50 text-[#B8860B] hover:bg-white transition-colors shadow-2xs"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
