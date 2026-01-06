"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  User,
  Settings,
  Home,
  LogOut,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";

const Sidebar = ({ role }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু কন্ট্রোল করার জন্য

  // মেনু লিঙ্ক ক্লিক করলে মোবাইল মেনু অটো বন্ধ হবে
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const userLinks = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Bookings", href: "/my-bookings", icon: CalendarDays },
    { name: "Profile", href: "/profile", icon: User },
  ];

  const adminLinks = [
    { name: "Admin Home", href: "/dashboard/admin", icon: ShieldCheck },
    {
      name: "All Bookings",
      href: "/dashboard/admin/all-bookings",
      icon: CalendarDays,
    },
    {
      name: "Manage Services",
      href: "/dashboard/admin/services",
      icon: Settings,
    },
  ];

  const links = role === "admin" ? adminLinks : userLinks;

  return (
    <>
      {/* Mobile Toggle Button - শুধু মোবাইলে দেখাবে */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-teal-600 text-white rounded-lg shadow-lg shadow-teal-200"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Overlay - মোবাইলে মেনু ওপেন থাকলে ব্যাকগ্রাউন্ড ঝাপসা করবে */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-100 p-4 z-40 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0 w-72" : "-translate-x-full w-64"} 
        lg:translate-x-0 lg:static lg:block`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="mb-8 px-4 mt-12 lg:mt-0">
            <h2 className="text-xl font-bold text-teal-600 tracking-tight">
              Care<span className="text-amber-500">.Panel</span>
            </h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-2 overflow-y-auto custom-scrollbar">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-teal-600 text-white shadow-md shadow-teal-100"
                      : "text-gray-600 hover:bg-teal-50 hover:text-teal-600"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium text-sm lg:text-base">
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Footer Section */}
          <div className="pt-4 mt-auto border-t border-gray-100">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-teal-600 transition-all rounded-xl hover:bg-gray-50"
            >
              <Home size={20} />
              <span className="font-medium">Back to Home</span>
            </Link>
            <button className="w-full mt-2 flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
