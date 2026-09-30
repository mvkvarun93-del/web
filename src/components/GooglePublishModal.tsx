import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/borewellsData';
import { 
  X, 
  ExternalLink, 
  Check, 
  Copy, 
  Globe, 
  Search, 
  CheckCircle2, 
  MapPin, 
  Share2, 
  Smartphone, 
  Monitor, 
  Sparkles, 
  FileCode2,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Layers,
  ArrowRight,
  HelpCircle,
  Link2
} from 'lucide-react';

interface GooglePublishModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GooglePublishModal: React.FC<GooglePublishModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'domain' | 'status' | 'console' | 'maps' | 'preview'>('domain');
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedDomain, setCopiedDomain] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [selectedRegistrar, setSelectedRegistrar] = useState<'godaddy' | 'namecheap' | 'hostinger' | 'cloudflare'>('godaddy');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('mobile');

  if (!isOpen) return null;

  const customDomain = 'enrborewells.com';
  const publicUrl = 'https://ais-pre-2strxlwfn5ly5sn43gdb6u-385705889944.asia-southeast1.run.app';
  const richResultsUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(`https://${customDomain}`)}`;
  const searchConsoleUrl = 'https://search.google.com/search-console';
  const googleBusinessUrl = 'https://business.google.com/create';

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(publicUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  const handleCopyDomain = () => {
    navigator.clipboard.writeText(customDomain);
    setCopiedDomain(true);
    setTimeout(() => setCopiedDomain(false), 2500);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${COMPANY_INFO.name}\n${COMPANY_INFO.address}\nPhone: ${COMPANY_INFO.phone}\nWebsite: https://${customDomain}`);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="google-publish-title"
    >
      <div 
        className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-6 py-5 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-cyan-50/70 via-sky-50/40 to-white dark:from-neutral-900 dark:to-neutral-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-600 flex items-center justify-center text-white shadow-md">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="google-publish-title" className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                  Google &amp; Domain Setup Hub
                </h2>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800 dark:bg-cyan-950/80 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                  {customDomain}
                </span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Connect {customDomain} to your live Google Cloud application &amp; Google Search indexing
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-950/40 px-6 gap-2 sm:gap-6 overflow-x-auto text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab('domain')}
            className={`py-3 border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'domain'
                ? 'border-cyan-600 text-cyan-700 dark:text-cyan-400 font-bold'
                : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'
            }`}
          >
            <Link2 className="w-4 h-4 text-cyan-600" />
            <span className="flex items-center gap-1.5">
              <span>{customDomain} Setup</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 font-semibold">Priority</span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab('status')}
            className={`py-3 border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'status'
                ? 'border-cyan-600 text-cyan-700 dark:text-cyan-400 font-bold'
                : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Live App URL</span>
          </button>

          <button
            onClick={() => setActiveTab('console')}
            className={`py-3 border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'console'
                ? 'border-cyan-600 text-cyan-700 dark:text-cyan-400 font-bold'
                : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Google Search Indexing</span>
          </button>

          <button
            onClick={() => setActiveTab('maps')}
            className={`py-3 border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'maps'
                ? 'border-cyan-600 text-cyan-700 dark:text-cyan-400 font-bold'
                : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Google Business &amp; Maps</span>
          </button>

          <button
            onClick={() => setActiveTab('preview')}
            className={`py-3 border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'preview'
                ? 'border-cyan-600 text-cyan-700 dark:text-cyan-400 font-bold'
                : 'border-transparent text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Google Search Preview</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          {/* TAB: DOMAIN SETUP */}
          {activeTab === 'domain' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Highlight Banner */}
              <div className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-xs">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                    <span>How To Make &quot;enrborewells.com&quot; Open This Website</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    Connect {customDomain} in 60 Seconds
                  </h3>
                  <p className="text-cyan-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
                    Once you set up <strong>Domain Forwarding</strong> in GoDaddy, typing <strong>enrborewells.com</strong> or <strong>www.enrborewells.com</strong> in any phone, browser, or Google search will directly open your live Borewells web app!
                  </p>
                </div>
              </div>

              {/* Step 1 & Target Link Copy Box */}
              <div className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 sm:p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-cyan-600 text-white font-bold text-xs flex items-center justify-center">
                      1
                    </span>
                    <span className="font-bold text-neutral-900 dark:text-white text-sm">
                      Copy Your Destination App URL:
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500">
                    Paste this into your GoDaddy forwarding destination
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-white dark:bg-neutral-900 p-2 rounded-lg border border-neutral-300 dark:border-neutral-700">
                  <span className="font-mono text-xs sm:text-sm text-cyan-700 dark:text-cyan-300 truncate px-2 py-1 flex-1 select-all font-semibold">
                    {publicUrl}
                  </span>
                  <button
                    onClick={handleCopyUrl}
                    className="flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold rounded-md bg-cyan-600 hover:bg-cyan-700 text-white transition-colors shadow-xs"
                  >
                    {copiedUrl ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedUrl ? 'Copied Destination URL!' : 'Copy Destination URL'}</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Choose Registrar */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-600 text-white font-bold text-xs flex items-center justify-center">
                    2
                  </span>
                  <h4 className="font-bold text-neutral-900 dark:text-white text-sm">
                    Select where you bought {customDomain}:
                  </h4>
                </div>

                {/* Registrar selection pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'godaddy', label: 'GoDaddy' },
                    { id: 'namecheap', label: 'Namecheap' },
                    { id: 'hostinger', label: 'Hostinger' },
                    { id: 'cloudflare', label: 'Cloudflare / Other' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedRegistrar(item.id as any)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedRegistrar === item.id
                          ? 'border-cyan-600 bg-cyan-50 dark:bg-cyan-950/50 text-cyan-900 dark:text-cyan-200 font-bold shadow-xs ring-2 ring-cyan-500/20'
                          : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-semibold">{item.label}</div>
                    </button>
                  ))}
                </div>

                {/* Registrar Specific Step-by-Step Instructions */}
                <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 space-y-3">
                  {selectedRegistrar === 'godaddy' && (
                    <div className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <div className="font-bold text-sm text-neutral-900 dark:text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        GoDaddy 60-Second Setup for enrborewells.com:
                      </div>
                      <ol className="list-decimal list-inside space-y-1.5 leading-relaxed pl-1">
                        <li>Log in to your <strong>GoDaddy Account</strong> &gt; click <strong>My Products</strong>.</li>
                        <li>Find <strong>enrborewells.com</strong> and click <strong>DNS</strong> (or Manage DNS).</li>
                        <li>Scroll down to the <strong>Forwarding</strong> section &gt; click <strong>Add Forwarding</strong> under Domain.</li>
                        <li>Select <strong>https://</strong> and paste: <code className="px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 font-mono text-cyan-700 dark:text-cyan-400 select-all">{publicUrl.replace('https://', '')}</code></li>
                        <li>
                          <strong>Forward Type:</strong> Choose <em>Forward with Masking</em> (keeps <strong>enrborewells.com</strong> in the browser bar) OR <em>Permanent (301)</em>.
                        </li>
                        <li>Click <strong>Save</strong>. In 5 to 15 minutes, typing <strong>enrborewells.com</strong> will open your live site!</li>
                      </ol>
                    </div>
                  )}

                  {selectedRegistrar === 'namecheap' && (
                    <div className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <div className="font-bold text-sm text-neutral-900 dark:text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Namecheap Setup:
                      </div>
                      <ol className="list-decimal list-inside space-y-1.5 leading-relaxed pl-1">
                        <li>Sign in to <strong>Namecheap</strong> &gt; go to <strong>Domain List</strong>.</li>
                        <li>Click <strong>Manage</strong> next to <strong>enrborewells.com</strong>.</li>
                        <li>Under the <strong>Advanced DNS</strong> tab, find <strong>Redirect Domain</strong>.</li>
                        <li>Set <strong>Source URL:</strong> <code>@</code> and <code>www</code>.</li>
                        <li>Set <strong>Destination URL:</strong> <code className="px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 font-mono text-cyan-700 dark:text-cyan-400 select-all">{publicUrl}</code></li>
                        <li>Save changes. Propagation usually takes 10 to 30 minutes.</li>
                      </ol>
                    </div>
                  )}

                  {selectedRegistrar === 'hostinger' && (
                    <div className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <div className="font-bold text-sm text-neutral-900 dark:text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Hostinger Setup:
                      </div>
                      <ol className="list-decimal list-inside space-y-1.5 leading-relaxed pl-1">
                        <li>Log in to <strong>Hostinger hPanel</strong> &gt; <strong>Domains</strong>.</li>
                        <li>Click on <strong>enrborewells.com</strong> &gt; <strong>Redirects</strong>.</li>
                        <li>In the <strong>Redirect to:</strong> field, paste <code className="px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 font-mono text-cyan-700 dark:text-cyan-400 select-all">{publicUrl}</code></li>
                        <li>Click <strong>Create</strong>. Done!</li>
                      </ol>
                    </div>
                  )}

                  {selectedRegistrar === 'cloudflare' && (
                    <div className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <div className="font-bold text-sm text-neutral-900 dark:text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Cloudflare / Reverse Proxy Setup (Keeps enrborewells.com in URL bar):
                      </div>
                      <ol className="list-decimal list-inside space-y-1.5 leading-relaxed pl-1">
                        <li>In Cloudflare DNS, add a <strong>CNAME</strong> record:
                          <div className="mt-1 p-2 rounded bg-neutral-100 dark:bg-neutral-900 font-mono text-[11px] grid grid-cols-3 gap-2">
                            <span><strong>Type:</strong> CNAME</span>
                            <span><strong>Name:</strong> @ (or www)</span>
                            <span className="truncate"><strong>Target:</strong> {publicUrl.replace('https://', '')}</span>
                          </div>
                        </li>
                        <li>Enable the <strong>Orange Cloud (Proxied)</strong> for free SSL and caching.</li>
                        <li>Under <strong>Rules &gt; Redirect Rules</strong>, create a rule to route <code>enrborewells.com/*</code> to the target URL.</li>
                      </ol>
                    </div>
                  )}
                </div>
              </div>

              {/* Step 3: Test enrborewells.com */}
              <div className="p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="font-bold text-neutral-900 dark:text-white text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Test Your Domain Now</span>
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    Click to test whether your domain forwarding has activated:
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://enrborewells.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
                  >
                    <span>Open https://enrborewells.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 1: Live Status */}
          {activeTab === 'status' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Live URL Box */}
              <div className="bg-gradient-to-br from-cyan-50/80 via-white to-sky-50/50 dark:from-neutral-800/80 dark:via-neutral-900 dark:to-neutral-800/50 border border-cyan-200 dark:border-cyan-900/60 rounded-xl p-5 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      Google Cloud Live Shared URL
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 font-medium">
                      Publicly Accessible 24/7
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    HTTPS Encrypted • Worldwide CDN
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-white dark:bg-neutral-950 p-2 rounded-lg border border-neutral-200 dark:border-neutral-800">
                  <span className="font-mono text-xs sm:text-sm text-cyan-700 dark:text-cyan-300 truncate px-2 py-1 flex-1 select-all">
                    {publicUrl}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyUrl}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-md bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 transition-colors"
                      title="Copy Public Link"
                    >
                      {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedUrl ? 'Copied!' : 'Copy Link'}</span>
                    </button>
                    <a
                      href={publicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-md bg-cyan-600 hover:bg-cyan-700 text-white shadow-xs transition-colors"
                    >
                      <span>Open Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Check out Sri Venkateshwara Borewells website: https://${customDomain} (or ${publicUrl})`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-xs transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share on WhatsApp</span>
                  </a>
                  <a
                    href="/robots.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-700 dark:text-cyan-400 hover:underline"
                  >
                    <FileCode2 className="w-3.5 h-3.5" />
                    <span>View live robots.txt</span>
                  </a>
                  <span className="text-neutral-300 dark:text-neutral-700">•</span>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-700 dark:text-cyan-400 hover:underline"
                  >
                    <FileCode2 className="w-3.5 h-3.5" />
                    <span>View live sitemap.xml</span>
                  </a>
                </div>
              </div>

              {/* Technical SEO Audit Checklist */}
              <div className="space-y-3">
                <h3 className="font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Google SEO Engine Configuration Complete</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white text-xs">
                        Custom Domain &amp; Canonical URL
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                        Configured canonical pointing to <code>https://enrborewells.com</code>.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white text-xs">
                        XML Sitemap (sitemap.xml)
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                        Indexed all sections under both enrborewells.com &amp; cloud domain.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white text-xs">
                        Schema.org JSON-LD LocalBusiness
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                        Includes business type, 4.9★ rating, LB Nagar address, and phone number.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white text-xs">
                        Local Hyderabad Geo-Tagging
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                        Geo coordinates (17.3457, 78.5522) for Hyderabad &amp; Rangareddy ranking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Google Search Console */}
          {activeTab === 'console' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 text-blue-950 dark:text-blue-200 flex items-start gap-3">
                <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="font-bold text-sm">How to submit enrborewells.com to Google Search</div>
                  <p>
                    Google Search Console tells Google to crawl <strong>enrborewells.com</strong> immediately so customers typing <em>&quot;enrborewells.com&quot;</em> or <em>&quot;borewells in Hyderabad&quot;</em> see your site at the top.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-neutral-900 dark:text-white text-sm">
                  Quick 3-Step Google Search Submission:
                </h4>

                <div className="space-y-3">
                  <div className="flex gap-3 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
                    <div className="w-7 h-7 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 font-bold flex items-center justify-center shrink-0 text-xs">
                      1
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="font-semibold text-neutral-900 dark:text-white text-xs">
                        Open Google Search Console
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        Sign in with your Google account (e.g. <code>emmenaresh@gmail.com</code>).
                      </p>
                      <a
                        href={searchConsoleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                      >
                        <span>Go to Google Search Console</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
                    <div className="w-7 h-7 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 font-bold flex items-center justify-center shrink-0 text-xs">
                      2
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="font-semibold text-neutral-900 dark:text-white text-xs">
                        Add Domain Property: enrborewells.com
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        Choose <strong>Domain</strong> or <strong>URL prefix</strong> and enter:
                      </p>
                      <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded font-mono text-xs">
                        <span className="truncate flex-1 select-all font-semibold">https://{customDomain}</span>
                        <button
                          onClick={handleCopyDomain}
                          className="px-2 py-0.5 text-[11px] bg-white dark:bg-neutral-800 rounded border border-neutral-300 dark:border-neutral-700 hover:text-cyan-600 font-sans"
                        >
                          {copiedDomain ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
                    <div className="w-7 h-7 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 font-bold flex items-center justify-center shrink-0 text-xs">
                      3
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="font-semibold text-neutral-900 dark:text-white text-xs">
                        Submit Sitemap &amp; Request Crawl
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        Under the <strong>Sitemaps</strong> menu, type <code>sitemap.xml</code> and click <strong>Submit</strong>. Then click <strong>URL Inspection</strong> &gt; <strong>Request Indexing</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Rich Results Test button */}
                <div className="mt-4 p-4 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white text-xs">
                      Test Your Structured Data on Google Rich Results
                    </div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">
                      Verify that Google recognizes your business name, reviews rating, and phone.
                    </div>
                  </div>
                  <a
                    href={richResultsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shrink-0"
                  >
                    <span>Run Google Rich Results Test</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Google Maps & Business */}
          {activeTab === 'maps' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-amber-950 dark:text-amber-200 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="font-bold text-sm">Google Maps &amp; Local 3-Pack Presence</div>
                  <p>
                    Connecting your website to your Google Business Profile ensures you rank at the top of local map searches when nearby customers search for borewells in Hyderabad.
                  </p>
                </div>
              </div>

              {/* Ready-to-copy profile details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-neutral-900 dark:text-white text-xs uppercase tracking-wider">
                    Copy Details for Google Business Profile
                  </h4>
                  <button
                    onClick={handleCopyAddress}
                    className="flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    {copiedAddress ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAddress ? 'Copied Full Profile!' : 'Copy All Details'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
                    <span className="text-neutral-500 font-medium">Business Name:</span>
                    <div className="font-bold text-neutral-900 dark:text-white text-sm mt-0.5">
                      {COMPANY_INFO.name}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
                    <span className="text-neutral-500 font-medium">Primary Category:</span>
                    <div className="font-bold text-neutral-900 dark:text-white text-sm mt-0.5">
                      Well Drilling Contractor
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
                    <span className="text-neutral-500 font-medium">Contact Phone:</span>
                    <div className="font-bold text-neutral-900 dark:text-white text-sm mt-0.5">
                      {COMPANY_INFO.phoneDisplay}
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
                    <span className="text-neutral-500 font-medium">Website URL to Add:</span>
                    <div className="font-bold text-cyan-600 dark:text-cyan-400 text-xs mt-0.5 truncate select-all">
                      https://{customDomain}
                    </div>
                  </div>

                  <div className="sm:col-span-2 p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
                    <span className="text-neutral-500 font-medium">Physical Address:</span>
                    <div className="font-semibold text-neutral-900 dark:text-white text-xs mt-0.5">
                      {COMPANY_INFO.address}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <span>Create / Manage on Google Business Profile</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Google SERP Preview */}
          {activeTab === 'preview' && (
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-neutral-900 dark:text-white text-sm">
                    Live Google Search Snippet Simulation
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Accurate simulation when someone searches &quot;enrborewells.com&quot; on Google.
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-lg">
                  <button
                    onClick={() => setPreviewDevice('mobile')}
                    className={`p-1.5 rounded text-xs flex items-center gap-1 font-medium transition-colors ${
                      previewDevice === 'mobile' 
                        ? 'bg-white dark:bg-neutral-900 shadow-xs text-cyan-600' 
                        : 'text-neutral-500 hover:text-neutral-800'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile</span>
                  </button>
                  <button
                    onClick={() => setPreviewDevice('desktop')}
                    className={`p-1.5 rounded text-xs flex items-center gap-1 font-medium transition-colors ${
                      previewDevice === 'desktop' 
                        ? 'bg-white dark:bg-neutral-900 shadow-xs text-cyan-600' 
                        : 'text-neutral-500 hover:text-neutral-800'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop</span>
                  </button>
                </div>
              </div>

              {/* SERP Mock Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#202124] border border-neutral-200 dark:border-neutral-700 shadow-sm max-w-2xl font-sans">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center text-white text-[10px] font-bold">
                    ENR
                  </div>
                  <div className="text-xs leading-none">
                    <div className="font-medium text-neutral-800 dark:text-neutral-200">
                      Sri Venkateshwara Borewells (ENR Borewells)
                    </div>
                    <div className="text-neutral-500 dark:text-neutral-400 text-[11px] truncate">
                      https://{customDomain}
                    </div>
                  </div>
                </div>

                {/* Clickable Title */}
                <h3 className="text-base sm:text-lg font-semibold text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer leading-snug">
                  Sri Venkateshwara Borewells &amp; Motors | ENR Borewells Hyderabad
                </h3>

                {/* Star Rating Rich Snippet */}
                <div className="flex items-center gap-1.5 my-1 text-xs text-neutral-600 dark:text-neutral-300">
                  <span className="text-amber-500 font-bold">★ 4.9</span>
                  <span className="text-neutral-400">·</span>
                  <span>(184 reviews)</span>
                  <span className="text-neutral-400">·</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-medium">Open 6:00 AM – 10:00 PM</span>
                  <span className="text-neutral-400">·</span>
                  <span>Well Drilling Contractor</span>
                </div>

                {/* Snippet Description */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-1">
                  Professional borewell drilling in Hyderabad by Emme Naresh (BNI Member). Heavy-duty 4.5&quot; and 6.5&quot; hydraulic sensor rigs, transparent pricing per foot, and expert pump installation.
                </p>

                {/* Sitelinks Mini Grid */}
                <div className="mt-3.5 pt-3 border-t border-neutral-100 dark:border-neutral-800 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded bg-neutral-50 dark:bg-neutral-800/60">
                    <span className="font-semibold text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer">
                      Pricing Per Foot Calculator
                    </span>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1">
                      Calculate exact estimate for 4.5&quot; &amp; 6.5&quot; drilling.
                    </p>
                  </div>
                  <div className="p-2 rounded bg-neutral-50 dark:bg-neutral-800/60">
                    <span className="font-semibold text-[#1a0dab] dark:text-[#8ab4f8] hover:underline cursor-pointer">
                      Hydraulic Sensor Rigs
                    </span>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1">
                      Heavy-duty fleet for residential and commercial wells.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-950/60 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Target: <strong>{customDomain}</strong> &bull; Live app running</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleCopyUrl}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm transition-colors"
            >
              {copiedUrl ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedUrl ? 'Copied App Link!' : 'Copy Forwarding Link'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
