import React, { useState } from 'react';
import { COMPLETED_PROJECTS, ProjectItem, COMPANY_INFO } from '../data/borewellsData';
import { 
  Droplet, 
  MapPin, 
  Layers, 
  Clock, 
  Wrench, 
  CheckCircle2, 
  ChevronRight, 
  X, 
  Maximize2, 
  Filter,
  ShieldCheck,
  Quote
} from 'lucide-react';

export const ProjectsPortfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'agricultural' | 'maintenance'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? COMPLETED_PROJECTS
    : COMPLETED_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300">
              Project Portfolio &amp; Field Records
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white font-display tracking-tight">
              Recent Drilling Projects &amp; Water Strikes
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
              Explore actual field records from 2,850+ successfully commissioned borewells across Greater Hyderabad.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'residential', label: 'Residential' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'agricultural', label: 'Agricultural' },
              { id: 'maintenance', label: 'Flushing & Revival' },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeFilter === f.id
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800/80 p-5 hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    {project.completionDate}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>

                {/* Key Spec metrics banner */}
                <div className="grid grid-cols-2 gap-2 mt-4 p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-xs">
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Depth Drilled</div>
                    <div className="font-bold text-neutral-900 dark:text-white font-mono text-sm">
                      {project.depth} FT
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400 uppercase tracking-wider">Bore Diameter</div>
                    <div className="font-bold text-neutral-900 dark:text-white font-mono text-sm">
                      {project.diameter}
                    </div>
                  </div>
                </div>

                {/* Water yield strike badge */}
                <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center gap-2">
                  <Droplet className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 animate-pulse" />
                  <div className="text-xs">
                    <span className="text-neutral-500 dark:text-neutral-400 text-[10px] block">Yield Strike:</span>
                    <strong className="text-emerald-800 dark:text-emerald-300 font-bold">{project.waterYield}</strong>
                  </div>
                </div>

                <p className="mt-3 text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between text-xs text-cyan-700 dark:text-cyan-400 font-bold">
                <span>View Full Telemetry &amp; Review</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Machinery Fleet Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-neutral-900 text-white border border-neutral-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Rig Fleet &amp; Capabilities
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display mt-0.5">
                Our Advanced Hydraulic Sensor Rig Fleet
              </h3>
            </div>
            <div className="text-xs text-neutral-400 font-mono">
              6 Heavy Drilling Rigs Deployed in Hyderabad
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/60 space-y-2">
              <div className="text-cyan-400 font-bold text-sm font-display">
                Heavy Crawler Sensor Rig
              </div>
              <p className="text-xs text-neutral-300">
                High-torque rotation for 6.5&quot; deep holes through tough blue Deccan granite up to 1,500 ft.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/60 space-y-2">
              <div className="text-cyan-400 font-bold text-sm font-display">
                Compact Urban Rig
              </div>
              <p className="text-xs text-neutral-300">
                Custom low-clearance chassis engineered for narrow lanes, 4-ft plot setbacks, and zero vibration.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/60 space-y-2">
              <div className="text-cyan-400 font-bold text-sm font-display">
                1200 PSI Air Compressor Unit
              </div>
              <p className="text-xs text-neutral-300">
                High-volume cyclonic compressor for deep cleaning, desilting, and crystal clear water discharge.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/60 space-y-2">
              <div className="text-cyan-400 font-bold text-sm font-display">
                Digital Resistivity Scanner
              </div>
              <p className="text-xs text-neutral-300">
                Dual-frequency electrical survey meter for aquifer point pinpointing prior to drilling.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-2xl text-neutral-900 dark:text-neutral-100">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300">
                    {selectedProject.category} Case Study
                  </span>
                  <span className="text-xs text-neutral-400">{selectedProject.completionDate}</span>
                </div>
                <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>{selectedProject.location}</span>
                </div>
              </div>

              {/* Technical Telemetry Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 font-mono text-xs">
                <div>
                  <div className="text-neutral-400 text-[10px] uppercase">Final Depth</div>
                  <div className="text-sm font-bold text-neutral-900 dark:text-white">
                    {selectedProject.depth} Feet
                  </div>
                </div>
                <div>
                  <div className="text-neutral-400 text-[10px] uppercase">Diameter</div>
                  <div className="text-sm font-bold text-neutral-900 dark:text-white">
                    {selectedProject.diameter}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-400 text-[10px] uppercase">Drill Duration</div>
                  <div className="text-sm font-bold text-neutral-900 dark:text-white">
                    {selectedProject.duration}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-400 text-[10px] uppercase">Casing Placed</div>
                  <div className="text-sm font-bold text-neutral-900 dark:text-white truncate">
                    {selectedProject.casingInstalled}
                  </div>
                </div>
              </div>

              {/* Water Yield Callout */}
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center gap-3">
                <Droplet className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Verified Water Yield Output:</div>
                  <div className="text-lg font-bold text-emerald-800 dark:text-emerald-300">
                    {selectedProject.waterYield}
                  </div>
                </div>
              </div>

              {/* Project narrative */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                  Site Description &amp; Strata Analysis
                </h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Rig used */}
              <div className="text-xs p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-800">
                <span className="font-semibold text-neutral-900 dark:text-white">Rig Deployed: </span>
                <span className="text-neutral-600 dark:text-neutral-400">{selectedProject.rigType}</span>
              </div>

              {/* Testimonial if present */}
              {selectedProject.testimonial && (
                <div className="p-4 rounded-xl bg-cyan-50/60 dark:bg-neutral-800/60 border border-cyan-200 dark:border-cyan-800 space-y-2">
                  <div className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase">
                    <Quote className="w-3.5 h-3.5" /> Client Testimonial
                  </div>
                  <p className="text-xs sm:text-sm italic text-neutral-700 dark:text-neutral-300">
                    &ldquo;{selectedProject.testimonial.quote}&rdquo;
                  </p>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white pt-1">
                    {selectedProject.testimonial.author}
                    <span className="text-neutral-500 font-normal"> — {selectedProject.testimonial.designation}</span>
                  </div>
                </div>
              )}

              {/* Call CTA */}
              <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200"
                >
                  Close
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-4 py-2 text-xs font-bold rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white transition-colors"
                >
                  Ask Naresh about this Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
