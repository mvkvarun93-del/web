import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/borewellsData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  Building2, 
  Sparkles,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

interface ContactProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactProps> = ({ preselectedService }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [propertyLocation, setPropertyLocation] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ['6.5" Dia Drilling']
  );
  const [expectedDepth, setExpectedDepth] = useState('300 - 600 ft');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceOptions = [
    '6.5" Dia Drilling',
    '4.5" Dia Drilling',
    'Motor/Pump Installation',
    'Borewell Cleaning / Flushing',
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Save lead in localStorage for persistence
    const newLead = {
      id: Date.now().toString(),
      fullName,
      phoneNumber,
      propertyLocation,
      selectedServices,
      expectedDepth,
      message,
      submittedAt: new Date().toISOString(),
    };

    try {
      const stored = JSON.parse(localStorage.getItem('sv_borewells_inquiries') || '[]');
      stored.push(newLead);
      localStorage.setItem('sv_borewells_inquiries', JSON.stringify(stored));
    } catch (err) {
      // fallback
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppLeadUrl = () => {
    const text = encodeURIComponent(
      `Hello Naresh garu, I have a borewell inquiry for Sri Venkateshwara Borewells:
- Name: ${fullName || 'Property Owner'}
- Phone: ${phoneNumber || 'N/A'}
- Area/Location: ${propertyLocation || 'Hyderabad'}
- Services: ${selectedServices.join(', ')}
- Expected Depth: ${expectedDepth}
- Details: ${message || 'Please provide site inspection and cost estimate.'}`
    );
    return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${text}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300">
            Get in Touch with Us Today
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white font-display tracking-tight">
            Schedule a Site Inspection &amp; Cost Estimation
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-300">
            Reach out directly to Proprietor <strong>Emme Naresh</strong>. Get prompt hydrogeological advice and honest rates for your property in Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Area Coverage (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-7 shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
                Business &amp; Yard Details
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Business Name</div>
                    <div className="text-sm font-bold text-neutral-900 dark:text-white">
                      {COMPANY_INFO.name}
                    </div>
                    <div className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                      Proprietor: <strong>{COMPANY_INFO.proprietor}</strong> (BNI Member)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Phone / WhatsApp</div>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-base font-extrabold text-neutral-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-mono"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-0.5 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Instant WhatsApp Quote Available</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Official Email</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-cyan-600 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Headquarters &amp; Yard</div>
                    <div className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                      {COMPANY_INFO.address}
                    </div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {COMPANY_INFO.landmark}
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-3.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/60 flex items-center gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                <Clock className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <div>
                  <span className="font-bold text-neutral-900 dark:text-white">Operating Hours: </span>
                  24/7 Emergency Rig Dispatch across Hyderabad &amp; Rangareddy
                </div>
              </div>
            </div>

            {/* Service Areas Coverage Cloud */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-neutral-900 dark:text-white font-display">
                  Primary Coverage Zones
                </h4>
                <span className="text-[11px] text-cyan-600 dark:text-cyan-400 font-semibold">
                  Zero Transit Fee
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {COMPANY_INFO.serviceAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50"
                  >
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white font-display">
                    Thank You, {fullName || 'Valued Customer'}!
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto">
                    Your borewell drilling inquiry has been received. Emme Naresh will personally review your property location ({propertyLocation || 'Hyderabad'}) and contact you at <strong className="text-neutral-900 dark:text-white">{phoneNumber}</strong> shortly.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppLeadUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors w-full sm:w-auto justify-center"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send this on WhatsApp to Naresh</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setPhoneNumber('');
                      setMessage('');
                    }}
                    className="px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm font-semibold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-neutral-100 dark:border-neutral-800 pb-4">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-display">
                    Inquiry / Lead Capture Form
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                    Fill out the parameters below for a fast, tailored quote.
                  </p>
                </div>

                {/* Field 1: Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    1. Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. K. Srinivas Reddy"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>

                {/* Field 2: Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    2. Phone Number (WhatsApp Enabled) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-neutral-500 font-semibold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="98765 43210"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit Indian phone number"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Field 3: Property Location / Area */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    3. Property Location / Area <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={propertyLocation}
                    onChange={(e) => setPropertyLocation(e.target.value)}
                    placeholder="e.g. L.B. Nagar, Uppal, Hayathnagar, Gachibowli"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>

                {/* Field 4: Service Required (Multi-select pills) */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    4. Service Required (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {serviceOptions.map((opt) => {
                      const isSelected = selectedServices.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleService(opt)}
                          className={`p-3 rounded-xl border text-left text-xs font-bold flex items-center justify-between transition-all ${
                            isSelected
                              ? 'border-cyan-600 bg-cyan-50/60 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-200'
                              : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-400 hover:border-neutral-300'
                          }`}
                        >
                          <span>{opt}</span>
                          <span
                            className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                              isSelected
                                ? 'bg-cyan-600 text-white'
                                : 'border border-neutral-300 dark:border-neutral-700'
                            }`}
                          >
                            {isSelected ? '✓' : ''}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Field 5: Expected Depth (Dropdown) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    5. Expected Depth (if known)
                  </label>
                  <select
                    value={expectedDepth}
                    onChange={(e) => setExpectedDepth(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-sm font-medium text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="Below 300 ft">Below 300 ft (Shallow / Surface)</option>
                    <option value="300 - 600 ft">300 - 600 ft (Standard Residential)</option>
                    <option value="600+ ft">600+ ft (Deep Commercial / High-Yield)</option>
                    <option value="Not Sure">Not Sure (Need Naresh to Assess)</option>
                  </select>
                </div>

                {/* Field 6: Message / Additional Details */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                    6. Message / Additional Details
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Narrow plot lane, soil type is gravel, need motor fitting included, urgent site clearance needed..."
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-cyan-600 hover:bg-cyan-700 disabled:opacity-50 text-white font-bold text-sm shadow-md shadow-cyan-600/20 transition-all active:scale-95"
                  >
                    {loading ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Booking Inquiry</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Your details are kept 100% confidential. No spam calls.</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
