import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SiteFooter } from "@/components/AppShell";
import { BRAND, waLink } from "@/lib/brand";
import storefront from "@/assets/storefront.jpeg";
import logo from "@/assets/logo.jpeg";
import ogCover from "@/assets/og-cover.jpg";
import { Instagram, Facebook, Phone, MessageCircle, MapPin, Clock, User } from "lucide-react";

export const Route = createFileRoute("/info")({
  component: InfoPage,
  head: () => ({
    meta: [
      { title: "About Us — Ghousia Dairy Food, Multan | Since 1999" },
      {
        name: "description",
        content:
          "Ghousia Dairy Food is a family-run dairy, sweets and bakery shop in Multan, serving pure dairy and traditional mithai since 1999.",
      },
      { property: "og:title", content: "About Ghousia Dairy Food — Since 1999" },
      {
        property: "og:description",
        content:
          "A family-run dairy, sweets & bakery shop in Multan built on pure ingredients and generations of trust.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/info" },
      { property: "og:image", content: ogCover },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogCover },
    ],
    links: [{ rel: "canonical", href: "/info" }],
  }),
});

function InfoPage() {
  return (
    <AppShell>
      <div className="px-4 lg:px-8 py-6">
        <h1 className="font-serif text-2xl font-bold text-brand mb-5">About Us</h1>

        <div className="lg:grid lg:grid-cols-[1fr_360px] lg:gap-6 space-y-4 lg:space-y-0">
          {/* Left column */}
          <div className="space-y-4">
            {/* Hero identity */}
            <div className="rounded-2xl bg-brand text-white overflow-hidden shadow-md">
              <div className="flex flex-col sm:flex-row items-center gap-5 p-6">
                <img
                  src={logo}
                  alt="Ghousia Dairy Food logo"
                  className="h-24 w-24 rounded-full ring-4 ring-gold object-cover shadow-lg shrink-0"
                />
                <div>
                  <div className="inline-flex items-center rounded-full bg-gold text-brand-dark px-3 py-0.5 text-[10px] font-extrabold tracking-widest uppercase">
                    Est. Since 1999
                  </div>
                  <h2 className="mt-2 font-serif text-2xl font-bold text-white">{BRAND.name}</h2>
                  <p className="mt-1 text-sm text-white/75">{BRAND.tagline}</p>
                  <div dir="rtl" className="mt-2 font-urdu text-base text-gold">
                    {BRAND.urduTagline}
                  </div>
                </div>
              </div>
            </div>

            {/* Our Story */}
            <div className="rounded-2xl bg-white ring-1 ring-border shadow-sm p-5">
              <h2 className="font-serif text-lg font-bold text-brand mb-3">Our Story</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                At Ghousia Dairy Food, our journey began with pure Desi Ghee, Butter (Makhan), Milk,
                Dahi, and Khoya, made with traditional recipes and genuine care. The love our
                customers showed for our Special Barfi inspired us to introduce a full range of
                traditional sweets, including Gulab Jamun, Sohan Halwa, Laddu, Pateesa, and Pera.
                Today, we're proud to serve fresh dairy products, delicious mithai, bakery items,
                and fast food — all under one roof. Every product we make is prepared with the same
                promise that has guided us from the beginning: freshness, quality, and the trust of
                our customers.
              </p>
            </div>

            {/* Meet the Owners */}
            <div className="rounded-2xl bg-white ring-1 ring-border shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-border bg-brand/5">
                <h2 className="font-serif text-lg font-bold text-brand">Meet the Owners</h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  The family behind Ghousia Dairy Food since 1999.
                </p>
              </div>
              <div className="divide-y divide-border">
                {[
                  { name: "M. Sajid Ali", role: "Co-Owner & Operations" },
                  { name: "Muhammad Ali", role: "Co-Owner & Management" },
                ].map((owner) => (
                  <div key={owner.name} className="flex items-center gap-4 px-5 py-4">
                    <div className="h-14 w-14 shrink-0 rounded-full bg-brand/10 ring-2 ring-brand/20 grid place-items-center">
                      <User className="h-7 w-7 text-brand" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-foreground text-sm">{owner.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{owner.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Storefront photo */}
            <div className="rounded-2xl overflow-hidden ring-1 ring-border shadow-sm">
              <img
                src={storefront}
                alt="Ghousia Dairy Food shopfront in Multan"
                className="w-full h-52 lg:h-72 object-cover"
              />
              <div className="bg-white px-5 py-4 flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm text-foreground">{BRAND.address}</div>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" /> {BRAND.hours}
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="rounded-2xl bg-brand-dark text-white p-5 shadow-sm">
              <h2 className="font-serif text-lg font-bold text-white mb-1">Follow Us</h2>
              <p className="text-sm text-white/65 mb-4 leading-relaxed">
                See daily fresh batches, seasonal specials and behind-the-scenes on our social
                media.
              </p>
              <div className="flex gap-3">
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl text-white px-5 py-3 text-sm font-bold shadow-sm hover:opacity-90 transition flex-1"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  }}
                >
                  <Instagram className="h-5 w-5 shrink-0" /> Instagram
                </a>
                <a
                  href={BRAND.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#1877F2] text-white px-5 py-3 text-sm font-bold shadow-sm hover:opacity-90 transition flex-1"
                >
                  <Facebook className="h-5 w-5 shrink-0" /> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Contact Owners */}
            <div className="rounded-2xl bg-white ring-1 ring-border shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-border bg-brand/5">
                <h2 className="font-serif text-lg font-bold text-brand">Contact Owners</h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Call or WhatsApp to place your order.
                </p>
              </div>
              <div className="divide-y divide-border">
                {BRAND.contacts.map((c) => (
                  <div key={c.phone} className="flex items-center gap-3 px-5 py-4">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-brand/10 grid place-items-center">
                      <Phone className="h-4.5 w-4.5 text-brand" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm text-foreground">{c.name}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">
                        0{c.phone.slice(1)}
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={`tel:+${c.phone.replace(/^0/, "92")}`}
                        className="h-9 w-9 rounded-full bg-brand grid place-items-center hover:bg-brand-dark transition"
                        aria-label={`Call ${c.name}`}
                      >
                        <Phone className="h-4 w-4 text-white" />
                      </a>
                      <a
                        href={waLink(
                          "Assalam-o-Alaikum! I'd like to place an order from Ghousia Dairy Food.",
                          c.whatsapp,
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="h-9 w-9 rounded-full bg-whatsapp grid place-items-center hover:bg-whatsapp-dark transition"
                        aria-label={`WhatsApp ${c.name}`}
                      >
                        <MessageCircle className="h-4 w-4 text-white" fill="currentColor" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick info */}
            <div className="rounded-2xl bg-white ring-1 ring-border shadow-sm p-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">Location</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{BRAND.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 border-t border-border pt-4">
                <Clock className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">Opening Hours</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{BRAND.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </AppShell>
  );
}
