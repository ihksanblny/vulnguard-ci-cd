"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const TerminalConsole = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const messages = [
      "> Initializing VulnGuard Security Engine...",
      "> Connecting to SonarCloud Node...",
      "> Scanning source code for vulnerabilities...",
      "> [OK] No critical secrets found in environment.",
      "> [INFO] Running Trivy on Docker Image: vulnguard-v1.0...",
      "> [SUCCESS] 0 Critical, 2 Medium vulnerabilities found.",
      "> Generating security report...",
      "> Pipeline Status: SECURE",
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < messages.length) {
        setLogs((prev) => [...prev, messages[current]]);
        current++;
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Tampilan "loading" statis saat server render (SSR)
  if (!mounted) {
    return <div className="glass rounded-xl h-64 border border-slate-800 bg-slate-950/50" />;
  }

  return (
    <div className="glass rounded-xl border border-slate-800 overflow-hidden shadow-2xl">
      <div className="bg-slate-900/80 px-4 py-2 flex items-center justify-between border-b border-slate-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">security-console.sh</span>
      </div>
      <div className="p-6 h-64 font-mono text-sm overflow-hidden bg-slate-950/50">
        {logs.map((log, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={i} 
            className={`mb-2 ${
              // Penambahan tanda tanya (?) di log?.includes adalah KUNCI
              log?.includes('SUCCESS') ? 'text-green-400' : 
              log?.includes('WARN') ? 'text-yellow-400' : 
              'text-slate-300'
            }`}
          >
            {log}
          </motion.div>
        ))}
        <div className="w-2 h-5 bg-cyan-glow animate-pulse inline-block" />
      </div>
    </div>
  );
};