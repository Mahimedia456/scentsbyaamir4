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
import AccountLogin from "./pages/AccountLogin";
import AccountRegister from "./pages/AccountRegister";
import LostPassword from "./pages/LostPassword";
import ResetPassword from "./pages/ResetPassword";
import MyAccount from "./pages/MyAccount";
import AccountOrders from "./pages/AccountOrders";
import AccountOrderDetail from "./pages/AccountOrderDetail";
import AccountAddresses from "./pages/AccountAddresses";
import AccountDetails from "./pages/AccountDetails";
import OrderTracking from "./pages/OrderTracking";
import FAQ from "./pages/FAQ";
import ReturnsExchanges from "./pages/ReturnsExchanges";
import DeliveryReturn from "./pages/DeliveryReturn";
import HowWeMakeIt from "./pages/HowWeMakeIt";
import StoreLocations from "./pages/StoreLocations";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsOfServices from "./pages/TermsOfServices";

import SyncLogin from "./pages/SyncLogin";
import SyncDashboard from "./pages/SyncDashboard";





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

      <Route path="/account/login" element={<AccountLogin />} />
<Route path="/account/register" element={<AccountRegister />} />
<Route path="/account/lost-password" element={<LostPassword />} />
<Route path="/account/reset-password" element={<ResetPassword />} />

<Route path="/account" element={<MyAccount />} />
<Route path="/account/orders" element={<AccountOrders />} />
<Route path="/account/orders/:orderId" element={<AccountOrderDetail />} />
<Route path="/account/addresses" element={<AccountAddresses />} />
<Route path="/account/details" element={<AccountDetails />} />

  <Route path="/order-tracking" element={<OrderTracking />} />
<Route path="/faq" element={<FAQ />} />
<Route path="/returns-exchanges" element={<ReturnsExchanges />} />
<Route path="/delivery-return" element={<DeliveryReturn />} />
<Route path="/how-we-make-it" element={<HowWeMakeIt />} />
<Route path="/store-locations" element={<StoreLocations />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/shipping-policy" element={<ShippingPolicy />} />
<Route path="/terms-of-services" element={<TermsOfServices />} />
<Route path="/sync-login" element={<SyncLogin />} />
<Route path="/sync-dashboard" element={<SyncDashboard />} />


      <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
    </Routes>
  );
}