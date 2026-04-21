import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import Hero from "@/components/Hero";
import staircase from "@/assets/staircase.jpg";
import gardens from "@/assets/gardens.jpg";

const Index = () => {
  return (
    <SiteLayout transparentHeader>
      <Hero />

      {/* Introduction */}
      <section className="py-28 md:py-40 bg-background">
        <div className="mx-auto max-w-[650px] px-6 text-center">
          <div className="flex justify-center mb-10">
            <span className="gold-divider" />
          </div>
          <p className="text-eyebrow text-gold mb-8">Welcome to Cherry Hill</p>
          <p className="prose-estate">
            Completed in 1925, Cherry Hill is a Georgian mansion designed by New York
            architect A. J. Bodker for industrialist Edgar M. Funkhouser. Built of brick
            and steel with teak floors and a sweeping curved staircase, the estate served
            for nearly two decades as the home of the Roanoke Fine Arts Center — the
            institution that would one day become the Taubman Museum of Art.
          </p>
        </div>
      </section>

      {/* History teaser */}
      <section className="py-28 md:py-36 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 border border-gold/40 -z-10" aria-hidden />
              <img
                src={staircase}
                alt="The swirling teak staircase inside Cherry Hill"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover shadow-portrait"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-eyebrow text-gold mb-5">A Glimpse of the History</p>
              <h2 className="text-display text-forest text-5xl md:text-6xl mb-8">
                One hundred years <span className="italic">on the hill.</span>
              </h2>
              <p className="prose-estate mb-6">
                On a five-acre rise in South Roanoke, Cherry Hill has stood for a century.
                In 1965, the Funkhouser family donated the estate to the Roanoke Fine Arts
                Center, and for nearly two decades it served as the cultural heart of the
                city.
              </p>
              <p className="prose-estate mb-10">
                Now, a hundred years after it was built, Cherry Hill begins its next chapter.
              </p>
              <Link
                to="/history"
                className="inline-flex items-center gap-3 text-eyebrow text-forest hover:text-gold transition-colors group"
              >
                <span className="link-underline">Read the Full History</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stay With Us */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <img
          src={gardens}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/80" aria-hidden />
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <p className="text-eyebrow text-gold mb-6">Stay With Us</p>
          <h2 className="text-display text-ivory text-5xl md:text-6xl mb-8">
            <span className="italic">Be a guest</span> of the estate.
          </h2>
          <p className="text-ivory/85 font-body text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            A handful of rooms within Cherry Hill are opening to overnight guests. Wake to
            sunlight on teak floors, take coffee in the garden, and pass an evening in rooms
            that have hosted a century of conversation.
          </p>
          <Link
            to="/rent-a-room"
            className="inline-block px-10 py-4 border border-gold/70 text-gold-soft text-eyebrow hover:bg-gold hover:text-charcoal transition-colors duration-500"
          >
            Inquire About Rooms
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
