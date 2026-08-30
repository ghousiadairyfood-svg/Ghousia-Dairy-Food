import { createFileRoute, useNavigate } from "@tanstack/react-router";
import logo from "@/assets/logo.jpeg";
import multanSymbol from "@/assets/multan.png";
import locationPin from "@/assets/location.png";

export const Route = createFileRoute("/")({
  component: WelcomePage,
});

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f8f8f5 0%, #fefefe 50%, #f5f8f5 100%)" }}
    >
      {/* Subtle dot pattern only — no circles */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1a4731 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gold shimmer top */}
      <div className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(to right, transparent, #d4af37, #f0cc6e, #d4af37, transparent)" }} />

      <div className="relative z-10 flex flex-col items-center px-5 py-8 w-full max-w-lg mx-auto">

        {/* ── Logo with glow ── */}
        <div className="relative mb-5">
          <div className="absolute inset-0 rounded-full blur-2xl opacity-50"
            style={{ background: "radial-gradient(circle, #d4af37 0%, transparent 70%)", transform: "scale(1.8)" }} />
          <div className="absolute inset-0 rounded-full animate-pulse"
            style={{ background: "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)", transform: "scale(2)" }} />
          <img
            src={logo}
            alt="Ghousia Dairy Food"
            className="relative h-24 w-24 rounded-full object-cover"
            style={{
              border: "3px solid #d4af37",
              boxShadow: "0 0 40px rgba(212,175,55,0.6), 0 0 80px rgba(212,175,55,0.2), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          />
        </div>

        {/* ── Animated heading ── */}
        <div className="text-center mb-1" style={{ animation: "fadeSlideUp 0.8s ease forwards" }}>
          <p className="text-brand/50 text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ letterSpacing: "0.3em" }}>
            Welcome to
          </p>
          <h1
            className="font-serif font-bold text-brand leading-tight"
            style={{
              fontSize: "clamp(30px, 7vw, 48px)",
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              animation: "fadeSlideUp 0.9s ease forwards",
            }}
          >
            Ghousia Dairy Food
          </h1>
          <p className="font-bold tracking-[0.3em] uppercase mt-1 text-sm"
            style={{ color: "#d4af37", animation: "fadeSlideUp 1s ease forwards" }}>
            Sweets &amp; Bakers
          </p>
        </div>

        {/* ── Urdu tagline — gold like footer ── */}
        <p
          dir="rtl"
          className="font-urdu text-lg mt-2 mb-5"
          style={{
            color: "#d4af37",
            textShadow: "0 0 20px rgba(212,175,55,0.4)",
            animation: "fadeSlideUp 1.1s ease forwards",
          }}
        >
          آپ کا بھروسہ، ہماری خالص روایت
        </p>

        {/* ── Gold divider ── */}
        <div className="flex items-center gap-3 mb-5 w-full max-w-xs">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #d4af37)" }} />
          <span style={{ color: "#d4af37", fontSize: "18px" }}>✦</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #d4af37)" }} />
        </div>

        {/* ── City select label — draws attention ── */}
        <div
          className="mb-4 px-5 py-2 rounded-full text-center"
          style={{
            background: "rgba(26,71,49,0.08)",
            border: "1px solid rgba(26,71,49,0.25)",
            animation: "fadeSlideUp 1.2s ease forwards",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2" style={{ color: "#1a4731" }}>
            <img src={locationPin} alt="location" className="h-5 w-5 object-contain" />
            Please Select Your City First
          </p>
        </div>

        {/* ── Two option cards — same style, side by side ── */}
        <div className="w-full grid grid-cols-2 gap-4" style={{ animation: "fadeSlideUp 1.3s ease forwards" }}>

          {/* Card 1 — Multan */}
          <button
            onClick={() => navigate({ to: "/home" })}
            className="group relative overflow-hidden text-left rounded-2xl p-4 cursor-pointer transition-all duration-300"
            style={{
              background: "#ffffff",
              border: "1.5px solid rgba(26,71,49,0.25)",
              boxShadow: "0 2px 16px rgba(26,71,49,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f0f8f3";
              e.currentTarget.style.border = "1.5px solid #1a4731";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(26,71,49,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.border = "1.5px solid rgba(26,71,49,0.25)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 16px rgba(26,71,49,0.08)";
            }}
          >
            <div className="absolute top-0 left-4 right-4 h-px opacity-60"
              style={{ background: "linear-gradient(to right, transparent, #d4af37, transparent)" }} />

            <div className="mb-2">
              <img src={multanSymbol} alt="Multan" className="h-12 w-12 object-contain" />
            </div>
            <div className="font-serif font-bold text-brand text-sm leading-tight mb-1">
              Delivery in Multan
            </div>
            <div className="text-[11px] font-semibold" style={{ color: "#d4af37" }}>
              Full Menu Available
            </div>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-brand/40 group-hover:text-brand transition">
              Browse <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </button>

          {/* Card 2 — Other Cities */}
          <button
            onClick={() => navigate({ to: "/limited-menu" })}
            className="group relative overflow-hidden text-left rounded-2xl p-4 cursor-pointer transition-all duration-300"
            style={{
              background: "#ffffff",
              border: "1.5px solid rgba(26,71,49,0.25)",
              boxShadow: "0 2px 16px rgba(26,71,49,0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f0f8f3";
              e.currentTarget.style.border = "1.5px solid #1a4731";
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(26,71,49,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.border = "1.5px solid rgba(26,71,49,0.25)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 16px rgba(26,71,49,0.08)";
            }}
          >
            <div className="absolute top-0 left-4 right-4 h-px opacity-60"
              style={{ background: "linear-gradient(to right, transparent, #d4af37, transparent)" }} />

            <div className="text-2xl mb-2">🚚</div>
            <div className="font-serif font-bold text-brand text-sm leading-tight mb-1">
              Other Cities
            </div>
            <div className="text-[11px] font-semibold" style={{ color: "#d4af37" }}>
              Limited Menu Available
            </div>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-brand/40 group-hover:text-brand transition">
              Browse <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </button>

        </div>

        {/* ── Contact note ── */}
        <p className="mt-6 text-xs text-center text-muted-foreground">
          📞 WhatsApp &nbsp;·&nbsp; 0322 730 2121 &nbsp;·&nbsp; Open Daily 6AM – 11:30PM
        </p>

      </div>

      {/* Gold shimmer bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(to right, transparent, #d4af37, #f0cc6e, #d4af37, transparent)" }} />

      {/* CSS animations */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
