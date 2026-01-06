"use client";
import { useState } from "react";
import { User, Mail, Phone, MapPin, IdCard, Camera, Save } from "lucide-react";

const ProfilePage = () => {
  // পরবর্তী সময়ে এই ডাটা ডাটাবেজ থেকে আসবে
  const [userInfo, setUserInfo] = useState({
    name: "Mehedi Hasan",
    email: "mehedi@example.com",
    phone: "+880 1700-000000",
    nid: "1234567890",
    address: "Mirpur-10, Dhaka, Bangladesh",
    role: "User",
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
        <p className="text-gray-500 text-sm">
          Manage your personal information and security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side: Profile Picture Card */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-4xl font-bold border-4 border-white shadow-md">
              {userInfo.name.charAt(0)}
            </div>
            <button className="absolute bottom-1 right-1 bg-teal-600 p-2 rounded-full text-white shadow-lg hover:scale-105 transition-transform">
              <Camera size={18} />
            </button>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{userInfo.name}</h3>
            <p className="text-sm text-gray-500 capitalize">
              {userInfo.role} Account
            </p>
          </div>
          <div className="w-full pt-4 border-t border-gray-50 text-left space-y-2">
            <p className="text-xs font-bold text-gray-400 uppercase">
              Verification Status
            </p>
            <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold bg-emerald-50 px-3 py-2 rounded-lg">
              <IdCard size={16} /> Verified User (NID)
            </div>
          </div>
        </div>

        {/* Right Side: Account Details Form */}
        <div className="md:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Account Details</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-sm font-bold text-teal-600 hover:text-teal-700"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          <div className="p-6 space-y-5">
            {/* Name Field */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                  <User size={16} className="text-teal-600" /> Full Name
                </label>
                <input
                  type="text"
                  disabled={!isEditing}
                  defaultValue={userInfo.name}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none disabled:bg-gray-50 disabled:text-gray-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                  <Mail size={16} className="text-teal-600" /> Email Address
                </label>
                <input
                  type="email"
                  disabled // ইমেইল সাধারণত চেঞ্জ করা যায় না
                  defaultValue={userInfo.email}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 outline-none"
                />
              </div>
            </div>

            {/* Phone & NID Field */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                  <Phone size={16} className="text-teal-600" /> Contact Number
                </label>
                <input
                  type="text"
                  disabled={!isEditing}
                  defaultValue={userInfo.phone}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none disabled:bg-gray-50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                  <IdCard size={16} className="text-teal-600" /> NID Number
                </label>
                <input
                  type="text"
                  disabled
                  defaultValue={userInfo.nid}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 outline-none"
                />
              </div>
            </div>

            {/* Address Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-600 flex items-center gap-2">
                <MapPin size={16} className="text-teal-600" /> Full Address
              </label>
              <textarea
                rows="3"
                disabled={!isEditing}
                defaultValue={userInfo.address}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 outline-none disabled:bg-gray-50 transition-all"
              />
            </div>

            {/* Save Button */}
            {isEditing && (
              <div className="pt-4">
                <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-xl w-full md:w-auto transition-all shadow-lg shadow-teal-100 active:scale-95">
                  <Save size={18} /> Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
