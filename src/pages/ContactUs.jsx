import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const contactCards = [
  {
    title: "WhatsApp",
    text: "Message us for order help, fragrance suggestions and delivery updates.",
    value: "+92 300 0000000",
  },
  {
    title: "Email",
    text: "Send us your questions, collaboration requests or support concerns.",
    value: "support@scentsbyaamir.com",
  },
  {
    title: "Location",
    text: "Scents By Aamir is available for customers across Pakistan.",
    value: "Pakistan",
  },
];

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="relative min-h-[600px] overflow-hidden bg-black text-white">
        <img
          src="/images/contact/contact-hero.png"
          alt="Contact Scents By Aamir"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,var(--color-glow),transparent_36%)]" />

        <div className="site-container relative z-10 flex min-h-[600px] items-end pb-16">
          <div className="max-w-5xl">
            <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
              Talk To Our House
            </p>

            <h1 className="heading-hero">Contact Us</h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 md:text-xl">
              Need help choosing a fragrance, tracking an order or asking about
              a product? Send us a message and our team will respond.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="mb-4 font-heading text-xl uppercase tracking-wideLuxury text-brand-primary">
              Customer Support
            </p>

            <h2 className="heading-section">How Can We Help?</h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-black/60">
              Fill the form and tell us what you need. For urgent order updates,
              WhatsApp is usually the fastest option.
            </p>

            <div className="mt-9 grid gap-4">
              {contactCards.map((card) => (
                <div key={card.title} className="border border-black/10 p-6">
                  <h3 className="font-heading text-[32px] uppercase tracking-wideLuxury">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-black/58">
                    {card.text}
                  </p>

                  <p className="mt-4 font-heading text-[20px] uppercase tracking-wideLuxury text-brand-primary">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="border border-black/10 bg-black/[0.03] p-6 md:p-8">
              <h2 className="font-heading text-[46px] uppercase leading-none tracking-wideLuxury">
                Send A Message
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <input
                  required
                  placeholder="FIRST NAME*"
                  className="h-14 border border-black/10 bg-white px-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black"
                />

                <input
                  required
                  placeholder="LAST NAME*"
                  className="h-14 border border-black/10 bg-white px-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black"
                />

                <input
                  required
                  type="email"
                  placeholder="EMAIL*"
                  className="h-14 border border-black/10 bg-white px-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black"
                />

                <input
                  required
                  placeholder="PHONE / WHATSAPP*"
                  className="h-14 border border-black/10 bg-white px-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black"
                />

                <select
                  className="h-14 border border-black/10 bg-white px-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black md:col-span-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    SELECT TOPIC*
                  </option>
                  <option>Fragrance Suggestion</option>
                  <option>Order Tracking</option>
                  <option>Return / Exchange</option>
                  <option>Wholesale / Collaboration</option>
                  <option>Other</option>
                </select>

                <textarea
                  required
                  rows={7}
                  placeholder="MESSAGE*"
                  className="border border-black/10 bg-white px-4 py-4 text-sm uppercase tracking-[0.08em] outline-none focus:border-black md:col-span-2"
                />
              </div>

              <button type="button" className="luxury-btn-dark luxury-btn mt-7">
                Submit Message
              </button>

              <p className="mt-5 text-sm leading-6 text-black/50">
                By submitting this form, you agree that Scents By Aamir may
                contact you regarding your request.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="site-container grid gap-8 py-16 md:grid-cols-3 md:py-24">
          <div className="border border-white/15 bg-white/8 p-8">
            <h3 className="font-heading text-[40px] uppercase tracking-wideLuxury">
              Order Help
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/62">
              For order confirmation, tracking or delivery support, contact us
              with your order number.
            </p>
          </div>

          <div className="border border-white/15 bg-white/8 p-8">
            <h3 className="font-heading text-[40px] uppercase tracking-wideLuxury">
              Scent Advice
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/62">
              Tell us your preferred notes and occasion, and we will recommend
              suitable perfumes.
            </p>
          </div>

          <div className="border border-white/15 bg-white/8 p-8">
            <h3 className="font-heading text-[40px] uppercase tracking-wideLuxury">
              Business
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/62">
              For bulk orders, collaborations or brand enquiries, send us your
              details through the form.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}