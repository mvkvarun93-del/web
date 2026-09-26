import React, { useState, useRef, useEffect } from 'react';
import { SocialFeedItem } from '../data/borewellsData';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Droplet, 
  ExternalLink,
  Instagram,
  Facebook,
  CheckCircle2
} from 'lucide-react';

interface SocialVideoCardProps {
  post: SocialFeedItem;
  onOpenTheater: (post: SocialFeedItem) => void;
}

export const SocialVideoCard: React.FC<SocialVideoCardProps> = ({ post, onOpenTheater }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(45);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioNodesRef = useRef<{ gain: GainNode; filter: BiquadFilterNode } | null>(null);

  // Audio synthesis for rushing water / hydraulic drilling engine when unmuted
  useEffect(() => {
    if (isPlaying && !isMuted) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!audioCtxRef.current && AudioContextClass) {
          audioCtxRef.current = new AudioContextClass();
        }

        if (audioCtxRef.current) {
          if (audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
          }

          // Generate brown/pink noise buffer for realistic high pressure water flow
          const bufferSize = audioCtxRef.current.sampleRate * 2;
          const noiseBuffer = audioCtxRef.current.createBuffer(1, bufferSize, audioCtxRef.current.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          let lastOut = 0.0;
          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            output[i] = (lastOut + 0.02 * white) / 1.02;
            lastOut = output[i];
            output[i] *= 3.5;
          }

          const whiteNoise = audioCtxRef.current.createBufferSource();
          whiteNoise.buffer = noiseBuffer;
          whiteNoise.loop = true;

          const filter = audioCtxRef.current.createBiquadFilter();
          filter.type = post.videoType === 'rig-action' ? 'lowpass' : 'bandpass';
          filter.frequency.value = post.videoType === 'rig-action' ? 320 : 650;

          const gain = audioCtxRef.current.createGain();
          gain.gain.setValueAtTime(0.12, audioCtxRef.current.currentTime);

          whiteNoise.connect(filter);
          filter.connect(gain);
          gain.connect(audioCtxRef.current.destination);

          whiteNoise.start();
          audioNodesRef.current = { gain, filter };

          return () => {
            try {
              gain.gain.setTargetAtTime(0, audioCtxRef.current?.currentTime || 0, 0.1);
              setTimeout(() => {
                whiteNoise.stop();
                whiteNoise.disconnect();
              }, 150);
            } catch (err) {
              // ignore
            }
          };
        }
      } catch (e) {
        // Fallback gracefully
      }
    }
  }, [isPlaying, isMuted, post.videoType]);

  // Toggle playback
  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(true);
      });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const curr = videoRef.current.currentTime;
      const dur = videoRef.current.duration || 45;
      setCurrentTime(curr);
      setDuration(dur);
      setProgress((curr / dur) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const seekTime = pos * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
      setProgress(pos * 100);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Water strike & rig canvas physics simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let frame = 0;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;
    }> = [];

    const count = post.videoType === 'water-strike' || post.videoType === 'flushing-action' ? 40 : 20;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 40,
        y: canvas.height * 0.85,
        vx: (Math.random() - 0.5) * 4,
        vy: -Math.random() * 6 - 3,
        radius: Math.random() * 3 + 1.5,
        alpha: Math.random() * 0.8 + 0.2,
        color: post.videoType === 'flushing-action'
          ? (Math.random() > 0.4 ? '#38bdf8' : '#ca8a04')
          : '#38bdf8',
      });
    }

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isPlaying) {
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.15;
          p.alpha -= 0.012;

          if (p.alpha <= 0 || p.y > canvas.height) {
            p.x = canvas.width / 2 + (Math.random() - 0.5) * 20;
            p.y = canvas.height * 0.85;
            p.vx = (Math.random() - 0.5) * 4;
            p.vy = -Math.random() * 7 - 4;
            p.alpha = Math.random() * 0.8 + 0.2;
          }

          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });

        // Water Geyser
        if (post.videoType === 'water-strike' || post.videoType === 'flushing-action') {
          ctx.save();
          const gradient = ctx.createLinearGradient(
            canvas.width / 2,
            canvas.height,
            canvas.width / 2,
            canvas.height * 0.15
          );
          gradient.addColorStop(0, 'rgba(14, 165, 233, 0.7)');
          gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.45)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');

          ctx.fillStyle = gradient;
          const wobble = Math.sin(frame * 0.2) * 6;
          ctx.beginPath();
          ctx.moveTo(canvas.width / 2 - 18, canvas.height);
          ctx.quadraticCurveTo(
            canvas.width / 2 + wobble,
            canvas.height * 0.5,
            canvas.width / 2 + wobble * 1.5,
            canvas.height * 0.15
          );
          ctx.lineTo(canvas.width / 2 + wobble * 1.5 + 18, canvas.height * 0.15);
          ctx.quadraticCurveTo(
            canvas.width / 2 + wobble + 22,
            canvas.height * 0.5,
            canvas.width / 2 + 18,
            canvas.height
          );
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }

        // Rig drill shaft
        if (post.videoType === 'rig-action' || post.videoType === 'urban-drilling') {
          ctx.save();
          ctx.translate(canvas.width / 2, canvas.height * 0.55);
          ctx.rotate(frame * 0.12);
          ctx.strokeStyle = '#0284c7';
          ctx.lineWidth = 3;
          ctx.strokeRect(-20, -20, 40, 40);
          ctx.fillStyle = '#0369a1';
          ctx.fillRect(-10, -10, 20, 20);
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, post.videoType]);

  return (
    <div
      className="relative mb-3 h-48 rounded-xl bg-neutral-950 border border-neutral-800 overflow-hidden cursor-pointer group/video select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePlay}
    >
      {/* HTML5 Video element */}
      <video
        ref={videoRef}
        src={post.videoSrc}
        playsInline
        muted={isMuted}
        loop
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        className="absolute inset-0 w-full h-full object-cover opacity-85"
      />

      {/* Layered particle & water flow canvas overlay */}
      <canvas
        ref={canvasRef}
        width={340}
        height={192}
        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-90"
      />

      {/* Subtle vignette gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/55 pointer-events-none" />

      {/* Top Header Overlay: Channel Brand & Yield Badge */}
      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
        <a
          href={post.accountUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/75 hover:bg-black text-[11px] font-semibold text-white border border-neutral-700/80 transition-colors backdrop-blur-xs shadow-xs"
        >
          {post.platform === 'instagram' ? (
            <Instagram className="w-3.5 h-3.5 text-pink-400" />
          ) : (
            <Facebook className="w-3.5 h-3.5 text-blue-400" />
          )}
          <span>{post.accountName}</span>
          <CheckCircle2 className="w-3 h-3 text-cyan-400 fill-cyan-400/20" />
        </a>

        {post.waterYield && (
          <span className="px-2 py-0.5 rounded bg-emerald-600/90 backdrop-blur-xs text-[10px] font-bold text-white flex items-center gap-1 shadow-sm">
            <Droplet className="w-3 h-3 animate-bounce" /> {post.waterYield}
          </span>
        )}
      </div>

      {/* Center Big Play/Pause Button (Shows on pause or on hover) */}
      {(!isPlaying || isHovered) && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="w-13 h-13 rounded-full bg-cyan-600/95 text-white flex items-center justify-center shadow-2xl backdrop-blur-xs transform transition-transform group-hover/video:scale-110 active:scale-95 border-2 border-white/20">
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-white" />
            ) : (
              <Play className="w-6 h-6 fill-white ml-0.5" />
            )}
          </div>
        </div>
      )}

      {/* Subsurface telemetry HUD strip when playing */}
      {isPlaying && (
        <div className="absolute top-10 left-2.5 z-10 pointer-events-none font-mono text-[9px] text-cyan-300 space-y-0.5 bg-black/70 p-1.5 rounded border border-cyan-500/30 backdrop-blur-xs">
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>RECORDING: {post.location}</span>
          </div>
          <div>YIELD: {post.waterYield || 'HEAVY FLOW'}</div>
        </div>
      )}

      {/* Bottom Controls Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-2.5 z-20 bg-gradient-to-t from-black/95 to-transparent">
        {/* Progress Bar / Scrubber */}
        <div
          onClick={handleSeek}
          className="relative h-1.5 w-full bg-neutral-700/80 rounded-full cursor-pointer overflow-hidden mb-2 group/bar"
        >
          <div
            className="h-full bg-cyan-400 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Action icons row */}
        <div className="flex items-center justify-between text-neutral-300 text-xs">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="p-1 hover:text-white transition-colors"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              className="p-1 hover:text-white transition-colors flex items-center gap-1"
              title={isMuted ? 'Click to enable audio' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
              )}
              {isMuted && <span className="text-[10px] text-neutral-400 hidden sm:inline">Unmute</span>}
            </button>

            <span className="font-mono text-[10px] text-neutral-400">
              {formatTime(currentTime)} / {post.videoDuration}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Open on source */}
            <a
              href={post.externalReelUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1 hover:text-cyan-300 transition-colors flex items-center gap-1 text-[11px] text-neutral-400"
              title={`Open on ${post.platform}`}
            >
              <span className="hidden sm:inline">Open Reel</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Theater expand button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenTheater(post);
              }}
              className="p-1 hover:text-white transition-colors flex items-center gap-1 text-[11px] text-cyan-400 font-semibold"
              title="Expand to Theater Mode"
            >
              <span>Expand</span>
              <Maximize2 className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
