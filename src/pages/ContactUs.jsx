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
    text: "Send questions, collaborations or support concerns.",
    value: "support@scentsbyaamir.com",
  },
  {
    title: "Location",
    text: "Scents By Aamir is available for customers across Pakistan.",
    value: "Pakistan",
  },
];

const supportItems = [
  {
    title: "Order Help",
    text: "For order confirmation, tracking or delivery support, contact us with your order number.",
  },
  {
    title: "Scent Advice",
    text: "Tell us your preferred notes and occasion, and we will recommend suitable perfumes.",
  },
  {
    title: "Business",
    text: "For bulk orders, collaborations or brand enquiries, send us your details through the form.",
  },
];

const fieldClass =
  "h-11 border border-black/10 bg-white px-4 text-[13px] font-normal uppercase leading-[19px] tracking-[0.4px] text-black outline-none transition placeholder:text-black/35 focus:border-black";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header variant="white" />

      <section className="relative min-h-[460px] overflow-hidden bg-black text-white md:min-h-[560px]">
        <img
          src="/images/contact/contact-hero.png"
          alt="Contact Scents By Aamir"
          className="absolute inset-0 h-full w-full object-cover opacity-85"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.74),rgba(0,0,0,0.10)_52%,rgba(0,0,0,0.48))]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.72),transparent_54%)]" />

        <div className="site-container relative z-10 flex min-h-[460px] items-end pb-12 md:min-h-[560px] md:pb-14">
          <div className="max-w-[680px]">
            <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
              Talk To Our House
            </p>

            <h1 className="home-hero-title">Contact Us</h1>

            <p className="mt-3 max-w-[500px] text-[13px] leading-[20px] tracking-[0.2px] text-white/76">
              Need help choosing a fragrance, tracking an order or asking about
              a product? Send us a message and our team will respond.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-black">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-12 md:py-16">
          <div className="lg:col-span-5">
            <p className="mb-3 font-heading text-[13px] font-normal uppercase leading-[16px] tracking-[0.4px] text-brand-primary">
              Customer Support
            </p>

            <h2 className="luxury-section-title">How Can We Help?</h2>

            <p className="mt-4 max-w-xl text-[13px] leading-[20px] text-black/60">
              Fill the form and tell us what you need. For urgent order updates,
              WhatsApp is usually the fastest option.
            </p>

            <div className="mt-8 grid gap-px border border-black/10">
              {contactCards.map((card) => (
                <div key={card.title} className="bg-white p-6">
                  <h3 className="product-card-title text-black">{card.title}</h3>

                  <p className="mt-2 text-[13px] leading-[20px] text-black/58">
                    {card.text}
                  </p>

                  <p className="mt-4 product-card-price text-brand-primary">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="border border-black/10 bg-black/[0.03] p-6 md:p-8">
              <h2 className="luxury-section-title">Send A Message</h2>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                <input required placeholder="First Name*" className={fieldClass} />
                <input required placeholder="Last Name*" className={fieldClass} />
                <input required type="email" placeholder="Email*" className={fieldClass} />
                <input required placeholder="Phone / WhatsApp*" className={fieldClass} />

                <select className={`${fieldClass} md:col-span-2`} defaultValue="">
                  <option value="" disabled>
                    Select Topic*
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
                  placeholder="Message*"
                  className="border border-black/10 bg-white px-4 py-4 text-[13px] font-normal uppercase leading-[19px] tracking-[0.4px] text-black outline-none transition placeholder:text-black/35 focus:border-black md:col-span-2"
                />
              </div>

              <button type="button" className="luxury-btn-dark luxury-btn mt-7">
                Submit Message
              </button>

              <p className="mt-5 text-[12px] leading-[20px] text-black/50">
                By submitting this form, you agree that Scents By Aamir may
                contact you regarding your request.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="site-container grid gap-px py-14 md:grid-cols-3 md:py-20">
          {supportItems.map((item) => (
            <div key={item.title} className="border border-white/15 bg-white/8 p-7 md:p-8">
              <h3 className="product-card-title text-white">{item.title}</h3>

              <p className="mt-4 text-[13px] leading-[20px] text-white/62">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}