"use client";
import React from "react";
import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Search, Activity, Lock } from "lucide-react";
import { TerminalConsole } from "../ui/TerminalConsole";

export const Hero = () => {
  return (
    <section className="container mx-auto relative z-10 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-glow/30 bg-cyan-glow/5 text-cyan-glow text-xs font-mono mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
            SYSTEM PROTECTED : VULNGUARD v1.0
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl lg:text-8xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-cyan-glow to-blue-500 bg-clip-text text-transparent text-glow">
              VulnGuard
            </span>
          </motion.h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
            Platform DevSecOps modern untuk mengamankan siklus hidup aplikasi Anda dengan integrasi Trivy, SonarCloud, dan GitHub Actions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-cyan-glow text-slate-950 font-bold rounded-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all">
              Launch Shield
            </button>
            <button className="px-8 py-4 glass border border-slate-800 text-white font-semibold rounded-lg hover:border-cyan-glow/30 transition-all flex items-center gap-2">
              <Terminal className="w-5 h-5" /> View Logs
            </button>
          </div>
        </div>

        {/* Right Content (Terminal) */}
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex-1 w-full max-w-xl"
        >
          <TerminalConsole />
        </motion.div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-slate-900 overflow-hidden">
        {[
          { icon: Search, label: "Real-time Scan" },
          { icon: ShieldCheck, label: "Sonar Verified" },
          { icon: Activity, label: "Pipeline Stats" },
          { icon: Lock, label: "Hardened Infra" },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <item.icon className="w-6 h-6 text-cyan-glow mb-2" />
            <span className="text-white text-sm font-bold uppercase">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};