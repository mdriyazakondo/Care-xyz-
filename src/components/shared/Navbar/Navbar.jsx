"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, User, LogOut, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const session = null;
  const userRole = "user";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/how-it-works" },
    { name: "About Us", href: "/about" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  if (session) {
    navLinks.push({ name: "My Bookings", href: "/my-bookings" });
  }

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-teal-600 p-1.5 rounded-lg text-white group-hover:rotate-12 transition-transform">
                <Heart size={24} fill="currentColor" />
              </div>
              <span className="text-2xl font-bold text-teal-600 tracking-tight">
                Care<span className="text-amber-500">.xyz</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-all hover:text-teal-600 ${
                    isActive ? "text-teal-600" : "text-gray-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>

            {session ? (
              <div className="flex items-center gap-4">
                {userRole === "admin" && (
                  <Link
                    href="/admin"
                    className="text-gray-600 hover:text-teal-600"
                  >
                    <LayoutDashboard size={20} />
                  </Link>
                )}

                {/* User Profile Dropdown or Icon */}
                <Link
                  href="/profile"
                  className="flex items-center gap-2 p-1 pr-3 rounded-full bg-teal-50 text-teal-700 hover:bg-teal-100 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white">
                    <User size={18} />
                  </div>
                  <span className="text-sm font-medium">Account</span>
                </Link>

                <button
                  // onClick={() => signOut()}
                  className="text-gray-500 hover:text-red-600 transition-colors"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="text-sm font-bold text-gray-700 hover:text-teal-600 px-3 py-2"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-teal-100 active:scale-95"
                >
                  Join Free
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-semibold rounded-xl ${
                  pathname === link.href
                    ? "bg-teal-50 text-teal-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <hr className="my-4 border-gray-100" />

            {!session ? (
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 text-teal-600 font-bold border border-teal-200 rounded-xl"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 bg-teal-600 text-white font-bold rounded-xl"
                >
                  Register
                </Link>
              </div>
            ) : (
              <button className="w-full flex items-center justify-center gap-2 py-3 text-red-600 font-bold bg-red-50 rounded-xl">
                <LogOut size={18} /> Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
