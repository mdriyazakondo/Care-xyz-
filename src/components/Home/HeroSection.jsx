"use client";

import Link from "next/link";
import {
  FaShieldAlt,
  FaArrowRight,
  FaStar,
  FaRegClock,
  FaPlayCircle,
  FaCheckCircle,
} from "react-icons/fa"; // react-icons/fa ব্যবহার করা হয়েছে
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSection = () => {
  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800",
      label: "Elderly Care",
      desc: "Dedicated support for your parents.",
    },
    {
      url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      label: "Baby Sitting",
      desc: "Safe and playful care for kids.",
    },
    {
      url: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=800",
      label: "Medical Care",
      desc: "Professional nursing at home.",
    },
  ];

  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden min-h-[100vh] lg:min-h-[90vh] flex items-center">
      {/* Background Decor - Desktop Only */}
      <div className="hidden lg:block absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white border border-teal-100 text-teal-700 px-4 py-2 rounded-full text-[12px] md:text-sm font-black shadow-sm uppercase tracking-widest">
              <FaShieldAlt className="text-teal-600" />
              100% Verified Caregivers
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-slate-900 tracking-tight">
              Compassionate <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                Care At Home
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Premium home care services designed for the well-being of your
              children, seniors, and patients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link
                href="/services"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-teal-100 active:scale-95"
              >
                Find Caregiver <FaArrowRight size={18} />
              </Link>

              <Link
                href="/how-it-works"
                className="bg-white border-2 border-slate-200 hover:border-teal-600 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all active:scale-95 text-slate-700"
              >
                <FaPlayCircle size={20} className="text-slate-400" />
                How it works
              </Link>
            </div>

            {/* TRUST STATS */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-slate-200">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-black text-slate-900">
                  500+
                </p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Experts
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-black text-slate-900">
                  15k+
                </p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Families
                </p>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <div className="flex text-amber-500 gap-0.5 justify-center lg:justify-start mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar key={i} size={12} />
                  ))}
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                  Top Rated Care
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL - SLIDER */}
          <div className="order-1 lg:order-2 relative px-2 sm:px-0">
            <div className="rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white relative z-10">
              <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                className="h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] w-full"
              >
                {sliderImages.map((item, i) => (
                  <SwiperSlide key={i} className="relative group">
                    <img
                      src={item.url}
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-6 lg:p-10">
                      <div className="text-white text-left">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-1 w-8 bg-teal-500 rounded-full"></div>
                          <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                            Premium Service
                          </span>
                        </div>
                        <h4 className="text-xl lg:text-3xl font-black mb-1">
                          {item.label}
                        </h4>
                        <p className="text-sm lg:text-lg text-white/80 font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -left-4 md:-left-12 z-20 bg-white/95 backdrop-blur-md p-3 md:p-5 rounded-2xl md:rounded-[2rem] shadow-2xl border border-white flex items-center gap-3 md:gap-4 animate-bounce-slow">
              <div className="bg-teal-100 p-2 md:p-3.5 rounded-xl md:rounded-2xl text-teal-600">
                <FaRegClock size={24} />
              </div>
              <div>
                <p className="text-[8px] md:text-[10px] text-slate-400 font-black uppercase tracking-widest">
                  24/7 Availability
                </p>
                <p className="text-sm md:text-lg font-black text-slate-900 leading-none flex items-center gap-2">
                  Ready Now{" "}
                  <FaCheckCircle className="text-emerald-500 text-xs md:text-sm" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
