import { Link, useParams } from "react-router-dom";
import AccountLayout from "../components/account/AccountLayout";
import OrderStatusBadge from "../components/account/OrderStatusBadge";
import { accountOrders } from "../data/account";

export default function AccountOrderDetail() {
  const { orderId } = useParams();
  const order = accountOrders.find((item) => item.id === orderId);

  if (!order) {
    return (
      <AccountLayout
        title="Order Not Found"
        description="The order link is incorrect or this order does not exist."
      >
        <div className="border border-black/10 bg-white p-8 text-center">
          <h2 className="luxury-section-title">Order Not Found</h2>
          <p className="mx-auto mt-4 max-w-xl text-[14px] leading-7 text-black/60">
            Please go back to your order history and select a valid order.
          </p>
          <Link to="/account/orders" className="luxury-btn luxury-btn-dark mt-7">
            Back To Orders
          </Link>
        </div>
      </AccountLayout>
    );
  }

  return (
    <AccountLayout
      title={`Order ${order.id}`}
      description="Review fragrance items, shipping address, payment and delivery progress."
    >
      <div className="grid gap-8">
        <div className="border border-black/10 bg-white p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <p className="product-card-title text-black">{order.id}</p>
              <p className="mt-2 text-[13px] text-black/55">
                Placed on {order.date}
              </p>
            </div>

            <OrderStatusBadge status={order.status} />
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-4">
            {[
              ["Payment", order.paymentStatus],
              ["Shipping", order.shipping],
              ["Total", order.total],
              ["Items", order.items.length],
            ].map(([label, value]) => (
              <div key={label} className="border border-black/10 p-4">
                <p className="text-[12px] uppercase tracking-[0.14em] text-black/45">
                  {label}
                </p>
                <p className="mt-2 product-card-title text-black">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-black/10 bg-white">
          <div className="border-b border-black/10 p-6">
            <p className="product-card-title text-black">Order Items</p>
          </div>

          {order.items.map((item) => (
            <div
              key={`${order.id}-${item.name}`}
              className="grid gap-5 border-b border-black/10 p-6 last:border-b-0 md:grid-cols-[96px_1fr_auto] md:items-center"
            >
              <div className="relative h-24 w-24 overflow-hidden bg-[#f3f3f3]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="product-card-title text-black">{item.name}</p>
                <p className="mt-1 text-[13px] text-black/55">
                  {item.variant}
                </p>
                <p className="mt-2 text-[12px] uppercase tracking-[0.14em] text-black/45">
                  {item.size} / Qty {item.qty}
                </p>
              </div>

              <p className="product-card-title text-black">{item.price}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="border border-black/10 bg-white p-6">
            <p className="product-card-title text-black">Shipping Address</p>
            <p className="mt-4 text-[14px] leading-7 text-black/62">
              {order.address}
            </p>
          </div>

          <div className="border border-black/10 bg-white p-6">
            <p className="product-card-title text-black">Order Emails</p>
            <p className="mt-4 text-[14px] leading-7 text-black/62">
              Confirmation, processing, shipping and completed order emails will
              be sent through SMTP after backend setup.
            </p>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
}