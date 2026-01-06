import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-teal-600 p-2 rounded-xl text-white shadow-lg shadow-teal-900 group-hover:scale-110 transition-transform">
                <FaHeart size={22} />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">
                Care<span className="text-teal-500">.xyz</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed font-medium">
              We provide world-class professional care for children, seniors,
              and patients. Our mission is to ensure your family’s safety
              through verified and compassionate caregivers.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:text-white hover:border-teal-500 hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">
              Platform
            </h4>
            <ul className="space-y-4 font-bold text-sm">
              {[
                "Home",
                "Our Services",
                "About Us",
                "Track Booking",
                "Join as Caregiver",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-teal-400 flex items-center gap-2 transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-900 group-hover:bg-teal-500 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-4 font-bold text-sm">
              {[
                "Baby Sitting",
                "Elderly Care",
                "Special Needs Care",
                "Home Nursing",
                "Post-Surgical Care",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-teal-400 flex items-center gap-2 transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-900 group-hover:bg-teal-500 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-lg mb-8 uppercase tracking-widest">
              Reach Us
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-500 shrink-0">
                  <FaMapMarkerAlt size={16} />
                </div>
                <span className="text-sm font-medium leading-relaxed mt-1">
                  Level 4, Care Plaza, Gulshan-2, <br /> Dhaka, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-500 shrink-0">
                  <FaPhoneAlt size={16} />
                </div>
                <span className="text-sm font-black text-slate-200">
                  +880 1234 567 890
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-500 shrink-0">
                  <FaEnvelope size={16} />
                </div>
                <span className="text-sm font-black text-slate-200">
                  support@care.xyz
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            © {currentYear} Care.xyz Global. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
