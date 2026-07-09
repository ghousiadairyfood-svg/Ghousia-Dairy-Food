import { createFileRoute } from "@tanstack/react-router";
import { AppShell, SiteFooter } from "@/components/AppShell";
import { BRAND, waLink } from "@/lib/brand";
import { MapPin, Phone, Clock, ExternalLink, MessageCircle } from "lucide-react";
import ogCover from "@/assets/og-cover.jpg";

export const Route = createFileRoute("/location")({
  component: LocationPage,
  head: () => ({
    meta: [
      { title: "Visit Our Shop — Ghousia Dairy Food, Main Bazar Multan" },
      { name: "description", content: "Visit Ghousia Dairy Food at Main Bazar/Chowk, Multan. Open daily 6:00 AM – 11:30 PM." },
      { property: "og:title", content: "Visit Ghousia Dairy Food in Multan" },
      { property: "og:description", content: "Main Bazar/Chowk, Multan — open daily 6:00 AM to 11:30 PM." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/location" },
      { property: "og:image", content: ogCover },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogCover },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
});

function LocationPage() {
  return (
    <AppShell>
      <div className="px-4 lg:px-8 py-6">
        <h1 className="font-serif text-2xl font-bold text-brand mb-5">Our Store Location</h1>

        <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-6 space-y-4 lg:space-y-0">

          {/* Left — Map + Address */}
          <div className="space-y-4">
            {/* Address */}
            <a href={BRAND.mapsUrl} target="_blank" rel="noreferrer"
              className="flex items-start gap-4 rounded-2xl bg-white ring-1 ring-border shadow-sm p-5 hover:ring-brand/50 transition-all group">
              <div className="h-10 w-10 shrink-0 rounded-full bg-brand/10 grid place-items-center">
                <MapPin className="h-5 w-5 text-brand" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Store Address</div>
                <div className="font-semibold text-foreground leading-snug">{BRAND.address}</div>
                <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand group-hover:underline">
                  <ExternalLink className="h-3.5 w-3.5" /> Open in Google Maps
                </div>
              </div>
            </a>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden ring-1 ring-border shadow-sm relative">
              <iframe
                title="Ghousia Dairy Food location"
                src="https://www.google.com/maps?q=Multan+Main+Bazar&output=embed"
                className="w-full h-64 lg:h-96 border-0 pointer-events-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a href={BRAND.mapsUrl} target="_blank" rel="noreferrer" className="absolute inset-0" aria-label="Open in Google Maps" />
              <div className="absolute bottom-3 right-3 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand text-white px-3 py-1.5 text-xs font-bold shadow-lg">
                  <ExternalLink className="h-3 w-3" /> Open Google Maps
                </span>
              </div>
            </div>
          </div>

          {/* Right — Contact cards */}
          <div className="space-y-4">
            {/* Phone */}
            <div className="rounded-2xl bg-white ring-1 ring-border shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-border bg-brand/5">
                <div className="h-8 w-8 rounded-full bg-brand grid place-items-center shrink-0">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="font-serif font-bold text-brand">Phone</span>
              </div>
              <div className="divide-y divide-border">
                {[
                  { label: "Muhammad Ali", num: "+923227302121", display: "0322 730 2121" },
                  { label: "Orders Line", num: "+923007302156", display: "0300 730 2156" },
                ].map((c) => (
                  <a key={c.num} href={`tel:${c.num}`}
                    className="flex items-center justify-between px-5 py-4 hover:bg-secondary/50 transition">
                    <div>
                      <div className="text-xs text-muted-foreground font-medium">{c.label}</div>
                      <div className="font-bold text-brand mt-0.5">{c.display}</div>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-brand grid place-items-center shrink-0">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="rounded-2xl bg-white ring-1 ring-border shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-border bg-brand/5">
                <div className="h-8 w-8 rounded-full bg-[#3a7d44] grid place-items-center shrink-0">
                  <MessageCircle className="h-4 w-4 text-white" fill="currentColor" />
                </div>
                <span className="font-serif font-bold text-brand">WhatsApp Orders</span>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Tap to send your order directly via WhatsApp. Our team will confirm details and arrange delivery.
                </p>
                <a href={waLink("Assalam-o-Alaikum! I'd like to place an order from Ghousia Dairy Food.", "923227302121")}
                  target="_blank" rel="noreferrer"
                  className="flex items-center justify-between w-full rounded-xl bg-[#3a7d44] text-white px-5 py-4 font-bold shadow-sm hover:bg-[#2d6236] transition">
                  <div>
                    <div className="text-[11px] font-semibold text-white/75 uppercase tracking-wider">Order via WhatsApp</div>
                    <div className="text-lg font-bold mt-0.5">0322 730 2121</div>
                  </div>
                  <MessageCircle className="h-7 w-7 shrink-0" fill="currentColor" />
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="rounded-2xl bg-white ring-1 ring-border shadow-sm overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-border bg-brand/5">
                <div className="h-8 w-8 rounded-full bg-gold/20 grid place-items-center shrink-0">
                  <Clock className="h-4 w-4 text-gold-dark" />
                </div>
                <span className="font-serif font-bold text-brand">Opening Hours</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">Monday – Sunday</div>
                    <div className="font-bold text-foreground text-lg mt-0.5">06:00 AM – 11:30 PM</div>
                  </div>
                  <div className="rounded-full bg-green-100 text-green-700 text-xs font-bold px-3 py-1">Open Daily</div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Daily Fresh Batch — we open early so you get the freshest dairy, mithai and bakery products.
                </p>
              </div>
            </div>

            {/* Urdu CTA */}
            <a href={waLink("Assalam-o-Alaikum! I'd like to place an order from Ghousia Dairy Food.")}
              target="_blank" rel="noreferrer" dir="rtl"
              className="block w-full text-center rounded-2xl bg-brand text-white px-5 py-4 font-urdu text-xl shadow-md hover:bg-brand-dark transition">
              {BRAND.urduTagline}
            </a>
          </div>
        </div>
      </div>
      <SiteFooter />
    </AppShell>
  );
}
