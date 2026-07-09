import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, SiteFooter } from "@/components/AppShell";
import { ProductTile } from "@/components/ProductTile";
import { CATEGORIES, PRODUCTS, productsByCategory } from "@/lib/products";
import ogCover from "@/assets/og-cover.jpg";
import { Search as SearchIcon } from "lucide-react";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — Dairy, Mithai, Bakery & Ice Cream | Ghousia Dairy Food" },
      { name: "description", content: "Browse our full catalog: pure dairy, fresh mithai, bakery goods and ice cream — daily-fresh from Ghousia Dairy Food, Multan." },
      { property: "og:title", content: "Full Menu — Ghousia Dairy Food, Multan" },
      { property: "og:description", content: "Dairy, mithai, bakery and ice cream — freshly prepared daily. Order via WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/menu" },
      { property: "og:image", content: ogCover },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogCover },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
});

function MenuPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const q = search.trim().toLowerCase();
  const totalMatches = q ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(q)).length : 0;

  return (
    <AppShell search={search} onSearch={setSearch}>
      <div className="px-4 lg:px-8 py-6">
        {/* Page header */}
        <div className="flex items-baseline justify-between mb-1">
          <h1 className="font-serif text-2xl font-bold text-brand">Our Menu</h1>
          {q && <div className="text-sm text-muted-foreground">{totalMatches} {totalMatches === 1 ? "result" : "results"}</div>}
        </div>
        <p className="text-sm text-muted-foreground mb-5">
          Freshly prepared daily. Click any item to view details &amp; order via WhatsApp.
        </p>

        {/* Category filter tabs */}
        {!q && (
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 lg:-mx-0 px-4 lg:px-0 mb-5 scrollbar-none flex-wrap lg:flex-nowrap">
            <button
              onClick={() => setActiveTab("all")}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-bold transition ${activeTab === "all" ? "bg-brand text-white shadow-sm" : "bg-white ring-1 ring-border text-muted-foreground hover:ring-brand/40"}`}
            >All</button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-bold transition flex items-center gap-1.5 ${activeTab === cat.id ? "bg-brand text-white shadow-sm" : "bg-white ring-1 ring-border text-muted-foreground hover:ring-brand/40"}`}
              >
                <span>{cat.emoji}</span> {cat.label}
              </button>
            ))}
          </div>
        )}

        {q && totalMatches === 0 ? (
          <div className="rounded-2xl bg-white ring-1 ring-border p-10 text-center shadow-sm max-w-md mx-auto">
            <div className="mx-auto h-12 w-12 grid place-items-center rounded-full bg-secondary">
              <SearchIcon className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="mt-3 font-semibold">No items match "{search}".</p>
            <p className="mt-1 text-sm text-muted-foreground">Try <span className="font-semibold">ghee</span>, <span className="font-semibold">jalebi</span> or <span className="font-semibold">cake</span>.</p>
            <button onClick={() => setSearch("")} className="mt-4 inline-flex rounded-full bg-brand text-white px-5 py-2 text-sm font-bold hover:bg-brand-dark transition">
              Clear search
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {CATEGORIES.filter((cat) => activeTab === "all" || cat.id === activeTab).map((cat) => {
              const items = productsByCategory(cat.id).filter((p) => !q || p.name.toLowerCase().includes(q));
              if (!items.length) return null;
              return (
                <section key={cat.id} id={cat.id} className="scroll-mt-28 rounded-2xl bg-white ring-1 ring-border shadow-sm overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3.5 bg-brand/5 border-b border-border">
                    <span className="text-xl">{cat.emoji}</span>
                    <span className="font-serif font-bold text-brand">{cat.label}</span>
                    <span className="ml-auto text-xs text-muted-foreground bg-secondary rounded-full px-2.5 py-0.5">{items.length} items</span>
                  </div>
                  <div className="p-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    {items.map((p) => <ProductTile key={p.id} p={p} showPrice />)}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
      <SiteFooter />
    </AppShell>
  );
}
