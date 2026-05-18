import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccountHero from "../components/account/AccountHero";
import AccountFormInput from "../components/account/AccountFormInput";

export default function AccountLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const [message, setMessage] = useState("");

  function updateField(event) {
    const { name, value, type, checked } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Login API will be connected after backend setup.");
  }

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      <Header variant="dark" />

      <AccountHero
        title="Account Login"
        description="Sign in to view orders, manage shipping details and track your fragrance purchases."
      />

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 py-12 md:py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
              Returning Customer
            </p>

            <h2 className="luxury-section-title mt-3">Welcome Back</h2>

            <p className="mt-4 max-w-md text-[14px] leading-7 text-black/60">
              Access your order history, saved addresses and account details for
              faster checkout.
            </p>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="border border-black/10 bg-white p-6 md:p-8"
            >
              <div className="grid gap-5">
                <AccountFormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  required
                  autoComplete="email"
                />

                <AccountFormInput
                  label="Password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={updateField}
                  required
                  autoComplete="current-password"
                />

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <label className="inline-flex items-center gap-3 text-[13px] text-black/62">
                    <input
                      name="remember"
                      type="checkbox"
                      checked={form.remember}
                      onChange={updateField}
                      className="h-4 w-4 accent-black"
                    />
                    Remember me
                  </label>

                  <Link
                    to="/account/lost-password"
                    className="font-heading text-[13px] uppercase tracking-[0.12em] text-black underline underline-offset-4"
                  >
                    Lost Password?
                  </Link>
                </div>

                {message ? (
                  <p className="border border-amber-700/20 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
                    {message}
                  </p>
                ) : null}

                <button type="submit" className="luxury-btn luxury-btn-dark">
                  Login
                </button>

                <p className="text-[13px] text-black/58">
                  New to Scents By Aamir?{" "}
                  <Link
                    to="/account/register"
                    className="font-heading uppercase tracking-[0.12em] text-black underline underline-offset-4"
                  >
                    Create Account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}