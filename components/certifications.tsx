"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate certification cards
    gsap.fromTo(".cert-card",
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
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

  const certifications = [
    {
      title: "SQL Advanced Certification",
      issuer: "HackerRank",
      date: "March 2025",
      status: "Completed",
      description: "Advanced SQL concepts including complex joins, subqueries, window functions, and performance optimization.",
      skills: ["Advanced SQL", "Query Optimization", "Database Design", "Performance Tuning"],
      gradient: "from-blue-500 to-cyan-500",
      certificateUrl: "#" // Replace with actual certificate URL
    },
    {
      title: "Data Analyst Bootcamp",
      issuer: "Grow Data Skills",
      date: "August 2025",
      status: "Ongoing",
      description: "Comprehensive data analysis program covering Python, SQL, Power BI, and advanced analytics techniques.",
      skills: ["Python", "Data Visualization", "Statistical Analysis", "Business Intelligence"],
      gradient: "from-purple-500 to-pink-500",
      certificateUrl: "#" // Replace with actual certificate URL
    }
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in data analytics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <CardHeader className={`bg-gradient-to-r ${cert.gradient} text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Award className="w-8 h-8" />
                        <div>
                          <CardTitle className="text-xl font-bold">
                            {cert.title}
                          </CardTitle>
                          <p className="text-white/90 font-medium">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`${cert.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'} text-white`}
                      >
                        {cert.status === 'Completed' ? (
                          <CheckCircle className="w-3 h-3 mr-1" />
                        ) : (
                          <Calendar className="w-3 h-3 mr-1" />
                        )}
                        {cert.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-white/80">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-6">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Covered */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <div className="pt-4 border-t">
                    <Button 
                      className="w-full group"
                      onClick={() => window.open(cert.certificateUrl, '_blank')}
                      disabled={cert.status === 'Ongoing'}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      {cert.status === 'Completed' ? 'View Certificate' : 'In Progress'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
            <div className="space-y-4">
              <Award className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-2xl font-bold text-primary">
                Continuous Learning Journey
              </h3>
              <p className="text-muted-foreground">
                I'm committed to staying current with the latest trends and technologies in data analytics. 
                Currently pursuing additional certifications in advanced machine learning and cloud analytics platforms.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Machine Learning', 'Cloud Analytics', 'Advanced Statistics', 'Data Engineering'].map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill} (Planned)
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}