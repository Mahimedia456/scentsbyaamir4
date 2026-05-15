import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function TopAnnouncement() {
  return (
    <div className="h-[var(--announcement-height)] bg-black text-white">
      <div className="site-container flex h-full items-center justify-between">
        <button
          type="button"
          className="grid h-9 w-9 place-items-center text-white/85 transition hover:text-white"
          aria-label="Previous announcement"
        >
          <ChevronLeft size={22} strokeWidth={1.7} />
        </button>

        <a
          href="/shop"
          className="font-heading text-[15px] uppercase tracking-wideLuxury text-white md:text-[17px]"
        >
          New In: Night Rider & Dark Seduction Discover Now &gt;
        </a>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden h-9 w-9 place-items-center text-white/85 transition hover:text-white md:grid"
            aria-label="Next announcement"
          >
            <ChevronRight size={22} strokeWidth={1.7} />
          </button>

          <button
            type="button"
            className="grid h-9 w-9 place-items-center text-white/85 transition hover:text-white"
            aria-label="Close announcement"
          >
            <X size={22} strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </div>
  );
}