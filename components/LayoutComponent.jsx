// components/LayoutComponent.jsx
'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from 'aos';
import { 
  User, 
  Settings, 
  ChevronRight, 
  Book, 
  Briefcase, 
  GraduationCap, 
  Building2, 
  Bell, 
  Search,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';

const navLinks = [
  { name: 'Amir', path: '/amir', icon: <Book size={18} /> },
  { name: 'Hamza', path: '/hamza', icon: <Briefcase size={18} /> },
  { name: 'Ishaq', path: '/ishaq', icon: <GraduationCap size={18} /> },
  { name: 'Shehbaz', path: '/shehbaz', icon: <Building2 size={18} /> }
];

export default function LayoutComponent({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Modern deep ocean color scheme
  const colors = {
    primary: '#6EE7B7',       // Soft teal
    primaryVariant: '#3B82F6',// Royal blue
    secondary: '#818CF8',     // Periwinkle
    background: isDarkMode ? '#0F0F0F' : '#f5f7fa',
    surface: isDarkMode ? '#1A1A1A' : '#ffffff',
    onSurface: isDarkMode ? '#E5E7EB' : '#333333',
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row" style={{ background: colors.background, color: colors.onSurface }}>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button 
          onClick={toggleMobileMenu}
          className="p-2 rounded-full bg-primary/10 text-primary"
          style={{ color: colors.primary }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Frosted Glass Sidebar */}
      <aside 
        className={`w-64 fixed h-full p-6 space-y-6 z-20 backdrop-blur-xl border-r border-white/10 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'left-0' : '-left-64 md:left-0'}`}
        style={{
          background: isDarkMode 
            ? `linear-gradient(160deg, ${colors.primaryVariant}15 0%, ${colors.background}99 100%)`
            : `linear-gradient(160deg, ${colors.primaryVariant}10 0%, ${colors.background}99 100%)`,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.18)'
        }}
        data-aos="fade-right"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight" style={{ 
            color: colors.primary,
            textShadow: `0 0 15px ${colors.primary}30`
          }}>
            Dashboard
          </h2>
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-xs font-bold" style={{ color: colors.primary }}>
              MD
            </span>
          </div>
        </div>
        
        <div className="relative mt-6 mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full rounded-xl transition-all border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
            style={{
              background: 'rgba(26, 26, 26, 0.4)',
              color: colors.onSurface,
              backdropFilter: 'blur(10px)'
            }}
          />
          <Search size={16} className="absolute left-3 top-2.5" style={{ color: colors.primary }} />
        </div>
        
        <nav className="space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="flex items-center p-3 rounded-xl transition-all hover:bg-primary/10 group hover:border-primary/30"
              style={{
                color: colors.onSurface,
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(26, 26, 26, 0.4)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span className="mr-3 transition-all group-hover:text-primary p-1.5 rounded-lg bg-primary/10"
                style={{ color: colors.primary }}>
                {link.icon}
              </span>
              <span className="flex-1">{link.name}</span>
              <ChevronRight 
                size={16} 
                className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" 
                style={{ color: colors.primary }}
              />
            </Link>
          ))}
        </nav>
        
        <div className="absolute bottom-6 left-6 right-6">
          <div 
            className="p-4 rounded-xl backdrop-blur-md border border-white/10 bg-primary/5"
            style={{
              boxShadow: `0 0 20px ${colors.primary}10`
            }}
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <span style={{ color: colors.primary }}>
                  <User size={18} />
                </span>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium" style={{ color: colors.primary }}>
                  User Profile
                </h4>
                <p className="text-xs opacity-80">
                  Admin Access
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64">
        {/* Modern Glass Navbar */}
        <nav 
          className="sticky top-0 z-10 p-4 backdrop-blur-xl border-b border-white/10"
          style={{
            background: isDarkMode
              ? `linear-gradient(90deg, ${colors.primaryVariant}15 0%, ${colors.background}99 100%)`
              : `linear-gradient(90deg, ${colors.primaryVariant}10 0%, ${colors.background}99 100%)`,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.18)'
          }}
          data-aos="fade-down"
        >
          <div className="flex justify-between items-center">
            <h1 
              className="text-xl font-semibold tracking-wider ml-12 md:ml-0"
              style={{ 
                color: colors.primary,
                letterSpacing: '0.1em',
                textShadow: `0 0 12px ${colors.primary}30`
              }}
            >
              MODERN DASHBOARD
            </h1>
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full transition-all hover:bg-primary/10"
                style={{ color: colors.onSurface }}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button 
                className="p-2 rounded-full transition-all hover:bg-primary/10 relative"
                style={{ color: colors.onSurface }}
              >
                <Bell size={20} />
                <span 
                  className="absolute top-0 right-0 h-2 w-2 rounded-full"
                  style={{ background: colors.primary }}
                ></span>
              </button>
              
              <button 
                className="p-2 rounded-full flex items-center justify-center transition-all hover:bg-primary/10"
                style={{ color: colors.onSurface }}
              >
                <User size={20} />
              </button>
              
              <button 
                className="p-2 rounded-full transition-all hover:bg-primary/10"
                style={{ color: colors.onSurface }}
              >
                <Settings size={20} />
              </button>
            </div>
          </div>
        </nav>

        {/* Content Container */}
        <main className="p-6 md:p-8 pt-6 min-h-screen">
          <div 
            className="rounded-2xl p-6 md:p-8 backdrop-blur-xl border border-white/10"
            style={{
              background: isDarkMode ? 'rgba(26, 26, 26, 0.4)' : 'rgba(255, 255, 255, 0.4)',
              minHeight: 'calc(100vh - 160px)',
              boxShadow: `0 0 40px ${colors.primary}08`,
              backdropFilter: 'blur(16px)'
            }}
            data-aos="fade-up"
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}