import Link from "next/link";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="w-full py-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-5">
          <Link href="/" className="text-2xl font-serif text-white">
            Recipes App
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
