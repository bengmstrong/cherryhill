import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="bg-forest-deep text-ivory/90 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link to="/" className="font-serif text-3xl text-ivory">
              <span className="italic font-light">Cherry</span>{" "}
              <span className="font-medium">Hill</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ivory/70 max-w-xs">
              A historic Georgian estate on a five-acre rise in South Roanoke, Virginia.
            </p>
          </div>

          <div>
            <h3 className="text-eyebrow text-gold mb-4">Visit</h3>
            <address className="not-italic text-sm leading-relaxed text-ivory/80">
              Cherry Hill Estate
              <br />
              Roanoke, Virginia
            </address>
          </div>

          <div>
            <h3 className="text-eyebrow text-gold mb-4">Contact</h3>
            <ul className="text-sm leading-relaxed text-ivory/80 space-y-1">
              <li>
                <a href="mailto:hello@cherryhillroanoke.com" className="link-underline">
                  hello@cherryhillroanoke.com
                </a>
              </li>
              <li>(540) 000-0000</li>
            </ul>
            <div className="mt-5 flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/70 hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/70 hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/50 tracking-wider">
            © {new Date().getFullYear()} Cherry Hill Estate. All rights reserved.
          </p>
          <p className="text-xs text-ivory/50 italic font-serif">Est. 1925 · Roanoke, Virginia</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
