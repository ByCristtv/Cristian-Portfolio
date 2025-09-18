import React from 'react'
import ThemeToggle from '../../components/ThemeToggle';
import { StarBackground } from '../../components/StarBackground';
import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectSection } from '@/components/ProjectSection';
import { Contact } from 'lucide-react';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* NavBar */}
      <NavBar />
      {/* Main Content */}
      <main>
        <Hero />
        <ProjectSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
        
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}
