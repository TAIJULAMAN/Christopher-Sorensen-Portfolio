import React from "react";

const works = [
  {
    title: "Harmony Feast",
    caption: "A balanced mix of flavors and textures",
    img: "/1.png",
  },
  {
    title: "Dragon's Delight",
    caption: "A balanced mix of flavors and textures",
    img: "/2.png",
  },
  {
    title: "Savor Symphony",
    caption: "A balanced mix of flavors and textures",
    img: "/3.png",
  },
  {
    title: "Zen Garden Platter",
    caption: "A balanced mix of flavors and textures",
    img: "/4.png",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#111827] tracking-wide fredoka">
            WHERE FLAVOR MEETS ART
          </h2>
          <p className="mt-3 text-base font-[500] text-[#111827] fredoka">
            From traditional techniques to modern twists, explore my culinary
            work
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10">
          {works.map((item) => (
            <article key={item.title} className="group">
              <div className="w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[550px] w-[100%] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-slate-900 text-center fredoka">
                {item.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 text-center fredoka">
                {item.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
