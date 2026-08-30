import { Link, Outlet, useLocation } from "@tanstack/react-router";
import {
  Home,
  BookOpen,
  ShoppingCart,
  MapPin,
  Info,
  Search,
  MessageCircle,
  Phone,
  Instagram,
  Facebook,
  Clock,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { BRAND, waLink } from "@/lib/brand";
import { useCart } from "@/lib/cart";
import { useEffect, useRef, useState } from "react";
import { PRODUCTS } from "@/lib/products";

const navLinks = [
  { to: "/home", icon: Home, label: "Home" },
  { to: "/menu", icon: BookOpen, label: "Menu" },
  { to: "/cart", icon: ShoppingCart, label: "Cart" },
  { to: "/location", icon: MapPin, label: "Location" },
  { to: "/info", icon: Info, label: "About" },
] as const;

// ── Search bar with suggestions dropdown ──────────────────────────────
function SearchBar({
  value,
  onChange,
  onNavigate,
  className = "",
  inputClassName = "",
}: {
  value: string;
  onChange: (v: string) => void;
  onNavigate?: () => void;
  className?: string;
  inputClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const loc = useLocation();

  const suggestions =
    value.trim().length > 0
      ? PRODUCTS.filter((p) => {
          const q = value.toLowerCase();
          // Match any word in the product name that starts with the query
          const words = p.name.toLowerCase().split(/\s+/);
          return (
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            words.some((w) => w.startsWith(q))
          );
        }).slice(0, 6)
      : [];

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const categoryEmoji: Record<string, string> = {
    dairy: "🥛",
    icecream: "🍨",
    mithai: "🍬",
    bakery: "🍞",
    pizza: "🍕",
    zingers: "🍔",
    wings: "🍗",
    shawarma: "🌯",
    fries: "🍟",
    sandwiches: "🥪",
    pasta: "🍝",
  };

  // Per-product emoji overrides based on product id/name keywords
  function getProductEmoji(p: { id: string; name: string; category: string }): string {
    const n = p.name.toLowerCase();
    const id = p.id.toLowerCase();
    if (n.includes("pizza") || id.includes("pizza")) return "🍕";
    if (n.includes("burger") || n.includes("zinger")) return "🍔";
    if (n.includes("wing")) return "🍗";
    if (n.includes("shawarma")) return "🌯";
    if (n.includes("fries") || n.includes("fry")) return "🍟";
    if (n.includes("sandwich")) return "🥪";
    if (n.includes("pasta")) return "🍝";
    if (n.includes("roll") || n.includes("wrap")) return "🌮";
    if (n.includes("drink") || n.includes("cold")) return "🥤";
    if (n.includes("nugget") || n.includes("crispy bite") || n.includes("chicken zone")) return "🍗";
    if (n.includes("bread stick") || n.includes("cheesy bread")) return "🥖";
    if (n.includes("milk") || n.includes("doodh")) return "🥛";
    if (n.includes("yogurt") || n.includes("dahi")) return "🫙";
    if (n.includes("butter") || n.includes("makhan")) return "🧈";
    if (n.includes("ghee")) return "🫙";
    if (n.includes("cream")) return "🍦";
    if (n.includes("khoya")) return "🥛";
    if (n.includes("barfi")) return "🍬";
    if (n.includes("halwa")) return "🍮";
    if (n.includes("rasgulla") || n.includes("cham cham")) return "🟡";
    if (n.includes("gulab jamun")) return "🟤";
    if (n.includes("laddu")) return "🔶";
    if (n.includes("kalakand") || n.includes("peda")) return "🍬";
    if (n.includes("qulfa") || n.includes("kulfi") || n.includes("ice cream")) return "🍨";
    if (n.includes("egg")) return "🥚";
    if (n.includes("bread")) return "🍞";
    if (n.includes("biscuit")) return "🍪";
    if (n.includes("cake rusk") || n.includes("rusk")) return "🍰";
    if (n.includes("sohan")) return "🟫";
    return categoryEmoji[p.category] ?? "🛒";
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
        }}
        onFocus={() => {
          if (!onChange && loc.pathname !== "/menu") {
            window.location.href = "/menu";
            return;
          }
          setOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
          }
        }}
        placeholder="Search sweets, dairy, bakery…"
        aria-label="Search products"
        autoComplete="off"
        className={`w-full pl-10 pr-4 rounded-full bg-white text-foreground text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-gold shadow-sm ${inputClassName}`}
      />
      {open && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-xl ring-1 ring-border z-50 overflow-hidden">
          {suggestions.map((p) => (
            <Link
              key={p.id}
              to="/product/$id"
              params={{ id: p.id }}
              onClick={() => {
                setOpen(false);
                onChange("");
                onNavigate?.();
              }}
              className="flex items-center gap-3 px-4 py-2.5 hover:bg-secondary transition-colors"
            >
              <span className="text-base shrink-0">{getProductEmoji(p)}</span>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-foreground truncate">{p.name}</div>
                <div className="text-[11px] text-muted-foreground capitalize">{p.category}</div>
              </div>
              {p.price != null && (
                <div className="text-xs font-bold text-brand shrink-0">
                  Rs {p.price.toLocaleString()}
                </div>
              )}
            </Link>
          ))}
          {value.trim().length > 0 && (
            <Link
              to="/menu"
              onClick={() => {
                setOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2.5 bg-brand/5 border-t border-border hover:bg-brand/10 transition-colors"
            >
              <Search className="h-3.5 w-3.5 text-brand shrink-0" />
              <span className="text-xs font-semibold text-brand">
                See all results for "{value}"
              </span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

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
                  Sweets &amp; Bakers
                </div>
              </div>
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-1 ml-6">
              {navLinks.map((t) => {
                const active = t.to === "/home" ? loc.pathname === "/home" : loc.pathname.startsWith(t.to);
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

            {/* Search bar — desktop only in header */}
            <SearchBar
              value={search ?? ""}
              onChange={(v) => onSearch?.(v)}
              className="hidden lg:flex flex-1 max-w-sm xl:max-w-md ml-auto"
              inputClassName="h-9"
            />

            {/* WhatsApp CTA — desktop only */}
            <a
              href={waLink(
                "Assalam-o-Alaikum! I'd like to place an order from Ghousia Dairy Food.",
              )}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-4 py-2 text-sm font-bold shadow hover:bg-whatsapp-dark transition shrink-0"
            >
              <MessageCircle className="h-4 w-4" fill="currentColor" />
              Order Now
            </a>

            {/* Mobile: cart icon + hamburger — RIGHT side */}
            <div className="flex lg:hidden items-center gap-2 ml-auto">
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

          {/* Mobile search bar — below header top bar */}
          <div className="lg:hidden pb-2.5 pt-1">
            <SearchBar
              value={search ?? ""}
              onChange={(v) => onSearch?.(v)}
              onNavigate={() => setMobileMenuOpen(false)}
              inputClassName="h-10"
            />
          </div>

          {/* Mobile dropdown menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-3 border-t border-white/10 pt-2 flex flex-wrap gap-1">
              {navLinks.map((t) => {
                const active = t.to === "/home" ? loc.pathname === "/home" : loc.pathname.startsWith(t.to);
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
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-whatsapp text-white"
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
        className="lg:hidden fixed bottom-20 right-4 z-50 flex items-center gap-2 bg-whatsapp text-white rounded-full shadow-xl ring-2 ring-white/40 hover:bg-whatsapp-dark active:scale-95 transition-all px-4 py-2.5"
      >
        <MessageCircle className="h-5 w-5 shrink-0" fill="currentColor" />
        <span className="text-xs font-bold">Order Now</span>
      </a>

      {/* Bottom nav — mobile only */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-brand border-t border-white/10 shadow-[0_-2px_16px_rgba(0,0,0,0.2)]">
        <div className="max-w-lg mx-auto px-2 py-1.5 flex items-center justify-around">
          {navLinks.map((t) => {
            const active = t.to === "/home" ? loc.pathname === "/home" : loc.pathname.startsWith(t.to);
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
                <span
                  className={`text-[10px] font-semibold ${active ? "text-gold" : "text-white/60"}`}
                >
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
            <img
              src={logo}
              alt="Ghousia Dairy Food logo"
              className="h-12 w-12 rounded-full ring-2 ring-gold object-cover"
            />
            <div>
              <div className="font-serif text-base text-white font-bold leading-tight">
                Ghousia Dairy Food
              </div>
              <div className="text-[10px] text-gold tracking-widest uppercase mt-0.5">
                Sweets &amp; Bakers
              </div>
            </div>
          </div>
          <p className="mt-3 text-white/60 text-xs leading-relaxed max-w-xs">
            Serving Multan with 100% pure dairy, traditional mithai and fresh bakery products since
            1999.
          </p>
          <div className="mt-4 flex gap-2.5">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid place-items-center h-9 w-9 rounded-full text-white hover:opacity-90 transition shadow-sm"
              style={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              }}
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={BRAND.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid place-items-center h-9 w-9 rounded-full bg-[#1877F2] text-white hover:opacity-90 transition shadow-sm"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={waLink("Assalam-o-Alaikum! I'd like to place an order.")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid place-items-center h-9 w-9 rounded-full bg-[#25D366] text-white hover:opacity-90 transition shadow-sm"
            >
              <MessageCircle className="h-4 w-4" fill="currentColor" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <div className="font-serif text-sm text-gold font-bold mb-4">Quick Links</div>
          <ul className="space-y-2.5">
            {[
              { to: "/home", label: "Home" },
              { to: "/menu", label: "Our Menu" },
              { to: "/location", label: "Visit Our Shop" },
              { to: "/info", label: "About Us" },
              { to: "/cart", label: "Your Cart" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-white/65 hover:text-gold transition text-xs flex items-center gap-2"
                >
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
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 text-white/65 hover:text-gold transition"
              >
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5 text-gold" />
                <span className="text-xs leading-relaxed">{BRAND.address}</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+923227302121"
                className="flex items-center gap-2 text-white/65 hover:text-gold transition"
              >
                <Phone className="h-3.5 w-3.5 text-gold shrink-0" />
                <span className="text-xs">0322 730 2121</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+923007302156"
                className="flex items-center gap-2 text-white/65 hover:text-gold transition"
              >
                <Phone className="h-3.5 w-3.5 text-gold shrink-0" />
                <span className="text-xs">0300 730 2156</span>
              </a>
            </li>
            <li>
              <a
                href={waLink("Assalam-o-Alaikum!")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white/65 hover:text-gold transition group"
              >
                <span className="relative flex h-4 w-4 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60"></span>
                  <MessageCircle className="relative h-4 w-4 text-[#25D366]" fill="currentColor" />
                </span>
                <span className="text-xs group-hover:text-gold transition">
                  <span className="font-semibold text-white/80">WhatsApp:</span>{" "}
                  <span>0322 730 2121</span>
                </span>
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
        </div>
      </div>

      <div className="h-px bg-white/10" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-2 text-[11px] text-white/40">
        <span>
          © 2026 {BRAND.name}. Since {BRAND.since}. All rights reserved.
        </span>
        <span dir="rtl" className="font-urdu text-gold/60 text-sm">
          {BRAND.urduTagline}
        </span>
      </div>
    </footer>
  );
}
