import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center gap-5 mb-5">
        <h2 className="text-4xl font-serif text-white mb-7">Explore Recipes</h2>
        <Link
          href="/meals/create"
          className="py-3 px-5 bg-slate-600 inline-block rounded hover:bg-slate-500 transition duration-100"
        >
          Create Meal
        </Link>
      </div>
    </>
  );
};

export default Header;
