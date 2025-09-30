import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#F7F1EF] shadow-sm ring-1 ring-black/5 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Image side */}
            <div className="relative md:col-span-1 md:flex md:items-center md:justify-center">
              <img
                src="/about.png"
                alt="About Christopher in the orchard"
                className="block w-full h-auto md:max-h-[600px] object-contain md:object-center"
              />
            </div>

            {/* Content side */}
            <div className="px-5 md:px-10 py-5 md:py-10 md:col-span-2 rounded-l-3xl">
              <h1 className="text-2xl md:text-5xl font-bold">About Me</h1>
              <div className="mt-5 space-y-5">
                <p>
                  Christopher Sorensen is a chef with more than 30 years of
                  culinary experience, whose journey began as a teenager working
                  in a neighborhood brasserie. That early spark set him on a
                  path that has taken him through some of the world’s most
                  respected kitchens, from Blue Hill at Stone Barns in New York
                  to Raymond Blanc’s Le Manoir aux Quat’ Saisons in Oxfordshire,
                  England. His career across France, Italy, and Spain further
                  deepened his understanding of seasonality, terroir, and the
                  dialogue between farmer, producer, and chef. Christopher’s
                  cooking is defined by a vegetable-forward philosophy — not
                  strictly vegetarian, but rooted in the belief that the garden
                  should guide the plate. Seasonality and sustainability are not
                  abstract ideals in his kitchen, but daily practices that shape
                  menus and inspire creativity. He balances health and flMy Bio:
                  Christopher Sorensen is a chef with more than 30 years of
                  culinary experience, whose journey began as a teenager working
                  in a neighborhood brasserie. That early spark set him on a
                  path that has taken him through some of the world’s most
                  respected kitchens, from Blue Hill at Stone Barns in New York
                  to Raymond Blanc’s Le Manoir aux Quat’ Saisons in Oxfordshire,
                  England. His career across France, Italy, and Spain further
                  deepened his understanding of seasonality, terroir, and the
                  dialogue between farmer, producer, and chef.
                </p>
                <p>
                  Christopher’s cooking is defined by a vegetable-forward
                  philosophy — not strictly vegetarian, but rooted in the belief
                  that the garden should guide the plate. Seasonality and
                  sustainability are not abstract ideals in his kitchen, but
                  daily practices that shape menus and inspire creativity. He
                  balances health and flavor, creating dishes that are vibrant,
                  nourishing, and grounded in a respect for ingredients at their
                  peak.
                </p>
                <p>
                  Drawing on three decades of experience, Christopher brings
                  together classical European training, the rigor of world-class
                  kitchens, and a modern sensibility that celebrates healthy,
                  delicious food. His vision is clear: food should be honest,
                  connected to nature, and crafted with both pleasure and
                  responsibility in mind.
                </p>
                {/* <p>
                  avor, creating dishes that are vibrant, nourishing, and
                  grounded in a respect for ingredients at their peak. Drawing
                  on three decades of experience, Christopher brings together
                  classical European training, the rigor of world-class
                  kitchens, and a modern sensibility that celebrates healthy,
                  delicious food. His vision is clear: food should be honest,
                  connected to nature, and crafted with both pleasure and
                  responsibility in mind.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

