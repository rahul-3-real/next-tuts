"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="py-3 px-5 bg-slate-600 inline-block rounded hover:bg-slate-500 transition duration-100"
      type="submit"
    >
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
};

export default SubmitButton;
