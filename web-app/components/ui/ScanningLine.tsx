"use client";
import React from "react";
import { motion } from "framer-motion";

export const ScanningLine = () => {
  return (
    <motion.div
      initial={{ top: "-10%" }}
      animate={{ top: "110%" }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 right-0 h-[2px] bg-cyan-glow/20 shadow-[0_0_15px_rgba(34,211,238,0.5)] z-20 pointer-events-none"
    />
  );
};
