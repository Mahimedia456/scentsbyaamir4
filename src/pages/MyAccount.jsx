import { Link } from "react-router-dom";
import AccountLayout from "../components/account/AccountLayout";
import OrderStatusBadge from "../components/account/OrderStatusBadge";
import { accountOrders, accountUser } from "../data/account";

export default function MyAccount() {
  const latestOrder = accountOrders[0];

  return (
    <AccountLayout
      title="My Account"
      description="A personal space for your orders, addresses and Scents By Aamir profile."
    >
      <div className="grid gap-8">
        <div className="border border-black/10 bg-white p-6 md:p-8">
          <p className="font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
            Dashboard
          </p>

          <h2 className="luxury-section-title mt-3">
            Hello, {accountUser.firstName}
          </h2>

          <p className="mt-4 max-w-3xl text-[14px] leading-7 text-black/60">
            From your account dashboard you can view recent orders, manage your
            shipping and billing addresses, and edit your password and account
            details.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Orders", accountOrders.length, "/account/orders"],
            ["Addresses", "2", "/account/addresses"],
            ["Wishlist", "Saved", "/wishlist"],
          ].map(([label, value, to]) => (
            <Link
              key={label}
              to={to}
              className="group border border-black/10 bg-white p-6 transition hover:border-black"
            >
              <p className="product-card-title text-black">{label}</p>
              <p className="mt-5 font-heading text-[34px] uppercase leading-none tracking-[0.05em] text-black">
                {value}
              </p>
              <span className="mt-5 inline-block font-heading text-[13px] uppercase tracking-[0.12em] text-black/55 group-hover:text-black">
                Manage →
              </span>
            </Link>
          ))}
        </div>

        <div className="border border-black/10 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 p-6">
            <div>
              <p className="product-card-title text-black">Recent Order</p>
              <p className="mt-1 text-[13px] text-black/55">
                Latest purchase activity
              </p>
            </div>

            <Link to="/account/orders" className="luxury-link text-black">
              View All
            </Link>
          </div>

          <div className="grid gap-5 p-6 md:grid-cols-5 md:items-center">
            <div>
              <p className="text-[12px] uppercase tracking-[0.14em] text-black/45">
                Order
              </p>
              <p className="mt-1 product-card-title text-black">
                {latestOrder.id}
              </p>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-[0.14em] text-black/45">
                Date
              </p>
              <p className="mt-1 text-[14px] text-black/70">
                {latestOrder.date}
              </p>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-[0.14em] text-black/45">
                Status
              </p>
              <div className="mt-1">
                <OrderStatusBadge status={latestOrder.status} />
              </div>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-[0.14em] text-black/45">
                Total
              </p>
              <p className="mt-1 product-card-title text-black">
                {latestOrder.total}
              </p>
            </div>

            <div className="md:text-right">
              <Link
                to={`/account/orders/${latestOrder.id}`}
                className="luxury-btn luxury-btn-dark"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
}