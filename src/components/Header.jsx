import { useEffect, useState } from "react";
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
  { label: "Scent Finder", to: "/scent-finder" },
  { label: "About", to: "/about-us" },
  { label: "Contact", to: "/contact-us" },
];

export default function Header({ variant = "dark" }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const forceWhite = variant === "white";
  const isWhite = forceWhite || scrolled;
  const isDark = !isWhite;

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopAnnouncement />

      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          isWhite
            ? "border-black/10 bg-white text-black"
            : "border-white/10 bg-black text-white"
        }`}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="site-container flex h-[56px] items-center justify-between gap-6 md:h-[62px]">
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="Scents By Aamir"
              className={`h-[22px] w-auto object-contain transition duration-300 md:h-[26px] ${
                isDark ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          <nav className="hidden flex-1 items-center gap-[24px] xl:gap-[30px] lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onMouseEnter={() => setMegaOpen(Boolean(item.hasMega))}
                className="header-nav-link transition hover:text-brand-primary"
              >
                {item.label}

                {item.hasMega && megaOpen && (
                  <span className="absolute -bottom-[22px] left-0 h-px w-full bg-current" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <button
              type="button"
              className="transition hover:text-brand-primary"
              aria-label="Search"
            >
              <Search size={19} strokeWidth={1.45} />
            </button>

            <Link
              to="/login"
              className="transition hover:text-brand-primary"
              aria-label="Account"
            >
              <User size={19} strokeWidth={1.45} />
            </Link>

            <Link
              to="/wishlist"
              className="transition hover:text-brand-primary"
              aria-label="Wishlist"
            >
              <Heart size={20} strokeWidth={1.45} />
            </Link>

            <Link
              to="/cart"
              className="relative transition hover:text-brand-primary"
              aria-label="Cart"
            >
              <ShoppingBag size={20} strokeWidth={1.45} />
              <span className="absolute -right-2 -top-2 grid h-[15px] w-[15px] place-items-center rounded-full bg-brand-primary text-[9px] font-bold text-black">
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
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
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
                  className="header-nav-link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 flex items-center gap-5">
              <Search size={20} strokeWidth={1.45} />
              <User size={20} strokeWidth={1.45} />
              <Heart size={20} strokeWidth={1.45} />
              <ShoppingBag size={20} strokeWidth={1.45} />
            </div>
          </div>
        )}
      </header>
    </>
  );
}