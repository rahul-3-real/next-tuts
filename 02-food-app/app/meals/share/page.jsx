import Link from "next/link";

import ShareForm from "./form";
import { shareMeal } from "@/lib/actions";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">Share Your Meal</h1>
        <Link
          href="/meals"
          className="px-5 py-2 rounded-md text-sm text-slate-950 font-semibold bg-slate-50"
        >
          Go Back
        </Link>
      </div>

      <ShareForm formAction={shareMeal} />
    </>
  );
};

export default page;
