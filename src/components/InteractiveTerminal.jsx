import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Full-Stack Runtime initialized. Node.js & React environment active.' },
    { type: 'system', text: 'Available commands: whoami, skills, projects, experience, education, contact, clear' },
  ]);

  const outputRef = useRef(null);

  const { personal, stats, skills, projects, experience, education } = portfolioData;

  const commands = {
    help: 'Available commands: whoami, skills, projects, experience, education, contact, clear',
    whoami: `${personal.name} — ${personal.title} (IIIT Guwahati, ex-MAQ Software). Full-stack & GenAI engineer with 600+ DSA solved.`,
    skills: `Frontend: ${skills.frontend.join(', ')}\nBackend: ${skills.backend.join(', ')}\nAI & ML: ${skills.aiml.join(', ')}\nDatabases: ${skills.databases.join(', ')}`,
    projects: projects.map((p, i) => `${i + 1}. ${p.title} (${p.tags.slice(0, 3).join(', ')})`).join('\n'),
    experience: experience.map(e => `${e.company} — ${e.role} (${e.duration})\n  • ${e.bullets[0]}`).join('\n\n'),
    education: education.map(ed => `${ed.school} — ${ed.degree} (${ed.year}, ${ed.score})`).join('\n'),
    contact: `Email: ${personal.email} | Phone: ${personal.phone} | Codolio: ${personal.codolio}`,
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim().toLowerCase();
      if (!trimmed) return;

      if (trimmed === 'clear') {
        setHistory([]);
      } else if (commands[trimmed]) {
        setHistory(prev => [
          ...prev,
          { type: 'user', text: input },
          { type: 'response', text: commands[trimmed] }
        ]);
      } else {
        setHistory(prev => [
          ...prev,
          { type: 'user', text: input },
          { type: 'error', text: `Command not found: "${trimmed}". Type "help" for a list of commands.` }
        ]);
      }

      setInput('');
    }
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section id="terminal" className="space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
        <TerminalIcon className="w-3.5 h-3.5" />
        Interactive Console
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        Try the Full-Stack CLI
      </h2>

      <div className="bento-card rounded-3xl p-6 bg-[#090d1c] font-mono text-xs sm:text-sm border-white/10 shadow-2xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-indigo-500/80"></span>
            <span className="text-slate-400 text-xs ml-2 font-mono">priyanshu@iiitg-fullstack-node:~</span>
          </div>
          <span className="text-[11px] text-slate-400 hidden sm:inline">Type <strong className="text-indigo-400">help</strong> to see commands</span>
        </div>

        <div ref={outputRef} className="space-y-2 text-slate-300 max-h-60 overflow-y-auto leading-relaxed">
          {history.map((item, idx) => {
            if (item.type === 'user') {
              return (
                <p key={idx}>
                  <span className="text-indigo-400 font-bold">$</span> <span className="text-white">{item.text}</span>
                </p>
              );
            }
            if (item.type === 'error') {
              return <p key={idx} className="text-rose-400">{item.text}</p>;
            }
            if (item.type === 'system') {
              return <p key={idx} className="text-indigo-400">{item.text}</p>;
            }
            return <p key={idx} className="text-slate-300 whitespace-pre-line">{item.text}</p>;
          })}
        </div>

        <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
          <span className="text-indigo-400 font-bold">$</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (e.g. skills)..." 
            className="bg-transparent text-white focus:outline-none flex-1 font-mono text-xs sm:text-sm" 
            autoComplete="off" 
            spellCheck="false"
          />
        </div>
      </div>
    </section>
  );
}
