import React from "react";

const services = [
  {
    title: "Private Dining",
    desc: "Personalized dining experiences crafted for special occasions, intimate dinners, or corporate events.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Cooking Classes",
    desc: "Hands-on cooking classes to learn authentic techniques and modern plating skills.",
    img: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Menu Consulting",
    desc: "Helping restaurants, cafes, or brands create unique menus, signature dishes, and seasonal specials.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Event Catering",
    desc: "Full-service catering for events, from casual gatherings to high-end celebrations.",
    img: "https://images.unsplash.com/photo-1548940740-204726a19be3?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Service() {
  return (
    <>
      <section id="services" className=" bg-[#093d35]">
        <div className="container mx-auto px-5">
          <div className="rounded-none md:rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left intro */}
              <div className="lg:col-span-4 p-6 sm:p-8 md:p-10 text-white flex items-center">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight fredoka">
                    WHAT I CAN CREATE FOR YOU
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-white/90 fredoka">
                    From personalized dining experiences to hands-on culinary
                    workshops, explore the range of services I offer to bring
                    exceptional flavors and unforgettable moments to every
                    table.
                  </p>
                </div>
              </div>

              {/* Right list of services */}
              <div className="lg:col-span-8 border-l border-b border-white/20 mb-10">
                {/* Scrollable row on small screens, grid on large */}
                <div className="flex gap-6 overflow-x-auto px-6 py-8 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:px-8 lg:py-10">
                  {services.map((s) => (
                    <article
                      key={s.title}
                      className="min-w-[240px] max-w-[280px] lg:min-w-0 lg:max-w-none snap-start bg-white rounded md:rounded-lg shadow-sm"
                    >
                      <div className="aspect-[4/5] w-full overflow-hidden">
                        <img
                          src={s.img}
                          alt={s.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm sm:text-base font-semibold text-[#111827]">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-[#374151]">
                          {s.desc}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
