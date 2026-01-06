"use client";
import { Clock, CheckCircle2, XCircle, CreditCard } from "lucide-react";

const OverviewPage = () => {
  // এই ডাটাগুলো পরবর্তীতে API থেকে আসবে
  const stats = [
    {
      id: 1,
      label: "Total Bookings",
      value: "12",
      icon: <CreditCard className="text-blue-600" size={24} />,
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      label: "Pending Care",
      value: "02",
      icon: <Clock className="text-amber-600" size={24} />,
      bgColor: "bg-amber-50",
    },
    {
      id: 3,
      label: "Completed",
      value: "08",
      icon: <CheckCircle2 className="text-emerald-600" size={24} />,
      bgColor: "bg-emerald-50",
    },
    {
      id: 4,
      label: "Cancelled",
      value: "02",
      icon: <XCircle className="text-rose-600" size={24} />,
      bgColor: "bg-rose-50",
    },
  ];

  const recentBookings = [
    {
      id: "101",
      service: "Baby Sitting",
      date: "Jan 10, 2024",
      amount: 1200,
      status: "Confirmed",
    },
    {
      id: "102",
      service: "Elderly Care",
      date: "Jan 12, 2024",
      amount: 2500,
      status: "Pending",
    },
    {
      id: "103",
      service: "Sick People Care",
      date: "Jan 15, 2024",
      amount: 1800,
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
        <p className="text-gray-500">
          Welcome back! Here is whats happening with your care requests.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className={`p-4 rounded-xl ${stat.bgColor}`}>{stat.icon}</div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Recent Bookings</h3>
            <button className="text-sm text-teal-600 font-semibold hover:underline">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                <tr>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-gray-700">
                      {booking.service}
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      {booking.date}
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-700">
                      {booking.amount} BDT
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          booking.status === "Confirmed"
                            ? "bg-blue-100 text-blue-600"
                            : booking.status === "Completed"
                            ? "bg-emerald-100 text-emerald-600"
                            : "bg-amber-100 text-amber-600"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-teal-600 rounded-2xl p-6 text-white shadow-lg shadow-teal-100 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-teal-50 text-sm mb-4">
                Our support team is available 24/7 for your care needs.
              </p>
              <button className="bg-white text-teal-600 px-4 py-2 rounded-xl text-sm font-bold shadow-sm">
                Contact Us
              </button>
            </div>
            <Heart
              className="absolute -bottom-4 -right-4 text-teal-500/20"
              size={120}
            />
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button className="w-full text-left text-sm text-gray-600 hover:text-teal-600 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  How to book a service?
                </button>
              </li>
              <li>
                <button className="w-full text-left text-sm text-gray-600 hover:text-teal-600 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                  Safety guidelines
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Heart = ({ className, size }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export default OverviewPage;
