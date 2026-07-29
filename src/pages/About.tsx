import SiteLayout from "@/components/SiteLayout";

const About = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-background">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-eyebrow text-gold mb-6">The Stewards</p>
          <h1 className="text-display text-forest text-6xl md:text-7xl lg:text-8xl">
            <span className="italic">About</span> the owners.
          </h1>
          <div className="mt-8 flex justify-center">
            <span className="gold-divider" />
          </div>
        </div>
      </section>

      <article className="pb-32">
        <div className="mx-auto max-w-[680px] px-6">
          <section className="mb-16">
            <p className="prose-estate mb-6 first-letter:font-serif first-letter:text-7xl first-letter:float-left first-letter:leading-[0.85] first-letter:mr-3 first-letter:mt-1 first-letter:text-gold">
              Cherry Hill is now in the care of Ben and Julia Strong, two leaders in the
              nonprofit environmental space who were drawn to the estate not only for its
              architecture, but for its potential to serve the community as it enters its
              next century.
            </p>
            <p className="prose-estate mb-6">
              <a
                href="https://www.linkedin.com/in/bengmstrong/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:text-gold transition-colors link-underline"
              >
                Ben Strong
              </a>
              , a Roanoke native, and{" "}
              <a
                href="https://www.linkedin.com/in/julia-osterman-strong/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest hover:text-gold transition-colors link-underline"
              >
                Julia Strong
              </a>
              {" "}share a lifelong commitment to conservation, climate, and public service.
              Their work has shaped national environmental programs, and their stewardship of
              Cherry Hill reflects that same sense of purpose — preserving a place with a
              deep past while making room for new ideas, gatherings, and creative life.
            </p>
            <p className="prose-estate">
              Under their care, Cherry Hill is being renewed as a home for history,
              culture, and quiet beauty in the heart of South Roanoke.
            </p>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
};

export default About;
