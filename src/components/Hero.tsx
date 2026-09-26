import React from 'react';
import { COMPANY_INFO } from '../data/borewellsData';
import { 
  Phone, 
  Calculator, 
  MessageSquare, 
  Award, 
  MapPin, 
  Wrench, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Activity,
  Layers,
  Sparkles,
  Droplet,
  Globe
} from 'lucide-react';

interface HeroProps {
  onOpenEstimate: () => void;
  onOpenResume: () => void;
  onOpenGooglePublish?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate, onOpenResume, onOpenGooglePublish }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-cyan-50/50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-950">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70d_1px,transparent_1px),linear-gradient(to_bottom,#0284c70d_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust pill banner */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100/80 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-800 text-cyan-900 dark:text-cyan-200 text-xs font-semibold">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Hydraulic Sensor Rigs on Standby across Hyderabad</span>
            <span className="hidden sm:inline text-cyan-400">•</span>
            <span className="hidden sm:inline font-normal text-cyan-800 dark:text-cyan-300">Same-Day Site Inspection</span>
          </div>

          {onOpenGooglePublish && (
            <button
              onClick={onOpenGooglePublish}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-semibold hover:bg-cyan-100 dark:hover:bg-cyan-900/60 transition-colors shadow-xs"
              title="enrborewells.net Domain Setup & Google Search Indexing"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>enrborewells.net • Domain &amp; Google Ready</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines, Value Prop, Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15] font-display">
              Fast, High-Yield <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 dark:from-cyan-400 dark:via-sky-300 dark:to-blue-400">
                Borewell Drilling
              </span>{' '}
              in Hyderabad
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
              Powered by high-capacity hydraulic sensor rigs. Specialized in{' '}
              <strong className="text-neutral-900 dark:text-white font-semibold">4.5&quot; &amp; 6.5&quot;</strong>{' '}
              diameter drilling for residential, commercial, and agricultural properties.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-base shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/40 transition-all active:scale-95"
              >
                <Phone className="w-5 h-5 text-cyan-100" />
                <span>Call Now: {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={onOpenEstimate}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-neutral-300 dark:border-neutral-700 hover:border-cyan-600 dark:hover:border-cyan-500 text-neutral-800 dark:text-neutral-200 hover:text-cyan-600 dark:hover:text-cyan-400 font-bold text-base bg-white dark:bg-neutral-900 shadow-sm transition-all active:scale-95"
              >
                <Calculator className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>Get Cost Estimate</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hello%20Naresh%20garu,%20I%20am%20looking%20for%20a%20borewell%20drilling%20quote%20in%20Hyderabad.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 text-sm font-semibold transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Quote</span>
              </a>
            </div>

            {/* Key Highlights / Trust Badges Grid */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
                  <span className="text-lg">🏆</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Proprietor</span>
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-white">Emme Naresh</div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400">15+ Yrs Industry Lead</div>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
                  <span className="text-lg">🤝</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">BNI Member</span>
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-white">Ethical Practice</div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Verified Quality Rating</div>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
                  <span className="text-lg">🚜</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Advanced Rigs</span>
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-white">Hydraulic Sensor</div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Hard-Rock Penetration</div>
              </div>

              <div className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
                  <span className="text-lg">📍</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">HQ Location</span>
                </div>
                <div className="text-sm font-bold text-neutral-900 dark:text-white">L.B. Nagar</div>
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Saraswathinagar Colony</div>
              </div>
            </div>

            {/* About Us Brief Box */}
            <div className="p-4 rounded-xl bg-cyan-950/5 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <strong className="text-neutral-900 dark:text-white font-semibold">About Us Brief:</strong> At Sri Venkateshwara Borewells &amp; Motors, we bring groundwater solutions directly to your property with precision and transparency. Backed by high-power hydraulic rig technology and local knowledge of soil and rock strata across Hyderabad, we help independent home builders, apartment complexes, commercial sites, and farmers access clean water efficiently.
            </div>
          </div>

          {/* Right Column: Visual Telemetry Card & Machine Spec Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-neutral-900 border border-neutral-800 text-white p-6 shadow-2xl overflow-hidden">
              {/* Top status bar */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 font-semibold">
                    Rig Telemetry Active
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  Strata: Deccan Granite
                </span>
              </div>

              {/* Subsurface strata visual preview */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-white font-semibold">Top Strata &amp; Soil Layer</div>
                      <div className="text-[10px] text-neutral-400">Red laterite &amp; weathered rock</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[11px] font-bold">
                    0 - 60 FT (Cased)
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-white font-semibold">Hard Blue Granite Strata</div>
                      <div className="text-[10px] text-neutral-400">Hydraulic sensor drill bit penetration</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[11px] font-bold">
                    60 - 450 FT
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-600/40 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Droplet className="w-4 h-4 text-emerald-400 animate-bounce" />
                    <div>
                      <div className="text-emerald-200 font-bold">Primary Aquifer Strike Zone</div>
                      <div className="text-[10px] text-emerald-400">High-yield perennial water fissure</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-300 text-[11px] font-bold">
                    450 - 850+ FT
                  </span>
                </div>
              </div>

              {/* Water yield strike gauge */}
              <div className="mt-5 pt-4 border-t border-neutral-800 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-neutral-800/60">
                  <div className="text-[11px] text-neutral-400">Average Water Yield</div>
                  <div className="text-lg font-bold text-white font-display flex items-baseline gap-1 mt-0.5">
                    <span>2.5&quot; - 4.5&quot;</span>
                    <span className="text-xs text-cyan-400 font-normal">Gushing</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-neutral-800/60">
                  <div className="text-[11px] text-neutral-400">Compressor Pressure</div>
                  <div className="text-lg font-bold text-white font-display flex items-baseline gap-1 mt-0.5">
                    <span>1,200</span>
                    <span className="text-xs text-cyan-400 font-normal">PSI Air</span>
                  </div>
                </div>
              </div>

              {/* Quick direct inquiry trigger */}
              <div className="mt-5 p-3 rounded-xl bg-gradient-to-r from-cyan-900/60 to-blue-900/60 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">Need advice on neighbor bore depths?</div>
                  <div className="text-[11px] text-cyan-200">Emme Naresh shares free ground strata advice</div>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold text-xs transition-colors"
                >
                  Direct Call
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Big numbers stats grid */}
        <div className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {COMPANY_INFO.stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-white font-display">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
