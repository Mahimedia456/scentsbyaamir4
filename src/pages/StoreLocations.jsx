import InfoPageLayout from "../components/info/InfoPageLayout";

const locations = [
  {
    city: "Karachi",
    title: "Scents By Aamir — Main Dispatch",
    address: "Karachi, Pakistan",
    phone: "+92 300 0000000",
    timing: "Monday to Saturday / 12:00 PM - 8:00 PM",
  },
];

export default function StoreLocations() {
  return (
    <InfoPageLayout
      title="Store Locations"
      description="Find Scents By Aamir availability, dispatch location and customer support information."
      ctaLabel="Contact Us"
      ctaTo="/contact"
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-heading text-[15px] uppercase tracking-[0.16em] text-brand-primary">
            Visit / Dispatch
          </p>

          <h2 className="luxury-section-title mt-3">Our Locations</h2>

          <p className="mt-4 text-[14px] leading-7 text-black/60">
            Add more physical stores later from the admin panel. For now this
            page is ready for frontend display and future backend connection.
          </p>
        </div>

        <div className="grid gap-5 lg:col-span-8">
          {locations.map((location) => (
            <div
              key={location.title}
              className="grid gap-6 border border-black/10 p-6 md:grid-cols-12"
            >
              <div className="md:col-span-8">
                <p className="product-card-title text-brand-primary">
                  {location.city}
                </p>

                <h3 className="mt-4 luxury-section-title">{location.title}</h3>

                <p className="mt-4 text-[14px] leading-7 text-black/60">
                  {location.address}
                </p>
              </div>

              <div className="border-t border-black/10 pt-5 md:col-span-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                <p className="text-[12px] uppercase tracking-[0.14em] text-black/45">
                  Phone
                </p>
                <p className="mt-2 product-card-title text-black">
                  {location.phone}
                </p>

                <p className="mt-6 text-[12px] uppercase tracking-[0.14em] text-black/45">
                  Timing
                </p>
                <p className="mt-2 text-[14px] leading-6 text-black/60">
                  {location.timing}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InfoPageLayout>
  );
}