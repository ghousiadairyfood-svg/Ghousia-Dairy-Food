import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell, SiteFooter } from "@/components/AppShell";
import { useCart, buildOrderMessage, cartPriceText, getCartOrderSummary } from "@/lib/cart";
import { formatPKR } from "@/lib/products";
import { openWhatsApp, BRAND, waLink } from "@/lib/brand";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  ShoppingCart,
  MapPin,
  Clock,
  ChevronLeft,
} from "lucide-react";
import ogCover from "@/assets/og-cover.jpg";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({
    meta: [
      { title: "Your Order — Ghousia Dairy Food" },
      {
        name: "description",
        content: "Review your Ghousia Dairy Food selection and send your order on WhatsApp.",
      },
      { property: "og:title", content: "Your Order — Ghousia Dairy Food" },
      { property: "og:url", content: "/cart" },
      { property: "og:image", content: ogCover },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/cart" }],
  }),
});

function CartPage() {
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const clear = useCart((s) => s.clear);
  const [isOpening, setIsOpening] = useState(false);

  const { rows, knownTotal, hasUnpriced, totalItems } = getCartOrderSummary(items);
  const message = buildOrderMessage(items);

  const handleSend = () => {
    if (!message || isOpening) return;
    setIsOpening(true);
    openWhatsApp(message);
    setTimeout(() => setIsOpening(false), 1500);
  };

  return (
    <AppShell>
      <div className="px-4 lg:px-8 py-6">
        {/* Page header */}
        <div className="flex items-center gap-3 mb-6">
          <Link
            to="/menu"
            className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground hover:text-brand transition"
          >
            <ChevronLeft className="h-4 w-4" /> Menu
          </Link>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-brand/10 grid place-items-center">
              <ShoppingCart className="h-5 w-5 text-brand" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-brand leading-tight">Your Order</h1>
              <p className="text-xs text-muted-foreground">
                Final prices confirmed by our team on WhatsApp
              </p>
            </div>
          </div>
        </div>

        {items.length === 0 ? (
          /* ── Empty state ── */
          <div className="max-w-md mx-auto rounded-2xl bg-white ring-1 ring-border p-12 text-center shadow-sm">
            <div className="mx-auto h-16 w-16 rounded-full bg-secondary grid place-items-center">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="mt-4 font-serif text-lg font-bold text-foreground">
              Your cart is empty
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Browse our menu and add your favourites.
            </p>
            <Link
              to="/menu"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-3 text-sm font-bold hover:bg-brand-dark transition shadow-sm"
            >
              <ShoppingBag className="h-4 w-4" /> Browse Menu
            </Link>
          </div>
        ) : (
          /* ── Cart layout ── */
          <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-8 lg:items-start space-y-5 lg:space-y-0 max-w-6xl mx-auto">
            {/* Left — items list */}
            <div>
              <div className="text-sm font-semibold text-muted-foreground mb-3">
                {totalItems} item{totalItems !== 1 ? "s" : ""} in your order
              </div>
              <ul className="space-y-2.5">
                {rows.map(({ i, p, price, subtotal }) => (
                  <li
                    key={i.id}
                    className="flex items-center gap-4 bg-white rounded-2xl p-4 ring-1 ring-border shadow-sm hover:ring-brand/30 transition"
                  >
                    {p && (
                      <Link to="/product/$id" params={{ id: p.id }} className="shrink-0">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-16 w-16 rounded-xl object-cover ring-1 ring-border"
                        />
                      </Link>
                    )}
                    <div className="min-w-0 flex-1">
                      <Link
                        to="/product/$id"
                        params={{ id: i.id }}
                        className="font-semibold text-sm text-foreground truncate block hover:text-brand transition"
                      >
                        {i.name}
                      </Link>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {price != null
                          ? cartPriceText({ i, p, price, subtotal })
                          : "Price on confirmation"}
                      </div>
                      {subtotal != null && (
                        <div className="text-xs font-bold text-brand mt-0.5">
                          Subtotal: {formatPKR(subtotal)}
                        </div>
                      )}
                    </div>
                    {/* Qty controls */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => setQty(i.id, i.qty - 1)}
                        aria-label={`Decrease ${i.name}`}
                        className="h-8 w-8 grid place-items-center rounded-full bg-secondary hover:bg-border transition text-foreground"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-7 text-center text-sm font-bold tabular-nums">
                        {i.qty}
                      </span>
                      <button
                        onClick={() => setQty(i.id, i.qty + 1)}
                        aria-label={`Increase ${i.name}`}
                        className="h-8 w-8 grid place-items-center rounded-full bg-secondary hover:bg-border transition text-foreground"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => remove(i.id)}
                        aria-label={`Remove ${i.name}`}
                        className="ml-1 h-8 w-8 grid place-items-center rounded-full text-muted-foreground hover:text-red-600 hover:bg-red-50 transition"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Clear cart link */}
              <button
                onClick={clear}
                className="mt-4 text-xs text-muted-foreground hover:text-red-600 transition underline underline-offset-2"
              >
                Clear entire cart
              </button>
            </div>

            {/* Right — Order summary */}
            <div className="space-y-4">
              {/* Summary card */}
              <div className="rounded-2xl bg-brand text-white shadow-lg overflow-hidden">
                <div className="p-5">
                  <div className="font-serif text-lg font-bold mb-4">Order Summary</div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/75">Items</span>
                      <span className="font-semibold">{totalItems}</span>
                    </div>
                    {knownTotal > 0 && (
                      <div className="flex justify-between border-t border-white/15 pt-2 mt-2">
                        <span className="text-white/75">Est. Subtotal</span>
                        <span className="font-serif text-xl font-bold text-gold tabular-nums">
                          {formatPKR(knownTotal)}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="mt-3 text-[11px] text-white/55 leading-relaxed">
                    {hasUnpriced
                      ? "Some items priced on confirmation — our team will send the final total."
                      : "Final total confirmed on WhatsApp based on today's rates."}
                  </p>

                  <button
                    type="button"
                    onClick={handleSend}
                    disabled={isOpening}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-whatsapp text-white px-5 py-4 font-bold shadow hover:bg-whatsapp-dark transition disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                  >
                    <MessageCircle className="h-5 w-5" fill="currentColor" />
                    {isOpening ? "Opening WhatsApp…" : "Send Order via WhatsApp"}
                  </button>
                </div>

                <div className="border-t border-white/10 px-5 py-3">
                  <div
                    dir="rtl"
                    className="text-center font-urdu text-gold text-base leading-loose"
                  >
                    {BRAND.urduTagline}
                  </div>
                </div>
              </div>

              {/* Store info */}
              <div className="rounded-2xl bg-white ring-1 ring-border shadow-sm p-4 space-y-3">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Order Delivery
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    {BRAND.address}
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-gold-dark shrink-0 mt-0.5" />
                  <div className="text-xs text-muted-foreground">{BRAND.hours}</div>
                </div>
                <a
                  href={waLink("Assalam-o-Alaikum! I have a question about my order.")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-whatsapp hover:underline"
                >
                  <MessageCircle className="h-3.5 w-3.5" fill="currentColor" />
                  Have a question? Chat on WhatsApp →
                </a>
              </div>

              {/* Continue shopping */}
              <Link
                to="/menu"
                className="flex items-center justify-center gap-2 rounded-2xl bg-white ring-1 ring-border text-brand font-bold text-sm py-3 hover:bg-secondary transition"
              >
                <ShoppingBag className="h-4 w-4" /> Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
      <SiteFooter />
    </AppShell>
  );
}
