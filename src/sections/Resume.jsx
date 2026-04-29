import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Resume = () => {
  const resumeRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".resume-title", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: resumeRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".edu-card", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".education-section",
          start: "top 80%",
        },
      });

      gsap.from(".tech-card", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tech-section",
          start: "top 80%",
        },
      });
    },
    { scope: resumeRef }
  );

  return (
    <section
      ref={resumeRef}
      className="relative z-10 overflow-hidden py-16 lg:py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[140px]" />
      </div>

      <div className="main-container">
        {/* Title */}
        <div className="resume-title flex flex-col gap-2 mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Resume
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Education & Tech Stack
          </h2>
          <p className="max-w-3xl text-white/60 text-base md:text-lg leading-relaxed">
            A quick overview of my academic background and the technologies I use
            to build modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Education */}
          <div className="education-section flex flex-col gap-6">
            <h3 className="text-xl font-heading font-semibold text-white">
              Education
            </h3>

            <div className="edu-card rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 lg:p-7 shadow-lg">
              <p className="text-lg lg:text-xl font-semibold text-white">
                Master of Computer Applications (MCA)
              </p>
              <p className="text-white/60 mt-1">
                Indira Gandhi Institute of Technology, Sarang (IGIT), Odisha
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    CGPA
                  </p>
                  <p className="text-lg font-semibold text-white">9.14</p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    Passout
                  </p>
                  <p className="text-lg font-semibold text-white">2026</p>
                </div>
              </div>
            </div>

            <div className="edu-card rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 lg:p-7 shadow-lg">
              <p className="text-lg lg:text-xl font-semibold text-white">
                Bachelor of Science in Computer Science (BSc CS)
              </p>
              <p className="text-white/60 mt-1">
                North Odisha University, Baripada, Odisha
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    CGPA
                  </p>
                  <p className="text-lg font-semibold text-white">8.76</p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-widest text-white/50">
                    Passout
                  </p>
                  <p className="text-lg font-semibold text-white">2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="tech-section flex flex-col gap-6">
            <h3 className="text-xl font-heading font-semibold text-white">
              Tech Stack
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {/* Node */}
              <div className="tech-card group rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 flex flex-col items-center justify-center gap-3 shadow-md">
                <img src="/nodejs.svg" alt="Node.js" className="w-12 h-12" />
                <p className="text-sm text-white/70 font-medium">Node.js</p>
              </div>

              {/* Express */}
              <div className="tech-card group rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 flex flex-col items-center justify-center gap-3 shadow-md">
                <img src="/expressjs.svg" alt="Express.js" className="w-12 h-12" />
                <p className="text-sm text-white/70 font-medium">Express.js</p>
              </div>

              {/* MongoDB */}
              <div className="tech-card group rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 flex flex-col items-center justify-center gap-3 shadow-md">
                <img src="/mongodb.svg" alt="MongoDB" className="w-12 h-12" />
                <p className="text-sm text-white/70 font-medium">MongoDB</p>
              </div>

              {/* React */}
              <div className="tech-card group rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 flex flex-col items-center justify-center gap-3 shadow-md">
                <img src="/react.svg" alt="React" className="w-12 h-12" />
                <p className="text-sm text-white/70 font-medium">React</p>
              </div>

              {/* JavaScript */}
              <div className="tech-card group rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 flex flex-col items-center justify-center gap-3 shadow-md">
                <img src="/javascript.svg" alt="JavaScript" className="w-12 h-12" />
                <p className="text-sm text-white/70 font-medium">JavaScript</p>
              </div>

              {/* Tailwind */}
              <div className="tech-card group rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 flex flex-col items-center justify-center gap-3 shadow-md">
                <img src="/tailwindcss.svg" alt="Tailwind CSS" className="w-12 h-12" />
                <p className="text-sm text-white/70 font-medium">Tailwind</p>
              </div>

              {/* CSS */}
              <div className="tech-card group rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 flex flex-col items-center justify-center gap-3 shadow-md">
                <img src="/css3.svg" alt="CSS3" className="w-12 h-12" />
                <p className="text-sm text-white/70 font-medium">CSS3</p>
              </div>

              {/* HTML */}
              <div className="tech-card group rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 flex flex-col items-center justify-center gap-3 shadow-md">
                {/* <img src="/html5.svg" alt="HTML5" className="w-12 h-12" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" width="40" height="40" fill="white" viewBox="0 0 24 24">
  <path d="M3 2l1.8 20L12 22l7.2-2L21 2H3zm14.5 6H8l.2 2h9.1l-.7 8-4.6 1.3-4.6-1.3-.3-4h2.3l.2 2.1 
  2.4.7 2.4-.7.3-3.1H6.3L5.8 6h11.9l-.2 2z"/>
</svg>
                <p className="text-sm text-white/70 font-medium">HTML5</p>
              </div>

              {/* Git */}
              <div className="tech-card group rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 flex flex-col items-center justify-center gap-3 shadow-md">
                <img src="/python.svg" alt="Python" className="w-12 h-12" />
                <p className="text-sm text-white/70 font-medium">Python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;