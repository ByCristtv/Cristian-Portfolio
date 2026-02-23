'use client';
import { url } from 'inspector';
import { ArrowRight, ExternalLink, Github, Link } from 'lucide-react';
import React from 'react'

const projects = [
  {
    id: 1,
    title: "POS System for Motorepuestos Arias",
    description: "A point-of-sale system to manage sales, inventory, clients, invoicing, electronic invoicing and dashboard.",
    image: "/projects/pos.png",
    link: "/projects/project-one",
    tags: ["React", "JavaScript", "Tailwind CSS", "PostgreSQL", "Supabase", "API", "Tanstack", "Vite", "Zustand", "Vercel", "NodeJS"],
    demoUrl: "https://pos-motorepuestos.vercel.app/",
    repoUrl: "https://github.com/ByCristtv/React-POS"
  },
  {
    id: 2,
    title: "Nursing Home Management System",
    description: "A comprehensive system for managing appointments, residents with medical records, prescriptions.",
    image: "/projects/nursing.png",
    link: "/projects/project-one",
    tags: ["React", "Node.js", "Bootstrap", "Firebase", "FireStore"],
    demoUrl: "https://hogar-cariari.web.app/",
    repoUrl: "https://github.com/ByCristtv/NursingHome-Cariari/tree/main/hogar-cariari"
  },
  {
    id: 3,
    title: "PDF Reports Generator",
    description: "Mobile application that allows users to create and customize PDF reports with different templates, images, and text content, using React Native and Expo GO.",
    image: "/projects/Movi.jpeg",
    link: "/projects/pdf-reports",
    tags: ["React Native", "TypeScript", "Expo GO", "Localstorage", "Firebase Auth", "Firestore"],
    demoUrl: "https://pdf-reports.vercel.app/",
    repoUrl: "https://github.com/ByCristtv/PDF-Reports-Generator"
  },
  {
    id: 4,
    title: "Chat Application",
    description: "A real-time chat application built with React, Firebase and ZegoCloud.",
    image: "/projects/ChatApp.png",
    link: "/projects/chat-application",
    tags: ["React", "JavaScript", "Tailwind CSS", "NodeJS", "Vite", "Firebase", "ZegoCloud", "Context API", "Vercel"],
    demoUrl: "https://chat-app-zeta-swart.vercel.app/",
    repoUrl: "https://github.com/ByCristtv/Chat-App"
  },
  {
    id: 5,
    title: "My Professional Website",
    description: "A responsive professional website built with React and different animations.",
    image: "/projects/profile.png",
    link: "/projects/project-three",
    tags: ["React","JavaScript", "Tailwind CSS", "Vite", "Framer Motion", "Gsap", "Vercel"],
    demoUrl: "https://professional-website-rosy-theta.vercel.app/",
    repoUrl: "https://github.com/ByCristtv/Professional-Website"
  },
  {
    id: 6,
    title: "Fragrance Shop",
    description: "E-commerce website for a fragrance store with responsive design.",
    image: "/projects/Fragrance.png",
    link: "/projects/fragrance-store",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    demoUrl: "https://fragrance-shop-xi.vercel.app/",
    repoUrl: "https://github.com/ByCristtv/Fragrance-Shop"
  },
  
];
const openProject = (url: string) => {
  window.open(url, '_blank');
}

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          My<span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  onClick={() => openProject(project.demoUrl)}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ByCristtv"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
