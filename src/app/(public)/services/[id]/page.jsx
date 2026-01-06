"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import {
  FaStar,
  FaRegCheckCircle,
  FaCalendarAlt,
  FaClock,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaArrowLeft,
} from "react-icons/fa";
import Link from "next/link";

const BookingDetails = () => {
  const { id } = useParams(); // URL থেকে ID নেওয়ার জন্য
  const [selectedDate, setSelectedDate] = useState("");

  // Mock Data (পরবর্তীতে API থেকে আসবে)
  const caregiver = {
    name: "Sarah Johnson",
    role: "Senior Care Specialist",
    rating: 4.9,
    reviews: 124,
    experience: "8 Years",
    location: "Dhanmondi, Dhaka",
    hourlyRate: 25,
    bio: "Certified nursing assistant with over 8 years of experience in providing compassionate care for seniors. Specialized in post-surgery recovery and medication management.",
    image: "https://i.pravatar.cc/300?u=care1",
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 lg:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 font-bold mb-8 transition-colors"
        >
          <FaArrowLeft /> Back to Search
        </Link>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* LEFT COLUMN: Caregiver Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border border-slate-100">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <img
                  src={caregiver.image}
                  alt={caregiver.name}
                  className="w-40 h-40 rounded-[2rem] object-cover border-8 border-slate-50 shadow-lg"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                    <h1 className="text-3xl font-black text-slate-900">
                      {caregiver.name}
                    </h1>
                    <span className="bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-xs font-black uppercase flex items-center gap-1">
                      <FaShieldAlt /> Verified
                    </span>
                  </div>
                  <p className="text-teal-600 font-bold text-lg mb-4">
                    {caregiver.role}
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-500 font-medium text-sm">
                    <span className="flex items-center gap-2">
                      <FaStar className="text-amber-500" /> {caregiver.rating} (
                      {caregiver.reviews} Reviews)
                    </span>
                    <span className="flex items-center gap-2">
                      <FaBriefcase className="text-slate-400" />{" "}
                      {caregiver.experience} Exp
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-slate-400" />{" "}
                      {caregiver.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-slate-100">
                <h3 className="text-xl font-black text-slate-900 mb-4">
                  About the Specialist
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {caregiver.bio}
                </p>
              </div>
            </div>

            {/* Service Highlights */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Medication Support",
                "Physical Therapy",
                "Daily Assistance",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center gap-3 shadow-sm"
                >
                  <FaRegCheckCircle className="text-teal-500 text-xl" />
                  <span className="font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Booking Sidebar */}
          <div className="lg:sticky lg:top-10 space-y-6">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">
                  Starting from
                </p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black">
                    ${caregiver.hourlyRate}
                  </span>
                  <span className="text-slate-400 font-bold">/ hour</span>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="text-xs font-black uppercase text-slate-500 mb-2 block">
                      Select Date
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-500" />
                      <input
                        type="date"
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-teal-500 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase text-slate-500 mb-2 block">
                      Duration
                    </label>
                    <div className="relative">
                      <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-500" />
                      <select className="w-full bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-teal-500 transition-all outline-none appearance-none">
                        <option>2 Hours</option>
                        <option>4 Hours</option>
                        <option>8 Hours (Full Day)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-slate-800 pt-6 space-y-3 mb-8">
                  <div className="flex justify-between text-sm font-bold text-slate-400">
                    <span>Service Fee</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between text-xl font-black text-white">
                    <span>Total Cost</span>
                    <span>${caregiver.hourlyRate * 2 + 5}.00</span>
                  </div>
                </div>

                <button className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 py-5 rounded-[1.5rem] font-black text-lg transition-all active:scale-95 shadow-xl shadow-teal-500/20">
                  Confirm Booking Now
                </button>

                <p className="text-center text-[10px] text-slate-500 mt-4 font-bold uppercase tracking-widest">
                  Secure Encrypted Payment
                </p>
              </div>

              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Trust Badge */}
            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center gap-4 shadow-sm">
              <div className="bg-teal-50 p-3 rounded-xl text-teal-600">
                <FaShieldAlt size={24} />
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-sm">
                  Care.xyz Guarantee
                </h4>
                <p className="text-[10px] text-slate-500 font-bold leading-none">
                  Replacement or refund if not satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
