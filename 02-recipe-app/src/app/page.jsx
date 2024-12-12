import Image from "next/image";

import HeroImage from "@/static/images/hero.jpg";
import Link from "next/link";

const Home = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-10 items-center">
          <div className="col">
            <Image src={HeroImage} alt="Hero Image" className="rounded" />
          </div>
          <div className="col">
            <h2 className="text-4xl font-serif text-white mb-7">
              Discover The World Of Recipes
            </h2>
            <p className="w-3/4">
              This website provide a wide range of recipes which is easy to
              make. Healthy delicious meals you can make at your home. Give
              yourself and your loved once a treat with the selection of recipes
              you can make easily. Color your day with goodness by making
              healthy and delicious dishes. Make every day delicious ! Get
              recipes at your fingertips.
            </p>
            <Link
              href="/meals"
              className="py-3 px-7 bg-slate-600 inline-block rounded mt-10 hover:bg-slate-500 transition duration-100"
            >
              Discover Meal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
