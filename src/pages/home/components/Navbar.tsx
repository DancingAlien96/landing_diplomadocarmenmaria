import { useEffect, useState } from "react";
import { NAV_LINKS, TOP_BAR_MESSAGES, WHATSAPP_LINK } from "@/mocks/program";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % TOP_BAR_MESSAGES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top rotating bar */}
      <div
        className={`overflow-hidden bg-primary-800 transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-center gap-2 px-4 md:px-8 lg:px-12">
          <i className="ri-heart-pulse-line text-sm text-accent-300 shrink-0"></i>
          <div className="relative h-9 min-w-0 flex-1 overflow-hidden">
            {TOP_BAR_MESSAGES.map((message, index) => (
              <span
                key={message}
                className={`absolute inset-0 flex items-center justify-center text-center text-xs md:text-[13px] font-medium tracking-wide text-primary-100 transition-all duration-500 ${
                  index === messageIndex
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
              >
                {message}
              </span>
            ))}
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-accent-300 hover:text-accent-200 transition-colors whitespace-nowrap cursor-pointer shrink-0"
          >
            Inscribirme
            <i className="ri-arrow-right-line text-sm"></i>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-background-50/95 backdrop-blur border-b border-background-200"
            : "bg-background-50/80 backdrop-blur border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="flex h-16 md:h-20 items-center justify-between gap-4">
            <a href="#top" className="group flex items-center gap-3 shrink-0">
              <span className="w-10 h-10 rounded-lg bg-primary-700 flex items-center justify-center text-background-50 transition-transform duration-300 group-hover:scale-105">
                <i className="ri-heart-pulse-line text-xl"></i>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-foreground-950 text-sm md:text-base whitespace-nowrap">
                  Diplomado en Enfermería
                </span>
                <span className="text-[11px] md:text-xs text-foreground-600 tracking-wide uppercase whitespace-nowrap">
                  Cuidado Domiciliar
                </span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative text-sm font-medium text-foreground-700 hover:text-primary-700 transition-colors whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-md bg-primary-700 px-5 py-2.5 text-sm font-semibold text-background-50 hover:bg-primary-800 transition-all duration-300 hover:gap-3 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-whatsapp-line text-base"></i>
                Inscribirme
              </a>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label="Abrir menú"
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md text-foreground-900 hover:bg-background-100 transition-colors cursor-pointer"
              >
                <i className={`${open ? "ri-close-line" : "ri-menu-line"} text-2xl`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-background-200 bg-background-50">
          <nav className="mx-auto max-w-7xl px-4 md:px-8 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-sm font-medium text-foreground-800 hover:bg-background-100 hover:text-primary-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary-700 px-5 py-3 text-sm font-semibold text-background-50"
            >
              <i className="ri-whatsapp-line text-base"></i>
              Quiero inscribirme
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}