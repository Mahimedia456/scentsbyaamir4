import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccountHero from "../components/account/AccountHero";
import AccountFormInput from "../components/account/AccountFormInput";

export default function LostPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      "Password reset email will be sent from SMTP after backend setup."
    );
  }

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      <Header variant="dark" />

      <AccountHero
        title="Lost Password"
        description="Enter your email address and we will send password reset instructions once SMTP is connected."
      />

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 py-12 md:py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
              Account Recovery
            </p>

            <h2 className="luxury-section-title mt-3">Reset Access</h2>

            <p className="mt-4 max-w-md text-[14px] leading-7 text-black/60">
              This screen is frontend-ready. SMTP email sending will be added in
              the backend phase.
            </p>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="border border-black/10 bg-white p-6 md:p-8"
            >
              <AccountFormInput
                label="Email Address"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="email"
              />

              {message ? (
                <p className="mt-5 border border-amber-700/20 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
                  {message}
                </p>
              ) : null}

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <button type="submit" className="luxury-btn luxury-btn-dark">
                  Send Reset Link
                </button>

                <Link to="/account/login" className="luxury-link text-black">
                  Back To Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}