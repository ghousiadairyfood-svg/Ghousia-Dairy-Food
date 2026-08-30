import { createFileRoute, Link } from "@tanstack/react-router";
import { PRODUCTS, formatPKR } from "@/lib/products";
import { waLink, BRAND } from "@/lib/brand";
import { MessageCircle, ArrowLeft, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

export const Route = createFileRoute("/limited-menu")({
  component: LimitedMenuPage,
  head: () => ({
    meta: [
      { title: "Limited Menu — Ghousia Dairy Food (Other Cities)" },
      { name: "description", content: "Order Sohan Halwa, Desi Ghee, Special Barfi and Mithai from Ghousia Dairy Food. Delivery available to other cities." },
    ],
  }),
});

// Only show these categories for other cities
const LIMITED_CATEGORY_IDS = ["dairy", "mithai"] as const;

// Only show specific dairy products — Desi Ghee only
const LIMITED_DAIRY_IDS = ["desi-ghee"];

// Mithai products to show for other cities
const LIMITED_MITHAI_IDS = [
  "akhroti-sohan-halwa",
  "special-barfi", "simple-barfi", "roll-barfi",
  "brown-gulab-jamun", "khoya-gulab-jamun", "gulab-jamun",
  "bangali-rasgulla", "white-cham-cham", "white-rasgulla", "gulabi-rasgulla", "khoya-rasgulla",
  "kalakand", "pera", "gajar-halwa",
  "special-laddu", "besan-laddu", "motichoor-laddu",
];

const LIMITED_SECTIONS = [
  {
    id: "desi-ghee-section",
    title: "Pure Desi Ghee",
    subtitle: "Handmade from pure milk — our signature product since 1999",
    ids: LIMITED_DAIRY_IDS,
  },
  {
    id: "sohan-halwa-section",
    title: "Sohan Halwa",
    subtitle: "Traditional Multani sohan halwa loaded with dry fruits",
    ids: ["akhroti-sohan-halwa"],
  },
  {
    id: "barfi-section",
    title: "Special Barfi",
    subtitle: "Rich khoya barfi with pistachio and silver leaf",
    ids: ["special-barfi", "simple-barfi", "roll-barfi"],
  },
  {
    id: "mithai-section",
    title: "Mithai",
    subtitle: "Traditional sweets made fresh daily",
    ids: LIMITED_MITHAI_IDS.filter(id => !["akhroti-sohan-halwa","special-barfi","simple-barfi","roll-barfi"].includes(id)),
  },
];

function ProductCard({ id }: { id: string }) {
  const p = PRODUCTS.find((pr) => pr.id === id);
  if (!p) return null;

  const msg = [
    `*Welcome to Ghousia Dairy Food* 🌿`,
    ``,
    `Assalam-o-Alaikum! Mujhe yeh item chahiye:`,
    ``,
    `• ${p.name}${p.price != null ? ` — ${formatPKR(p.price)}${p.unit ? ` (${p.unit})` : ""}` : ""}`,
    ``,
    `📍 Mera address:`,
    `📦 Quantity:`,
    ``,
    `—`,
    `Agar koi customization chahiye toh seedha bata dein ya call kar lein. 😊`,
    ``,
    `Thank you for choosing Ghousia Dairy Food. We look forward to serving you! 🙏`,
  ].join("\n");

  return (
    <div className="bg-white rounded-2xl ring-1 ring-border shadow-sm overflow-hidden flex flex-col">
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      {/* Info */}
      <div className="p-3 flex flex-col flex-1">
        <div className="font-serif font-bold text-sm text-brand leading-tight mb-1">{p.name}</div>
        <p className="text-[11px] text-muted-foreground leading-relaxed flex-1 line-clamp-2">{p.description}</p>
        {p.price != null && (
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="font-bold text-brand text-sm">{formatPKR(p.price)}</span>
            {p.unit && <span className="text-[10px] text-muted-foreground">{p.unit}</span>}
          </div>
        )}
        <a
          href={waLink(msg)}
          target="_blank"
          rel="noreferrer"
          className="mt-2.5 flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] text-white py-2 text-xs font-bold hover:bg-[#1ebe5d] transition"
        >
          <MessageCircle className="h-3.5 w-3.5 shrink-0" fill="currentColor" />
          Order
        </a>
      </div>
    </div>
  );
}

function LimitedMenuPage() {
  return (
    <div className="min-h-screen" style={{ background: "#fafaf8" }}>

      {/* Header */}
      <header className="sticky top-0 z-40 shadow-lg" style={{ background: "#1a4731" }}>
        <div className="mx-auto max-w-3xl px-4 py-3 flex items-center gap-3">
          <Link to="/"
            className="flex items-center justify-center h-9 w-9 rounded-full shrink-0 transition"
            style={{ background: "rgba(255,255,255,0.15)" }}>
            <ArrowLeft className="h-4 w-4 text-white" />
          </Link>
          <img src={logo} alt="GDF" className="h-10 w-10 rounded-full object-cover shrink-0"
            style={{ border: "2px solid #d4af37" }} />
          <div>
            <div className="font-serif font-bold text-white text-sm leading-tight">Ghousia Dairy Food</div>
            <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#d4af37" }}>
              Limited Menu · Other Cities
            </div>
          </div>
          <a
            href={waLink("Assalam-o-Alaikum! I'd like to place an order from Ghousia Dairy Food (Other City).")}
            target="_blank" rel="noreferrer"
            className="ml-auto flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white shrink-0 transition"
            style={{ background: "#25D366" }}
          >
            <MessageCircle className="h-3.5 w-3.5" fill="currentColor" /> Order
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-6">

        {/* Hero notice */}
        <div className="rounded-2xl p-5 mb-6 text-center"
          style={{ background: "linear-gradient(135deg, #1a4731, #2d6236)", color: "white" }}>
          <div className="text-2xl mb-2">📦</div>
          <h1 className="font-serif font-bold text-xl text-white mb-1">
            Delivery to Other Cities
          </h1>
          <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.75)" }}>
            We deliver our selected specialities across Pakistan.
            Minimum order and delivery charges apply.
          </p>
          <div className="flex items-center justify-center gap-1.5 text-xs" style={{ color: "#d4af37" }}>
            <MapPin className="h-3.5 w-3.5" />
            {BRAND.address}
          </div>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
            * Prices are indicative — confirmed on WhatsApp based on daily rates and packaging.
          </p>
        </div>

        {/* Product sections */}
        <div className="space-y-8">
          {LIMITED_SECTIONS.map((section) => {
            const validIds = section.ids.filter(id => PRODUCTS.find(p => p.id === id));
            if (!validIds.length) return null;
            return (
              <section key={section.id}>
                <div className="mb-4">
                  <h2 className="font-serif font-bold text-xl text-brand">{section.title}</h2>
                  <p className="text-sm text-muted-foreground mt-0.5">{section.subtitle}</p>
                  <div className="mt-2 h-0.5 w-16 rounded-full" style={{ background: "#d4af37" }} />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {validIds.map((id) => <ProductCard key={id} id={id} />)}
                </div>
              </section>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-10 rounded-2xl p-6 text-center"
          style={{ background: "linear-gradient(135deg, #fef9ec, #fdf3d0)", border: "2px solid #d4af37" }}>
          <div className="text-2xl mb-2">💬</div>
          <h3 className="font-serif font-bold text-lg mb-1" style={{ color: "#1a4731" }}>
            Custom Order?
          </h3>
          <p className="text-sm mb-4" style={{ color: "#666" }}>
            Want a custom quantity, gift packing, or special arrangement?
            Contact us directly on WhatsApp.
          </p>
          <a
            href={waLink("Assalam-o-Alaikum! I'd like to place a custom order from Ghousia Dairy Food (Other City).")}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition"
            style={{ background: "#25D366", boxShadow: "0 4px 16px rgba(37,211,102,0.4)" }}
          >
            <MessageCircle className="h-4 w-4" fill="currentColor" />
            Chat on WhatsApp
          </a>
          <div className="mt-3 text-xs" style={{ color: "#999" }}>
            0322 730 2121 &nbsp;·&nbsp; 0300 730 2156
          </div>
        </div>

        {/* Back link */}
        <div className="mt-6 text-center">
          <Link to="/" className="text-sm font-semibold hover:underline" style={{ color: "#1a4731" }}>
            ← Back to Welcome Page
          </Link>
          <span className="mx-3 text-muted-foreground">·</span>
          <Link to="/home" className="text-sm font-semibold hover:underline" style={{ color: "#1a4731" }}>
            Visit Full Menu (Multan)
          </Link>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-xs" style={{ background: "#1a4731", color: "rgba(255,255,255,0.6)" }}>
        <div className="font-serif font-bold text-white text-sm mb-1">Ghousia Dairy Food</div>
        <div style={{ color: "#d4af37" }}>Sweets &amp; Bakers · Since 1999</div>
        <div className="mt-1">{BRAND.address}</div>
        <div className="mt-2" style={{ fontFamily: "'Noto Nastaliq Urdu', serif", fontSize: "14px", color: "#d4af37", direction: "rtl" }}>
          {BRAND.urduTagline}
        </div>
      </footer>
    </div>
  );
}
