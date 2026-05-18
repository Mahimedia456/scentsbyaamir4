import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function TopAnnouncement() {
  return (
    <div className="h-[34px] bg-black text-white md:h-[38px]">
      <div className="site-container flex h-full items-center justify-between">
        <button
          type="button"
          className="grid h-8 w-8 place-items-center text-white/80 transition hover:text-white"
          aria-label="Previous announcement"
        >
          <ChevronLeft size={19} strokeWidth={1.5} />
        </button>

        <a
          href="/shop"
          className="font-heading text-[11px] uppercase leading-none tracking-[0.12em] text-white md:text-[13px]"
        >
          New In: Night Rider &amp; Dark Seduction Discover Now &gt;
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-8 w-8 place-items-center text-white/80 transition hover:text-white md:grid"
            aria-label="Next announcement"
          >
            <ChevronRight size={19} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            className="grid h-8 w-8 place-items-center text-white/80 transition hover:text-white"
            aria-label="Close announcement"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}