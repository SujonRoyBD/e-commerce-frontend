import Link from "next/link";
import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Truck } from "lucide-react";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 my-10 md:my-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 via-emerald-800 to-green-900 text-white p-6 sm:p-10 md:p-14 shadow-xl">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Limited Season Special
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Get 20% Off Your First Local Garden Harvest Box
          </h2>

          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-xl">
            Pick freshly plucked heirloom vegetables, orchard fruits, and raw artisan honey delivered within 24 hours of harvest.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/farm/1"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-emerald-950 px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Order Fresh Box Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/become-seller"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3 rounded-full font-semibold text-sm transition-all"
            >
              List Your Produce
            </Link>
          </div>

          {/* Value Props Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-emerald-600/40 text-xs text-emerald-200">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              <span>100% Guaranteed Fresh or Instant Refund</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-amber-300" />
              <span>Same-Day Zero-Emission Local Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;