export const accountUser = {
  firstName: "Aamir",
  lastName: "Khan",
  email: "aamir@example.com",
  phone: "+92 300 0000000",
};

export const accountOrders = [
  {
    id: "SBA-10021",
    date: "May 18, 2026",
    status: "processing",
    paymentStatus: "paid",
    total: "PKR 7,800",
    shipping: "Standard Shipping",
    address: "House 12, DHA Phase 6, Karachi, Pakistan",
    items: [
      {
        name: "Night Rider",
        variant: "Inspired by Bleu De Chanel",
        size: "50ML",
        qty: 1,
        price: "PKR 3,900",
        image: "/images/products/night-rider.png",
      },
      {
        name: "Elyndor",
        variant: "Luxury Oud Amber",
        size: "50ML",
        qty: 1,
        price: "PKR 3,900",
        image: "/images/products/elyndor.png",
      },
    ],
  },
  {
    id: "SBA-10008",
    date: "May 11, 2026",
    status: "completed",
    paymentStatus: "paid",
    total: "PKR 3,900",
    shipping: "Standard Shipping",
    address: "House 12, DHA Phase 6, Karachi, Pakistan",
    items: [
      {
        name: "Dark Seduction",
        variant: "Inspired by Black Opium",
        size: "50ML",
        qty: 1,
        price: "PKR 3,900",
        image: "/images/products/dark-seduction.png",
      },
    ],
  },
  {
    id: "SBA-9987",
    date: "April 29, 2026",
    status: "shipped",
    paymentStatus: "cod",
    total: "PKR 4,200",
    shipping: "Courier Delivery",
    address: "Gulberg III, Lahore, Pakistan",
    items: [
      {
        name: "Vauren",
        variant: "Inspired by YSL Tuxedo",
        size: "50ML",
        qty: 1,
        price: "PKR 4,200",
        image: "/images/products/vauren.png",
      },
    ],
  },
];

export const billingAddress = {
  firstName: "Aamir",
  lastName: "Khan",
  company: "Scents By Aamir",
  country: "Pakistan",
  street: "House 12, DHA Phase 6",
  city: "Karachi",
  province: "Sindh",
  postcode: "75500",
  phone: "+92 300 0000000",
  email: "aamir@example.com",
};

export const shippingAddress = {
  firstName: "Aamir",
  lastName: "Khan",
  company: "",
  country: "Pakistan",
  street: "House 12, DHA Phase 6",
  city: "Karachi",
  province: "Sindh",
  postcode: "75500",
  phone: "+92 300 0000000",
  email: "aamir@example.com",
};