// src/app/(dashboard)/layout.js
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }) {
  const userRole = "user"; // এটি সেশন থেকে আসবে

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row">
      {/* Sidebar - এটি রেসপন্সিভ লজিক সাইডবার কম্পোনেন্টের ভেতরেই আছে */}
      <Sidebar role={userRole} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        {/* Top Header */}
        <header className="bg-white/50 backdrop-blur-md sticky top-0 z-30 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Left Side: Welcome Text (মোবাইলে মার্জিন দেওয়া হয়েছে যাতে মেনু বাটনে চাপ না লাগে) */}
              <div className="pl-12 lg:pl-0">
                <h1 className="text-lg lg:text-2xl font-bold text-gray-800 truncate">
                  Welcome Back!
                </h1>
                <p className="hidden sm:block text-gray-500 text-xs lg:text-sm">
                  Monitor your care services and bookings.
                </p>
              </div>

              {/* Right Side: Profile Info */}
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="hidden sm:block text-right">
                  <p className="text-sm font-bold text-gray-700 leading-none">
                    John Doe
                  </p>
                  <p className="text-[10px] text-gray-500 capitalize mt-1">
                    {userRole} Account
                  </p>
                </div>

                {/* Profile Circle */}
                <div className="group relative cursor-pointer">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-gradient-to-tr from-teal-600 to-teal-400 flex items-center justify-center text-white font-bold shadow-lg shadow-teal-100 transition-transform group-hover:scale-105">
                    JD
                  </div>
                  {/* অনলাইন ইন্ডিকেটর */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Content Page */}
        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
