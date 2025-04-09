"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { logout } from "@/redux/authSlice";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (path: string) =>
    `block px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-gray-800 ${
      pathname === path ? "font-semibold text-blue-600" : "text-gray-700 dark:text-gray-300"
    }`;

  const handleLogout = () => {
    dispatch(logout());
    window.location.replace("/");
  };

  return (
    <nav className="bg-white dark:bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          JAHSWANT
        </Link>
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15"
            />
          </svg>
        </button>
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/" className={linkClass("/")}>Accueil</Link>
          <Link href="/about" className={linkClass("/about")}>À propos</Link>
          <Link href="/projects" className={linkClass("/projects")}>Projets</Link>
          <Link href="/testimonials" className={linkClass("/testimonials")}>Témoignages</Link>
          {user ? (
            <>
              <Link href="/dashboard" className={linkClass("/dashboard")}>Dashboard</Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className={linkClass("/login")}>Login</Link>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link href="/" className={linkClass("/")} onClick={() => setMenuOpen(false)}>
            Accueil
          </Link>
          <Link href="/about" className={linkClass("/about")} onClick={() => setMenuOpen(false)}>
            À propos
          </Link>
          <Link href="/projects" className={linkClass("/projects")} onClick={() => setMenuOpen(false)}>
            Projets
          </Link>
          <Link href="/testimonials" className={linkClass("/testimonials")} onClick={() => setMenuOpen(false)}>
            Témoignages
          </Link>
          {user ? (
            <>
              <Link href="/dashboard" className={linkClass("/dashboard")} onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 mt-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className={linkClass("/login")} onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;