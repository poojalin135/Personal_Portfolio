import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CTA = () => {
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const ruleRef = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.65, delay: 0.15 })
      .to(headingRef.current, { opacity: 1, y: 0, duration: 0.7, delay: 0.15 })
      .to(ruleRef.current, { scaleX: 1, duration: 0.9, transformOrigin: "left", delay: 0.25 })
      .to(actionsRef.current, { opacity: 1, y: 0, duration: 0.65, delay: 0.15 });
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden bg-black text-white">
      {/* Glow Blob */}
      <div className="absolute top-1/2 left-1/2 w-[60vw] max-w-[600px] h-[60vw] max-h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-purple-700/10 to-transparent blur-[60px] pointer-events-none z-0" />

      {/* Ring Left */}
      <div className="absolute left-[-100px] top-1/2 w-[340px] h-[340px] -translate-y-1/2 opacity-10 animate-spin-slow z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF4D6D" />
              <stop offset="25%" stopColor="#BD3EB2" />
              <stop offset="50%" stopColor="#7B2FF7" />
              <stop offset="75%" stopColor="#2F86F7" />
              <stop offset="100%" stopColor="#2FF7ED" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" stroke="url(#rg1)" strokeWidth=".6" strokeDasharray="4 12" />
          <circle cx="50" cy="50" r="36" stroke="url(#rg1)" strokeWidth=".4" strokeDasharray="2 14" />
        </svg>
      </div>

      {/* Ring Right */}
      <div className="absolute right-[-70px] top-1/2 w-[250px] h-[250px] -translate-y-1/2 opacity-7 animate-spin-reverse z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="rg2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF4D6D" />
              <stop offset="25%" stopColor="#BD3EB2" />
              <stop offset="50%" stopColor="#7B2FF7" />
              <stop offset="75%" stopColor="#2F86F7" />
              <stop offset="100%" stopColor="#2FF7ED" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="48" stroke="url(#rg2)" strokeWidth=".5" strokeDasharray="2 16" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-[860px] w-full px-6">
        {/* Label Row */}
        <div ref={labelRef} className="flex items-center gap-2 opacity-0 translate-y-3">
          <div className="h-[1.5px] w-8 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 opacity-50 rounded"></div>
          <span className="text-[0.625rem] font-semibold tracking-widest uppercase text-white/40">
            Let's work together
          </span>
          <div className="h-[1.5px] w-8 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 opacity-50 rounded"></div>
        </div>

        {/* Heading */}
        <h4 ref={headingRef} className="opacity-0 translate-y-7 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Looking for a passionate<br />
          Software Developer?
          <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 bg-clip-text text-transparent block">
            Let's build<br />something great.
          </span>
        </h4>

        {/* Center Rule */}
        <div ref={ruleRef} className="h-[1.5px] w-16 bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 opacity-40 origin-left scale-x-0"></div>

        {/* Actions */}
        <div ref={actionsRef} className="flex flex-col items-center gap-3 opacity-0 translate-y-5">
          <a
            href="mailto:poojalinsahoo20@gmail.com"
            className="px-10 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 text-white font-bold uppercase tracking-wider hover:opacity-90 transition"
          >
            Let's Connect
          </a>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/poojalin135" className="text-white/40 font-semibold text-xs uppercase tracking-widest border-b border-white/20 hover:opacity-100 transition">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/poojalin-sahoo-0b6463332" className="text-white/40 font-semibold text-xs uppercase tracking-widest border-b border-white/20 hover:opacity-100 transition">
              LinkedIn ↗
            </a>
            <a href="https://drive.google.com/file/d/1cDjtHPwOiR1ygZyBogZWN_Z_GSCEt65K/view?usp=drivesdk" className="text-white/40 font-semibold text-xs uppercase tracking-widest border-b border-white/20 hover:opacity-100 transition">
              Resume ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;