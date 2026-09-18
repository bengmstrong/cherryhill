import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";

interface ComingSoonProps {
  eyebrow: string;
  title: string;
  italicWord?: string;
  description?: string;
}

const ComingSoon = ({ eyebrow, title, italicWord, description }: ComingSoonProps) => {
  return (
    <SiteLayout>
      <section className="min-h-[80vh] flex items-center py-32">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="text-eyebrow text-gold mb-8">{eyebrow}</p>
          <h1 className="text-display text-forest text-6xl md:text-7xl mb-10">
            {italicWord ? (
              <>
                <span className="">{italicWord}</span> {title}
              </>
            ) : (
              title
            )}
          </h1>
          <div className="flex justify-center mb-10">
            <span className="gold-divider" />
          </div>
          <p className="prose-estate mb-12">
            {description ?? "This chapter of the estate is being prepared. Please return soon."}
          </p>
          <p className="text-eyebrow text-muted-foreground mb-10">Coming Soon</p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-eyebrow text-forest hover:text-gold transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span className="link-underline">Return Home</span>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ComingSoon;
