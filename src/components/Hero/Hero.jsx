import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[78vh] md:min-h-[82vh] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Hexagon overlay pattern (subtle) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="hex"
            width="40"
            height="34.64"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1)"
          >
            <path
              d="M20 0 L40 11.547 L40 23.094 L20 34.64 L0 23.094 L0 11.547 Z"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 md:px-0 flex items-center justify-center min-h-[70vh] sm:min-h-[78vh] md:min-h-[82vh]">
        <div className="max-w-5xl text-white text-center">
          <h1 className="text-xl md:text-6xl font-semibold actor leading-tight">
            Elevating simple ingredients
            <br />
            into extraordinary
            <span className="relative whitespace-nowrap">
              {" "}
              <span className="font-extrabold audiowide">experiences</span>
              <span className="absolute left-0 -bottom-1 sm:-bottom-2 w-full h-[3px] sm:h-[4px] md:h-[6px] bg-white/80 rounded" />
            </span>
            .
          </h1>
          <p className="my-5 md:my-5 text-sm sm:text-base md:text-lg fredoka text-center text-white/90">
            Where simplicity meets sophistication and every bite tells a story.
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 rounded-full shadow-lg shadow-orange-900/30 transition-all"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
