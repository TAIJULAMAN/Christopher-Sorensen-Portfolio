import React, { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  { name: "Blue Apron", logo: "/logo/BlueApron.png" },
  { name: "Sprinly", logo: "/logo/sprinly.png" },
  { name: "Act III Holdings", logo: "/logo/act.png" },
  { name: "Japan External Trade Organization", logo: "/logo/japan.png" },
  { name: "Lactalis", logo: "/logo/lactalis.png" },
  { name: "Timeless Seeds", logo: "/logo/timeless.jpg" },
  { name: "Jasper Hills", logo: "/logo/jasper.png" },
  { name: "Mara Seaweed", logo: "/logo/mara.jpg" },
  { name: "Rumi Spice", logo: "/logo/rumi.png" },
  { name: "Sun Noodle", logo: "/logo/sun.png" },
  { name: "Brodo", logo: "/logo/brodo.png" },
  { name: "Wingstop", logo: "/logo/Wingstop.png" },
  { name: "Tribeca Oven", logo: "/logo/Tribeca Oven.png" },
  { name: "Severino Pasta", logo: "/logo/Severino Pasta.jpg" },
];

/* Gap in px between cards */
const GAP = 20;

export default function Brands() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);

  /* Responsive: 1 card < 480, 2 cards < 768, 3 cards < 1024, 4 cards >= 1024 */
  const getVisibleCount = useCallback(() => {
    const w = window.innerWidth;
    if (w < 480) return 1;
    if (w < 768) return 2;
    if (w < 1024) return 3;
    return 4;
  }, []);

  const calcCardWidth = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const count = getVisibleCount();
    const trackWidth = el.clientWidth;
    setCardWidth((trackWidth - GAP * (count - 1)) / count);
  }, [getVisibleCount]);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    calcCardWidth();
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    const onResize = () => {
      calcCardWidth();
      checkScroll();
    };
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [calcCardWidth, checkScroll]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const count = getVisibleCount();
    const amount = (cardWidth + GAP) * count;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const displayBrands = [...brands, ...brands];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f7faf8]">
      <div className="container mx-auto px-5 md:px-0">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#093d35] fredoka tracking-tight">
            BRANDS I'VE WORKED WITH
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-[#374151] fredoka max-w-2xl mx-auto">
            Proud to have collaborated with these incredible brands and
            organizations.
          </p>
        </div>

        {/* Scrollable banner with arrows */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className={`absolute -left-1 sm:-left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#093d35] text-white shadow-lg transition-all duration-300 hover:bg-[#0c5244] hover:scale-110 ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className={`absolute -right-1 sm:-right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#093d35] text-white shadow-lg transition-all duration-300 hover:bg-[#0c5244] hover:scale-110 ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto py-4 scroll-smooth"
            style={{
              gap: `${GAP}px`,
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {displayBrands.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex-shrink-0 flex flex-col items-center justify-center bg-white rounded-xl border border-[#e5e7eb] shadow-sm hover:shadow-lg hover:border-[#093d35]/30 hover:-translate-y-1 transition-all duration-300 py-5 px-4"
                style={{ width: cardWidth > 0 ? `${cardWidth}px` : "100%" }}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain mb-2"
                  loading="lazy"
                />
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#1f2937] fredoka whitespace-nowrap tracking-wide">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

