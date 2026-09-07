import React from 'react';
import { Workflow, Video, Radio, Sparkles, Database, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SystemArchitecture() {
  const steps = [
    {
      step: "01. SIGNALING",
      title: "Socket.IO Gateway",
      icon: Radio,
      desc: "Bidirectional WebSocket handshake coordinates room presence, typing indicators, and WebRTC SDP offer/answer exchange."
    },
    {
      step: "02. PEER STREAM",
      title: "WebRTC Mesh Pipeline",
      icon: Video,
      desc: "Direct P2P audio/video media stream established via ICE candidates and STUN/TURN servers with zero backend video load."
    },
    {
      step: "03. AI ENRICHMENT",
      title: "Gemini Smart Inference",
      icon: Sparkles,
      desc: "Chat messages trigger contextual Gemini API calls for instant smart replies and multi-language auto-translation."
    },
    {
      step: "04. PERSISTENCE",
      title: "MongoDB & Cloudinary",
      icon: Database,
      desc: "User presence and chat history indexed in MongoDB with validated media attachments stored on Cloudinary CDN."
    }
  ];

  return (
    <section id="architecture" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
            <Workflow className="w-3.5 h-3.5" />
            Full-Stack Real-Time Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2">
            ConvoCam — WebRTC & GenAI Signaling Flow
          </h2>
        </div>
        <a 
          href={portfolioData.projects[0].repo} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-mono"
        >
          <span>Explore Source Code</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="bento-card rounded-3xl p-6 sm:p-8 space-y-6 border-indigo-500/20">
        <div className="relative z-10 space-y-6">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Here is the end-to-end communication topology engineered for <strong className="text-white">ConvoCam</strong>, combining WebSockets signaling, WebRTC media streaming, and Gemini AI inference:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl bg-dark-surface/90 border border-white/10 space-y-2 relative group hover:border-indigo-400 transition duration-300"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-bold">{s.step}</span>
                    <Icon className="w-4 h-4 text-indigo-400" />
                  </div>
                  <h4 className="text-white font-bold text-sm">{s.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
