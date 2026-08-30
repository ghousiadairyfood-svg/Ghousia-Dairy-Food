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
      { title: "Menu — Dairy, Mithai, Bakery & Fast Food | Ghousia Dairy Food" },
      { name: "description", content: "Browse our full catalog: pure dairy, fresh mithai, bakery goods, ice cream and fast food — daily-fresh from Ghousia Dairy Food, Multan." },
      { property: "og:title", content: "Full Menu — Ghousia Dairy Food, Multan" },
      { property: "og:description", content: "Dairy, mithai, bakery and fast food — freshly prepared daily. Order via WhatsApp." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/menu" },
      { property: "og:image", content: ogCover },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogCover },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
});

// Main categories shown as top-level filter tabs
const MAIN_CATS = ["dairy", "icecream", "mithai", "bakery"] as const;

// Fast food sub-categories in exact required order
const FASTFOOD_CATS = ["pizza", "zingers", "wings", "shawarma", "fries", "sandwiches", "pasta"] as const;

function MenuPage() {
  const [search, setSearch] = useState("");
  // "all" | "fastfood" | one of MAIN_CATS
  const [activeTab, setActiveTab] = useState<string>("all");
  const q = search.trim().toLowerCase();
  const totalMatches = q ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(q)).length : 0;

  // Which categories to show based on active tab
  const visibleMainCats = MAIN_CATS.filter((id) =>
    activeTab === "all" || activeTab === id
  );
  const showFastFood = activeTab === "all" || activeTab === "fastfood";

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

        {/* Filter tabs */}
        {!q && (
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 lg:-mx-0 px-4 lg:px-0 mb-5 scrollbar-none">
            {[
              { id: "all",       label: "All" },
              { id: "dairy",     label: "Dairy Products" },
              { id: "icecream",  label: "Ice Cream and Badami Milk Bottle" },
              { id: "mithai",    label: "Mithai" },
              { id: "bakery",    label: "Bakery" },
              { id: "fastfood",  label: "Fast Food" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-bold transition ${
                  activeTab === tab.id
                    ? "bg-brand text-white shadow-sm"
                    : "bg-white ring-1 ring-border text-muted-foreground hover:ring-brand/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* No results */}
        {q && totalMatches === 0 ? (
          <div className="rounded-2xl bg-white ring-1 ring-border p-10 text-center shadow-sm max-w-md mx-auto">
            <div className="mx-auto h-12 w-12 grid place-items-center rounded-full bg-secondary">
              <SearchIcon className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="mt-3 font-semibold">No items match "{search}".</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try <span className="font-semibold">ghee</span>, <span className="font-semibold">barfi</span> or <span className="font-semibold">pizza</span>.
            </p>
            <button onClick={() => setSearch("")} className="mt-4 inline-flex rounded-full bg-brand text-white px-5 py-2 text-sm font-bold hover:bg-brand-dark transition">
              Clear search
            </button>
          </div>
        ) : (
          <div className="space-y-6">

            {/* ── Main categories (Dairy, Ice Cream, Mithai, Bakery) ── */}
            {visibleMainCats.map((catId) => {
              const cat = CATEGORIES.find((c) => c.id === catId)!;
              const items = productsByCategory(catId).filter((p) => !q || p.name.toLowerCase().includes(q));
              if (!items.length) return null;
              return (
                <section key={catId} id={catId} className="scroll-mt-28 rounded-2xl bg-white ring-1 ring-border shadow-sm overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3.5 bg-brand/5 border-b border-border">
                    <span className="font-serif font-bold text-brand">{cat.label}</span>
                    <span className="ml-auto text-xs text-muted-foreground bg-secondary rounded-full px-2.5 py-0.5">{items.length} items</span>
                  </div>
                  <div className="p-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    {items.map((p) => <ProductTile key={p.id} p={p} showPrice />)}
                  </div>
                </section>
              );
            })}

            {/* ── Fast Food section with 7 sub-categories ── */}
            {showFastFood && (() => {
              // Collect all fast food items that match search
              const allFfItems = FASTFOOD_CATS.flatMap((id) =>
                productsByCategory(id).filter((p) => !q || p.name.toLowerCase().includes(q))
              );
              if (!allFfItems.length) return null;

              return (
                <div id="fastfood" className="scroll-mt-28">
                  {/* Fast Food parent header */}
                  <div className="flex items-center gap-3 px-1 mb-3">
                    <h2 className="font-serif text-xl font-bold text-brand">Fast Food</h2>
                    <span className="text-xs text-muted-foreground bg-secondary rounded-full px-2.5 py-0.5">{allFfItems.length} items</span>
                  </div>

                  {/* Sub-categories */}
                  <div className="space-y-4">
                    {FASTFOOD_CATS.map((catId) => {
                      const cat = CATEGORIES.find((c) => c.id === catId)!;
                      const items = productsByCategory(catId).filter((p) => !q || p.name.toLowerCase().includes(q));
                      if (!items.length) return null;
                      return (
                        <section key={catId} id={catId} className="scroll-mt-28 rounded-2xl bg-white ring-1 ring-border shadow-sm overflow-hidden">
                          <div className="flex items-center gap-3 px-5 py-3 bg-brand/5 border-b border-border">
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
                </div>
              );
            })()}

          </div>
        )}
      </div>
      <SiteFooter />
    </AppShell>
  );
}
