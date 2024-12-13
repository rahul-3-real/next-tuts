import { getDetailMeal } from "@/libs/meals";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const MealDetail = ({ params }) => {
  const meal = getDetailMeal(params.slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="w-3/4">
          <h2 className="text-4xl font-serif text-white mb-4">{meal.title}</h2>
          <h4 className="mb-5 text-white">
            by{" "}
            <Link
              className="font-semibold"
              href={`mailto:${meal.creator_email}`}
            >
              {meal.creator}
            </Link>
          </h4>
          <p className="mb-7">{meal.summary}</p>
          <div className="relative w-full h-[70vh] mb-7">
            <Image src={meal.image} alt={meal.title} fill />
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: meal.instructions,
            }}
          ></p>
        </div>
      </div>
    </section>
  );
};

export default MealDetail;
