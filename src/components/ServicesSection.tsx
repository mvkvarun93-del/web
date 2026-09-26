import React, { useState } from 'react';
import { SERVICES, ServiceItem, COMPANY_INFO } from '../data/borewellsData';
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Wrench,
  Gauge,
  Info
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
  onOpenEstimate: () => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onSelectService, onOpenEstimate }) => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-16 sm:py-24 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300">
            Precision Groundwater Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white font-display tracking-tight">
            Our Specialized Drilling &amp; Motor Services
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-300">
            Backed by heavy hydraulic sensor rig technology and local knowledge of soil and rock strata across Hyderabad and Rangareddy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/80 dark:border-neutral-800 p-6 sm:p-8 hover:border-cyan-500/60 dark:hover:border-cyan-500/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header row: Diameter badge & tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-600 text-white font-bold text-xs">
                    {service.diameter}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white font-display group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Ideal For box */}
                <div className="mt-4 p-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/80 space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                    Ideal For:
                  </div>
                  <div className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {service.idealFor}
                  </div>
                </div>

                {/* Technology and Rig spec */}
                <div className="mt-3 p-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800/80 space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                    Rig &amp; Technology:
                  </div>
                  <div className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {service.technology}
                  </div>
                </div>

                {/* Key feature bullets */}
                <div className="mt-5 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    What&apos;s Included:
                  </div>
                  <ul className="space-y-1.5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action buttons footer */}
              <div className="mt-8 pt-5 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Book Inquiry for this Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenEstimate}
                  className="px-3 py-1.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600 text-neutral-800 dark:text-neutral-200 text-xs font-semibold transition-colors"
                >
                  Estimate Cost
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Guarantee Bar */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-neutral-700">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> BNI Code of Ethics Guaranteed
            </div>
            <h4 className="text-lg sm:text-xl font-bold font-display">
              Unsure whether you need 4.5&quot; or 6.5&quot; drilling?
            </h4>
            <p className="text-sm text-neutral-300 max-w-xl">
              Talk directly with Proprietor Emme Naresh. He will review your plot dimensions, neighboring well depths, and water requirements free of charge.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hello%20Naresh%20garu,%20I%20need%20clarification%20on%204.5%20inch%20vs%206.5%20inch%20borewell%20for%20my%20property.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Advice</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
