"use client";

import React from "react";
import {
  FaUserEdit,
  FaSearchLocation,
  FaHandshake,
  FaHeartbeat,
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Share Your Needs",
      desc: "Register on our platform and specify the type of care required—whether it's elderly support, child care, or nursing.",
      icon: <FaUserEdit className="text-3xl lg:text-4xl" />,
      color: "bg-blue-600",
      lightColor: "bg-blue-50 text-blue-600",
    },
    {
      id: 2,
      title: "Find Your Expert",
      desc: "Browse through profiles of verified caregivers in your area. Check their experience, skills, and ratings from other families.",
      icon: <FaSearchLocation className="text-3xl lg:text-4xl" />,
      color: "bg-teal-500",
      lightColor: "bg-teal-50 text-teal-600",
    },
    {
      id: 3,
      title: "Confirm Booking",
      desc: "Interview your preferred caregiver, discuss your specific schedule, and finalize the booking securely through our app.",
      icon: <FaHandshake className="text-3xl lg:text-4xl" />,
      color: "bg-amber-500",
      lightColor: "bg-amber-50 text-amber-600",
    },
    // {
    //   id: 4,
    //   title: "Receive Quality Care",
    //   desc: "Our professional team arrives at your doorstep to provide compassionate care with the highest standards of safety.",
    //   icon: <FaHeartbeat className="text-3xl lg:text-4xl" />,
    //   color: "bg-rose-500",
    //   lightColor: "bg-rose-50 text-rose-600",
    // },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. Header Section */}
      <section className="bg-[#F8FAFC] py-24 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-teal-100 shadow-sm">
            Simple 4-Step Process
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
            How <span className="text-teal-600 italic">Care.xyz</span> Works
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            We’ve streamlined the process of finding professional help. Secure,
            reliable, and compassionate care is just a few clicks away.
          </p>
        </div>
        {/* Background Aesthetic */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-[100px] -mr-32 -mt-32"></div>
      </section>

      {/* 2. Steps Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Desktop Connecting Line (Visible only on Large Screens) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-0 -translate-y-24"></div>

            {steps.map((step) => (
              <div
                key={step.id}
                className="relative group text-center lg:text-left"
              >
                {/* Step Counter */}
                <div
                  className={`w-16 h-16 ${step.color} text-white rounded-[1.5rem] flex items-center justify-center text-2xl font-black shadow-2xl mb-10 mx-auto lg:mx-0 group-hover:rotate-6 transition-transform duration-500 relative z-10 border-4 border-white`}
                >
                  {step.id}
                </div>

                {/* Info Card */}
                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col h-full">
                  <div
                    className={`w-16 h-16 ${step.lightColor} rounded-2xl flex items-center justify-center mb-8 shadow-inner`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed font-medium mb-6">
                    {step.desc}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-teal-500/40 group-hover:text-teal-500 transition-colors">
                    <FaCheckCircle />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                      Verified Step
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
          {/* Decorative Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal-500/30 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/20 rounded-full blur-[80px]"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight leading-[1.1]">
              Ready to find the <br /> perfect care match?
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/services"
                className="bg-teal-500 hover:bg-white text-slate-900 px-12 py-6 rounded-[2rem] font-black text-xl transition-all flex items-center gap-3 active:scale-95 shadow-xl shadow-teal-500/20"
              >
                Get Started Now <FaArrowRight />
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-3 text-white/70 hover:text-white font-bold text-lg py-3 px-6 transition-all"
              >
                <FaPhoneAlt size={16} /> Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles for Animation */}
      <style jsx>{`
        .font-sans {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;
