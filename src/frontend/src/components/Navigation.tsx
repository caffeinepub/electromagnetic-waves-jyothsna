import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import type { PageId } from "../App";

const navItems: { id: PageId; label: string }[] = [
  { id: "about", label: "About Me" },
  { id: "topic", label: "Topic Overview" },
  { id: "concepts", label: "Learning Concepts" },
  { id: "activities", label: "Activities" },
  { id: "assessment", label: "Assessment" },
  { id: "summary", label: "Summary" },
  { id: "references", label: "References" },
];

interface NavigationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navigation({
  currentPage,
  onNavigate,
}: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: PageId) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => handleNav("about")}
            className="flex items-center gap-2 text-primary-foreground font-display font-bold text-lg"
          >
            <Zap className="w-5 h-5 text-accent" />
            <span>EM Waves</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                data-ocid={`nav.${item.id}.link`}
                onClick={() => handleNav(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? "bg-primary-foreground/10 text-accent font-semibold"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                data-ocid={`nav.mobile.${item.id}.link`}
                onClick={() => handleNav(item.id)}
                className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? "bg-primary-foreground/10 text-accent font-semibold"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
