// ডামি ডেটা দিয়ে বুকিং কার্ডের স্যাম্পল
const bookings = [
  {
    id: 1,
    service: "Baby Care",
    date: "2024-03-20",
    cost: 1500,
    status: "Pending",
  },
  {
    id: 2,
    service: "Elderly Care",
    date: "2024-03-15",
    cost: 3000,
    status: "Confirmed",
  },
];

export default function MyBookings() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <h2 className="text-xl font-semibold mb-2">Your Recent Bookings</h2>
      <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm">
              <th className="p-4 font-semibold">Service Name</th>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Cost</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t border-gray-50 hover:bg-gray-50/50 transition-all"
              >
                <td className="p-4 font-medium text-gray-700">
                  {booking.service}
                </td>
                <td className="p-4 text-gray-600">{booking.date}</td>
                <td className="p-4 font-bold text-teal-600">
                  {booking.cost} BDT
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-sm text-gray-500 hover:text-red-500 font-medium">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
