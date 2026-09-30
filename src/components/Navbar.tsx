import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/borewellsData';
import { 
  Phone, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  FileText, 
  Droplets, 
  Calculator, 
  Award,
  Globe
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  onOpenResume: () => void;
  onOpenEstimate: () => void;
  onOpenGooglePublish: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenResume,
  onOpenEstimate,
  onOpenGooglePublish,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Projects & Fleet', href: '#projects' },
    { label: 'Pricing Per Foot', href: '#pricing' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      {/* Top micro banner for urgent dispatch, BNI badge & Google Live status */}
      <div className="bg-cyan-800 dark:bg-cyan-950 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-semibold text-cyan-200">
              <Award className="w-3.5 h-3.5" /> BNI Verified Member
            </span>
            <span className="hidden sm:inline text-neutral-400">|</span>
            <button
              onClick={onOpenGooglePublish}
              className="inline-flex items-center gap-1.5 font-medium text-emerald-200 hover:text-white transition-colors bg-emerald-500/20 px-2.5 py-0.5 rounded border border-emerald-400/30"
              title="Click to view enrborewells.com Domain Setup & Google Search Indexing details"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <Globe className="w-3 h-3 text-emerald-300" />
              <span>enrborewells.com • Google Search Ready</span>
            </button>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-cyan-200">Proprietor: <strong className="text-white font-semibold">Emme Naresh</strong></span>
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1 hover:text-cyan-200 transition-colors bg-white/10 px-2 py-0.5 rounded"
            >
              <Phone className="w-3 h-3 text-cyan-300" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-600 via-sky-500 to-blue-700 flex items-center justify-center text-white shadow-md shadow-cyan-600/20 group-hover:scale-105 transition-transform">
              <Droplets className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl tracking-tight text-neutral-900 dark:text-white leading-tight font-display">
                Sri Venkateshwara
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-400">
                <span>ENR Borewells</span>
                <span className="inline-block w-1 h-1 rounded-full bg-cyan-500"></span>
                <span className="font-mono text-[11px] text-cyan-700 dark:text-cyan-300">enrborewells.com</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Google Publish status, Dark mode, PDF Resume, Cost Estimate CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Google Published & SEO Hub */}
            <button
              onClick={onOpenGooglePublish}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 transition-colors shadow-xs"
              title="enrborewells.com domain forwarding, Google Search Console indexing and Google Maps sync"
            >
              <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>enrborewells.com</span>
            </button>

            {/* Dark mode switch */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-neutral-700" />}
            </button>

            {/* Download Resume / Credentials PDF button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-neutral-300 dark:border-neutral-700 hover:border-cyan-500 dark:hover:border-cyan-500 text-neutral-700 dark:text-neutral-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors bg-white dark:bg-neutral-800 shadow-xs"
              title="Download Emme Naresh Profile & Company Credentials PDF"
            >
              <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Resume / Profile</span>
            </button>

            {/* Quick Estimate Button */}
            <button
              onClick={onOpenEstimate}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm hover:shadow-cyan-600/30 transition-all active:scale-95"
            >
              <Calculator className="w-4 h-4" />
              <span>Get Estimate</span>
            </button>
          </div>

          {/* Mobile menu and toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenGooglePublish}
              className="p-1.5 rounded-lg border border-cyan-500/40 text-cyan-700 dark:text-cyan-300 text-xs font-semibold flex items-center gap-1 bg-cyan-500/10"
              title="enrborewells.net Domain & Google Setup"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-600" />
              <span>Domain</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-neutral-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 pt-2 pb-6 space-y-3">
          <div className="py-2 border-b border-neutral-100 dark:border-neutral-800">
            <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Navigation</p>
            <div className="mt-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGooglePublish();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-cyan-500/40 bg-cyan-500/10 text-sm font-semibold text-cyan-800 dark:text-cyan-300"
            >
              <Globe className="w-4 h-4 text-cyan-600" />
              enrborewells.com &amp; Google SEO Center
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-sm font-semibold text-neutral-800 dark:text-neutral-200"
            >
              <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              Download Profile &amp; Resume (PDF)
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimate();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-600 text-white text-sm font-bold"
            >
              <Calculator className="w-4 h-4" />
              Calculate Borewell Cost
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-bold"
            >
              <Phone className="w-4 h-4" />
              Call Now: {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
