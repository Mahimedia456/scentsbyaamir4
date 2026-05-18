const statusMap = {
  processing: "Processing",
  shipped: "Shipped",
  completed: "Completed",
  cancelled: "Cancelled",
  pending: "Pending",
};

export default function OrderStatusBadge({ status }) {
  const cleanStatus = String(status || "pending").toLowerCase();

  const className =
    cleanStatus === "completed"
      ? "border-emerald-700/30 bg-emerald-50 text-emerald-800"
      : cleanStatus === "shipped"
        ? "border-blue-700/30 bg-blue-50 text-blue-800"
        : cleanStatus === "cancelled"
          ? "border-red-700/30 bg-red-50 text-red-800"
          : "border-amber-700/30 bg-amber-50 text-amber-800";

  return (
    <span
      className={`inline-flex items-center border px-3 py-1 font-heading text-[12px] uppercase tracking-[0.12em] ${className}`}
    >
      {statusMap[cleanStatus] || statusMap.pending}
    </span>
  );
}