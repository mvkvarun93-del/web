/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { PricingCalculator } from './components/PricingCalculator';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { SocialFeedFooter } from './components/SocialFeedFooter';
import { ResumeModal } from './components/ResumeModal';
import { GooglePublishModal } from './components/GooglePublishModal';

export default function App() {
  // Dark mode state with persistence
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sv_borewells_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isGooglePublishModalOpen, setIsGooglePublishModalOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('6.5" Dia Drilling');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('sv_borewells_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('sv_borewells_theme', 'light');
    }
  }, [darkMode]);

  const handleOpenEstimate = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      {/* Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenEstimate={handleOpenEstimate}
        onOpenGooglePublish={() => setIsGooglePublishModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="pb-16 sm:pb-0">
        {/* 1. Hero Section */}
        <Hero
          onOpenEstimate={handleOpenEstimate}
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenGooglePublish={() => setIsGooglePublishModalOpen(true)}
        />

        {/* 2. Specialized Services */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenEstimate={handleOpenEstimate}
        />

        {/* 3. Completed Projects & Machine Fleet Showcase */}
        <ProjectsPortfolio />

        {/* 4. Transparent Pricing Structure & Cost Calculator */}
        <PricingCalculator
          onFillQuoteToForm={(quote) => {
            handleSelectService(`${quote.diameter}" Dia Drilling`);
          }}
        />

        {/* 5. Emme Naresh Professional Experience & BNI Credentials */}
        <CredentialsSection
          onOpenResume={() => setIsResumeModalOpen(true)}
        />

        {/* 6. Lead Capture & Site Inspection Contact Form */}
        <ContactSection
          preselectedService={preselectedService}
        />
      </main>

      {/* 7. Live Social Media Feed & Business Footer */}
      <SocialFeedFooter
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenEstimate={handleOpenEstimate}
        onOpenGooglePublish={() => setIsGooglePublishModalOpen(true)}
      />

      {/* Downloadable PDF Resume / Profile Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Google Publication & Search Indexing Center Modal */}
      <GooglePublishModal
        isOpen={isGooglePublishModalOpen}
        onClose={() => setIsGooglePublishModalOpen(false)}
      />
    </div>
  );
}
