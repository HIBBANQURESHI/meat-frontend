"use client"
import { Geist, Geist_Mono } from "next/font/google";
import { GFS_Didot } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import LayoutComponent from "@/components/LayoutComponent";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });
const gfsDidot = GFS_Didot({ weight: '400', subsets: ['greek'] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <html lang="en" className={gfsDidot.className}>
      <body style={{ fontFamily: 'GFS Didot, serif' }}>
        <LayoutComponent>
          {children}
          <ToastContainer position="bottom-right" toastStyle={{ background: '#121212', color: '#FFFFFF' }} />
        </LayoutComponent>
      </body>
    </html>
  );
}