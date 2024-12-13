import Image from "next/image";
import Link from "next/link";

const MealItem = ({ meals }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-7">
        {meals.map((meal) => (
          <div className="col" key={meal.id}>
            <div className="p-4 border border-slate-800 h-full">
              <Link
                href={`/meals/${meal.slug}`}
                className="block relative w-full h-56 overflow-hidden mb-5"
              >
                <Image src={`/images/${meal.image}`} alt={meal.title} fill />
              </Link>
              <h5 className="text-white text-2xl font-serif mb-3">
                <Link href={`/meals/${meal.slug}`} className="block">
                  {meal.title}
                </Link>
              </h5>
              <h6 className="text-slate-400 mb-3">
                by{" "}
                <Link
                  href={`mailto:${meal.creator_email}`}
                  className="text-white font-semibold"
                >
                  {meal.creator}
                </Link>
              </h6>
              <p className="text-slate-400">{meal.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MealItem;
