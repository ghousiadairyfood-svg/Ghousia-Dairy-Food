import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, SiteFooter } from "@/components/AppShell";
import { getProduct, PRODUCTS, formatPKR } from "@/lib/products";
import { openWhatsApp, waLink, BRAND } from "@/lib/brand";
import { useCart, buildOrderMessage } from "@/lib/cart";
import { ChevronLeft, ShoppingCart, MessageCircle, Tag, Star, Clock, MapPin } from "lucide-react";
import { ProductTile } from "@/components/ProductTile";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
  loader: ({ params }) => {
    const p = getProduct(params.id);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData ? [
      { title: `${loaderData.name} — Ghousia Dairy Food` },
      { name: "description", content: loaderData.description },
      { property: "og:title", content: `${loaderData.name} — Ghousia Dairy Food` },
      { property: "og:description", content: loaderData.description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: `/product/${params.id}` },
      { property: "og:image", content: loaderData.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: loaderData.image },
    ] : [],
    links: loaderData ? [{ rel: "canonical", href: `/product/${params.id}` }] : [],
    scripts: loaderData ? [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "Product",
        name: loaderData.name, description: loaderData.description,
        image: loaderData.image, category: loaderData.category,
        brand: { "@type": "Brand", name: "Ghousia Dairy Food" },
        ...(loaderData.price != null && {
          offers: { "@type": "Offer", priceCurrency: "PKR", price: loaderData.price, availability: "https://schema.org/InStock" },
        }),
      }),
    }] : [],
  }),
  notFoundComponent: () => (
    <AppShell>
      <div className="p-10 text-center">
        <p className="text-muted-foreground mb-3">Product not found.</p>
        <Link to="/menu" className="inline-flex rounded-full bg-brand text-white px-5 py-2 text-sm font-bold hover:bg-brand-dark transition">
          Back to Menu
        </Link>
      </div>
    </AppShell>
  ),
  errorComponent: () => (
    <AppShell>
      <div className="p-10 text-center text-muted-foreground">Something went wrong.</div>
    </AppShell>
  ),
});

function ProductPage() {
  const p = Route.useLoaderData();
  const add = useCart((s) => s.add);
  const related = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 6);
  const [isOpeningWhatsApp, setIsOpeningWhatsApp] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    add(p);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleOrderNow = () => {
    if (isOpeningWhatsApp) return;
    setIsOpeningWhatsApp(true);
    const state = useCart.getState();
    const existing = state.items.find((i) => i.id === p.id);
    if (!existing) add(p);
    const items = existing ? state.items : [...state.items, { id: p.id, name: p.name, qty: 1 }];
    openWhatsApp(buildOrderMessage(items));
    window.setTimeout(() => setIsOpeningWhatsApp(false), 1500);
  };

  return (
    <AppShell>
      <div className="px-4 lg:px-8 py-5">

        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-5">
          <Link to="/" className="hover:text-brand transition">Home</Link>
          <span>/</span>
          <Link to="/menu" className="hover:text-brand transition">Menu</Link>
          <span>/</span>
          <span className="text-foreground font-medium capitalize">{p.name}</span>
        </div>

        {/* Desktop: image-left, details-right | Mobile: stacked */}
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8 lg:items-start space-y-4 lg:space-y-0 max-w-5xl mx-auto">

          {/* Image */}
          <div className="rounded-2xl overflow-hidden ring-1 ring-border bg-white shadow-sm relative">
            <img src={p.image} alt={p.name} className="w-full aspect-square lg:aspect-[4/3] object-cover" />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand/90 backdrop-blur-sm text-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider shadow">
                <Tag className="h-2.5 w-2.5" /> {p.category}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            {/* Name + price */}
            <div className="rounded-2xl bg-white ring-1 ring-border shadow-sm p-5">
              <h1 className="font-serif text-2xl lg:text-3xl font-bold text-brand leading-tight">{p.name}</h1>

              {p.price != null && (
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="font-serif text-3xl font-bold text-brand tabular-nums">{formatPKR(p.price)}</span>
                  {p.unit && (
                    <span className="text-sm text-muted-foreground bg-secondary rounded-full px-3 py-0.5">{p.unit}</span>
                  )}
                </div>
              )}

              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

              <p className="mt-2 text-[11px] text-muted-foreground/70 italic">
                * Prices are indicative — confirmed on WhatsApp based on daily rates.
              </p>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-bold shadow-sm transition-all ${
                  added ? "bg-gold text-brand-dark scale-[.98]" : "bg-brand text-white hover:bg-brand-dark"
                }`}
              >
                <ShoppingCart className="h-4 w-4 shrink-0" />
                {added ? "✓ Added to Cart!" : "Add to Cart"}
              </button>
              <button
                onClick={handleOrderNow}
                disabled={isOpeningWhatsApp}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#3a7d44] text-white px-4 py-3.5 text-sm font-bold shadow-sm hover:bg-[#2d6236] disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                <MessageCircle className="h-4 w-4 shrink-0" fill="currentColor" />
                {isOpeningWhatsApp ? "Opening…" : "Order via WhatsApp"}
              </button>
            </div>

            {/* Store info card */}
            <div className="rounded-2xl bg-white ring-1 ring-border shadow-sm p-4 space-y-3">
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Order Info</div>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                <div className="text-xs text-muted-foreground leading-relaxed">{BRAND.address}</div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-gold-dark shrink-0 mt-0.5" />
                <div className="text-xs text-muted-foreground">{BRAND.hours}</div>
              </div>
              <a
                href={waLink(`Assalam-o-Alaikum! I'd like to order ${p.name} from Ghousia Dairy Food.`)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-[#3a7d44] hover:underline mt-1"
              >
                <MessageCircle className="h-3.5 w-3.5" fill="currentColor" />
                Chat directly on WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* You may also like */}
        {related.length > 0 && (
          <div className="mt-10 max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-xl font-bold text-brand flex items-center gap-2">
                <Star className="h-5 w-5 text-gold fill-current" /> You May Also Like
              </h2>
              <Link to="/menu" className="text-sm text-muted-foreground hover:text-brand transition font-semibold">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {related.map((r) => <ProductTile key={r.id} p={r} showPrice />)}
            </div>
          </div>
        )}
      </div>
      <SiteFooter />
    </AppShell>
  );
}
