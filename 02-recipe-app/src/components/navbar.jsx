"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav>
      <ul className="flex justify-end items-center gap-5">
        <li>
          <Link
            href="/meals"
            className={`text-lg ${
              path.startsWith("/meal") ? "text-white" : "text-slate-400"
            }`}
          >
            Meals
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className={`text-lg ${
              path.startsWith("/community") ? "text-white" : "text-slate-400"
            }`}
          >
            Community
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
