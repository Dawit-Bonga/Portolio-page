"use client";

import { useState } from "react";
import Image from "next/image";

interface TimelineMilestone {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "education" | "career" | "project" | "achievement";
  image?: string;
  link?: string;
  tags?: string[];
}

const placeholderMilestones: TimelineMilestone[] = [
  {
    id: "1",
    date: "2024",
    title: "Portfolio Website Launch",
    description: "Built a modern, responsive portfolio website using Next.js, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and mobile-first design.",
    type: "project",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"]
  },
  {
    id: "2",
    date: "2023",
    title: "Frontend Developer",
    description: "Started journey as a frontend developer, focusing on creating clean, accessible web experiences with modern technologies.",
    type: "career",
    tags: ["React", "JavaScript", "CSS", "HTML"]
  },
  {
    id: "3",
    date: "2022",
    title: "Computer Science Degree",
    description: "Graduated with a Bachelor's degree in Computer Science, gaining strong foundation in programming, algorithms, and software engineering principles.",
    type: "education",
    tags: ["Computer Science", "Programming", "Algorithms", "Software Engineering"]
  },
  {
    id: "4",
    date: "2021",
    title: "First Web Project",
    description: "Created my first interactive web application, sparking passion for frontend development and user experience design.",
    type: "project",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"]
  },
  {
    id: "5",
    date: "2020",
    title: "Started Coding Journey",
    description: "Began learning programming fundamentals and discovered the world of web development through online courses and tutorials.",
    type: "education",
    tags: ["Programming", "Web Development", "Learning"]
  }
];

const getTypeColor = (type: TimelineMilestone["type"]) => {
  switch (type) {
    case "education":
      return "bg-blue-500";
    case "career":
      return "bg-green-500";
    case "project":
      return "bg-purple-500";
    case "achievement":
      return "bg-yellow-500";
    default:
      return "bg-gray-500";
  }
};

const getTypeIcon = (type: TimelineMilestone["type"]) => {
  switch (type) {
    case "education":
      return "🎓";
    case "career":
      return "💼";
    case "project":
      return "🚀";
    case "achievement":
      return "🏆";
    default:
      return "📅";
  }
};

export function TimelineScroller() {
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A timeline of my career, education, and key projects that shaped my path as a developer
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 rounded-full transform -translate-y-1/2"></div>
          
          {/* Timeline Items */}
          <div className="relative flex overflow-x-auto pb-8 space-x-8 snap-x snap-mandatory">
            {placeholderMilestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className="flex-shrink-0 w-80 snap-center"
                onMouseEnter={() => setExpandedMilestone(milestone.id)}
                onMouseLeave={() => setExpandedMilestone(null)}
              >
                {/* Timeline Node */}
                <div className="relative flex flex-col items-center">
                  <div className={`relative z-10 w-6 h-6 rounded-full ${getTypeColor(milestone.type)} shadow-lg flex items-center justify-center text-white text-xs font-bold`}>
                    <span className="text-sm">{getTypeIcon(milestone.type)}</span>
                  </div>
                  
                  {/* Milestone Card */}
                  <div className={`mt-4 w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
                    expandedMilestone === milestone.id 
                      ? 'transform -translate-y-2 shadow-2xl scale-105' 
                      : 'hover:shadow-xl hover:-translate-y-1'
                  }`}>
                    {/* Card Header */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor(milestone.type)}`}>
                          {milestone.type.charAt(0).toUpperCase() + milestone.type.slice(1)}
                        </span>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {milestone.date}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        {milestone.description}
                      </p>
                      
                      {/* Tags */}
                      {milestone.tags && (
                        <div className="flex flex-wrap gap-2">
                          {milestone.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Expanded Content */}
                    {expandedMilestone === milestone.id && (
                      <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="pt-4">
                          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                            Click to learn more about this milestone...
                          </p>
                          {milestone.link && (
                            <a
                              href={milestone.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center mt-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                            >
                              View Details
                              <span className="ml-1">→</span>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ← Scroll horizontally to explore the timeline →
          </p>
        </div>
      </div>
    </section>
  );
}
