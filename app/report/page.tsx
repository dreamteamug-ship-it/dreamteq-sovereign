"use client";
import React from 'react';

export default function InvestorReport() {
  return (
    <div className="bg-black text-white min-h-screen p-10 font-sans">
      <div className="max-w-4xl mx-auto border border-yellow-600/30 p-8 bg-zinc-900/50 rounded-lg">
        <h1 className="text-3xl font-bold text-yellow-500 mb-6 uppercase tracking-tighter">Sovereign Project: M Settlement Landscape</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-4 border border-zinc-700 rounded bg-zinc-950">
            <p className="text-zinc-500 text-xs uppercase tracking-widest">Project Capitalization</p>
            <p className="text-4xl font-mono text-white">,600,000</p>
          </div>
          <div className="p-4 border border-zinc-700 rounded bg-yellow-950/20">
            <p className="text-zinc-500 text-xs uppercase tracking-widest">Audit Posture</p>
            <p className="text-4xl font-mono text-yellow-500">HARDENED</p>
          </div>
        </div>
        <div className="space-y-4 text-zinc-300">
          <p>The settlement engine is now active across the Abim West and Nyanza clusters. All Docker-based Sovereign nodes are reporting 99.9% uptime.</p>
          <div className="p-4 border-l-4 border-yellow-600 bg-zinc-800/30 italic">
            "Sovereignty is not just about ownership, it's about the technical freedom to scale."
          </div>
        </div>
      </div>
    </div>
  );
}
