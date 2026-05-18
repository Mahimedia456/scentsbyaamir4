import { NavLink } from "react-router-dom";

const links = [
  { label: "Dashboard", to: "/account" },
  { label: "Orders", to: "/account/orders" },
  { label: "Addresses", to: "/account/addresses" },
  { label: "Account Details", to: "/account/details" },
  { label: "Wishlist", to: "/wishlist" },
];

export default function AccountSidebar() {
  return (
    <aside className="border border-black/10 bg-white">
      <div className="border-b border-black/10 p-6">
        <p className="product-card-title text-black">Account Menu</p>
        <p className="mt-2 text-[13px] leading-5 text-black/55">
          Manage your Scents By Aamir orders and profile.
        </p>
      </div>

      <nav className="p-3">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/account"}
            className={({ isActive }) =>
              [
                "flex items-center justify-between border border-transparent px-4 py-3 font-heading text-[13px] uppercase tracking-[0.11em] transition",
                isActive
                  ? "border-black bg-black text-white"
                  : "text-black hover:border-black/15 hover:bg-black/[0.03]",
              ].join(" ")
            }
          >
            <span>{link.label}</span>
            <span>→</span>
          </NavLink>
        ))}

        <button
          type="button"
          className="mt-2 flex w-full items-center justify-between px-4 py-3 text-left font-heading text-[13px] uppercase tracking-[0.11em] text-black/55 transition hover:bg-black/[0.03] hover:text-black"
        >
          <span>Logout</span>
          <span>→</span>
        </button>
      </nav>
    </aside>
  );
}