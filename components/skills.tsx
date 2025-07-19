"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DNASpiral from '@/components/dna-spiral';
import { 
  Code, Database, BarChart3, FileSpreadsheet, 
  Brain, Users, FileText, Settings,
  Lightbulb, MessageSquare, Target, Clock
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate skill categories
    gsap.fromTo(".skill-category",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const skillCategories = [
    {
      title: "Programming & Data Analysis",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "Python (Pandas, NumPy, Seaborn, Matplotlib)",
        "SQL (Advanced queries, joins, subqueries)",
        "MySQL",
        "Excel (VLOOKUP, Pivot Tables, Dashboarding)"
      ]
    },
    {
      title: "Data Visualization",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      skills: [
        "Power BI (DAX, Power Query, Custom Maps, KPI Cards)",
        "Tableau",
        "Excel Dashboards"
      ]
    },
    {
      title: "Data Engineering",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        "REST API Integration (CoinGecko, Open Charge Map)",
        "Real-Time Data Pipelines",
        "Data Extraction, Transformation & Loading (ETL)"
      ]
    },
    {
      title: "Analytics & Statistics",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      skills: [
        "Forecasting Techniques",
        "Clustering & Segmentation",
        "Price Elasticity Modeling",
        "KPI Definition & Performance Analysis",
        "Geospatial Analysis (Shapefiles, State-wise Aggregation)"
      ]
    }
  ];

  const businessSkills = [
    {
      title: "Documentation & Communication",
      icon: FileText,
      color: "from-indigo-500 to-purple-500",
      skills: [
        "BRD (Business Requirements Document)",
        "FRD (Functional Requirements Document)",
        "DRD (Data Requirements Document)",
        "RACI Matrix, UML Diagrams"
      ]
    },
    {
      title: "Stakeholder Engagement",
      icon: Users,
      color: "from-teal-500 to-blue-500",
      skills: [
        "Requirement Gathering & Analysis",
        "User Acceptance Testing (UAT)",
        "Cross-functional Collaboration",
        "Business Impact Communication"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      color: "from-gray-500 to-slate-500",
      skills: [
        "JIRA, Confluence, Notion",
        "Lucidchart, Figma",
        "Microsoft Office Suite (Excel, PowerPoint, Word)",
        "Agile / Scrum Framework"
      ]
    },
    {
      title: "Soft Skills",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      skills: [
        "Business Communication",
        "Problem Solving & Critical Thinking",
        "Data Storytelling",
        "Stakeholder Management",
        "Attention to Detail",
        "Time Management & Self-Discipline"
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-muted/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Technical & Business Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for data-driven decision making
          </p>
        </motion.div>

        {/* DNA Spiral Visualization */}
        <div className="mb-20">
          <DNASpiral />
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            🔧 Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="skill-category"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-300">
                  <CardHeader className={`bg-gradient-to-r ${category.color} text-white`}>
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-6 h-6" />
                      <CardTitle className="text-lg font-bold">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-2 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm font-medium">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Skills */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">
            🧠 Business Analysis Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessSkills.map((category, index) => (
              <motion.div
                key={index}
                className="skill-category"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-300">
                  <CardHeader className={`bg-gradient-to-r ${category.color} text-white`}>
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-6 h-6" />
                      <CardTitle className="text-lg font-bold">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-2 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm font-medium">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}