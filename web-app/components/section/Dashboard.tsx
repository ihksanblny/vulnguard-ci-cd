"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

export const Dashboard = () => {
  const [threatCount, setThreatCount] = useState(1204);
  const [status, setStatus] = useState("Monitoring");
  const [mounted, setMounted] = useState(false); // Tambahkan ini

  useEffect(() => {
    setMounted(true); // Set true setelah komponen menempel di browser
    
    const interval = setInterval(() => {
      setThreatCount(prev => prev + Math.floor(Math.random() * 3));
      const statuses = ["Monitoring", "Scanning Node", "Analyzing Log", "Hardening"];
      setStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Jika belum mounted, tampilkan loading sederhana atau null untuk menghindari mismatch
  if (!mounted) return <div className="min-h-[200px]" />;

  return (
    <section className="container mx-auto py-20 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Live Status */}
        <div className="glass p-6 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-slate-400 text-sm font-mono tracking-tighter uppercase">Global Node Status</h3>
            <div className="flex items-center gap-2 text-green-400 text-xs">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Live
            </div>
          </div>
          <div className="flex items-end gap-2 mb-4">
            {/* Pakai angka mentah dulu atau format yang konsisten */}
            <span className="text-4xl font-black text-white">{threatCount.toLocaleString('en-US')}</span>
            <span className="text-cyan-glow text-xs mb-1 uppercase font-bold">Threats Blocked</span>
          </div>
          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: ["20%", "80%", "40%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="h-full bg-cyan-glow shadow-[0_0_10px_#22d3ee]" 
            />
          </div>
        </div>

        {/* Card 2: Activity Log with Math.random fixed */}
        <div className="glass p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-glow/10 rounded-lg text-cyan-glow">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none">Activity Log</p>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={status}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-white font-bold"
                >
                  {status}...
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          {/* Bar grafik sekarang aman karena dirender setelah mounted */}
          <div className="flex items-end gap-1 h-12 mt-4">
            {[...Array(20)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ height: 10 }}
                animate={{ height: [Math.random()*40 + 10, Math.random()*40 + 10] }}
                transition={{ repeat: Infinity, duration: 1, delay: i * 0.05 }}
                className="w-full bg-slate-800 rounded-t-sm"
              />
            ))}
          </div>
        </div>

        {/* Card 3: Resources */}
        <div className="glass p-6 rounded-2xl border border-slate-800 flex gap-6">
            <div className="flex-1">
                <p className="text-slate-500 text-xs uppercase mb-2">CPU LOAD</p>
                <div className="relative w-16 h-16">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-900" />
                        <motion.circle 
                            cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" 
                            strokeDasharray={175}
                            animate={{ strokeDashoffset: [100, 40, 80] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="text-cyan-glow" 
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">42%</div>
                </div>
            </div>
            <div className="flex-1">
                <p className="text-slate-500 text-xs uppercase mb-2">Memory</p>
                <div className="text-2xl font-black text-white">1.2<span className="text-xs text-slate-500 ml-1">GB</span></div>
                <p className="text-[10px] text-green-400 mt-1 uppercase font-bold">Encrypted</p>
            </div>
        </div>

      </div>
    </section>
  );
};