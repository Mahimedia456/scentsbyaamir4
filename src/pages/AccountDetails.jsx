import { useState } from "react";
import AccountLayout from "../components/account/AccountLayout";
import AccountFormInput from "../components/account/AccountFormInput";
import { accountUser } from "../data/account";

export default function AccountDetails() {
  const [form, setForm] = useState({
    firstName: accountUser.firstName,
    lastName: accountUser.lastName,
    email: accountUser.email,
    phone: accountUser.phone,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form.newPassword && form.newPassword !== form.confirmPassword) {
      setMessage("New password and confirm password do not match.");
      return;
    }

    setMessage("Account update API will be connected after backend setup.");
  }

  return (
    <AccountLayout
      title="Account Details"
      description="Update your profile information and account password."
    >
      <form
        onSubmit={handleSubmit}
        className="border border-black/10 bg-white p-6 md:p-8"
      >
        <div className="mb-7">
          <p className="product-card-title text-black">Personal Details</p>
          <p className="mt-2 text-[13px] leading-5 text-black/55">
            These details will be used on checkout, emails and order invoices.
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
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            required
          />

          <AccountFormInput
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={updateField}
          />
        </div>

        <div className="my-8 border-t border-black/10 pt-8">
          <p className="product-card-title text-black">Password Change</p>
          <p className="mt-2 text-[13px] leading-5 text-black/55">
            Leave password fields empty if you do not want to change password.
          </p>
        </div>

        <div className="grid gap-5">
          <AccountFormInput
            label="Current Password"
            name="currentPassword"
            type="password"
            value={form.currentPassword}
            onChange={updateField}
            autoComplete="current-password"
          />

          <div className="grid gap-5 md:grid-cols-2">
            <AccountFormInput
              label="New Password"
              name="newPassword"
              type="password"
              value={form.newPassword}
              onChange={updateField}
              autoComplete="new-password"
            />

            <AccountFormInput
              label="Confirm New Password"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={updateField}
              autoComplete="new-password"
            />
          </div>
        </div>

        {message ? (
          <p className="mt-5 border border-amber-700/20 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
            {message}
          </p>
        ) : null}

        <button type="submit" className="luxury-btn luxury-btn-dark mt-7">
          Save Changes
        </button>
      </form>
    </AccountLayout>
  );
}