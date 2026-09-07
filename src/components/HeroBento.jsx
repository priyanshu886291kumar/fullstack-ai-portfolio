import React from 'react';
import { Copy, Github, Award, Code2, Briefcase, Layers, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HeroBento({ onCopy }) {
  const { personal, stats, skills } = portfolioData;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="overview" className="grid grid-cols-1 md:grid-cols-12 gap-4">
      
      {/* PRIMARY HERO CARD (8 cols) */}
      <div 
        onMouseMove={handleMouseMove}
        className="bento-card md:col-span-8 rounded-3xl p-6 sm:p-10 flex flex-col justify-between group"
      >
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(129, 140, 248, 0.15), transparent 80%)'
          }}
        />

        <div className="space-y-5 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
              Open for Full-Stack & Generative AI Roles
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
              {stats.college}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Building <span className="text-gradient">real-time</span> & AI-powered web applications.
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            {personal.bio}
          </p>
        </div>

        <div className="pt-8 flex flex-wrap items-center gap-3 relative z-10 border-t border-white/5 mt-6">
          <button 
            onClick={() => onCopy(personal.email, 'Email copied to clipboard!')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs transition shadow-lg shadow-indigo-500/20"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Email</span>
          </button>
          
          <a 
            href={portfolioData.projects[0].repo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition"
          >
            <Github className="w-3.5 h-3.5 text-indigo-400" />
            <span>ConvoCam Repo</span>
          </a>

          <a 
            href={personal.codolio} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-medium transition"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Codolio (LeetCode & GFG)</span>
          </a>
        </div>
      </div>

      {/* DSA & PROBLEM SOLVING METRICS (4 cols) */}
      <div 
        onMouseMove={handleMouseMove}
        className="bento-card md:col-span-4 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group"
      >
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(300px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(251, 191, 36, 0.12), transparent 80%)'
          }}
        />

        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Code2 className="w-4 h-4" /> Problem Solving
            </span>
            <a 
              href={personal.codolio} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[11px] font-mono text-amber-300 hover:underline flex items-center gap-1"
            >
              <span>Codolio Profile</span>
              <span>↗</span>
            </a>
          </div>

          <div>
            <div className="text-4xl font-extrabold text-white font-mono flex items-baseline gap-2">
              {stats.dsaSolved}
              <span className="text-xs text-slate-400 font-sans font-normal">DSA Problems</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Tracked across LeetCode & GeeksforGeeks on Codolio.
            </p>
          </div>

          {/* Ratio bar */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-xs text-slate-300 font-mono">
              <span className="text-emerald-400">Easy (~180)</span>
              <span className="text-amber-400">Medium (~360)</span>
              <span className="text-rose-400">Hard (~60+)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 flex overflow-hidden">
              <div className="h-full bg-emerald-400 w-[30%]"></div>
              <div className="h-full bg-amber-400 w-[60%]"></div>
              <div className="h-full bg-rose-400 w-[10%]"></div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 space-y-2 relative z-10 mt-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Flipkart GRID 6.0 & 7.0:</span>
            <span className="text-white font-mono font-medium">Finalist & Rd 1 Clear</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">JEE Mains All India Rank:</span>
            <span className="text-indigo-400 font-mono font-semibold">AIR 26,373 (Top 2%)</span>
          </div>
        </div>
      </div>

      {/* PRODUCTION EXPERIENCE CARD (6 cols) */}
      <div 
        onMouseMove={handleMouseMove}
        className="bento-card md:col-span-6 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group"
      >
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(99, 102, 241, 0.12), transparent 80%)'
          }}
        />

        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Associate Software Engineer (Intern)</h3>
                <p className="text-xs text-indigo-400 font-medium">MAQ Software • 6 Months (Jan 2026 – Jun 2026)</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Production</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Enhanced production JavaScript web resources by introducing structured logging and <span className="text-white font-semibold">Azure Application Insights</span> integration, improving observability and reducing diagnostic time across Test, RB, and PPE environments.
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300">JavaScript</span>
            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300">Dynamics 365</span>
            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300">Power Platform</span>
            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300">KQL</span>
          </div>
        </div>
      </div>

      {/* FULL-STACK TECH MATRIX (6 cols) */}
      <div 
        onMouseMove={handleMouseMove}
        className="bento-card md:col-span-6 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group"
      >
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(56, 189, 248, 0.12), transparent 80%)'
          }}
        />

        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Full-Stack Ecosystem
            </span>
            <span className="text-xs text-slate-400 font-mono">MERN + Python + GenAI</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-[11px] font-mono text-slate-400 block">Frontend & UI</span>
              <p className="text-xs text-white font-semibold">React.js, Tailwind CSS, WebRTC, Bootstrap</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-[11px] font-mono text-slate-400 block">Backend & APIs</span>
              <p className="text-xs text-white font-semibold">Node.js, Express, FastAPI, Socket.IO, REST APIs</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-[11px] font-mono text-slate-400 block">AI & Machine Learning</span>
              <p className="text-xs text-white font-semibold">Google Gemini API, LangChain, DeepFace, MiniLM</p>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
              <span className="text-[11px] font-mono text-slate-400 block">Databases & DevOps</span>
              <p className="text-xs text-white font-semibold">MongoDB, PostgreSQL, Redis, Docker, AWS, Vercel</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
