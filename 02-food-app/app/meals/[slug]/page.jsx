import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getMealDetail } from "@/lib/meals";

const Meal = ({ mealSlug }) => {
  const meal = getMealDetail(mealSlug);

  if (!meal) notFound();

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-2 relative w-full h-full">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="w-full h-full !static rounded-md"
          />
        </div>
        <div className="col-span-3">
          <h1 className="text-5xl font-bold font-serif mb-5">{meal.title}</h1>
          <h4 className="text-lg">
            {meal.creator} -{" "}
            <a href={`mailto:${meal.creator_email}`}>{meal.creator_email}</a>
          </h4>
          <hr className="my-7 opacity-5" />
          <p>{meal.summary}</p>
          <hr className="my-7 opacity-5" />
          <h4 className="text-xl">Instructions</h4>
          <p dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
        </div>
      </div>
    </>
  );
};

const page = ({ params }) => {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Meal mealSlug={params.slug} />
      </Suspense>
    </>
  );
};

export default page;
