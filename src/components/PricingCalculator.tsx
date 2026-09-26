import React, { useState } from 'react';
import { 
  COMPANY_INFO, 
  PRICING_RATES, 
  CASING_RATES, 
  PUMP_PACKAGES,
  PricingRateRow 
} from '../data/borewellsData';
import { 
  Calculator, 
  CheckCircle2, 
  HelpCircle, 
  Phone, 
  MessageSquare, 
  Share2, 
  ArrowRight,
  Info,
  Layers,
  Wrench,
  Shield,
  FileCheck
} from 'lucide-react';

interface PricingProps {
  onFillQuoteToForm?: (data: { diameter: string; depth: number; totalCost: number }) => void;
}

export const PricingCalculator: React.FC<PricingProps> = ({ onFillQuoteToForm }) => {
  // Calculator state
  const [diameter, setDiameter] = useState<'4.5' | '6.5'>('4.5');
  const [depth, setDepth] = useState<number>(450);
  const [casingType, setCasingType] = useState<'pvc' | 'ms'>('pvc');
  const [casingLength, setCasingLength] = useState<number>(60);
  const [selectedPumpId, setSelectedPumpId] = useState<string>('pump_2_0');
  const [includeCapping, setIncludeCapping] = useState<boolean>(true);
  const [copiedQuote, setCopiedQuote] = useState<boolean>(false);

  // Determine drilling rate per foot based on depth and diameter
  const getRatePerFoot = (dia: '4.5' | '6.5', d: number): number => {
    if (dia === '4.5') {
      return d <= 300 ? 95 : 110;
    } else {
      return d <= 400 ? 125 : 145;
    }
  };

  const ratePerFoot = getRatePerFoot(diameter, depth);
  const drillingCost = depth * ratePerFoot;
  const casingRate = CASING_RATES[casingType].ratePerFoot;
  const casingCost = casingLength * casingRate;
  const cappingCharge = includeCapping ? 2500 : 0;
  const selectedPump = PUMP_PACKAGES.find((p) => p.id === selectedPumpId) || PUMP_PACKAGES[0];
  const pumpCost = selectedPump.price;
  const totalEstimate = drillingCost + casingCost + cappingCharge + pumpCost;

  // Depth quick buttons
  const depthPresets = [250, 450, 600, 800, 1000];

  const handleCopyQuote = () => {
    const text = `Sri Venkateshwara Borewells Estimate:
- Diameter: ${diameter}" Dia
- Depth: ${depth} Feet (@ ₹${ratePerFoot}/ft = ₹${drillingCost.toLocaleString('en-IN')})
- Casing: ${casingLength} ft ${CASING_RATES[casingType].name} (= ₹${casingCost.toLocaleString('en-IN')})
- Capping & Site Clearance: ₹${cappingCharge.toLocaleString('en-IN')}
- Pump: ${selectedPump.name} (= ₹${pumpCost.toLocaleString('en-IN')})
- Estimated Total: ₹${totalEstimate.toLocaleString('en-IN')}
Contact: Emme Naresh (+91 9542326767)`;

    navigator.clipboard.writeText(text);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  const waQuoteText = encodeURIComponent(
    `Hello Naresh garu, I calculated an estimate on your website:\n- Diameter: ${diameter}" Dia\n- Depth: ${depth} ft\n- Casing: ${casingLength} ft (${CASING_RATES[casingType].name})\n- Pump: ${selectedPump.name}\n- Estimated Total: ₹${totalEstimate.toLocaleString('en-IN')}\nPlease let me know your availability for a site inspection in Hyderabad.`
  );

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
            No Hidden Surcharges • 100% Upfront
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white font-display tracking-tight">
            Transparent Pricing Structure &amp; Cost Calculator
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-300">
            We believe in upfront, transparent pricing without hidden surprises. Borewell costs are calculated based on depth (per foot), casing pipe length, and soil type.
          </p>
        </div>

        {/* Interactive Cost Calculator & Itemized Invoice Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Controls Box (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                  Interactive Borewell Cost Estimator
                </h3>
              </div>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                Hyderabad Strata Rates
              </span>
            </div>

            {/* Step 1: Diameter Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                1. Select Borewell Diameter
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDiameter('4.5')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    diameter === '4.5'
                      ? 'border-cyan-600 bg-cyan-50/50 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-200 ring-2 ring-cyan-600/20'
                      : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-base sm:text-lg">4.5&quot; Dia</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200">
                      Standard
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Independent houses, villas &amp; compact plots.
                  </p>
                  <div className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 mt-2">
                    Base: ₹95 - ₹110 / ft
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setDiameter('6.5')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    diameter === '6.5'
                      ? 'border-cyan-600 bg-cyan-50/50 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-200 ring-2 ring-cyan-600/20'
                      : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-base sm:text-lg">6.5&quot; Dia</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                      High Discharge
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Apartments, commercial complexes &amp; farms.
                  </p>
                  <div className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 mt-2">
                    Base: ₹125 - ₹145 / ft
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Depth Slider & Presets */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                  2. Anticipated Drilling Depth (Feet)
                </label>
                <div className="flex items-center gap-1.5 font-mono">
                  <span className="text-2xl font-extrabold text-cyan-700 dark:text-cyan-400 font-display">
                    {depth}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-bold">FEET</span>
                </div>
              </div>

              <input
                type="range"
                min={100}
                max={1200}
                step={25}
                value={depth}
                onChange={(e) => setDepth(Number(e.target.value))}
                className="w-full h-2.5 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
              />

              {/* Quick Presets */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-neutral-400">Presets:</span>
                {depthPresets.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setDepth(p)}
                    className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
                      depth === p
                        ? 'bg-cyan-600 text-white font-bold'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                    }`}
                  >
                    {p} ft
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Casing Pipe Type & Length */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                  3. Casing Pipe (Topsoil Collapse Prevention)
                </label>
                <span className="text-xs text-neutral-500 font-mono">{casingLength} ft needed</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                    casingType === 'pvc'
                      ? 'border-cyan-600 bg-cyan-50/40 dark:bg-cyan-950/30'
                      : 'border-neutral-200 dark:border-neutral-800'
                  }`}
                >
                  <input
                    type="radio"
                    name="casingType"
                    checked={casingType === 'pvc'}
                    onChange={() => setCasingType('pvc')}
                    className="accent-cyan-600"
                  />
                  <div>
                    <div className="text-xs font-bold text-neutral-900 dark:text-white">
                      Class D Heavy PVC Casing
                    </div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      ₹{CASING_RATES.pvc.ratePerFoot}/ft (Standard residential)
                    </div>
                  </div>
                </label>

                <label
                  className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                    casingType === 'ms'
                      ? 'border-cyan-600 bg-cyan-50/40 dark:bg-cyan-950/30'
                      : 'border-neutral-200 dark:border-neutral-800'
                  }`}
                >
                  <input
                    type="radio"
                    name="casingType"
                    checked={casingType === 'ms'}
                    onChange={() => setCasingType('ms')}
                    className="accent-cyan-600"
                  />
                  <div>
                    <div className="text-xs font-bold text-neutral-900 dark:text-white">
                      Mild Steel (MS) Seamless Casing
                    </div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      ₹{CASING_RATES.ms.ratePerFoot}/ft (Heavy boulders)
                    </div>
                  </div>
                </label>
              </div>

              <div className="pt-1">
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                  <span>Casing Depth Slider (Soil zone):</span>
                  <span className="font-bold text-neutral-800 dark:text-neutral-200">{casingLength} Feet</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={120}
                  step={5}
                  value={casingLength}
                  onChange={(e) => setCasingLength(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />
              </div>
            </div>

            {/* Step 4: Submersible Motor Package */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                4. Submersible Motor &amp; Cable Setup (Optional)
              </label>
              <select
                value={selectedPumpId}
                onChange={(e) => setSelectedPumpId(e.target.value)}
                className="w-full p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm font-medium text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {PUMP_PACKAGES.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.name} — {pkg.price > 0 ? `₹${pkg.price.toLocaleString('en-IN')}` : 'Included in next phase'} ({pkg.suitableDepth})
                  </option>
                ))}
              </select>
            </div>

            {/* Capping toggle */}
            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                <input
                  type="checkbox"
                  checked={includeCapping}
                  onChange={(e) => setIncludeCapping(e.target.checked)}
                  className="rounded text-cyan-600 accent-cyan-600 w-4 h-4"
                />
                <span>Include Protective Well Cap &amp; Site Clearance (₹2,500)</span>
              </label>
            </div>
          </div>

          {/* Invoice Summary Box (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white rounded-2xl border border-neutral-800 p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                  Estimated Invoice
                </span>
                <h4 className="text-lg font-bold font-display text-white">Itemized Breakdown</h4>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Official Estimate
              </span>
            </div>

            {/* Invoice Line Items */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between py-2 border-b border-neutral-800/80">
                <div>
                  <div className="text-neutral-200 font-semibold">
                    Drilling: {depth} ft @ ₹{ratePerFoot}/ft
                  </div>
                  <div className="text-[11px] text-neutral-400 font-sans">
                    {diameter}&quot; Dia heavy hydraulic rig
                  </div>
                </div>
                <span className="text-neutral-200 font-bold">
                  ₹{drillingCost.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-neutral-800/80">
                <div>
                  <div className="text-neutral-200 font-semibold">
                    Casing: {casingLength} ft @ ₹{casingRate}/ft
                  </div>
                  <div className="text-[11px] text-neutral-400 font-sans">
                    {CASING_RATES[casingType].name}
                  </div>
                </div>
                <span className="text-neutral-200 font-bold">
                  ₹{casingCost.toLocaleString('en-IN')}
                </span>
              </div>

              {includeCapping && (
                <div className="flex items-center justify-between py-2 border-b border-neutral-800/80">
                  <div>
                    <div className="text-neutral-200 font-semibold">Cap &amp; Site Clearance</div>
                    <div className="text-[11px] text-neutral-400 font-sans">
                      Protective heavy cap &amp; slurry drainage
                    </div>
                  </div>
                  <span className="text-neutral-200 font-bold">₹2,500</span>
                </div>
              )}

              {selectedPump.price > 0 && (
                <div className="flex items-center justify-between py-2 border-b border-neutral-800/80">
                  <div>
                    <div className="text-neutral-200 font-semibold">Submersible Pump &amp; Panel</div>
                    <div className="text-[11px] text-neutral-400 font-sans">{selectedPump.name}</div>
                  </div>
                  <span className="text-neutral-200 font-bold">
                    ₹{selectedPump.price.toLocaleString('en-IN')}
                  </span>
                </div>
              )}
            </div>

            {/* Total Highlight */}
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/40">
              <div className="text-xs text-cyan-300 uppercase tracking-wider font-semibold">
                Estimated Total (Approx.)
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display mt-1">
                ₹{totalEstimate.toLocaleString('en-IN')}*
              </div>
              <div className="text-[11px] text-neutral-400 mt-1 font-sans">
                *Subject to exact water strike depth &amp; soil layer measurement on site.
              </div>
            </div>

            {/* Actions: Send to WhatsApp / Copy Quote / Call */}
            <div className="space-y-2.5 pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${waQuoteText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Estimate via WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleCopyQuote}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedQuote ? 'Copied!' : 'Copy Summary'}</span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Call Naresh</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Base Drilling Rates Table (Exact copy from user request) */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
              Base Drilling Rates (Estimated)
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              Transparent operational rates prevailing across Hyderabad, L.B. Nagar, Uppal, and Rangareddy district.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-100 dark:bg-neutral-800/80 text-neutral-900 dark:text-neutral-100 font-semibold text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 rounded-l-lg">Diameter</th>
                  <th className="py-3 px-4">Depth Range</th>
                  <th className="py-3 px-4">Estimated Rate per Foot</th>
                  <th className="py-3 px-4">Recommended Casing</th>
                  <th className="py-3 px-4 rounded-r-lg">Best Suited For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {PRICING_RATES.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-cyan-700 dark:text-cyan-400">
                      {row.diameter}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-neutral-700 dark:text-neutral-300">
                      {row.depthRange}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-neutral-900 dark:text-white font-mono">
                      ₹{row.ratePerFoot} / ft
                    </td>
                    <td className="py-3.5 px-4 text-xs text-neutral-600 dark:text-neutral-400">
                      {row.casingRecommended}
                    </td>
                    <td className="py-3.5 px-4 text-xs font-medium text-neutral-800 dark:text-neutral-200">
                      {row.bestSuitedFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* What Factors Into Your Total Invoice? */}
          <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 space-y-4">
            <h4 className="text-base font-bold text-neutral-900 dark:text-white font-display">
              What Factors Into Your Total Invoice?
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/70 dark:border-neutral-800 space-y-1.5">
                <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  1. Drilling Cost (Per Foot)
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Calculated based on total depth drilled until reliable water yield is achieved.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/70 dark:border-neutral-800 space-y-1.5">
                <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  2. Casing Pipe (PVC / MS)
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Required for soil layers near the top to prevent bore collapse. Charged per foot installed.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/70 dark:border-neutral-800 space-y-1.5">
                <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  3. Cap &amp; Installation Charge
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Standard fitting charge for capping, wellhead sanitation, and site clearance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-200/70 dark:border-neutral-800 space-y-1.5">
                <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  4. Submersible Motor &amp; Cable
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Selected according to depth and required water lift (optional turnkey add-on).
                </p>
              </div>
            </div>

            {/* Quick quote callout */}
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
                <span className="text-lg">💡</span>
                <span>
                  <strong>Need an exact estimate for your location?</strong> Call us directly at{' '}
                  <a href={`tel:${COMPANY_INFO.phone}`} className="underline font-bold">
                    {COMPANY_INFO.phoneDisplay}
                  </a>{' '}
                  for a quick quote based on neighboring borewell depths.
                </span>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="shrink-0 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs"
              >
                Call for Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
