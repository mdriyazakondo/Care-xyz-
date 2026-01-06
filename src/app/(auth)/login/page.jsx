"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 py-12 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] -z-0" />

      {/* Back Button */}
      <div className="max-w-2xl w-full mb-4 relative z-10 px-2">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-3 text-slate-500 hover:text-teal-600 font-black transition-all group"
        >
          <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 group-hover:border-teal-200 group-hover:bg-teal-50">
            <FaArrowLeft size={16} />
          </div>
          BACK TO HOME
        </button>
      </div>

      {/* WIDER CARD: max-w-2xl */}
      <div className="max-w-2xl w-full bg-white rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden relative z-10">
        {/* Header Section */}
        <div className="bg-slate-900 p-12 md:p-16 text-center text-white relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Welcome Back
          </h2>
          <p className="text-slate-400 text-lg font-medium max-w-sm mx-auto">
            Access your account to manage your professional care services.
          </p>
        </div>

        <div className="p-10 md:p-12">
          {/* Social Login */}
          <button className="w-full flex items-center justify-center gap-4 border-2 border-slate-100 py-5 rounded-[1.5rem] font-black text-slate-700 hover:bg-slate-50 hover:border-teal-100 transition-all mb-4 active:scale-[0.99] text-lg">
            <FaGoogle className="text-rose-500" size={22} />
            Continue with Google
          </button>

          <div className="relative flex items-center justify-center mb-4">
            <div className="flex-grow border-t-2 border-slate-50"></div>
            <span className="px-6 text-xs font-black uppercase tracking-[0.3em] text-slate-300 bg-white">
              Secure Email Login
            </span>
            <div className="flex-grow border-t-2 border-slate-50"></div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2.5">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                Email Address
              </label>
              <div className="relative">
                <FaEnvelope
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-teal-600/40"
                  size={20}
                />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-transparent rounded-[1.25rem] focus:bg-white focus:border-teal-500/20 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-300"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[11px] font-black uppercase tracking-[0.1em] text-teal-600 hover:underline underline-offset-4"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <FaLock
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-teal-600/40"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full pl-14 pr-14 py-5 bg-slate-50 border-2 border-transparent rounded-[1.25rem] focus:bg-white focus:border-teal-500/20 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all font-bold text-slate-800 placeholder:text-slate-300"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-teal-600 transition-colors"
                >
                  {showPassword ? (
                    <FaEyeSlash size={22} />
                  ) : (
                    <FaEye size={22} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-6 rounded-[1.5rem] font-black text-xl shadow-2xl shadow-teal-600/20 hover:bg-teal-700 transition-all active:scale-[0.98] mt-3"
            >
              Log in to Account
            </button>
          </form>

          {/* Footer Link */}
          <div className="text-center mt-6 pt-4 border-t border-slate-50">
            <p className="text-slate-500 font-bold text-lg">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-teal-600 font-black hover:underline underline-offset-8 decoration-2"
              >
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
