import { useState } from "react";
import AccountLayout from "../components/account/AccountLayout";
import AccountFormInput from "../components/account/AccountFormInput";
import { billingAddress, shippingAddress } from "../data/account";

function AddressForm({ title, initialData }) {
  const [form, setForm] = useState(initialData);
  const [message, setMessage] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`${title} save API will be connected after backend setup.`);
  }

  return (
    <form onSubmit={handleSubmit} className="border border-black/10 bg-white p-6">
      <div className="mb-6">
        <p className="product-card-title text-black">{title}</p>
        <p className="mt-2 text-[13px] leading-5 text-black/55">
          Used during checkout and order shipping.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <AccountFormInput
          label="First Name"
          name="firstName"
          value={form.firstName}
          onChange={updateField}
          required
        />

        <AccountFormInput
          label="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={updateField}
          required
        />

        <AccountFormInput
          label="Company"
          name="company"
          value={form.company}
          onChange={updateField}
        />

        <AccountFormInput
          label="Country"
          name="country"
          value={form.country}
          onChange={updateField}
          required
        />

        <div className="md:col-span-2">
          <AccountFormInput
            label="Street Address"
            name="street"
            value={form.street}
            onChange={updateField}
            required
          />
        </div>

        <AccountFormInput
          label="City"
          name="city"
          value={form.city}
          onChange={updateField}
          required
        />

        <AccountFormInput
          label="Province"
          name="province"
          value={form.province}
          onChange={updateField}
          required
        />

        <AccountFormInput
          label="Postcode"
          name="postcode"
          value={form.postcode}
          onChange={updateField}
        />

        <AccountFormInput
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={updateField}
        />

        <div className="md:col-span-2">
          <AccountFormInput
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            required
          />
        </div>
      </div>

      {message ? (
        <p className="mt-5 border border-amber-700/20 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
          {message}
        </p>
      ) : null}

      <button type="submit" className="luxury-btn luxury-btn-dark mt-7">
        Save Address
      </button>
    </form>
  );
}

export default function AccountAddresses() {
  return (
    <AccountLayout
      title="Addresses"
      description="Manage billing and shipping information for your fragrance orders."
    >
      <div className="grid gap-8">
        <AddressForm title="Billing Address" initialData={billingAddress} />
        <AddressForm title="Shipping Address" initialData={shippingAddress} />
      </div>
    </AccountLayout>
  );
}