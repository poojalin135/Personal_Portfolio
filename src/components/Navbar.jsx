import React, { useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useGSAP(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -100,
      duration: 0.6,
    });
  });
  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed w-full top-0 mix-blend-difference z-30"
      >
        <div>
          <div className="main-container py-6 flex justify-between items-center">
            <Link to={"/"} className="font-bold text-4xl font-[font-heading]">PS</Link>
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 cursor-pointer"
            >
              <span
                className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-[4px]" : ""} `}
              ></span>
              <span className={`inline-block w-10 lg:w-12 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 translate-y-[4px]" : ""} `}></span>
            </div>
          </div>
        </div>
      </nav>

      <div onClick={()=> setMenuOpen(false)} className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center text-3xl gap-8 transition-transform duration-500 ${menuOpen ? "translate-y-0":"-translate-y-full"} `}>
        <Link
          to="/"
          className="text-[10vw] lg:text-[6vw] font-heading font-medium uppercase opacity-60 hover:opacity-100"
        >
          Home
        </Link>
        <a
          href="#projects"
          className="text-[10vw] lg:text-[6vw] font-heading font-medium uppercase opacity-60 hover:opacity-100"
        >
          Projects
        </a>
        <a
          href="poojalinsahoo20@gmail.com"
          className="text-[10vw] lg:text-[6vw] font-heading font-medium uppercase opacity-60 hover:opacity-100"
        >
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
