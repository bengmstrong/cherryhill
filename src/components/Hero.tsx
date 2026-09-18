import heroImage from "@/assets/cherry-hill-exterior.webp";

const Hero = () => {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Cherry Hill — front facade of the 1925 Georgian mansion in South Roanoke"
        className="absolute inset-0 h-full w-full object-cover animate-soft-zoom"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-overlay)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-vignette)" }}
        aria-hidden
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-eyebrow text-gold-soft mb-8 animate-fade-in text-slate-50" style={{ animationDelay: "300ms" }}>
          Est. 1925 · Roanoke, Virginia
        </p>
        <h1
          className="text-display text-ivory text-[clamp(3.5rem,11vw,9rem)] leading-[0.95] animate-fade-up"
          style={{ animationDelay: "150ms" }}
        >
          <span className="font-light">Cherry</span>
          <br className="md:hidden" />
          <span className="md:ml-6 font-normal">Hill</span>
        </h1>
        <div className="mt-10 flex items-center gap-4 animate-fade-in" style={{ animationDelay: "700ms" }}>
          <span className="gold-divider" />
        </div>
        <p
          className="mt-10 max-w-xl text-ivory/85 text-lg md:text-xl font-body italic animate-fade-up"
          style={{ animationDelay: "550ms" }}
        >
          A historic estate in the heart of Roanoke, Virginia.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: "1200ms" }}>
        <span className="text-eyebrow text-ivory/70 text-[0.625rem]">Scroll</span>
        <div className="h-12 w-px bg-ivory/40 relative overflow-hidden">
          <span className="absolute top-0 left-0 right-0 h-1/2 bg-gold animate-[fadeIn_2s_ease-in-out_infinite_alternate]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
