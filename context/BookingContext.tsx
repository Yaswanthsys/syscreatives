"use client";

import React, { createContext, useContext, useState } from "react";

interface BookingContextType {
  isBookingOpen: boolean;
  preselectedService: string | null;
  openBookingModal: (service?: string) => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | null>(null);

  const openBookingModal = (service?: string) => {
    if (service) {
      setPreselectedService(service);
    } else {
      setPreselectedService(null);
    }
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    setPreselectedService(null);
  };

  return (
    <BookingContext.Provider
      value={{
        isBookingOpen,
        preselectedService,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingProvider");
  }
  return context;
}
