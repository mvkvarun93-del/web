import React from 'react';
import { RESUME_PROFILE, COMPANY_INFO } from '../data/borewellsData';
import { 
  X, 
  Download, 
  Printer, 
  Award, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Briefcase, 
  Wrench, 
  ExternalLink 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadDoc = () => {
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Emme Naresh - Sri Venkateshwara Borewells Profile & Resume</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.5; color: #1e293b; padding: 40px; max-width: 800px; margin: auto; }
    h1 { margin: 0; color: #0284c7; font-size: 26px; }
    h2 { font-size: 16px; color: #475569; margin: 4px 0 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
    h3 { font-size: 14px; text-transform: uppercase; color: #0369a1; margin-top: 20px; letter-spacing: 0.5px; }
    .contact { font-size: 13px; color: #64748b; margin-bottom: 20px; }
    .summary { font-size: 14px; background: #f8fafc; border-left: 4px solid #0284c7; padding: 12px; margin-bottom: 20px; }
    .item { margin-bottom: 14px; }
    .item-header { font-weight: bold; font-size: 14px; }
    .period { font-size: 12px; color: #64748b; font-style: italic; }
    ul { padding-left: 20px; margin: 6px 0; font-size: 13px; }
    li { margin-bottom: 4px; }
    .badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; margin-right: 6px; }
  </style>
</head>
<body>
  <h1>${RESUME_PROFILE.name}</h1>
  <div class="contact">
    <strong>${RESUME_PROFILE.title}</strong><br>
    ${COMPANY_INFO.name} | ${RESUME_PROFILE.address}<br>
    Phone: ${RESUME_PROFILE.phone} | Email: ${RESUME_PROFILE.email}
  </div>

  <div class="summary">
    <strong>Executive Summary:</strong><br>
    ${RESUME_PROFILE.summary}
  </div>

  <h3>Professional Affiliations & Ethical Certifications</h3>
  <div>
    ${RESUME_PROFILE.memberships.map((m) => `<span class="badge">✓ ${m}</span>`).join('')}
  </div>

  <h3>Core Technical Competencies</h3>
  <ul>
    ${RESUME_PROFILE.expertise.map((e) => `<li>${e}</li>`).join('')}
  </ul>

  <h3>Professional Leadership & Career History</h3>
  ${RESUME_PROFILE.careerHistory.map((c) => `
    <div class="item">
      <div class="item-header">${c.role} — <em>${c.org}</em></div>
      <div class="period">${c.period}</div>
      <ul>
        ${c.achievements.map((a) => `<li>${a}</li>`).join('')}
      </ul>
    </div>
  `).join('')}

  <h3>Machinery Fleet & Instrumentation</h3>
  <ul>
    ${RESUME_PROFILE.machineryFleet.map((m) => `<li>${m}</li>`).join('')}
  </ul>

  <hr style="margin-top: 30px; border: 0; border-top: 1px solid #e2e8f0;">
  <p style="font-size: 11px; color: #94a3b8; text-align: center;">
    Sri Venkateshwara Borewells & Motors — Saraswathinagar Colony, L.B. Nagar, Hyderabad — Phone: +91 9542326767
  </p>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Emme_Naresh_SV_Borewells_Resume.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-2xl text-neutral-900 dark:text-neutral-100">
        {/* Sticky Actions Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span className="font-bold text-sm text-neutral-900 dark:text-white font-display">
              Professional Resume &amp; Business Profile
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              title="Print to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadDoc}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold shadow-xs transition-colors"
              title="Download Emme Naresh Profile Document"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="mt-6 space-y-6">
          {/* Header info */}
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white font-display">
              {RESUME_PROFILE.name}
            </h2>
            <div className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">
              {RESUME_PROFILE.title}
            </div>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-neutral-600 dark:text-neutral-400 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                {RESUME_PROFILE.address}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                {RESUME_PROFILE.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                {RESUME_PROFILE.email}
              </span>
            </div>
          </div>

          {/* Professional Memberships pills */}
          <div className="p-3.5 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 space-y-1.5">
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-300">
              Verified Memberships &amp; Ethics Standards:
            </div>
            <div className="flex flex-wrap gap-2">
              {RESUME_PROFILE.memberships.map((m, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Executive Summary
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {RESUME_PROFILE.summary}
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Technical Competencies &amp; Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {RESUME_PROFILE.expertise.map((exp, idx) => (
                <div key={idx} className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{exp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career History */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Professional Experience
            </h3>
            <div className="space-y-4">
              {RESUME_PROFILE.careerHistory.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-800 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <div className="text-sm font-bold text-neutral-900 dark:text-white">
                        {item.role}
                      </div>
                      <div className="text-xs text-cyan-700 dark:text-cyan-400 font-medium">
                        {item.org}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                      {item.period}
                    </span>
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                        <span className="text-cyan-500 font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Machinery Fleet */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Machinery &amp; Equipment Fleet
            </h3>
            <div className="flex flex-wrap gap-2">
              {RESUME_PROFILE.machineryFleet.map((fleet, fIdx) => (
                <span
                  key={fIdx}
                  className="px-3 py-1 rounded-lg text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  🚜 {fleet}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-neutral-500 dark:text-neutral-400">
            Official Profile Document • Sri Venkateshwara Borewells &amp; Motors
          </div>
          <button
            onClick={handleDownloadDoc}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};
