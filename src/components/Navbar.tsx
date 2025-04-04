"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { logout } from "@/redux/authSlice";

const Navbar = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  console.log("user = ", user);

  const linkClass = (path: string) =>
    `px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-800 ${
      pathname === path ? "font-semibold text-blue-600" : "text-gray-700 dark:text-gray-300"
    }`;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-white dark:bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Mon Portfolio
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/" className={linkClass("/")}>
            Accueil
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            À propos
          </Link>
          <Link href="/projects" className={linkClass("/projects")}>
            Projets
          </Link>
          <Link href="/testimonials" className={linkClass("/testimonials")}>
            Témoignages
          </Link>

          {user ? (
            <>
              <Link href="/dashboard" className={linkClass("/dashboard")}>
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className={linkClass("/login")}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
