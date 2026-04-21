import { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

interface SiteLayoutProps {
  children: ReactNode;
  transparentHeader?: boolean;
}

const SiteLayout = ({ children, transparentHeader = false }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader transparentOverHero={transparentHeader} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
