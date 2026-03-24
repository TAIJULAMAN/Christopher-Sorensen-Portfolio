import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image — bright, airy farmers-market / fresh-produce shot */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/chef2.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Green-tinted gradient overlay */}
      <div
        className="absolute"
        aria-hidden="true"
      />

      {/* Hexagon overlay pattern (subtle green tint) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay"
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
              stroke="rgba(167,243,208,0.18)"
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
              <span className="">experiences</span>
            </span>
            .
          </h1>
          <p className="my-5 md:my-5 text-sm sm:text-base md:text-lg fredoka text-center text-white/90">
            Where simplicity meets sophistication and every bite tells a story.
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 rounded-full shadow-lg shadow-emerald-900/30 transition-all"
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
