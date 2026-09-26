import React from 'react';
import { RESUME_PROFILE, COMPANY_INFO } from '../data/borewellsData';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Download, 
  Briefcase, 
  Wrench, 
  MapPin, 
  Star,
  Compass
} from 'lucide-react';

interface CredentialsProps {
  onOpenResume: () => void;
}

export const CredentialsSection: React.FC<CredentialsProps> = ({ onOpenResume }) => {
  return (
    <section id="credentials" className="py-16 sm:py-24 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Background, Experience & BNI Trust */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300">
              <Award className="w-3.5 h-3.5" /> Professional Leadership &amp; Ethics
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white font-display tracking-tight leading-tight">
              15+ Years of Groundwater Expertise Led by Emme Naresh
            </h2>

            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Drilling in Hyderabad requires an intimate understanding of the Deccan Plateau&apos;s hard blue granite, fractured basalt, and deep aquifer channels. As an active <strong>BNI Member</strong>, Emme Naresh upholds the highest standards of transparent per-foot billing, certified casing depth, and dependable water yield.
            </p>

            {/* Credential Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/80 dark:border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm font-display">
                  <ShieldCheck className="w-4 h-4" /> BNI Verified Member
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Committed to strict ethical business conduct, verified customer references, and zero surprise add-on costs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/80 dark:border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm font-display">
                  <Compass className="w-4 h-4" /> 2,850+ Borewells Commissioned
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Extensive field knowledge spanning L.B. Nagar, Uppal, Hayathnagar, Gachibowli, and all Rangareddy zones.
                </p>
              </div>
            </div>

            {/* Core Competencies List */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Core Engineering Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  'Hydraulic sensor depth calibration',
                  'Hard rock percussive hammering',
                  'Anti-collapse casing installation',
                  'Submersible head & stage matching',
                  '1200 PSI air flushing & desilting',
                  'Geological rock strata diagnosis',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume / Profile CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <FileText className="w-4 h-4 text-cyan-500 dark:text-cyan-600" />
                <span>Download Resume &amp; Profile (PDF)</span>
              </button>

              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Includes machinery fleet specs &amp; certifications
              </span>
            </div>
          </div>

          {/* Right Column: Visual Credentials Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 text-white p-7 border border-neutral-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-600/30 border border-cyan-500/40 flex items-center justify-center font-bold text-cyan-400 font-display text-xl">
                    EN
                  </div>
                  <div>
                    <h3 className="font-bold text-base font-display">Emme Naresh</h3>
                    <div className="text-xs text-cyan-400">Proprietor &amp; Groundwater Consultant</div>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
                  BNI Verified
                </div>
              </div>

              {/* Quick stats grid */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-neutral-800/60 border border-neutral-700/50">
                  <div className="text-2xl font-extrabold text-cyan-400 font-display">15+</div>
                  <div className="text-[11px] text-neutral-400">Years Experience</div>
                </div>
                <div className="p-3 rounded-xl bg-neutral-800/60 border border-neutral-700/50">
                  <div className="text-2xl font-extrabold text-cyan-400 font-display">2,850+</div>
                  <div className="text-[11px] text-neutral-400">Wells Executed</div>
                </div>
              </div>

              {/* Machinery list snippet */}
              <div className="space-y-2 text-xs">
                <div className="text-neutral-400 font-mono text-[11px] uppercase">Fleet on Hyderabad Roads:</div>
                <div className="space-y-1.5 font-mono text-[11px] text-neutral-300">
                  <div className="p-2 rounded bg-neutral-800/40 flex items-center justify-between">
                    <span>• 6.5&quot; Tracked Sensor Hydraulic Rig</span>
                    <span className="text-emerald-400">Ready</span>
                  </div>
                  <div className="p-2 rounded bg-neutral-800/40 flex items-center justify-between">
                    <span>• 4.5&quot; Compact Urban Alley Rig</span>
                    <span className="text-emerald-400">Ready</span>
                  </div>
                  <div className="p-2 rounded bg-neutral-800/40 flex items-center justify-between">
                    <span>• 1200 PSI Pressure Air Compressor</span>
                    <span className="text-emerald-400">Ready</span>
                  </div>
                </div>
              </div>

              {/* Direct call box */}
              <div className="pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Connect with Naresh: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
