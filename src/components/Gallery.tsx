import parlor from "@/assets/parlor.jpg";
import staircase from "@/assets/staircase.jpg";
import gardens from "@/assets/gardens.jpg";
import portico from "@/assets/portico-detail.jpg";
import dining from "@/assets/dining-room.jpg";
import exterior from "@/assets/cherry-hill-exterior.webp";

const items = [
  { src: exterior, label: "Exterior — Front Facade", className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" },
  { src: parlor, label: "The Parlor", className: "aspect-[4/5]" },
  { src: staircase, label: "The Curved Staircase", className: "aspect-[4/5]" },
  { src: gardens, label: "The Grounds", className: "md:col-span-2 aspect-[16/9]" },
  { src: dining, label: "Dining Room", className: "aspect-[4/5]" },
  { src: portico, label: "Architectural Detail — Portico", className: "aspect-[4/5]" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-28 md:py-36 bg-cream/40 grain">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-eyebrow text-gold mb-4">The Estate</p>
          <h2 className="text-display text-forest text-5xl md:text-6xl">
            <span className="italic">A century</span> in residence
          </h2>
          <div className="mt-6 flex justify-center">
            <span className="gold-divider" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item) => (
            <figure
              key={item.label}
              className={`group relative overflow-hidden bg-charcoal/5 ${item.className}`}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/0 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p className="text-eyebrow text-gold-soft text-[0.625rem] mb-1.5">Cherry Hill</p>
                <p className="font-serif text-ivory text-xl md:text-2xl leading-tight">{item.label}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
