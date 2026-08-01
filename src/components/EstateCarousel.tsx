import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ballroom from "@/assets/ballroom.webp.asset.json";
import library from "@/assets/library.webp.asset.json";
import foyer from "@/assets/foyer.webp.asset.json";
import porticoView from "@/assets/portico-view.webp.asset.json";
import exterior from "@/assets/cherry-hill-exterior.webp";

const slides = [
  { src: exterior, alt: "Cherry Hill's Georgian brick facade and columned portico" },
  { src: foyer.url, alt: "The entry hall and curved staircase at Cherry Hill" },
  { src: ballroom.url, alt: "The grand drawing room with crystal chandeliers and fireplace" },
  { src: library.url, alt: "The paneled library with carved woodwork and fireplace" },
  { src: porticoView.url, alt: "The grounds seen from between the portico columns" },
];

const EstateCarousel = () => {
  return (
    <section className="py-24 md:py-32 bg-cream/40 grain">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.alt}>
                <div className="relative aspect-[3/2] overflow-hidden bg-charcoal/5">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 md:-left-12 border-gold/40 text-forest" />
          <CarouselNext className="right-3 md:-right-12 border-gold/40 text-forest" />
        </Carousel>
      </div>
    </section>
  );
};

export default EstateCarousel;
