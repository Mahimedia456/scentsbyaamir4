import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import TopAnnouncement from "./TopAnnouncement";
import MegaMenu from "./MegaMenu";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "New In", to: "/shop?sort=new" },
  { label: "Fragrance", to: "/shop", hasMega: true },
  { label: "Men", to: "/collection/men" },
  { label: "Women", to: "/collection/women" },
  { label: "Unisex", to: "/collection/unisex" },
  { label: "Tester Box", to: "/collection/testers" },
];

export default function Header({ variant = "dark" }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isWhite = variant === "white";

  return (
    <>
      <TopAnnouncement />

      <header
        className={`sticky top-0 z-50 border-b ${
          isWhite
            ? "header-white border-black/10"
            : "header-blur border-white/15 text-white"
        }`}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="site-container flex h-[var(--header-height)] items-center justify-between gap-6">
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="Scents By Aamir"
              className={`h-12 w-auto object-contain transition duration-300 md:h-14 ${
                isWhite ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          <nav className="hidden flex-1 items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onMouseEnter={() => setMegaOpen(Boolean(item.hasMega))}
                className="font-heading text-[17px] uppercase tracking-wideLuxury transition hover:text-brand-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <button
              type="button"
              className="transition hover:text-brand-primary"
              aria-label="Search"
            >
              <Search size={23} strokeWidth={1.7} />
            </button>

            <Link
              to="/login"
              className="transition hover:text-brand-primary"
              aria-label="Account"
            >
              <User size={23} strokeWidth={1.7} />
            </Link>

            <Link
              to="/wishlist"
              className="transition hover:text-brand-primary"
              aria-label="Wishlist"
            >
              <Heart size={23} strokeWidth={1.7} />
            </Link>

            <Link
              to="/cart"
              className="relative transition hover:text-brand-primary"
              aria-label="Cart"
            >
              <ShoppingBag size={23} strokeWidth={1.7} />
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-brand-primary text-[10px] font-bold text-black">
                0
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <MegaMenu open={megaOpen} />

        {mobileOpen && (
          <div
            className={`border-t px-5 py-6 lg:hidden ${
              isWhite
                ? "border-black/10 bg-white text-black"
                : "border-white/10 bg-black text-white"
            }`}
          >
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-2xl uppercase tracking-wideLuxury"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex items-center gap-5">
              <Search size={23} strokeWidth={1.7} />
              <User size={23} strokeWidth={1.7} />
              <Heart size={23} strokeWidth={1.7} />
              <ShoppingBag size={23} strokeWidth={1.7} />
            </div>
          </div>
        )}
      </header>
    </>
  );
}