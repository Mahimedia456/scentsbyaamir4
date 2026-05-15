import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const customerLinks = [
  { label: "FAQ", to: "/faq" },
  { label: "Order Tracking", to: "/order-tracking" },
  { label: "Returns & Exchanges", to: "/returns-exchanges" },
  { label: "Delivery Return", to: "/delivery-return" },
  { label: "Contact Us", to: "/contact-us" },
];

const companyLinks = [
  { label: "About Us", to: "/about-us" },
  { label: "How We Make It", to: "/how-we-make-it" },
  { label: "Store Locations", to: "/store-locations" },
  { label: "Terms Of Services", to: "/terms-of-services" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Shipping Policy", to: "/shipping-policy" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" aria-hidden="true">
      <path
        d="M14.2 8.1H16V5.2C15.68 5.15 14.62 5 13.36 5C10.74 5 8.94 6.6 8.94 9.54V12H6v3.25h2.94V22h3.52v-6.75h2.92L15.84 12h-3.38V9.86c0-.94.26-1.76 1.74-1.76Z"
        fill="currentColor"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" aria-hidden="true">
      <path
        d="M21.2 8.1a3 3 0 0 0-2.1-2.12C17.25 5.5 12 5.5 12 5.5s-5.25 0-7.1.48A3 3 0 0 0 2.8 8.1 31.6 31.6 0 0 0 2.32 12a31.6 31.6 0 0 0 .48 3.9 3 3 0 0 0 2.1 2.12c1.85.48 7.1.48 7.1.48s5.25 0 7.1-.48a3 3 0 0 0 2.1-2.12c.32-1.3.48-3.9.48-3.9s0-2.6-.48-3.9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M10.2 14.9V9.1L15.25 12 10.2 14.9Z" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" aria-hidden="true">
      <path
        d="M20.5 11.8a8.46 8.46 0 0 1-12.55 7.4L3.5 20.5l1.32-4.3A8.46 8.46 0 1 1 20.5 11.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.85 7.8c.2-.43.4-.44.6-.44h.52c.17 0 .4.06.6.48.23.5.76 1.84.82 1.97.06.13.1.29.02.46-.08.18-.12.29-.25.44l-.37.42c-.12.13-.25.27-.1.53.15.26.66 1.08 1.42 1.75.98.87 1.8 1.14 2.06 1.27.26.13.42.11.58-.07.17-.2.67-.78.85-1.05.18-.26.36-.22.6-.13.25.09 1.57.74 1.84.87.27.13.45.2.52.32.06.13.06.73-.16 1.43-.22.7-1.3 1.34-1.81 1.39-.46.04-1.05.06-1.7-.1-.39-.1-.9-.29-1.54-.56-2.7-1.17-4.46-3.89-4.6-4.07-.14-.18-1.1-1.47-1.1-2.8 0-1.33.7-1.98.95-2.25.25-.27.55-.34.74-.34Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-[18px] w-[18px] shrink-0" fill="none" aria-hidden="true">
      <path
        d="M7.1 4.5 9.2 4c.45-.1.9.13 1.08.55l1.05 2.45c.17.4.06.88-.27 1.17L9.9 9.2a12.5 12.5 0 0 0 4.9 4.9l1.03-1.16c.3-.33.77-.44 1.18-.27l2.45 1.05c.42.18.65.63.55 1.08l-.5 2.1c-.12.5-.56.86-1.08.86C10.66 17.76 4.24 11.34 4.24 3.57c0-.52.36-.96.86-1.07Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-[18px] w-[18px] shrink-0" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-[18px] w-[18px] shrink-0" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="grid h-10 w-10 place-items-center border border-black/20 transition hover:bg-black hover:text-white"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="site-container border-t border-black/10 py-12 text-center">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="luxury-btn text-black"
        >
          Back To Top
        </button>
      </div>

      <div className="site-container grid gap-12 border-t border-black/10 py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <img
            src={logo}
            alt="Scents By Aamir"
            className="mb-8 h-14 w-auto object-contain"
          />

          <h2 className="heading-section max-w-xl">A Letter From Our House</h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-black/65">
            Sign up for new launches, offers, fragrance stories and exclusive
            Scents By Aamir updates.
          </p>

          <form className="mt-8 max-w-xl space-y-3">
            <input
              type="email"
              placeholder="EMAIL*"
              className="h-14 w-full border border-black/10 bg-black/[0.04] px-5 text-sm uppercase tracking-[0.08em] outline-none transition focus:border-black"
            />

            <label className="flex items-start gap-3 text-left text-sm leading-6 text-black/70">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-black" />
              <span>
                I have read the{" "}
                <Link to="/privacy-policy" className="underline">
                  privacy policy
                </Link>
                .
              </span>
            </label>

            <button type="button" className="luxury-btn-dark luxury-btn w-full">
              Register Now
            </button>
          </form>
        </div>

        <div className="md:col-span-2 md:col-start-7">
          <h3 className="mb-6 font-body text-sm uppercase tracking-[0.16em] text-black/60">
            Customer Service
          </h3>

          <ul className="space-y-4">
            {customerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="font-heading text-[18px] uppercase tracking-wideLuxury transition hover:text-brand-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-6 font-body text-sm uppercase tracking-[0.16em] text-black/60">
            Company
          </h3>

          <ul className="space-y-4">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="font-heading text-[18px] uppercase tracking-wideLuxury transition hover:text-brand-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-6 font-body text-sm uppercase tracking-[0.16em] text-black/60">
            Follow Us
          </h3>

          <div className="flex items-center gap-4">
            <SocialLink href="https://www.instagram.com/scentsbyaamir" label="Instagram">
              <InstagramIcon />
            </SocialLink>

            <SocialLink href="https://www.facebook.com/" label="Facebook">
              <FacebookIcon />
            </SocialLink>

            <SocialLink href="https://www.youtube.com/" label="YouTube">
              <YoutubeIcon />
            </SocialLink>

            <SocialLink href="https://wa.me/" label="WhatsApp">
              <WhatsAppIcon />
            </SocialLink>
          </div>

          <div className="mt-10 space-y-4 text-sm leading-6 text-black/65">
            <p className="flex gap-3">
              <PhoneIcon />
              <span>+92 300 0000000</span>
            </p>

            <p className="flex gap-3">
              <MailIcon />
              <span>support@scentsbyaamir.com</span>
            </p>

            <p className="flex gap-3">
              <LocationIcon />
              <span>Pakistan</span>
            </p>
          </div>
        </div>
      </div>

      <div className="site-container flex flex-col gap-4 border-t border-black/10 py-6 text-sm text-black/55 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Scents By Aamir. All rights reserved.</p>

        <div className="flex gap-5">
          <Link to="/privacy-policy" className="hover:text-black">
            Privacy
          </Link>
          <Link to="/terms-of-services" className="hover:text-black">
            Terms
          </Link>
          <Link to="/shipping-policy" className="hover:text-black">
            Shipping
          </Link>
        </div>
      </div>
    </footer>
  );
}