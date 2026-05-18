import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SYNC_EMAIL = "aamir@scentsbyaamir.com";

export default function SyncLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    token: "",
  });

  const [error, setError] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form.email.trim().toLowerCase() !== SYNC_EMAIL) {
      setError("Invalid sync admin email.");
      return;
    }

    if (!form.password.trim()) {
      setError("Password is required.");
      return;
    }

    if (!form.token.trim()) {
      setError("Sync token is required.");
      return;
    }

    localStorage.setItem(
      "sba_sync_admin",
      JSON.stringify({
        email: form.email.trim().toLowerCase(),
        token: form.token.trim(),
        loggedInAt: Date.now(),
      })
    );

    navigate("/sync-dashboard");
  }

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      <Header variant="dark" />

      <section className="relative overflow-hidden bg-brand-bg text-brand-text">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,var(--color-glow),transparent_34%)]" />
        <div className="site-container relative z-10 flex min-h-[360px] items-end py-12 md:min-h-[430px] md:py-16">
          <div>
            <p className="mb-3 font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
              Hidden Admin
            </p>
            <h1 className="heading-hero">Sync Login</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-muted md:text-base">
              Login to manually sync WooCommerce products and categories.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container flex justify-center py-12 md:py-16">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl border border-black/10 bg-white p-6 md:p-8"
          >
            <div className="grid gap-5">
              <label className="block">
                <span className="mb-2 block font-heading text-[13px] uppercase tracking-[0.12em] text-black">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="aamir@scentsbyaamir.com"
                  className="h-12 w-full border border-black/15 bg-white px-4 text-[14px] text-black outline-none focus:border-black"
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-heading text-[13px] uppercase tracking-[0.12em] text-black">
                  Password
                </span>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={updateField}
                  placeholder="Enter sync password"
                  className="h-12 w-full border border-black/15 bg-white px-4 text-[14px] text-black outline-none focus:border-black"
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-heading text-[13px] uppercase tracking-[0.12em] text-black">
                  Sync Token
                </span>
                <input
                  name="token"
                  type="password"
                  value={form.token}
                  onChange={updateField}
                  placeholder="SYNC_ADMIN_TOKEN from api/.env"
                  className="h-12 w-full border border-black/15 bg-white px-4 text-[14px] text-black outline-none focus:border-black"
                />
              </label>

              {error ? (
                <p className="border border-red-700/20 bg-red-50 px-4 py-3 text-[13px] text-red-900">
                  {error}
                </p>
              ) : null}

              <button type="submit" className="luxury-btn luxury-btn-dark">
                Login To Sync
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}