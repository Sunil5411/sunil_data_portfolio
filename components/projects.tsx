"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, Download, FileText } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate project cards
    gsap.fromTo(".project-card",
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
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

  const projects = [
    {
      title: "EV Charging Station Utilization Dashboard",
      emoji: "🚗⚡",
      description: "A complete data analytics solution to analyze EV station performance, optimize utilization, and support strategic infrastructure planning using real-time data pipelines and interactive dashboards.",
      techStack: ["Python", "MySQL", "Power BI", "Open Charge Map API"],
      highlights: [
        "Processed 2,000+ EV charging sessions",
        "Identified 93% average utilization rate",
        "Automated full data pipeline",
        "Delivered actionable insights for optimization"
      ],
      kpis: [
        "Average Utilization Rate (%)",
        "Peak-Hour Load Index",
        "Station Downtime Frequency",
        "Regional Demand Clustering",
        "Underperforming Station Score"
      ],
      github: "https://github.com/Sunil5411/EV-Charging-Station-Utilization",
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "Retail Sales Optimization via Price Elasticity",
      emoji: "💸",
      description: "Boost revenue with smart pricing! This project analyzes price elasticity to optimize retail sales, enhance margins, and drive strategic discounting using data science and visualization.",
      techStack: ["Python", "Excel", "Power BI", "Statistical Modeling"],
      highlights: [
        "Performed price elasticity analysis (ε > 1.5)",
        "Forecasted 22% increase in revenue",
        "Created interactive dashboards",
        "Improved campaign ROI by 18%"
      ],
      kpis: [
        "Elasticity Score per SKU",
        "Revenue Lift Index",
        "Optimal Discount Threshold",
        "Profit Margin Stability Rate",
        "Price Sensitivity Clusters"
      ],
      github: "https://github.com/Sunil5411/Retail-Sales-Optimization-via-Price-Elasticity",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Real-Time Social Media Sentiment Tracker",
      emoji: "🧠💬",
      description: "Leverage Twitter data to understand real-time public sentiment on trending tech skills across India. Built with NLP, Python, and Power BI to drive data-backed digital engagement.",
      techStack: ["Python", "Twitter API", "TextBlob", "MySQL", "Power BI"],
      highlights: [
        "Streamed 12,000+ tweets in real time",
        "Applied NLP sentiment analysis",
        "Built interactive Power BI dashboards",
        "Achieved 60% reduction in manual monitoring"
      ],
      kpis: [
        "Positive Sentiment Share (%)",
        "City-wise Sentiment Index",
        "Sentiment Volatility Score",
        "Tech Skill Mention Frequency",
        "Engagement Influence Score"
      ],
      github: "https://github.com/Sunil5411/Real-Time-Social-Media-Sentiment-Tracker-on-Tech-Skills-in-India",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Cryptocurrency Market Intelligence Dashboard",
      emoji: "₿📊",
      description: "Track real-time cryptocurrency trends, volatility, dominance, and top movers using Python, MySQL, and Power BI. This dashboard gives crypto traders and investors a live view of critical metrics.",
      techStack: ["Python", "MySQL", "Power BI", "CoinGecko API"],
      highlights: [
        "Real-time price and market cap for top 20 coins",
        "24H trading volume for liquidity tracking",
        "Volatility index over the last 24 hours",
        "Interactive filters by coin, rank, and category"
      ],
      kpis: [
        "Real-Time Price & Market Cap",
        "24H Trading Volume",
        "Price Volatility Index (24H)",
        "Market Dominance by Coin",
        "Top Gainers & Losers (24H)"
      ],
      github: "https://github.com/Sunil5411/Cryptocurrency-Market-Intelligence-Dashboard",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "Farm Input Price Volatility Analysis & Forecasting",
      emoji: "🌾📉",
      description: "Forecasting fertilizer, diesel, and seed price swings across Indian states using time-series modeling (ARIMA/Prophet) to predict input cost shocks that affect farmer profitability.",
      techStack: ["Python", "Prophet", "ARIMA", "MySQL", "Power BI"],
      highlights: [
        "Forecasted prices across 10+ Indian states with 80% accuracy",
        "Built seasonal input cost trend dashboard",
        "Conducted time-series analysis with anomaly detection",
        "Automated entire pipeline for weekly updates"
      ],
      kpis: [
        "Input Price Volatility Index (IPVI)",
        "Forecast Accuracy Score",
        "Early Price Spike Alert Lead Time",
        "State-wise Seasonal Price Deviation %",
        "Savings Potential from Forecast Adoption"
      ],
      github: "https://github.com/Sunil5411/Farm-Input-Price-Volatility-Analysis-Forecasting",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "Human Longevity Index",
      emoji: "🌍💊",
      description: "API-powered global index ranking countries by human longevity factors — real-time health, sanitation, and inequality insights from World Bank data with predictive modeling and risk assessment.",
      techStack: ["Python", "World Bank API", "Plotly", "Streamlit", "Machine Learning"],
      highlights: [
        "Integrated World Bank API for 150+ countries' health data",
        "Built composite 'Longevity Score' ranking formula",
        "Applied regression/correlation analysis of longevity factors",
        "Created choropleth maps and regional trend analysis",
        "Automated annual data refresh with risk flagging system"
      ],
      kpis: [
        "Longevity Impact Score (Composite Ranking)",
        "Top 5 Positive Predictors of Long Life",
        "Health vs Wealth Index",
        "Policy Risk Index (Obesity + Pollution + Spend Gap)",
        "Longevity Delta (Life Expectancy vs Regional Avg)"
      ],
      github: "https://github.com/Sunil5411/Human-Longevity-Index",
      gradient: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Real-World Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming data into actionable insights across diverse industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <CardHeader className={`bg-gradient-to-r ${project.gradient} text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-3xl">{project.emoji}</span>
                      <CardTitle className="text-xl font-bold leading-tight">
                        {project.title}
                      </CardTitle>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">🛠️ Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">📌 Project Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* KPIs */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">📈 Top 5 Unique KPIs</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.kpis.map((kpi, kpiIndex) => (
                        <div key={kpiIndex} className="flex items-center space-x-2 text-sm p-2 bg-muted/50 rounded">
                          <span className="font-medium text-primary">{kpiIndex + 1}.</span>
                          <span>{kpi}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t">
                    <Button size="sm" variant="default" className="flex-1 min-w-0">
                      <Eye className="w-4 h-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => window.open(project.github, '_blank')}
                      className="flex-1 min-w-0"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      GitHub
                    </Button>
                    <Button size="sm" variant="outline">
                      <FileText className="w-4 h-4 mr-1" />
                      PPT
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}