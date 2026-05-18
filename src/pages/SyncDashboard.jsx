import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  getSyncStatus,
  syncWooAll,
  syncWooCategories,
  syncWooProducts,
} from "../services/wooService";

function getSyncAdmin() {
  try {
    const raw = localStorage.getItem("sba_sync_admin");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export default function SyncDashboard() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState(() => getSyncAdmin());
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");
  const [busyAction, setBusyAction] = useState("");

  async function loadStatus() {
    try {
      const data = await getSyncStatus();
      setStatus(data);
    } catch (error) {
      setMessage(error.message || "Failed to load sync status.");
    }
  }

  useEffect(() => {
    const currentAdmin = getSyncAdmin();

    if (!currentAdmin?.token) {
      navigate("/sync-login");
      return;
    }

    setAdmin(currentAdmin);
    loadStatus();
  }, [navigate]);

  async function runSync(action) {
    if (!admin?.token) {
      navigate("/sync-login");
      return;
    }

    try {
      setBusyAction(action);
      setMessage("");

      let result;

      if (action === "all") {
        result = await syncWooAll(admin.token);
      }

      if (action === "products") {
        result = await syncWooProducts(admin.token);
      }

      if (action === "categories") {
        result = await syncWooCategories(admin.token);
      }

      setMessage(result?.message || "Sync completed successfully.");
      await loadStatus();
    } catch (error) {
      setMessage(error.message || "Sync failed.");
    } finally {
      setBusyAction("");
    }
  }

  function logout() {
    localStorage.removeItem("sba_sync_admin");
    navigate("/sync-login");
  }

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      <Header variant="dark" />

      <section className="relative overflow-hidden bg-brand-bg text-brand-text">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,var(--color-glow),transparent_34%)]" />
        <div className="site-container relative z-10 flex min-h-[360px] items-end py-12 md:min-h-[430px] md:py-16">
          <div>
            <p className="mb-3 font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
              WooCommerce Sync
            </p>
            <h1 className="heading-hero">Sync Dashboard</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-muted md:text-base">
              Manually sync WooCommerce products and categories into local JSON
              cache for fast frontend loading.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container py-12 md:py-16">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="product-card-title text-black">
                Logged In As {admin?.email}
              </p>
              <p className="mt-2 text-[13px] text-black/55">
                This page is hidden. Do not link it in header/footer.
              </p>
            </div>

            <button
              type="button"
              onClick={logout}
              className="luxury-btn luxury-btn-dark"
            >
              Logout
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="border border-black/10 bg-white p-6">
              <p className="product-card-title text-black">Products Cached</p>
              <p className="mt-5 font-heading text-[42px] uppercase leading-none text-black">
                {status?.products ?? "-"}
              </p>
            </div>

            <div className="border border-black/10 bg-white p-6">
              <p className="product-card-title text-black">Categories Cached</p>
              <p className="mt-5 font-heading text-[42px] uppercase leading-none text-black">
                {status?.categories ?? "-"}
              </p>
            </div>

            <div className="border border-black/10 bg-white p-6">
              <p className="product-card-title text-black">Source</p>
              <p className="mt-5 font-heading text-[26px] uppercase leading-none text-black">
                Local JSON
              </p>
            </div>
          </div>

          {message ? (
            <div className="mt-8 border border-amber-700/20 bg-amber-50 p-5 text-[14px] leading-6 text-amber-900">
              {message}
            </div>
          ) : null}

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <button
              type="button"
              onClick={() => runSync("all")}
              disabled={Boolean(busyAction)}
              className="luxury-btn luxury-btn-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              {busyAction === "all" ? "Syncing..." : "Sync All"}
            </button>

            <button
              type="button"
              onClick={() => runSync("products")}
              disabled={Boolean(busyAction)}
              className="luxury-btn luxury-btn-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              {busyAction === "products" ? "Syncing..." : "Sync Products"}
            </button>

            <button
              type="button"
              onClick={() => runSync("categories")}
              disabled={Boolean(busyAction)}
              className="luxury-btn luxury-btn-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              {busyAction === "categories" ? "Syncing..." : "Sync Categories"}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}