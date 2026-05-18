import Header from "../Header";
import Footer from "../Footer";
import AccountHero from "./AccountHero";
import AccountSidebar from "./AccountSidebar";

export default function AccountLayout({
  title,
  description,
  children,
  fullWidth = false,
}) {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      <Header variant="dark" />

      <AccountHero title={title} description={description} />

      <section className="bg-white text-black">
        <div
          className={`site-container grid gap-8 py-12 md:py-16 ${
            fullWidth ? "" : "lg:grid-cols-12"
          }`}
        >
          {!fullWidth ? (
            <div className="lg:col-span-3">
              <AccountSidebar />
            </div>
          ) : null}

          <div className={fullWidth ? "" : "lg:col-span-9"}>{children}</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}