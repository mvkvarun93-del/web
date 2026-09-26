import React, { useState } from 'react';
import { SOCIAL_FEED, SocialFeedItem, COMPANY_INFO } from '../data/borewellsData';
import { SocialVideoCard } from './SocialVideoCard';
import { 
  Instagram, 
  Youtube, 
  Facebook, 
  MessageSquare, 
  Heart, 
  Share2, 
  ExternalLink, 
  Play, 
  Droplet, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  FileText, 
  ChevronUp, 
  X,
  Sparkles,
  Radio,
  Globe
} from 'lucide-react';

interface SocialFooterProps {
  onOpenResume: () => void;
  onOpenEstimate: () => void;
  onOpenGooglePublish?: () => void;
}

export const SocialFeedFooter: React.FC<SocialFooterProps> = ({ onOpenResume, onOpenEstimate, onOpenGooglePublish }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'instagram' | 'youtube' | 'facebook' | 'whatsapp'>('all');
  const [likesState, setLikesState] = useState<{ [id: string]: number }>({});
  const [activeVideoPost, setActiveVideoPost] = useState<SocialFeedItem | null>(null);

  const filteredFeed = activeTab === 'all'
    ? SOCIAL_FEED
    : SOCIAL_FEED.filter((item) => item.platform === activeTab);

  const handleLike = (id: string, initialLikes: number) => {
    setLikesState((prev) => ({
      ...prev,
      [id]: (prev[id] || initialLikes) + 1,
    }));
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <Instagram className="w-4 h-4 text-pink-500" />;
      case 'youtube':
        return <Youtube className="w-4 h-4 text-red-500" />;
      case 'facebook':
        return <Facebook className="w-4 h-4 text-blue-500" />;
      case 'whatsapp':
        return <MessageSquare className="w-4 h-4 text-emerald-500" />;
      default:
        return <Radio className="w-4 h-4 text-cyan-500" />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-200 border-t border-neutral-800 transition-colors">
      {/* Live Social Media Feed Section */}
      <div className="py-14 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Official Verified Social Channels Banner */}
          <div className="mb-8 p-4 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-cyan-500 flex items-center justify-center text-white shadow-md shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <span>Official Social Feeds &amp; Live Videos</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="text-xs text-neutral-400">
                  Direct site recordings from Instagram <strong className="text-pink-400 font-semibold">@hyderabadi_borewells</strong> &amp; Facebook <strong className="text-blue-400 font-semibold">Sri Venkateshwara Borewells</strong>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href="https://www.instagram.com/hyderabadi_borewells/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-pink-600/20 hover:bg-pink-600/30 text-pink-300 border border-pink-500/30 text-xs font-semibold transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@hyderabadi_borewells</span>
                <ExternalLink className="w-3 h-3 text-pink-400" />
              </a>

              <a
                href="https://www.facebook.com/search/top?q=Sri%20Venkateshwara%20Borewells%20Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-semibold transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <span>Facebook Page</span>
                <ExternalLink className="w-3 h-3 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                <span>Live Field Broadcast</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Live Social Media Feed &amp; Rig Updates
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Real-time video reels, water strike highlights, and customer reviews streamed directly from our sites.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-neutral-950 p-1.5 rounded-xl border border-neutral-800">
              {[
                { id: 'all', label: 'All Feeds' },
                { id: 'instagram', label: 'Instagram (@hyderabadi_borewells)' },
                { id: 'facebook', label: 'Facebook (Sri Venkateshwara Borewells)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-cyan-600 text-white shadow-xs'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Feed Cards Horizontal Scroll / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeed.map((post) => {
              const currentLikes = likesState[post.id] ?? post.likes;
              return (
                <div
                  key={post.id}
                  className="rounded-2xl bg-neutral-950 border border-neutral-800 p-5 hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Channel Handle & Date */}
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-3 text-xs">
                      <a
                        href={post.accountUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-bold text-neutral-200 hover:text-cyan-400 transition-colors"
                      >
                        {getPlatformIcon(post.platform)}
                        <span className="font-semibold">{post.accountName}</span>
                      </a>
                      <span className="text-neutral-500 font-mono text-[11px]">{post.date}</span>
                    </div>

                    {/* Playable Video Card with Inline Controls & Full Telemetry */}
                    <SocialVideoCard
                      post={post}
                      onOpenTheater={(p) => setActiveVideoPost(p)}
                    />

                    {/* Post Title & Location */}
                    <div className="space-y-1">
                      <div className="text-[11px] text-cyan-400 font-medium">📍 {post.location}</div>
                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors font-display">
                        {post.title}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed pt-1 line-clamp-3">
                        {post.caption}
                      </p>
                    </div>
                  </div>

                  {/* Actions & Engagement Bar */}
                  <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                    <button
                      onClick={() => handleLike(post.id, post.likes)}
                      className="flex items-center gap-1.5 hover:text-rose-400 transition-colors"
                    >
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
                      <span>{currentLikes}</span>
                    </button>

                    <div className="flex items-center gap-1 text-[11px] text-neutral-500">
                      <span>{post.comments} comments</span>
                      <span>•</span>
                      <span>{post.shares} shares</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <a
                        href={post.externalReelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded hover:bg-neutral-800 text-neutral-400 hover:text-cyan-300 transition-colors"
                        title={`Watch original on ${post.platform}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hi%20Naresh,%20I%20saw%20your%20video%20"${encodeURIComponent(post.title)}"%20from%20${post.accountName}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 rounded hover:bg-neutral-800 text-cyan-400 hover:text-cyan-300 transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white font-extrabold text-lg">
                <Droplet className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-white font-display">
                  Sri Venkateshwara
                </h4>
                <div className="text-xs text-cyan-400">Borewells &amp; Motors — Hyderabad</div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              At Sri Venkateshwara Borewells &amp; Motors, we bring groundwater solutions directly to your property with precision and transparency. Backed by high-power hydraulic rig technology and local knowledge of soil and rock strata across Hyderabad.
            </p>

            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center gap-3 text-xs text-neutral-300">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <strong className="text-white">BNI Member (Hyderabad):</strong> Recognized for ethical business practice and verified drilling quality.
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Navigation</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Services (4.5&quot; &amp; 6.5&quot;)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Completed Projects
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  Pricing Per Foot
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-cyan-400 transition-colors">
                  Naresh&apos;s Credentials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact Form
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quicklist (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Our Services</h5>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>• 6.5&quot; Dia Heavy Hydraulic Drilling</li>
              <li>• 4.5&quot; Dia Compact Urban Drilling</li>
              <li>• Submersible Pump &amp; Panel Installation</li>
              <li>• 1200 PSI Borewell Air Compressor Flushing</li>
              <li>• Hydrogeological Water Point Survey</li>
              <li>• Re-Drilling &amp; Depth Extension</li>
            </ul>
          </div>

          {/* Official Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Direct Contact</h5>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white font-mono font-bold">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              {onOpenGooglePublish && (
                <button
                  onClick={onOpenGooglePublish}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-semibold text-cyan-300 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                  <span>enrborewells.net &amp; Google SEO Center</span>
                </button>
              )}

              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Emme Naresh Resume (PDF)</span>
              </button>

              <button
                onClick={onOpenEstimate}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white transition-colors"
              >
                <span>Calculate Cost Estimate</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="mt-12 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Sri Venkateshwara Borewells &amp; Motors. All rights reserved. Proprietor: Emme Naresh.
          </div>
          <div className="flex items-center gap-4">
            <span>Saraswathinagar Colony, L.B. Nagar, Hyderabad</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Theater Modal with Real Playback */}
      {activeVideoPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-neutral-900 border border-neutral-800 p-5 sm:p-6 text-white space-y-4 shadow-2xl">
            <button
              onClick={() => setActiveVideoPost(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-between pr-8">
              <a
                href={activeVideoPost.accountUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                {getPlatformIcon(activeVideoPost.platform)}
                <span className="text-xs font-bold text-neutral-200">
                  {activeVideoPost.accountName}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-700/50">
                  Verified Site Resource
                </span>
              </a>
              <span className="text-xs font-mono text-neutral-400">{activeVideoPost.date}</span>
            </div>

            <h4 className="text-lg font-bold font-display text-white pr-8">
              {activeVideoPost.title}
            </h4>

            {/* Video Player Box */}
            <div className="relative rounded-xl overflow-hidden bg-black border border-neutral-800 aspect-video flex items-center justify-center">
              <video
                src={activeVideoPost.videoSrc}
                controls
                autoPlay
                playsInline
                loop
                className="w-full h-full object-cover"
              />

              {/* Live Telemetry Watermark */}
              <div className="absolute top-3 left-3 pointer-events-none bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-mono text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>TELEMETRY ACTIVE • {activeVideoPost.location}</span>
              </div>

              {activeVideoPost.waterYield && (
                <div className="absolute top-3 right-3 pointer-events-none bg-emerald-600/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold text-white flex items-center gap-1 shadow-md">
                  <Droplet className="w-3 h-3" /> {activeVideoPost.waterYield}
                </div>
              )}
            </div>

            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 text-xs text-neutral-300 space-y-1">
              <div className="font-semibold text-white">Post Description:</div>
              <p className="text-neutral-400 leading-relaxed">{activeVideoPost.caption}</p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-neutral-400 font-mono">
                📍 {activeVideoPost.location}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={activeVideoPost.externalReelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Open on {activeVideoPost.platform === 'instagram' ? 'Instagram' : 'Facebook'}</span>
                </a>
                <button
                  onClick={() => setActiveVideoPost(null)}
                  className="px-3.5 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-200 transition-colors"
                >
                  Close
                </button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hi%20Naresh%20garu,%20I%20watched%20the%20video%20"${encodeURIComponent(activeVideoPost.title)}"%20and%20want%20to%20know%20about%20similar%20drilling%20in%20my%20area.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Operator</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky Quick Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800 p-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cyan-600 text-white font-bold text-xs active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4" />
          <span>Call: {COMPANY_INFO.phoneDisplay}</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hello%20Naresh%20garu,%20I%20am%20looking%20for%20a%20borewell%20cost%20estimate.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenEstimate}
          className="p-2.5 rounded-xl bg-neutral-800 text-cyan-400 font-bold text-xs"
          title="Calculator"
        >
          ₹
        </button>
      </div>
    </footer>
  );
};
