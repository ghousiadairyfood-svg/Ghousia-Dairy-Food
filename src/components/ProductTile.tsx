import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { formatPKR } from "@/lib/products";

// Category gradient fallbacks when image fails to load
const fallbackGradients: Record<string, string> = {
  dairy: "from-amber-50 to-yellow-100",
  icecream: "from-pink-50 to-rose-100",
  mithai: "from-orange-50 to-amber-100",
  bakery: "from-stone-50 to-stone-100",
};

const fallbackEmoji: Record<string, string> = {
  dairy: "🥛",
  icecream: "🍨",
  mithai: "🍬",
  bakery: "🍞",
};

export function ProductTile({ p, showPrice }: { p: Product; showPrice?: boolean }) {
  return (
    <Link to="/product/$id" params={{ id: p.id }} className="group flex flex-col">
      {/* Image */}
      <div
        className={`w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${fallbackGradients[p.category] ?? "from-gray-50 to-gray-100"} ring-1 ring-border shadow-sm group-hover:shadow-md group-hover:ring-brand/40 transition-all duration-200 relative`}
      >
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Hide broken image, show emoji fallback
            (e.currentTarget as HTMLImageElement).style.display = "none";
            const parent = e.currentTarget.parentElement;
            if (parent && !parent.querySelector(".emoji-fallback")) {
              const div = document.createElement("div");
              div.className =
                "emoji-fallback absolute inset-0 flex items-center justify-center text-4xl";
              div.textContent = fallbackEmoji[p.category] ?? "🛒";
              parent.appendChild(div);
            }
          }}
        />
      </div>

      {/* Text */}
      <div className="mt-2 px-0.5">
        <div className="font-semibold text-xs text-foreground leading-snug line-clamp-2 group-hover:text-brand transition-colors">
          {p.name}
        </div>
        {showPrice && p.price != null && (
          <div className="mt-0.5 text-[11px] font-bold text-brand tabular-nums">
            {formatPKR(p.price)}
          </div>
        )}
      </div>
    </Link>
  );
}
