import React, { useRef, useEffect } from "react";
import GradientButton from "../components/GradientButton";
import CircleSVG from "../components/CircleSVG";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    // Pin the hero section on scroll
    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    });

    // Split H1 into lines/words
    const h1Split = new SplitText(hero.querySelector("h1"), {
      type: "lines, words",
      linesClass: "lineChild",
    });
    gsap.from(h1Split.words, {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });

    // Split H2 into lines/words
    const h2Split = new SplitText(hero.querySelector("h2"), {
      type: "lines, words",
      linesClass: "lineChild",
    });
    gsap.from(h2Split.words, {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      delay: 0.5,
      ease: "power3.out",
    });

    // Animate button
    gsap.from(".gradien-btn", {
      opacity: 0,
      y: 40,
      duration: 0.5,
      ease: "power2.out",
      delay: 1.25,
    });

    // Animate star SVG
    const starSvg = hero.querySelector(".star svg");
    gsap.from(starSvg, {
      scale: 0,
      rotate: 180,
      opacity: 0,
      transformOrigin: "center",
      duration: 1.3,
      ease: "back.out(1.7)",
      onComplete: () => {
        gsap.to(starSvg, {
          rotate: "+=360",
          duration: 20,
          ease: "linear",
          repeat: -1,
        });
      },
    });

    // Fade in ring, dot grid, corner lines
    gsap.fromTo(
      hero.querySelector(".ring-orbiter"),
      { opacity: 0 },
      { opacity: 1, duration: 0.8, delay: 0.6 },
    );
    gsap.fromTo(
      hero.querySelector(".dot-grid"),
      { opacity: 0 },
      { opacity: 1, duration: 0.8, delay: 0.8 },
    );
    gsap.fromTo(
      hero.querySelector(".corner-lines"),
      { opacity: 0 },
      { opacity: 1, duration: 0.8, delay: 1.0 },
    );

    // Animate ring orbiter rotation infinitely
    gsap.to(".ring-orbiter svg", {
      rotate: "+=360",
      duration: 60,
      ease: "linear",
      repeat: -1,
    });

    // Animate dot grid drifting slowly
    gsap.to(".dot-grid", {
      x: 20,
      y: -10,
      duration: 15,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    // Animate corner lines floating
    gsap.to(".corner-lines", {
      y: 10,
      duration: 8,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    // Animate stats and badge
    const sequence = [
      ["#badge", 0.1],
      ["h1", 0.3],
      ["h2", 0.5],
      [".tagline", 0.66],
      [".cta-row", 0.8],
      ["#s1", 0.94],
      ["#s2", 1.06],
      ["#s3", 1.18],
      [".scroll-hint", 1.3],
    ];
    sequence.forEach(([selector, delay]) => {
      const el = hero.querySelector(selector);
      if (el) {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          delay: delay,
          duration: 0.7,
          ease: "power3.out",
        });
      }
    });
  }, []);

  return (
    <div
      ref={heroRef}
      className=" main-container hero relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Star */}
      <div className="star absolute top-28 right-[-6%] pointer-events-none z-0">
        <svg
          viewBox="0 0 652 630"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[80vh] max-w-[680px]"
        >
          <path
            d="M289.381 0.584184L332.707 283.938L332.901 285.207L333.615 284.142L495.732 42.7453L529.914 65.1822L353.551 297.418L352.739 298.486L354.052 298.21L643.782 237.192L650.714 275.143L358.107 320.426L356.779 320.631L357.918 321.344L604.869 475.856L580.906 509.364L343.959 340.811L342.914 340.068L343.181 341.322L402.754 621.712L362.16 629.121L318.84 345.765L318.646 344.497L317.931 345.562L155.804 586.956L121.542 564.076L297.984 332.289L298.798 331.22L297.483 331.497L7.75078 392.501L0.584506 353.24L293.425 309.275L294.761 309.075L293.616 308.357L46.5851 153.403L70.6297 120.333L307.587 288.893L308.633 289.637L308.366 288.381L248.787 7.99367L289.381 0.584184Z"
            stroke="url(#paint0_linear_1074_2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1074_2"
              x1="3.79646"
              y1="373.621"
              x2="647.744"
              y2="256.084"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF4D6D" />
              <stop offset="0.25" stopColor="#BD3EB2" />
              <stop offset="0.5" stopColor="#7B2FF7" />
              <stop offset="0.75" stopColor="#2F86F7" />
              <stop offset="1" stopColor="#2FF7ED" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Ring Orbiter */}
      <div className="ring-orbiter absolute bottom-6 left-[-5%] z-0 pointer-events-none w-[28vw] max-w-[300px] opacity-0">
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF4D6D" />
              <stop offset="25%" stopColor="#BD3EB2" />
              <stop offset="50%" stopColor="#7B2FF7" />
              <stop offset="75%" stopColor="#2F86F7" />
              <stop offset="100%" stopColor="#2FF7ED" />
            </linearGradient>
          </defs>
          <circle
            cx="150"
            cy="150"
            r="135"
            stroke="url(#rg)"
            strokeWidth="0.8"
            strokeDasharray="5 12"
          />
          <circle
            cx="150"
            cy="150"
            r="95"
            stroke="url(#rg)"
            strokeWidth="0.5"
            strokeDasharray="2 16"
            opacity="0.5"
          />
          <circle cx="150" cy="15" r="5" fill="#FF4D6D" />
          <circle cx="285" cy="150" r="4" fill="#7B2FF7" />
          <circle cx="150" cy="285" r="3.5" fill="#2F86F7" />
          <circle cx="15" cy="150" r="4" fill="#2FF7ED" />
          <line
            x1="142"
            y1="150"
            x2="158"
            y2="150"
            stroke="url(#rg)"
            strokeWidth="0.8"
          />
          <line
            x1="150"
            y1="142"
            x2="150"
            y2="158"
            stroke="url(#rg)"
            strokeWidth="0.8"
          />
          <circle cx="150" cy="150" r="3" fill="url(#rg)" />
        </svg>
      </div>

      {/* Dot Grid */}
      <div className="dot-grid absolute top-[10%] left-[1%] opacity-0 z-0 pointer-events-none">
        <CircleSVG />
      </div>

      {/* Corner Lines */}
      <div className="corner-lines absolute top-[4%] right-[17%] opacity-0 z-0 pointer-events-none">
        <svg
          width="120"
          height="80"
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7B2FF7" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#2FF7ED" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <path d="M0 8 L8 0 L120 0" stroke="url(#cl)" strokeWidth="0.7" />
          <path
            d="M0 28 L8 20 L120 20"
            stroke="url(#cl)"
            strokeWidth="0.5"
            opacity="0.6"
          />
          <path
            d="M0 48 L8 40 L80 40"
            stroke="url(#cl)"
            strokeWidth="0.4"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="main-container h-screen lg:py-12 flex flex-col lg:justify-center items-start max-lg:pt-40 relative z-10 ps-0">
        <div
          className="badge flex items-center gap-2 mb-6 opacity-0"
          id="badge"
        >
          <span className="badge-dot w-2 h-2 rounded-full bg-gradient-to-br from-[#FF4D6D] to-[#7B2FF7] shadow-lg animate-pulse"></span>
          <span className="badge-text text-white text-xs tracking-wider uppercase opacity-60">
            Available for work
          </span>
        </div>

        <h1 className="text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold">
          Poojalin Sahoo
        </h1>
        <h2 className="text-5xl lg:text-[7vw] font-heading font-bold leading-[1] tracking-tight mt-3 mb-6">
          Software <br /> &<span className="text-stroke"> Web Developer</span>
        </h2>
        <p className="tagline opacity-0 mb-6 text-white text-sm">
          Building clean, performant interfaces where thoughtful
          <br />
          code meets bold design.
        </p>

        <div className="cta-row flex gap-4 opacity-0">
          <GradientButton
            text="Let's Talk"
            link="mailto:poojalinsahoo20@gmail.com?subject=Portfolio%20Contact&body=Hi%20Poojalin,%20I%20want%20to%20connect%20with%20you."
            className="gradien-btn"
          />
          <a
            href="#projects"
            className="sec-link flex items-center gap-1.5 text-white text-xs tracking-wider uppercase border-b border-white/20 pb-1"
          >
            View Work
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <path
                d="M3 9h12M10 4l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="stats flex gap-6 pt-4 border-t border-white/10 opacity-0">
          <div className="stat flex flex-col gap-1" id="s1">
            <span className="stat-val text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] via-[#7B2FF7] to-[#2FF7ED] font-bold text-2xl">
              3+
            </span>
            <span className="stat-lbl text-white/40 text-xs uppercase tracking-wider">
              Years exp.
            </span>
          </div>
          <div className="stat flex flex-col gap-1" id="s2">
            <span className="stat-val text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] via-[#7B2FF7] to-[#2FF7ED] font-bold text-2xl">
              20+
            </span>
            <span className="stat-lbl text-white/40 text-xs uppercase tracking-wider">
              Projects
            </span>
          </div>
          <div className="stat flex flex-col gap-1" id="s3">
            <span className="stat-val text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D6D] via-[#7B2FF7] to-[#2FF7ED] font-bold text-2xl">
              100%
            </span>
            <span className="stat-lbl text-white/40 text-xs uppercase tracking-wider">
              Dedication
            </span>
          </div>
        </div>

        <div className="scroll-hint absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
          <span className="scroll-line w-px h-11 bg-gradient-to-b from-transparent via-[#7B2FF7]/60 to-transparent animate-pulse"></span>
          <span className="scroll-txt text-white/20 text-[0.55rem] tracking-wider uppercase">
            scroll
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
