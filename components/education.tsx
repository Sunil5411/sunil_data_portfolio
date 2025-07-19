"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate education cards
    gsap.fromTo(".education-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const education = [
    {
      degree: "Bachelor of Computer Application",
      institution: "HIMALAYAN GARHWAL UNIVERSITY",
      location: "Uttarakhand, India",
      cgpa: "7.55/10",
      period: "2019 - 2021",
      coursework: [
        "Data Analysis & Visualization",
        "Forecasting Techniques", 
        "Statistical Methods",
        "Data Storytelling"
      ]
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College",
      location: "Y.S.R District",
      cgpa: "67/100",
      period: "2017 - 2018",
      coursework: []
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-muted/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation in data science and analytical thinking
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-300 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-blue-600/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/20 rounded-full">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl md:text-2xl font-bold text-primary">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-lg font-semibold text-foreground mt-1">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end space-y-2">
                      <Badge variant="secondary" className="text-sm font-medium">
                        CGPA: {edu.cgpa}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                {edu.coursework.length > 0 && (
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-lg">Relevant Coursework</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {edu.coursework.map((course, courseIndex) => (
                        <motion.div
                          key={courseIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: courseIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm font-medium">{course}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}