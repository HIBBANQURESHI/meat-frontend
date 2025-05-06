// app/page.js
'use client';

import { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Book, 
  Briefcase, 
  GraduationCap, 
  Building2,
  TrendingUp,
  Users,
  BarChart3,
  Calendar
} from 'lucide-react';

export default function Home() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const colors = {
    primary: '#6EE7B7',
    primaryVariant: '#3B82F6',
    secondary: '#818CF8',
    onSurface: '#E5E7EB',
    surface: '#1A1A1A',
  };

  const cards = [
    { 
      name: 'Amir', 
      description: 'Project Management & Development',
      icon: <Book size={24} />,
      stats: '24 Active Projects'
    },
    { 
      name: 'Hamza', 
      description: 'Client Relations & Marketing',
      icon: <Briefcase size={24} />,
      stats: '16 New Clients'
    },
    { 
      name: 'Ishaq', 
      description: 'Research & Analytics',
      icon: <GraduationCap size={24} />,
      stats: '8 Research Papers'
    },
    { 
      name: 'Shehbaz', 
      description: 'Corporate Relations & Finance',
      icon: <Building2 size={24} />,
      stats: '4 Partner Companies'
    }
  ];

  const stats = [
    { 
      title: 'Total Growth', 
      value: '24.8%', 
      trend: 'up',
      icon: <TrendingUp size={20} />,
      color: '#6EE7B7'
    },
    { 
      title: 'Active Users', 
      value: '2,456', 
      trend: 'up',
      icon: <Users size={20} />,
      color: '#3B82F6'
    },
    { 
      title: 'Monthly Revenue', 
      value: '$82.5K', 
      trend: 'up',
      icon: <BarChart3 size={20} />,
      color: '#818CF8'
    },
    { 
      title: 'Upcoming Events', 
      value: '12', 
      trend: 'neutral',
      icon: <Calendar size={20} />,
      color: '#F472B6'
    }
  ];

  return (
    <div className={`p-4 md:p-8 space-y-8 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section with Glowing Effects */}
      <div 
        className="p-6 md:p-8 rounded-2xl backdrop-blur-xl border border-white/10 relative overflow-hidden"
        style={{
          background: `linear-gradient(120deg, ${colors.primaryVariant}20 0%, ${colors.surface}F0 100%)`,
          boxShadow: `0 8px 32px ${colors.primary}15`
        }}
        data-aos="fade-up"
      >
        {/* Abstract Glass Elements */}
        <div 
          className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-20"
          style={{ 
            background: `radial-gradient(circle, ${colors.primary}50 0%, transparent 70%)`,
            filter: 'blur(40px)'
          }}
        ></div>
        
        <div 
          className="absolute -left-10 -bottom-20 w-48 h-48 rounded-full opacity-20"
          style={{ 
            background: `radial-gradient(circle, ${colors.primaryVariant}50 0%, transparent 70%)`,
            filter: 'blur(40px)'
          }}
        ></div>
        
        <div className="relative z-10">
          <div className="flex items-center mb-3">
            <Sparkles size={24} style={{ color: colors.primary }} className="mr-2" />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: colors.primary }}>
              Dashboard Overview
            </span>
          </div>
          
          <h1 
            className="text-3xl md:text-5xl font-bold mb-3 tracking-tighter"
            style={{ 
              color: colors.primary,
              textShadow: `0 0 20px ${colors.primary}40`
            }}
          >
            Modern Dashboard
          </h1>
          
          <p 
            className="text-lg md:text-xl font-medium opacity-90 max-w-2xl"
            style={{ color: colors.onSurface }}
          >
            A comprehensive management system with an elegant interface designed for efficient workflow and stunning visual experience.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              className="px-5 py-2.5 rounded-xl backdrop-blur-xl border border-primary/30 transition-all hover:bg-primary/20 flex items-center"
              style={{
                background: 'rgba(110, 231, 183, 0.1)',
                color: colors.primary,
                boxShadow: `0 4px 12px ${colors.primary}20`
              }}
            >
              Get Started
              <ChevronRight size={18} className="ml-1" />
            </button>
            
            <button
              className="px-5 py-2.5 rounded-xl backdrop-blur-xl border border-white/10 transition-all hover:bg-white/5 flex items-center"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: colors.onSurface,
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="p-4 md:p-6 rounded-xl backdrop-blur-xl border border-white/10 transition-all hover:border-white/20"
            style={{
              background: 'rgba(26, 26, 26, 0.4)',
              boxShadow: `0 4px 20px rgba(0, 0, 0, 0.2)`
            }}
            data-aos="fade-up"
            data-aos-delay={100 + (index * 50)}
          >
            <div className="flex items-center justify-between mb-3">
              <div 
                className="p-2 rounded-lg"
                style={{ background: `${stat.color}20` }}
              >
                <span style={{ color: stat.color }}>
                  {stat.icon}
                </span>
              </div>
              
              <div className="text-xs font-medium px-2 py-1 rounded-lg" style={{ 
                color: stat.color,
                background: `${stat.color}15`
              }}>
                {stat.trend === 'up' ? '↑ 8.2%' : '→ Stable'}
              </div>
            </div>
            
            <h3 
              className="text-3xl font-bold mb-1"
              style={{ color: colors.onSurface }}
            >
              {stat.value}
            </h3>
            
            <p 
              className="text-sm opacity-70"
              style={{ color: colors.onSurface }}
            >
              {stat.title}
            </p>
          </div>
        ))}
      </div>

      {/* Section Title */}
      <div className="flex items-center justify-between">
        <h2 
          className="text-2xl font-semibold tracking-wide"
          style={{ color: colors.onSurface }}
        >
          Management Areas
        </h2>
        
        <button
          className="text-sm flex items-center opacity-70 hover:opacity-100 transition-opacity"
          style={{ color: colors.primary }}
        >
          View All
          <ArrowRight size={16} className="ml-1" />
        </button>
      </div>

      {/* Interactive Cards Section with Hover Effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="p-6 rounded-xl transition-all cursor-pointer backdrop-blur-xl border border-white/10 hover:border-primary/30 hover:scale-[1.02]"
            style={{
              background: 'rgba(26, 26, 26, 0.4)',
              boxShadow: `0 4px 30px ${colors.primary}10`
            }}
            data-aos="zoom-in"
            data-aos-delay={200 + (index * 100)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="flex justify-between items-start mb-4">
              <div 
                className="p-3 rounded-xl"
                style={{
                  background: `${colors.primary}15`, 
                  color: colors.primary,
                  transition: 'all 0.3s ease',
                  transform: hoverIndex === index ? 'scale(1.1)' : 'scale(1)'
                }}
              >
                {card.icon}
              </div>
              
              <ChevronRight 
                size={20} 
                style={{ 
                  color: colors.primary,
                  opacity: hoverIndex === index ? 1 : 0,
                  transform: hoverIndex === index ? 'translateX(5px)' : 'translateX(0)',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
            
            <h3 
              className="text-xl font-semibold mb-2 transition-colors"
              style={{ 
                color: hoverIndex === index ? colors.primary : colors.onSurface,
                transition: 'all 0.3s ease'
              }}
            >
              {card.name}
            </h3>
            
            <p 
              className="text-sm opacity-80 mb-4"
              style={{ color: colors.onSurface }}
            >
              {card.description}
            </p>
            
            <div 
              className="text-xs font-medium px-3 py-1.5 rounded-lg inline-block"
              style={{ 
                background: `${colors.primary}15`,
                color: colors.primary
              }}
            >
              {card.stats}
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Content Section */}
      <div 
        className="p-6 md:p-8 rounded-2xl backdrop-blur-xl border border-white/10 relative overflow-hidden"
        style={{
          background: `linear-gradient(120deg, ${colors.primaryVariant}15 0%, ${colors.surface}F5 100%)`,
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.2)`
        }}
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Background Glow Effect */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 rounded-full opacity-20"
          style={{ 
            background: `radial-gradient(ellipse, ${colors.primaryVariant}50 0%, transparent 70%)`,
            filter: 'blur(60px)'
          }}
        ></div>
        
        <div className="relative z-10">
          <h2 
            className="text-2xl md:text-3xl font-semibold mb-4"
            style={{ color: colors.onSurface }}
          >
            Start Your Journey Today
          </h2>
          
          <p 
            className="text-base md:text-lg opacity-90 max-w-3xl mb-6"
            style={{ color: colors.onSurface }}
          >
            Select a section from the sidebar to begin your management journey. 
            Enjoy the seamless experience with our advanced glassmorphic interface designed for maximum productivity.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              className="px-5 py-3 rounded-xl backdrop-blur-xl border border-primary/30 transition-all hover:bg-primary/20 flex items-center"
              style={{
                background: 'rgba(110, 231, 183, 0.1)',
                color: colors.primary,
                boxShadow: `0 4px 12px ${colors.primary}20`
              }}
            >
              Explore Features
              <ArrowRight size={18} className="ml-2" />
            </button>
            
            <button
              className="px-5 py-3 rounded-xl backdrop-blur-xl border border-white/10 transition-all hover:bg-white/5"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                color: colors.onSurface
              }}
            >
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}