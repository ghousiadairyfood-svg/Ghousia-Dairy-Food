import { Link, Outlet, useLocation } from "@tanstack/react-router";
import {
  Home, BookOpen, ShoppingCart, MapPin, Info, Search,
  MessageCircle, Phone, Instagram, Facebook, Clock,
  ChevronRight, Menu, X
} from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { BRAND, waLink } from "@/lib/brand";
import { useCart } from "@/lib/cart";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/menu", icon: BookOpen, label: "Menu" },
  { to: "/cart", icon: ShoppingCart, label: "Cart" },
  { to: "/location", icon: MapPin, label: "Location" },
  { to: "/info", icon: Info, label: "About" },
] as const;

export function AppShell({
  children,
  search,
  onSearch,
}: {
  children?: React.ReactNode;
  search?: string;
  onSearch?: (v: string) => void;
}) {
  const loc = useLocation();
  const items = useCart((s) => s.items);
  const [count, setCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setCount(items.reduce((a, i) => a + i.qty, 0)), [items]);

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40 bg-brand text-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          {/* Top bar */}
          <div className="flex items-center gap-4 py-3">
            {/* Logo + brand */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src={logo}
                alt="Ghousia Dairy Food logo"
                className="h-11 w-11 lg:h-14 lg:w-14 rounded-full ring-2 ring-gold object-cover shadow-md"
              />
              <div className="leading-tight">
                <div className="font-serif text-base lg:text-lg font-bold text-white tracking-wide">
                  Ghousia Dairy Food
                </div>
                <div className="text-[10px] font-semibold tracking-[0.18em] text-gold uppercase">
                  Sweets &amp; Bakers · Since 1999
                </div>
              </div>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-1 ml-6">
              {navLinks.map((t) => {
                const active =
                  t.to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(t.to);
                return (
                  <Link
                    key={t.to}
                    to={t.to}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      active
                        ? "bg-white text-brand shadow-sm"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <t.icon className="h-4 w-4" strokeWidth={active ? 2.5 : 2} />
                    {t.label}
                    {t.to === "/cart" && count > 0 && (
                      <span className="ml-0.5 min-w-5 h-5 px-1 grid place-items-center rounded-full bg-gold text-brand text-[10px] font-bold">
                        {count}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Search bar */}
            <div className="flex-1 max-w-md lg:max-w-sm xl:max-w-md ml-auto relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                value={search ?? ""}
                onChange={(e) => onSearch?.(e.target.value)}
                placeholder="Search sweets, dairy, bakery…"
                aria-label="Search products"
                className="w-full h-9 pl-10 pr-4 rounded-full bg-white text-foreground text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-gold shadow-sm"
                onFocus={(e) => {
                  if (!onSearch && loc.pathname !== "/menu") {
                    e.currentTarget.blur();
                    window.location.href = "/menu";
                  }
                }}
              />
            </div>

            {/* WhatsApp CTA — desktop only */}
            <a
              href={waLink("Assalam-o-Alaikum! I'd like to place an order from Ghousia Dairy Food.")}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[#3a7d44] text-white px-4 py-2 text-sm font-bold shadow hover:bg-[#2d6236] transition shrink-0"
            >
              <MessageCircle className="h-4 w-4" fill="currentColor" />
              Order Now
            </a>

            {/* Mobile: cart icon + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/cart"
                className="relative grid place-items-center h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20 transition"
              >
                <ShoppingCart className="h-5 w-5" />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 grid place-items-center rounded-full bg-gold text-brand text-[9px] font-bold shadow">
                    {count}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="grid place-items-center h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20 transition"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-3 border-t border-white/10 pt-2 flex flex-wrap gap-1">
              {navLinks.map((t) => {
                const active =
                  t.to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(t.to);
                return (
                  <Link
                    key={t.to}
                    to={t.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                      active ? "bg-white text-brand" : "text-white/80 hover:bg-white/10"
                    }`}
                  >
                    <t.icon className="h-3.5 w-3.5" />
                    {t.label}
                  </Link>
                );
              })}
              <a
                href={waLink("Assalam-o-Alaikum! I'd like to place an order.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#3a7d44] text-white"
              >
                <MessageCircle className="h-3.5 w-3.5" fill="currentColor" /> Order via WhatsApp
              </a>
            </div>
          )}
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 mx-auto w-full max-w-7xl pb-20 lg:pb-8 px-0">
        {children ?? <Outlet />}
      </main>

      {/* Floating WhatsApp — mobile only */}
      <a
        href={waLink("Assalam-o-Alaikum! I'd like to place an order from Ghousia Dairy Food.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Order on WhatsApp"
        className="lg:hidden fixed bottom-20 right-4 z-50 flex items-center gap-2 bg-[#3a7d44] text-white rounded-full shadow-xl ring-2 ring-white/40 hover:bg-[#2d6236] active:scale-95 transition-all px-4 py-2.5"
      >
        <MessageCircle className="h-5 w-5 shrink-0" fill="currentColor" />
        <span className="text-xs font-bold">Order Now</span>
      </a>

      {/* Bottom nav — mobile only */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-brand border-t border-white/10 shadow-[0_-2px_16px_rgba(0,0,0,0.2)]">
        <div className="max-w-lg mx-auto px-2 py-1.5 flex items-center justify-around">
          {navLinks.map((t) => {
            const active =
              t.to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(t.to);
            const isCart = t.to === "/cart";
            return (
              <Link
                key={t.to}
                to={t.to}
                className={`relative flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all ${
                  active ? "text-gold" : "text-white/60 hover:text-white/90"
                }`}
              >
                {active && (
                  <span className="absolute -top-0.5 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-gold" />
                )}
                <t.icon className="h-5 w-5" strokeWidth={active ? 2.5 : 1.8} />
                <span className={`text-[10px] font-semibold ${active ? "text-gold" : "text-white/60"}`}>
                  {t.label}
                </span>
                {isCart && count > 0 && (
                  <span className="absolute top-0 right-1 min-w-4 h-4 px-0.5 grid place-items-center rounded-full bg-gold text-brand text-[9px] font-bold">
                    {count}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-12 bg-brand-dark text-white/85">
      <div className="h-px gold-divider" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Ghousia Dairy Food logo" className="h-12 w-12 rounded-full ring-2 ring-gold object-cover" />
            <div>
              <div className="font-serif text-base text-white font-bold leading-tight">Ghousia Dairy Food</div>
              <div className="text-[10px] text-gold tracking-widest uppercase mt-0.5">Sweets &amp; Bakers · Since 1999</div>
            </div>
          </div>
          <p className="mt-3 text-white/60 text-xs leading-relaxed max-w-xs">
            Serving Multan with 100% pure dairy, traditional mithai and fresh bakery products since 1999.
          </p>
          <div className="mt-4 flex gap-2.5">
            <a href={BRAND.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
              className="grid place-items-center h-9 w-9 rounded-full bg-[#8B5E3C] text-white hover:opacity-90 transition shadow-sm">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={BRAND.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"
              className="grid place-items-center h-9 w-9 rounded-full bg-[#4a6fa5] text-white hover:opacity-90 transition shadow-sm">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={waLink("Assalam-o-Alaikum! I'd like to place an order.")} target="_blank" rel="noreferrer" aria-label="WhatsApp"
              className="grid place-items-center h-9 w-9 rounded-full bg-[#3a7d44] text-white hover:opacity-90 transition shadow-sm">
              <MessageCircle className="h-4 w-4" fill="currentColor" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-serif text-sm text-gold font-bold mb-4">Quick Links</div>
          <ul className="space-y-2.5">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Our Menu" },
              { to: "/location", label: "Visit Our Shop" },
              { to: "/info", label: "About Us" },
              { to: "/cart", label: "Your Cart" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/65 hover:text-gold transition text-xs flex items-center gap-2">
                  <ChevronRight className="h-3 w-3 text-gold/50 shrink-0" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-serif text-sm text-gold font-bold mb-4">Contact Us</div>
          <ul className="space-y-3">
            <li>
              <a href={BRAND.mapsUrl} target="_blank" rel="noreferrer"
                className="flex items-start gap-2 text-white/65 hover:text-gold transition">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5 text-gold" />
                <span className="text-xs leading-relaxed">{BRAND.address}</span>
              </a>
            </li>
            <li>
              <a href="tel:+923227302121" className="flex items-center gap-2 text-white/65 hover:text-gold transition">
                <Phone className="h-3.5 w-3.5 text-gold shrink-0" />
                <span className="text-xs">0322 730 2121</span>
              </a>
            </li>
            <li>
              <a href="tel:+923007302156" className="flex items-center gap-2 text-white/65 hover:text-gold transition">
                <Phone className="h-3.5 w-3.5 text-gold shrink-0" />
                <span className="text-xs">0300 730 2156</span>
              </a>
            </li>
            <li>
              <a href={waLink("Assalam-o-Alaikum!")} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-white/65 hover:text-gold transition">
                <MessageCircle className="h-3.5 w-3.5 text-[#3a7d44] shrink-0" fill="currentColor" />
                <span className="text-xs">WhatsApp: 0322 730 2121</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <div className="font-serif text-sm text-gold font-bold mb-4">Opening Hours</div>
          <div className="flex items-start gap-2 text-white/65">
            <Clock className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-semibold text-white/80">Monday – Sunday</div>
              <div className="text-xs mt-0.5">06:00 AM – 11:30 PM</div>
              <div className="mt-1.5 inline-flex items-center rounded-full bg-green-800/40 text-green-300 px-2 py-0.5 text-[10px] font-bold">
                Open Daily
              </div>
            </div>
          </div>
          <div className="mt-5">
            <a
              href={waLink("Assalam-o-Alaikum! I'd like to place an order.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#3a7d44] text-white px-4 py-2.5 text-xs font-bold hover:bg-[#2d6236] transition shadow-sm"
            >
              <MessageCircle className="h-3.5 w-3.5" fill="currentColor" /> Order via WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="h-px bg-white/10" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-white/40">
        <span>© 2026 {BRAND.name}. Since {BRAND.since}. All rights reserved.</span>
        <span dir="rtl" className="font-urdu text-gold/60 text-sm">{BRAND.urduTagline}</span>
      </div>
    </footer>
  );
}
