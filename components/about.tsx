"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, BarChart3, Brain } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!section || !image || !content) return;

    // GSAP scroll animations
    gsap.fromTo(image, 
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(content,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate skill badges
    gsap.fromTo(".skill-badge",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-container",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const skills = [
    { name: 'Python', icon: Code, color: 'bg-blue-500' },
    { name: 'MySQL', icon: Database, color: 'bg-orange-500' },
    { name: 'Power BI', icon: BarChart3, color: 'bg-yellow-500' },
    { name: 'Excel', icon: Brain, color: 'bg-green-500' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming complex data into clear, actionable business insights
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div ref={imageRef} className="relative">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-2xl hover:shadow-primary/20">
                <Image
                  src="/mypic.jpeg"
                  alt="Sunil Kumar Reddy"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
                  Sunil Kumar Reddy
                </h3>
                <p className="text-xl text-muted-foreground font-medium">
                  Data Analyst & Business Analyst
                </p>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Available for Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                I'm <strong>Sunil Kumar Reddy</strong>, a certified Data Analyst based in Hyderabad, with a BCA from Himalayan Garhwal University and a strong focus on building <strong>real-time, API-driven analytics solutions</strong> that solve real-world problems.
              </p>
              
              <p className="text-lg leading-relaxed">
                I specialize in converting raw, fast-moving data into <strong>actionable business insights</strong> using <strong>Power BI, SQL, and Python</strong> — with expertise in time-series forecasting, public data automation, and dashboard storytelling. I hold certifications in <strong>Power BI</strong> and <strong>Advanced SQL</strong>.
              </p>
              
              <div className="my-8 p-6 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-lg border-l-4 border-l-primary">
                <h4 className="text-xl font-bold text-primary mb-4">🔧 What I've Built:</h4>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start space-x-3">
                    <span className="text-lg">🌾</span>
                    <span>Forecasted <strong>farm input price volatility</strong> using ARIMA/Prophet + Power BI across 10+ Indian states</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-lg">💬</span>
                    <span>Built a <strong>real-time tech sentiment tracker</strong> analyzing 12,000+ tweets per day</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-lg">⚡</span>
                    <span>Mapped <strong>EV charging station infrastructure gaps</strong> across India using geo-visual analytics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-lg">🛒</span>
                    <span>Modeled <strong>retail price elasticity</strong> to optimize discount strategy and revenue growth</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-lg">🧬</span>
                    <span>Developed a <strong>Human Longevity Index</strong> using World Bank API to expose health disparity patterns globally</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                  <p className="text-base font-medium text-green-700 dark:text-green-300">
                    💡 <strong>Result:</strong> Improved early price spike detection by up to <strong>22%</strong> in farm cost forecasting (test simulation)
                  </p>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed">
                I thrive on solving complex, practical challenges in agriculture, energy, public health, and technology — by designing <strong>custom KPIs</strong>, automating insights, and clearly communicating data stories that drive smarter decisions.
              </p>
              
              <p className="text-lg leading-relaxed">
                Whether remote or on-site, I bring strong business context, curiosity, and rapid learning to every project.
              </p>
              
              <div className="my-6 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20">
                <p className="text-base font-medium text-blue-700 dark:text-blue-300">
                  📈 Let's connect if you're working with data, APIs, or public platforms — and want someone who turns data into <strong>direction and action</strong>.
                </p>
              </div>
              
              <p className="text-base text-muted-foreground italic">
                Outside of analytics, I enjoy experimenting with new data APIs and contributing to open-source tools that help turn information into insight.
              </p>
            </div>

            {/* Top Skills */}
            <div className="skills-container mt-8">
              <h4 className="text-xl font-semibold mb-4">Top Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-badge"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-medium flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <skill.icon className="w-4 h-4" />
                      <span>{skill.name}</span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Strengths */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[
                { title: 'Analytical Thinking', desc: 'Breaking down complex problems' },
                { title: 'Communication', desc: 'Clear stakeholder presentations' },
                { title: 'Adaptability', desc: 'Quick learning of new technologies' },
              ].map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                    <h5 className="font-semibold text-primary mb-1">{strength.title}</h5>
                    <p className="text-sm text-muted-foreground">{strength.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}