"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaUser,
  FaIdCard,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";

const RegisterPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    nid: "",
    email: "",
    contact: "",
    password: "",
  });

  const validatePassword = (pass) => {
    const hasUpperCase = /[A-Z]/.test(pass);
    const hasLowerCase = /[a-z]/.test(pass);
    const isLongEnough = pass.length >= 6;
    return hasUpperCase && hasLowerCase && isLongEnough;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validatePassword(formData.password)) {
      setError(
        "Password must be 6+ characters, with at least 1 uppercase & 1 lowercase letter."
      );
      return;
    }

    console.log("Registration Success:", formData);
    alert("Registration Successful!");
    router.push("/booking/1");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 py-12 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[120px] -z-0" />

      {/* Back Button */}
      <div className="max-w-2xl w-full mb-4 relative z-10 px-2">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-3 text-slate-500 hover:text-teal-600 font-black transition-all group"
        >
          <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 group-hover:border-teal-200 group-hover:bg-teal-50">
            <FaArrowLeft size={16} />
          </div>
          BACK TO PREVIOUS
        </button>
      </div>

      {/* WIDER CARD: max-w-2xl */}
      <div className="max-w-2xl w-full bg-white rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden relative z-10">
        {/* Header Section */}
        <div className="bg-slate-900 p-12 md:p-16 text-center text-white relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Create Account
          </h2>
          <p className="text-slate-400 text-lg font-medium max-w-sm mx-auto">
            Join our community to access professional and compassionate care
            services.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-10 md:p-16 space-y-8">
          {error && (
            <div className="bg-rose-50 text-rose-600 p-5 rounded-[1.25rem] text-sm font-bold border border-rose-100 animate-shake">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="space-y-2.5">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                Full Name
              </label>
              <div className="relative">
                <FaUser
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-teal-600/40"
                  size={20}
                />
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-transparent rounded-[1.25rem] focus:bg-white focus:border-teal-500/20 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all font-bold text-slate-800"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            {/* NID */}
            <div className="space-y-2.5">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                NID Number
              </label>
              <div className="relative">
                <FaIdCard
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-teal-600/40"
                  size={20}
                />
                <input
                  type="text"
                  required
                  placeholder="1234567890"
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-transparent rounded-[1.25rem] focus:bg-white focus:border-teal-500/20 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all font-bold text-slate-800"
                  onChange={(e) =>
                    setFormData({ ...formData, nid: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
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
                  placeholder="example@mail.com"
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-transparent rounded-[1.25rem] focus:bg-white focus:border-teal-500/20 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all font-bold text-slate-800"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-2.5">
              <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
                Contact Number
              </label>
              <div className="relative">
                <FaPhone
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-teal-600/40"
                  size={20}
                />
                <input
                  type="text"
                  required
                  placeholder="017XXXXXXXX"
                  className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-transparent rounded-[1.25rem] focus:bg-white focus:border-teal-500/20 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all font-bold text-slate-800"
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2.5">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">
              Secure Password
            </label>
            <div className="relative">
              <FaLock
                className="absolute left-5 top-1/2 -translate-y-1/2 text-teal-600/40"
                size={20}
              />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full pl-14 pr-14 py-5 bg-slate-50 border-2 border-transparent rounded-[1.25rem] focus:bg-white focus:border-teal-500/20 focus:ring-4 focus:ring-teal-500/5 outline-none transition-all font-bold text-slate-800"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-teal-600 transition-colors"
              >
                {showPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
              </button>
            </div>
            <p className="mt-3 text-[11px] text-slate-400 font-bold uppercase tracking-wider ml-1">
              * Minimum 6 characters, including 1 uppercase & 1 lowercase
              letter.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-6 rounded-[1.5rem] font-black text-xl shadow-2xl shadow-teal-600/20 hover:bg-teal-700 transition-all active:scale-[0.98] mt-3"
          >
            Create Account
          </button>

          <div className="text-center mt-5 pt-3 border-t border-slate-50">
            <p className="text-slate-500 font-bold text-lg">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-teal-600 font-black hover:underline underline-offset-8 decoration-2"
              >
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
