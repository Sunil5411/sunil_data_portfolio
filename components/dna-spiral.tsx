"use client";

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Play, Pause } from 'lucide-react';

export default function DNASpiral() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const animationRef = useRef<number>();

  const skillsData = [
    // Technical Skills
    { name: 'Python', category: 'technical', level: 90, github: 'https://github.com/Sunil5411?tab=repositories&q=python' },
    { name: 'SQL', category: 'technical', level: 85, github: 'https://github.com/Sunil5411?tab=repositories&q=sql' },
    { name: 'Power BI', category: 'technical', level: 88, github: 'https://github.com/Sunil5411?tab=repositories&q=powerbi' },
    { name: 'Excel', category: 'technical', level: 82, github: 'https://github.com/Sunil5411?tab=repositories&q=excel' },
    { name: 'MySQL', category: 'technical', level: 80, github: 'https://github.com/Sunil5411?tab=repositories&q=mysql' },
    { name: 'Pandas', category: 'technical', level: 85, github: 'https://github.com/Sunil5411?tab=repositories&q=pandas' },
    { name: 'NumPy', category: 'technical', level: 78, github: 'https://github.com/Sunil5411?tab=repositories&q=numpy' },
    { name: 'Matplotlib', category: 'technical', level: 75, github: 'https://github.com/Sunil5411?tab=repositories&q=matplotlib' },
    
    // Business Skills
    { name: 'Data Storytelling', category: 'business', level: 90, github: 'https://github.com/Sunil5411?tab=repositories&q=dashboard' },
    { name: 'Stakeholder Management', category: 'business', level: 85, github: 'https://github.com/Sunil5411' },
    { name: 'Requirements Analysis', category: 'business', level: 82, github: 'https://github.com/Sunil5411' },
    { name: 'Business Communication', category: 'business', level: 88, github: 'https://github.com/Sunil5411' },
    { name: 'Problem Solving', category: 'business', level: 92, github: 'https://github.com/Sunil5411' },
    
    // Tools & Platforms
    { name: 'JIRA', category: 'tools', level: 70, github: 'https://github.com/Sunil5411' },
    { name: 'Confluence', category: 'tools', level: 68, github: 'https://github.com/Sunil5411' },
    { name: 'Figma', category: 'tools', level: 65, github: 'https://github.com/Sunil5411' },
    { name: 'Git', category: 'tools', level: 75, github: 'https://github.com/Sunil5411' },
    
    // Soft Skills
    { name: 'Critical Thinking', category: 'soft', level: 90, github: 'https://github.com/Sunil5411' },
    { name: 'Adaptability', category: 'soft', level: 88, github: 'https://github.com/Sunil5411' },
    { name: 'Time Management', category: 'soft', level: 85, github: 'https://github.com/Sunil5411' },
    { name: 'Attention to Detail', category: 'soft', level: 87, github: 'https://github.com/Sunil5411' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills', color: '#3b82f6' },
    { id: 'technical', name: 'Technical', color: '#10b981' },
    { id: 'business', name: 'Business', color: '#8b5cf6' },
    { id: 'tools', name: 'Tools', color: '#f59e0b' },
    { id: 'soft', name: 'Soft Skills', color: '#ef4444' },
  ];

  const filteredSkills = skillsData.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 600;
    const centerX = width / 2;
    const centerY = height / 2;

    svg.selectAll("*").remove();

    // Create spiral path
    const spiralData = [];
    const numPoints = filteredSkills.length;
    const maxRadius = Math.min(width, height) / 3;
    
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * 4 * Math.PI; // 2 full rotations
      const radius = (i / numPoints) * maxRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      spiralData.push({
        x,
        y,
        angle,
        radius,
        skill: filteredSkills[i],
        index: i
      });
    }

    // Create tooltip
    const tooltip = d3.select("body").selectAll(".skill-tooltip").data([0]);
    const tooltipEnter = tooltip.enter().append("div")
      .attr("class", "skill-tooltip")
      .style("position", "absolute")
      .style("background", "rgba(0, 0, 0, 0.9)")
      .style("color", "white")
      .style("padding", "8px 12px")
      .style("border-radius", "6px")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .style("opacity", 0)
      .style("z-index", 1000);

    const tooltipDiv = tooltipEnter.merge(tooltip);

    // Draw spiral path
    const line = d3.line<any>()
      .x(d => d.x)
      .y(d => d.y)
      .curve(d3.curveCardinal);

    svg.append("path")
      .datum(spiralData)
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 2)
      .attr("opacity", 0.3);

    // Draw skill nodes
    const nodes = svg.selectAll(".skill-node")
      .data(spiralData)
      .enter()
      .append("g")
      .attr("class", "skill-node")
      .attr("transform", d => `translate(${d.x}, ${d.y})`);

    // Add circles for skills
    nodes.append("circle")
      .attr("r", d => 5 + (d.skill.level / 100) * 15)
      .attr("fill", d => {
        const category = categories.find(cat => cat.id === d.skill.category);
        return category ? category.color : '#3b82f6';
      })
      .attr("opacity", 0.8)
      .attr("stroke", "white")
      .attr("stroke-width", 2)
      .style("cursor", "pointer")
      .on("mouseover", function(event, d) {
        d3.select(this).transition().duration(200).attr("r", 25);
        tooltipDiv
          .style("opacity", 1)
          .html(`
            <strong>${d.skill.name}</strong><br/>
            Level: ${d.skill.level}%<br/>
            Category: ${d.skill.category}<br/>
            Click to view GitHub repos
          `)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 10) + "px");
      })
      .on("mouseout", function(event, d) {
        d3.select(this).transition().duration(200).attr("r", 5 + (d.skill.level / 100) * 15);
        tooltipDiv.style("opacity", 0);
      })
      .on("click", function(event, d) {
        window.open(d.skill.github, '_blank');
      });

    // Add skill labels
    nodes.append("text")
      .text(d => d.skill.name)
      .attr("text-anchor", "middle")
      .attr("dy", d => 5 + (d.skill.level / 100) * 15 + 15)
      .attr("font-size", "10px")
      .attr("fill", "currentColor")
      .style("pointer-events", "none");

    // Animation loop
    let rotation = 0;
    const animate = () => {
      if (isPlaying) {
        rotation += 0.5;
        svg.selectAll(".skill-node")
          .attr("transform", (d: any) => {
            const newAngle = d.angle + (rotation * Math.PI / 180);
            const x = centerX + d.radius * Math.cos(newAngle);
            const y = centerY + d.radius * Math.sin(newAngle);
            return `translate(${x}, ${y})`;
          });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      tooltipDiv.remove();
    };
  }, [filteredSkills, isPlaying]);

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          🧬 DNA of an Analyst
        </h3>
        <p className="text-muted-foreground mb-6">
          Interactive 3D spiral visualization of skills across four dimensions
        </p>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedCategory(category.id)}
              style={{
                backgroundColor: selectedCategory === category.id ? category.color : undefined,
                borderColor: category.color,
                color: selectedCategory === category.id ? 'white' : category.color
              }}
            >
              {category.name}
            </Badge>
          ))}
        </div>
      </motion.div>

      {/* SVG Container */}
      <div className="flex justify-center">
        <div className="bg-card rounded-lg border p-4 shadow-lg">
          <svg
            ref={svgRef}
            width="800"
            height="600"
            viewBox="0 0 800 600"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground mb-2">
          💡 Hover over nodes to see details • Click to view GitHub repositories
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.slice(1).map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <span className="text-sm">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}