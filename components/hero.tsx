"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Button } from '@/components/ui/button';
import { Download, Eye, Github, Phone, Mail } from 'lucide-react';
import ThreeScene from '@/components/three-scene';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(TextPlugin);
}

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    if (titleRef.current) {
      tl.to(titleRef.current, {
        duration: 2,
        text: "Turning Data into Business Impact",
        ease: "none",
      });
    }
    
    if (subtitleRef.current) {
      tl.to(subtitleRef.current, {
        duration: 1.5,
        text: "Fresher Data Analyst & Business Analyst | Driven to deliver value through data storytelling and business insight.",
        ease: "none",
      }, "-=0.5");
    }
  }, []);

  const buttons = [
    { label: 'View Projects', icon: Eye, href: '#projects', variant: 'default' as const },
    { label: 'Download Resume', icon: Download, href: '/SunilKumarReddy_DataAnalyst_Resume_2025.pdf', variant: 'outline' as const },
    { label: 'View Dashboards', icon: Github, href: 'https://github.com/Sunil5411', variant: 'outline' as const },
    { label: 'Case Study', icon: Eye, href: '#projects', variant: 'outline' as const },
    { label: "Let's Connect", icon: Mail, href: '#contact', variant: 'outline' as const },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Animated Headline */}
          <div className="space-y-4">
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight"
            >
              {/* Text will be animated by GSAP */}
            </h1>
            
            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              {/* Text will be animated by GSAP */}
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {buttons.map((button, index) => (
              <motion.div
                key={button.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <Button
                  variant={button.variant}
                  size="lg"
                  className="group relative overflow-hidden"
                  onClick={() => {
                    if (button.href.startsWith('#')) {
                      document.querySelector(button.href)?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.open(button.href, '_blank');
                    }
                  }}
                >
                  <button.icon className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  {button.label}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 opacity-0 group-hover:opacity-100"
                    initial={false}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center items-center space-x-6 text-sm text-muted-foreground mt-8"
          >
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 9380691205</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>sunilkumareddy8@gmail.com</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}