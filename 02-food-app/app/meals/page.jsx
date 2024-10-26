import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import { getMeals } from "@/lib/meals";

const Meals = () => {
  const meals = getMeals();

  return (
    <ul className="grid grid-cols-4 gap-7">
      {meals.map((item) => (
        <li key={item.id} className="h-full">
          <Link href={`/meals/${item.slug}`} className="h-full">
            <div className="p-2 bg-slate-50 rounded-md h-full">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="rounded-sm"
              />
              <h5 className="text-xl font-bold text-slate-950 my-2">
                {item.title}
              </h5>
              <p className="text-slate-500 line-clamp-2">{item.summary}</p>
              <p className="text-slate-950 font-semibold mt-3 line-clamp-2">
                {item.creator}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const page = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">Meals created by you</h1>
        <Link
          href="/meals/share"
          className="px-5 py-2 rounded-md text-sm text-slate-950 font-semibold bg-slate-50"
        >
          Share Your Meal
        </Link>
      </div>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Meals />
      </Suspense>
    </>
  );
};

export default page;
