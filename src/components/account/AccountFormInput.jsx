export default function AccountFormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  autoComplete,
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-heading text-[13px] uppercase tracking-[0.12em] text-black">
        {label}
        {required ? <span className="text-red-600"> *</span> : null}
      </span>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="h-12 w-full border border-black/15 bg-white px-4 text-[14px] text-black outline-none transition focus:border-black"
      />
    </label>
  );
}