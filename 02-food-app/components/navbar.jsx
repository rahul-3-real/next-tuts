"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <>
      <nav className="bg-black border-b border-b-slate-900">
        <div className="mx-auto container">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" className="outline-none">
                  <h1 className="font-serif text-xl font-bold">Foodies</h1>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    href="/"
                    className={`rounded-md px-3 py-2 text-sm font-medium outline-none ${
                      path === "/" ? "text-slate-50" : "text-slate-300"
                    }`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <Link
                    href="/meals"
                    className={`rounded-md px-3 py-2 text-sm font-medium outline-none ${
                      path.startsWith("/meals")
                        ? "text-slate-50"
                        : "text-slate-300"
                    }`}
                  >
                    Browse Meals
                  </Link>
                  <Link
                    href="/community"
                    className={`rounded-md px-3 py-2 text-sm font-medium outline-none ${
                      path === "/community" ? "text-slate-50" : "text-slate-300"
                    }`}
                  >
                    Community
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
