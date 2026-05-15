import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CollectionPage from "./pages/CollectionPage";
import ProductDetail from "./pages/ProductDetail";
import ScentFinder from "./pages/ScentFinder";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import OrderReceived from "./pages/OrderReceived";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function PlaceholderPage({ title }) {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="site-container flex min-h-screen items-center justify-center text-center">
        <div>
          <h1 className="heading-section">{title}</h1>
          <p className="mt-5 text-black/60">
            This page will be created in the next steps.
          </p>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/shop" element={<Shop />} />
      <Route path="/collection/:slug" element={<CollectionPage />} />
      <Route path="/product/:slug" element={<ProductDetail />} />

      <Route path="/scent-finder" element={<ScentFinder />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-received" element={<OrderReceived />} />

      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />

      <Route path="/login" element={<PlaceholderPage title="Login" />} />
      <Route path="/order-tracking" element={<PlaceholderPage title="Order Tracking" />} />
      <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
      <Route path="/returns-exchanges" element={<PlaceholderPage title="Returns & Exchanges" />} />
      <Route path="/delivery-return" element={<PlaceholderPage title="Delivery Return" />} />
      <Route path="/how-we-make-it" element={<PlaceholderPage title="How We Make It" />} />
      <Route path="/store-locations" element={<PlaceholderPage title="Store Locations" />} />
      <Route path="/privacy-policy" element={<PlaceholderPage title="Privacy Policy" />} />
      <Route path="/shipping-policy" element={<PlaceholderPage title="Shipping Policy" />} />
      <Route path="/terms-of-services" element={<PlaceholderPage title="Terms Of Services" />} />

      <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
    </Routes>
  );
}