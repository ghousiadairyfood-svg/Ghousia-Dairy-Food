import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppShell, SiteFooter } from "@/components/AppShell";
import { ProductTile } from "@/components/ProductTile";
import { CATEGORIES, PRODUCTS, productsByCategory } from "@/lib/products";
import { BRAND, waLink } from "@/lib/brand";
import { ChevronRight, ShieldCheck, Wheat, Award, Search as SearchIcon, Star, MessageCircle, MapPin, Clock } from "lucide-react";
import ogCover from "@/assets/og-cover.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Ghousia Dairy Food — Pure Dairy, Fresh Mithai & Bakery in Multan | Since 1999" },
      { name: "description", content: "Family-run dairy, mithai and bakery shop in Multan since 1999. Order pure desi ghee, khoya sweets, cakes and ice cream via WhatsApp." },
      { property: "og:title", content: "Ghousia Dairy Food — Pure Dairy, Fresh Mithai & Bakery" },
      { property: "og:description", content: "Since 1999 in Multan — Pure Dairy | Fresh Mithai | Quality Bakers. Order via WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: ogCover },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogCover },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness",
        name: "Ghousia Dairy Food", image: ogCover,
        "@id": "https://ghousiadairyfood.pk", telephone: "+92-322-7302121",
        address: { "@type": "PostalAddress", streetAddress: "Main Bazar/Chowk", addressLocality: "Multan", addressCountry: "PK" },
        openingHours: "Mo-Su 06:00-23:30", priceRange: "$$",
        servesCuisine: ["Pakistani sweets", "Dairy", "Bakery", "Ice cream"], foundingDate: "1999",
      }),
    }],
  }),
});

const slides = [
  { eyebrow: "PURE & HANDMADE",      title: "Desi Ghee",      desc: "Hand-churned from pure milk — the soul of our kitchen since 1999.",    image: "https://images.pexels.com/photos/6419733/pexels-photo-6419733.jpeg?auto=compress&cs=tinysrgb&w=800", msg: "Hi, I'd like to order Pure Desi Ghee from Ghousia Dairy Food.",      badge: "Best Seller"    },
  { eyebrow: "TRADITIONAL RECIPE",   title: "Sohan Halwa",    desc: "Multani sohan halwa — dense, rich and loaded with dry fruits.",        image: "https://images.pexels.com/photos/6544251/pexels-photo-6544251.jpeg?auto=compress&cs=tinysrgb&w=800", msg: "Hi, I'd like to order Sohan Halwa from Ghousia Dairy Food.",         badge: "Multan Special" },
  { eyebrow: "GENERATIONS OF TRUST", title: "Milk Barfi",     desc: "Rich khoya barfi topped with pistachio — a classic house special.",    image: "https://images.pexels.com/photos/14681406/pexels-photo-14681406.jpeg?auto=compress&cs=tinysrgb&w=800", msg: "Hi, I'd like to order Barfi from Ghousia Dairy Food.",               badge: "Fan Favourite"  },
  { eyebrow: "FRESHLY BAKED",        title: "Cakes & Bakery", desc: "Celebration cakes, breads and biscuits — baked fresh every morning.",  image: "https://images.pexels.com/photos/3851000/pexels-photo-3851000.jpeg?auto=compress&cs=tinysrgb&w=800", msg: "Hi, I'd like to place a bakery order from Ghousia Dairy Food.",     badge: "Fresh Daily"    },
];

function HomePage() {
  const [search, setSearch] = useState("");
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  const bestSellers = ["desi-ghee", "barfi", "sohan-halwa"].map((id) => PRODUCTS.find((p) => p.id === id)!).filter(Boolean);
  const filtered = search.trim() ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())) : null;

  return (
    <AppShell search={search} onSearch={setSearch}>
      {filtered ? (
        /* ── Search results ── */
        <div className="px-4 lg:px-8 py-6">
          <h2 className="font-serif text-xl font-bold mb-4">
            Search results <span className="text-muted-foreground text-base">({filtered.length})</span>
          </h2>
          {filtered.length === 0 ? (
            <div className="rounded-2xl bg-white ring-1 ring-border p-10 text-center shadow-sm max-w-md mx-auto">
              <div className="mx-auto h-12 w-12 grid place-items-center rounded-full bg-secondary">
                <SearchIcon className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="mt-3 font-semibold">No items match "{search}".</p>
              <button onClick={() => setSearch("")} className="mt-4 inline-flex rounded-full bg-brand text-white px-5 py-2 text-sm font-bold hover:bg-brand-dark transition">
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {filtered.map((p) => <ProductTile key={p.id} p={p} showPrice />)}
            </div>
          )}
        </div>
      ) : (
        /* ── Normal home ── */
        <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-0 lg:items-start">

          {/* ── LEFT / MAIN COLUMN ── */}
          <div className="min-w-0">

            {/* Hero Carousel */}
            <div className="px-4 lg:px-8 pt-5">
              <div className="relative rounded-2xl bg-white ring-1 ring-border shadow-sm overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${slide * 100}%)` }}>
                  {slides.map((s, i) => (
                    <div key={i} className="min-w-full flex items-center gap-4 p-5 lg:p-8">
                      <div className="min-w-0 flex-1 space-y-2">
                        <div className="inline-flex items-center gap-1 rounded-full bg-gold/15 text-gold-dark px-2.5 py-0.5 text-[10px] font-extrabold tracking-widest">
                          <Star className="h-2.5 w-2.5 fill-current" /> {s.badge}
                        </div>
                        <div className="text-[9px] lg:text-[10px] tracking-[0.2em] font-bold text-muted-foreground uppercase">{s.eyebrow}</div>
                        <h1 className="font-serif text-2xl lg:text-4xl font-bold text-brand leading-tight">{s.title}</h1>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">{s.desc}</p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <a href={waLink(s.msg)} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-[#3a7d44] text-white px-4 py-2 text-sm font-bold shadow-sm hover:bg-[#2d6236] transition">
                            <MessageCircle className="h-4 w-4" fill="currentColor" /> Order via WhatsApp
                          </a>
                          <Link to="/menu" className="inline-flex items-center gap-1 rounded-full bg-brand text-white px-4 py-2 text-sm font-bold hover:bg-brand-dark transition">
                            View Menu <ChevronRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                      <div className="shrink-0">
                        <img src={s.image} alt={s.title}
                          crossOrigin="anonymous"
                          referrerPolicy="no-referrer"
                          className="h-28 w-28 lg:h-44 lg:w-44 rounded-2xl object-cover shadow-lg"
                          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-1.5 pb-3">
                  {slides.map((_, i) => (
                    <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => setSlide(i)}
                      className={`h-1 rounded-full transition-all duration-300 ${i === slide ? "w-8 bg-brand" : "w-2 bg-border"}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Best Sellers */}
            <div className="px-4 lg:px-8 pt-7">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif text-xl font-bold text-brand flex items-center gap-2">
                  <Star className="h-5 w-5 text-gold fill-current" /> Best Sellers
                </h2>
                <Link to="/menu" className="text-sm font-semibold text-muted-foreground flex items-center gap-0.5 hover:text-brand transition">
                  View All <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-3 lg:grid-cols-3 gap-4">
                {bestSellers.map((p) => <ProductTile key={p.id} p={p} showPrice />)}
              </div>
            </div>

            {/* Category photo cards */}
            <div className="px-4 lg:px-8 pt-7">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif text-xl font-bold text-brand">Shop by Category</h2>
                <Link to="/menu" className="text-sm font-semibold text-muted-foreground flex items-center gap-0.5 hover:text-brand transition">
                  View All <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {CATEGORIES.map((cat) => {
                  const cover = productsByCategory(cat.id)[0]?.image;
                  return (
                    <Link key={cat.id} to="/menu" hash={cat.id}
                      className="group relative rounded-2xl overflow-hidden shadow-sm ring-1 ring-border aspect-[3/2] lg:aspect-square">
                      {cover ? (
                        <img src={cover} alt={cat.label}
                          crossOrigin="anonymous"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                        />
                      ) : (
                        <div className="w-full h-full bg-secondary" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/15 to-transparent" />
                      <div className="absolute bottom-0 inset-x-0 p-3">
                        <div className="text-xl leading-none">{cat.emoji}</div>
                        <div className="mt-0.5 font-bold text-white text-sm leading-tight">{cat.label}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Full product sections */}
            <div className="px-4 lg:px-8 pt-7 space-y-5">
              {CATEGORIES.map((cat) => {
                const items = productsByCategory(cat.id).slice(0, 8);
                return (
                  <div key={cat.id} className="rounded-2xl bg-white ring-1 ring-border shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-3 bg-brand/5 border-b border-border">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{cat.emoji}</span>
                        <span className="font-serif font-bold text-brand">{cat.label}</span>
                      </div>
                      <Link to="/menu" hash={cat.id} className="text-xs font-semibold text-muted-foreground flex items-center gap-0.5 hover:text-brand transition">
                        View All <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                    <div className="p-4 grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                      {items.map((p) => <ProductTile key={p.id} p={p} showPrice />)}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust banner */}
            <div className="px-4 lg:px-8 pt-7">
              <div className="rounded-2xl bg-brand text-white overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-gold text-brand-dark px-3 py-1 text-[10px] font-extrabold tracking-widest">
                    <Award className="h-3 w-3" /> SINCE 1999
                  </div>
                  <h2 className="mt-3 font-serif text-2xl lg:text-3xl font-bold">Generations of Trust</h2>
                  <p className="mt-2 text-white/75 text-sm max-w-lg">{BRAND.tagline}</p>
                  <div className="mt-5 grid grid-cols-3 gap-3 max-w-xl">
                    {[
                      { icon: ShieldCheck, title: "Pure Dairy", desc: "Daily-fresh milk, ghee & khoya." },
                      { icon: Wheat, title: "Fresh Mithai", desc: "Hand-crafted every morning." },
                      { icon: Award, title: "Quality Bakers", desc: "Cakes & bread baked with care." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl bg-brand-dark/40 ring-1 ring-white/10 p-3 lg:p-4">
                        <item.icon className="h-5 w-5 text-gold" />
                        <div className="mt-2 font-bold text-sm">{item.title}</div>
                        <div className="text-[11px] text-white/60 mt-0.5 leading-relaxed">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a href={waLink("Hi, I'd like to place an order from Ghousia Dairy Food.")} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#3a7d44] text-white px-6 py-3 text-sm font-bold shadow hover:bg-[#2d6236] transition">
                      <MessageCircle className="h-4 w-4" fill="currentColor" /> Order via WhatsApp
                    </a>
                    <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-6 py-3 text-sm font-bold hover:bg-white/20 transition">
                      Browse Full Menu <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div dir="rtl" className="mt-4 font-urdu text-gold text-lg">{BRAND.urduTagline}</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT SIDEBAR (desktop only) ── */}
          <aside className="hidden lg:block sticky top-24 self-start px-4 py-5 space-y-4 border-l border-border/50">

            {/* Quick order */}
            <div className="rounded-2xl bg-brand text-white p-4 shadow-sm">
              <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2">Quick Order</div>
              <a href={waLink("Assalam-o-Alaikum! I'd like to place an order from Ghousia Dairy Food.")} target="_blank" rel="noreferrer"
                className="flex items-center justify-between w-full rounded-xl bg-[#3a7d44] text-white px-4 py-3 text-sm font-bold hover:bg-[#2d6236] transition">
                <span>Order via WhatsApp</span>
                <MessageCircle className="h-5 w-5" fill="currentColor" />
              </a>
              <div dir="rtl" className="mt-3 text-center font-urdu text-gold text-sm leading-loose">{BRAND.urduTagline}</div>
            </div>

            {/* Store info */}
            <div className="rounded-2xl bg-white ring-1 ring-border shadow-sm overflow-hidden">
              <div className="px-4 py-3 bg-brand/5 border-b border-border">
                <div className="font-serif font-bold text-brand text-sm">Store Info</div>
              </div>
              <div className="p-4 space-y-3">
                <a href={BRAND.mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-2.5 hover:text-brand transition group">
                  <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-foreground group-hover:text-brand transition leading-snug">{BRAND.address}</div>
                    <div className="text-[10px] text-brand mt-0.5">Tap to open Maps →</div>
                  </div>
                </a>
                <div className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-foreground">Mon – Sun: 6:00 AM – 11:30 PM</div>
                    <div className="mt-1 inline-flex items-center rounded-full bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5">Open Daily</div>
                  </div>
                </div>
                <a href="tel:+923227302121" className="flex items-center gap-2.5 text-sm text-brand font-semibold hover:underline">
                  <div className="h-7 w-7 rounded-full bg-brand grid place-items-center shrink-0">
                    <span className="text-white text-[10px] font-bold">📞</span>
                  </div>
                  0322 730 2121
                </a>
              </div>
            </div>

            {/* Category quick links */}
            <div className="rounded-2xl bg-white ring-1 ring-border shadow-sm overflow-hidden">
              <div className="px-4 py-3 bg-brand/5 border-b border-border">
                <div className="font-serif font-bold text-brand text-sm">Browse Categories</div>
              </div>
              <div className="p-3 space-y-1">
                {CATEGORIES.map((cat) => (
                  <Link key={cat.id} to="/menu" hash={cat.id}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-secondary transition text-sm font-medium text-foreground hover:text-brand">
                    <span className="text-base">{cat.emoji}</span>
                    {cat.label}
                    <ChevronRight className="h-3.5 w-3.5 ml-auto text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}

      <SiteFooter />
    </AppShell>
  );
}
