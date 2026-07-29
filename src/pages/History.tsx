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
              Cherry Hill was built in the early 1920s on a five-acre rise in South
              Roanoke, bounded by 22nd and 23rd streets between Carolina and Crystal
              Spring avenues. New York architect Albert Joseph Bodker designed the house
              for Edgar M. Funkhouser, owner of the Crystal Spring Water Company, whose
              family had purchased the land from the McClanahan tract in 1922.
            </p>
            <p className="prose-estate mb-6">
              The construction itself was a prestige undertaking. Exterior elevations and
              roof plans signed by Bodker date from January through May 1923; garage
              elevations and gate details followed in April 1924, with final entrance
              studies dated September 1925. The house was built of brick and steel, with
              teak floors and a sweeping curved staircase — materials shipped in from New
              York at a time when a five-acre estate in the city was still possible.
            </p>
            <p className="prose-estate">
              Landscape architect Charles F. Gillette completed garden plans for the
              grounds in October 1925, framing the mansion with the manicured setting that
              would remain its signature for generations.
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
              In 1965, Anne Funkhouser Francis donated Cherry Hill to the Roanoke Fine Arts
              Center — the institution that would later become the Taubman Museum of Art.
              The Center moved into the mansion in 1966 and, for the next seventeen years,
              Cherry Hill served as the cultural heart of the city: a house museum with
              exhibitions, classes, and a growing permanent collection.
            </p>
            <p className="prose-estate mb-6">
              The building was gently adapted to public use. Drawings from 1964 by artist
              and architect James McKinney Yeatts and later schemes by Smithey & Boynton
              in 1969 reimagined the rooms as galleries and studios while keeping the
              Georgian core intact. By 1977, the institution had earned accreditation from
              the American Association of Museums and was renamed the Roanoke Museum of
              Fine Arts — a sign of how far it had grown from its origins as a civic arts
              group.
            </p>
            <p className="prose-estate">
              In 1983, the museum moved into Center in the Square, a new downtown arts
              complex, and Cherry Hill returned to private stewardship.
            </p>
          </section>

          <div className="flex justify-center my-16">
            <span className="gold-divider" />
          </div>

          <section className="mb-16">
            <h2 className="text-display text-forest text-4xl md:text-5xl mb-8">
              A House <span className="italic">Preserved</span>
            </h2>
            <p className="prose-estate mb-6">
              After the museum left, the mansion entered a long period of institutional
              ownership. Carilion Health System offered the property for sale in 1995,
              after earlier proposals for a private sports and dining club proved
              impractical. A plan to convert the house into condominiums was also
              considered and then abandoned in favor of a different approach.
            </p>
            <p className="prose-estate">
              In 1997, developers James E. Body and Winter Hodges announced a project that
              would build new condominiums around the mansion, each designed to match the
              estate’s Georgian and Colonial vocabulary. The first phase of 24 units was
              completed in 2001 on the former parking areas and edges of the tract, while
              the historic mansion itself was preserved as the symbolic anchor of the
              site. Over time, the original five-acre parcel was subdivided, leaving the
              house on a smaller, more private lot.
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
              Today, Cherry Hill at 301 23rd Street SW is a private residence once again.
              A century after its construction, the mansion still carries the cultural
              memory of its years as a museum — and the quiet dignity of the Georgian
              estate its original builders intended.
            </p>
          </section>
        </div>
      </article>
    </SiteLayout>
  );
};

export default History;
