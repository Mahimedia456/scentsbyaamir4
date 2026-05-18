import { Link } from "react-router-dom";
import AccountLayout from "../components/account/AccountLayout";
import OrderStatusBadge from "../components/account/OrderStatusBadge";
import { accountOrders } from "../data/account";

export default function AccountOrders() {
  return (
    <AccountLayout
      title="Orders"
      description="View all fragrance orders, payment status and delivery progress."
    >
      <div className="border border-black/10 bg-white">
        <div className="border-b border-black/10 p-6">
          <p className="product-card-title text-black">Order History</p>
          <p className="mt-2 text-[13px] leading-5 text-black/55">
            This data is frontend dummy data. Real WooCommerce-style order data
            will come from backend APIs later.
          </p>
        </div>

        <div className="hidden grid-cols-6 border-b border-black/10 px-6 py-4 text-[12px] uppercase tracking-[0.14em] text-black/45 md:grid">
          <span>Order</span>
          <span>Date</span>
          <span>Status</span>
          <span>Payment</span>
          <span>Total</span>
          <span className="text-right">Action</span>
        </div>

        <div>
          {accountOrders.map((order) => (
            <div
              key={order.id}
              className="grid gap-4 border-b border-black/10 p-6 last:border-b-0 md:grid-cols-6 md:items-center"
            >
              <div>
                <p className="md:hidden text-[12px] uppercase tracking-[0.14em] text-black/45">
                  Order
                </p>
                <p className="product-card-title text-black">{order.id}</p>
              </div>

              <div>
                <p className="md:hidden text-[12px] uppercase tracking-[0.14em] text-black/45">
                  Date
                </p>
                <p className="text-[14px] text-black/70">{order.date}</p>
              </div>

              <div>
                <p className="md:hidden mb-1 text-[12px] uppercase tracking-[0.14em] text-black/45">
                  Status
                </p>
                <OrderStatusBadge status={order.status} />
              </div>

              <div>
                <p className="md:hidden text-[12px] uppercase tracking-[0.14em] text-black/45">
                  Payment
                </p>
                <p className="font-heading text-[13px] uppercase tracking-[0.12em] text-black">
                  {order.paymentStatus}
                </p>
              </div>

              <div>
                <p className="md:hidden text-[12px] uppercase tracking-[0.14em] text-black/45">
                  Total
                </p>
                <p className="product-card-title text-black">{order.total}</p>
              </div>

              <div className="md:text-right">
                <Link
                  to={`/account/orders/${order.id}`}
                  className="luxury-btn luxury-btn-dark"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AccountLayout>
  );
}