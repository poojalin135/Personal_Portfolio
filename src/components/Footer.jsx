import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 text-white">
      {/* Top Divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white/10"></div>

      {/* Main Footer Grid */}
      <div className="main-container grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
        {/* Logo */}
        <div className="flex flex-col gap-4">
          <p className="font-bold text-4xl font-heading bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 bg-clip-text text-transparent">
            PS
          </p>
          <p className="text-white/50 text-sm lg:text-base max-w-[250px]">
            Crafting software solutions and web experiences with a touch of creativity.
          </p>
        </div>

        {/* Technologies */}
        <div>
          <h5 className="font-semibold mb-5 text-white/80">Technologies</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Software Developer
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Web Developer
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                AI/ML Enthusiast
              </a>
            </li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h5 className="font-semibold mb-5 text-white/80">Projects</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Wanderly
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                SaimonSays Web Game
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Portfolio Site
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-semibold mb-5 text-white/80">Contact</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg">
            <li>
              <a
                href="mailto:poojalinsahoo20@gmail.com"
                className="hover:text-purple-400 transition-colors"
              >
                poojalinsahoo20@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white/10"></div>

      {/* Bottom Footer */}
      <div className="main-container flex flex-col lg:flex-row gap-5 justify-between items-center py-6 lg:py-8">
        <div className="text-sm lg:text-base text-white/50 text-center lg:text-left">
          &copy; 2026 PS | All rights reserved
        </div>

        {/* Social Links */}
        <div className="flex gap-5 justify-center">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/poojalin-sahoo-0b6463332"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/poojalin135"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:poojalinsahoo20@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;