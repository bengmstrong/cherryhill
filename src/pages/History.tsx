import SiteLayout from "@/components/SiteLayout";
import historic from "@/assets/historic-archival.jpg";

const History = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-background">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-eyebrow text-gold mb-6">The History</p>
          <h1 className="text-display text-forest text-6xl md:text-7xl lg:text-8xl">
            <span className="italic">A house</span> built to last centuries.
          </h1>
          <div className="mt-8 flex justify-center">
            <span className="gold-divider" />
          </div>
        </div>
      </section>

      <figure className="mx-auto max-w-6xl px-6 mb-20">
        <img
          src={historic}
          alt="Historic exterior — archival photo of Cherry Hill"
          className="w-full aspect-[16/9] object-cover shadow-portrait"
        />
        <figcaption className="text-eyebrow text-muted-foreground mt-4 text-center text-[0.625rem]">
          Historic exterior — archival photo
        </figcaption>
      </figure>

      {/* Long-form article */}
      <article className="pb-32">
        <div className="mx-auto max-w-[680px] px-6">
          <section className="mb-16">
            <h2 className="text-display text-forest text-4xl md:text-5xl mb-8">
              A Georgian Estate <span className="italic">in South Roanoke</span>
            </h2>
            <p className="prose-estate mb-6 first-letter:font-serif first-letter:text-7xl first-letter:float-left first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1 first-letter:text-gold">
              Cherry Hill was completed in 1925 on a five-acre rise in South Roanoke,
              designed by New York architect A. J. Bodker for Edgar M. Funkhouser. A
              Georgian home of brick and steel with teak floors and a swirling staircase,
              it was built for a generation that believed a house should last centuries.
            </p>
          </section>

          <div className="flex justify-center my-16">
            <span className="gold-divider" />
          </div>

          <section className="mb-16">
            <h2 className="text-display text-forest text-4xl md:text-5xl mb-8">
              The <span className="italic">Fine Arts</span> Years
            </h2>
            <p className="prose-estate mb-6">
              In 1965, Anne Funkhouser Francis donated the family estate to the Roanoke
              Fine Arts Center. For nearly two decades, Cherry Hill served as the cultural
              heart of the city — the forerunner of what is today the Taubman Museum of
              Art. When the collection moved downtown in 1983, the mansion returned to
              private life.
            </p>
          </section>

          <div className="flex justify-center my-16">
            <span className="gold-divider" />
          </div>

          <section>
            <h2 className="text-display text-forest text-4xl md:text-5xl mb-8">
              A <span className="italic">New Chapter</span>
            </h2>
            <p className="prose-estate">
              Now, a century after it was built, Cherry Hill begins its next chapter.
            </p>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
};

export default History;
