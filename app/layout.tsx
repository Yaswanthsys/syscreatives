import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SYS Creatives | Premium Creative Agency",
  description: "Luxury live streaming, cinematic video editing, premium branding, and AI face recognition QR galleries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans bg-[#0F0F0F] min-h-full flex flex-col selection:bg-gold selection:text-black">
        {/* Subtle cinematic film-grain noise overlay */}
        <div className="fixed inset-0 z-[99] pointer-events-none opacity-[0.015] bg-noise bg-repeat" />
        {children}
      </body>
    </html>
  );
}

