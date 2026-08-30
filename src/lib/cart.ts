import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProduct, formatPKR } from "./products";
import type { Product } from "./products";

export type CartItem = { id: string; name: string; qty: number };

export function getCartOrderSummary(items: CartItem[]) {
  const rows = items.map((i) => {
    const p = getProduct(i.id);
    const price = p?.price;
    const subtotal = price != null ? price * i.qty : undefined;
    return { i, p, price, subtotal };
  });
  const totalItems = items.reduce((a, i) => a + i.qty, 0);
  const knownTotal = rows.reduce((a, r) => a + (r.subtotal ?? 0), 0);
  const hasUnpriced = rows.some((r) => r.price == null);
  return { rows, totalItems, knownTotal, hasUnpriced };
}

export function cartPriceText(row: ReturnType<typeof getCartOrderSummary>["rows"][number]) {
  if (row.price == null) return "Price on confirmation";
  const unit = row.p?.unit ? ` ${row.p.unit}` : "";
  const subtotal =
    row.subtotal != null && row.subtotal !== row.price ? ` · ${formatPKR(row.subtotal)}` : "";
  return `${formatPKR(row.price)}${unit}${subtotal}`;
}

export function buildOrderMessage(items: CartItem[]) {
  if (!items.length) return "";
  const { rows, knownTotal, hasUnpriced } = getCartOrderSummary(items);
  return [
    `*Welcome to Ghousia Dairy Food* 🌿`,
    ``,
    `Assalam-o-Alaikum! Mujhe yeh order chahiye:`,
    ``,
    ...rows.map((r, idx) => {
      const unit = r.p?.unit ? ` (${r.p.unit})` : "";
      const price = r.price != null ? ` — ${formatPKR(r.price)}${unit}` : "";
      return `${idx + 1}. ${r.i.name} × ${r.i.qty}${price}`;
    }),
    ``,
    knownTotal > 0
      ? `Estimated Total: ${formatPKR(knownTotal)}${hasUnpriced ? " + (kuch items confirm hongi)" : ""}`
      : `Kindly total amount bata dein.`,
    ``,
    `📍 Address / Delivery details yahan likhein:`,
    ``,
    `—`,
    `Agar aap apni marzi se order tayyar karwana chahte hain — koi cheez customize karni ho, quantity change karni ho, ya koi khas request ho — toh seedha is message par bata dein ya call kar lein. Hum khushi se madad karein ge. 😊`,
    ``,
    `Thank you for choosing Ghousia Dairy Food. We look forward to serving you! 🙏`,
  ].join("\n");
}

type CartState = {
  items: CartItem[];
  add: (p: Product) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (p) =>
        set((s) => {
          const existing = s.items.find((i) => i.id === p.id);
          if (existing)
            return { items: s.items.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i)) };
          return { items: [...s.items, { id: p.id, name: p.name, qty: 1 }] };
        }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      setQty: (id, qty) =>
        set((s) => ({
          items:
            qty <= 0
              ? s.items.filter((i) => i.id !== id)
              : s.items.map((i) => (i.id === id ? { ...i, qty } : i)),
        })),
      clear: () => set({ items: [] }),
      count: () => get().items.reduce((a, i) => a + i.qty, 0),
    }),
    { name: "gdf-cart" },
  ),
);
