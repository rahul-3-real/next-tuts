import { Suspense } from "react";

import { getMeals } from "@/libs/meals";
import MealItem from "./meal-item";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

const Meals = () => {
  const meals = getMeals();

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <Suspense fallback={<p>Fetching meals...</p>}>
          <MealItem meals={meals} />
        </Suspense>
      </div>
    </section>
  );
};

export default Meals;
