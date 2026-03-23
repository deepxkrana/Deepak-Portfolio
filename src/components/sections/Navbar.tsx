import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["About", "Experience", "Projects", "Stack", "Certificates", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = links.map((l) => l.toLowerCase());

    const getActiveSection = () => {
      const atTop = window.scrollY < 80;
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10;

      if (atTop) return "";
      if (atBottom) return "contact";

      const mid = window.innerHeight / 2;
      let current = "";
      let closestDist = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        // Pick the section whose top is closest to the viewport midpoint (above or crossing it)
        const dist = Math.abs(top - mid);
        if (dist < closestDist) {
          closestDist = dist;
          current = id;
        }
      });

      return current;
    };

    const onScroll = () => setActiveSection(getActiveSection());
    // Run once on mount to set initial state
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className={`font-bold text-xl tracking-tight pb-0.5 transition-all ${
            activeSection === "" ? "border-b-2 border-primary" : ""
          }`}
        >
          Deepak Rana<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const id = l.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={l}
                href={`#${id}`}
                className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l}
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-muted-foreground hover:text-foreground"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {links.map((l) => {
            const id = l.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={l}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
