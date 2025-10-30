"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  longDescription: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nba Betting Simulator",
    description: "Machine-learning powered NBA prop betting simulator with real-time stats and ROI tracking",
    image: "/nba_simulator.png",
    technologies: ["Python", "Streamlit", "scikit-learn", "NBA API", "Pandas", "Matplotlib", "Streamlit"],
    githubUrl: "https://github.com/Dawit-Bonga/NBA_betting_simulator.git",
    liveUrl: "https://ecommerce-demo.com",
    longDescription: "An interactive Python-based application that analyzes NBA player and team statistics to simulate prop bets, and track betting outcomes over time. Built to help users make data-driven wagering decisions with transparent performance metrics and visualizations.",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Admin dashboard for inventory management",
      "Responsive design for all devices"
    ]
  },
  {
    id: 2,
    title: "College Express",
    description: "A collaborative task management tool with real-time updates",
    image: "/website_image.png", // must be in /public
    technologies: ["Vite", "TypeScript", "PostgreSQL", "OpenAI API", "FastAPI"],
    githubUrl: "https://github.com/Dawit-Bonga/HackTheHood2025.git",
    liveUrl: "https://hack-the-hood2025.vercel.app",
    longDescription: "A web application that creates customized academic and extracurricular roadmaps for high school students—especially first-generation applicants—by taking their GPA, grade level, and interests and generating actionable steps, recommended activities, and scholarship suggestions. Built to empower students with accessible, clear guidance to navigate the college admissions process.",
    features: [
      "Interactive questionnaire to collect student background and goals",
      "AI-powered roadmap generation based on GPA, grade, and intended field",
      "Integrated scholarship database with search and filters",
      "School match feature that suggests potential colleges",
      "Dynamic and responsive UI for desktop and mobile"
    ]
  },
  {
    id: 3,
    title: "Mini Unix Shell",
    description: "A fully functional Unix-style shell built in C with job control and signal handling",
    image: "/next.svg",
    technologies: ["C", "POSIX", "Signals", "Processes", "Pipes"],
    githubUrl: "https://github.com/Dawit-Bonga/Mini-Shell.git",
    liveUrl: " ",
    longDescription: "A custom Unix-like shell implemented in C that supports foreground and background process management, built-in commands, and advanced operator handling using low-level system calls.",
    features:  [
    "Implements built-in commands: cd, pwd, exit, help, jobs, fg, bg, history, echo",
    "Supports foreground and background job control with SIGINT, SIGTSTP, and SIGCHLD handling",
    "Executes multi-process pipelines using fork(), execvp(), and pipe()",
    "Handles logical and sequential operators (&&, ||, ;)",
    "Tracks command history with dynamic memory management",
    "Prevents zombie and stopped processes through asynchronous process cleanup"
  ]
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            My Projects
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Click on any project to learn more about it.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-900 overflow-hidden"
            >
              {/* Show project image */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.id === 2}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-900 border border-gray-900 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-900 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Modal image */}
                <div className="relative h-64 w-full rounded-lg overflow-hidden mb-6">
                  <Image
                    src={selectedProject.image}
                    alt={`${selectedProject.title} screenshot`}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-lg text-gray-700 mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-gray-900 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-100 text-gray-900 border border-gray-900 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <span className="mr-2">🐙</span>
                    View Code
                  </a>
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
                  >
                    <span className="mr-2">🌐</span>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
