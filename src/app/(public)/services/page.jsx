import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaStar } from "react-icons/fa";

const ServicesPage = () => {
  const servicesData = [
    {
      id: "1",
      title: "Baby Sitting",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      description: "Our certified nannies provide a safe, nurturing, and playful environment for your children. We handle meal times, nap schedules, and educational play with professional care.",
      price_per_hour: 15,
      rating: 4.9,
      features: [
        "Certified Professional Nannies",
        "Emergency First Aid Trained",
        "Real-time Daily Activity Logs",
      ],
    },
    {
      id: "2",
      title: "Elderly Care",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&q=80&w=800",
      description: "Compassionate support for your elderly parents. Our caregivers assist with mobility, personal hygiene, and provide warm companionship to prevent loneliness.",
      price_per_hour: 25,
      rating: 4.8,
      features: [
        "Medication Management",
        "Emotional Companion Support",
        "Physical Mobility Assistance",
      ],
    },
    {
      id: "3",
      title: "Medical Patient Care",
      image: "https://images.unsplash.com/photo-1576765608598-0735e2896c22?auto=format&fit=crop&q=80&w=800",
      description: "Specialized care for recovering patients. We ensure timely medication, vital sign monitoring, and coordination with doctors for post-surgical recovery at home.",
      price_per_hour: 20,
      rating: 5.0,
      features: [
        "Vital Signs Monitoring",
        "Professional Wound Dressing",
        "Doctor Appointment Sync",
      ],
    },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-teal-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">
            Expert Solutions
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            Our <span className="text-teal-600">Premium</span> Services
          </h1>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed font-medium">
            Choose the best care for your loved ones with our vetted
            professionals. We provide safety, empathy, and peace of mind for
            every family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-2xl shadow-xl">
                  <span className="text-teal-700 font-black text-lg">
                    ${service.price_per_hour}/hr
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-xl flex items-center gap-2 text-white text-sm font-bold">
                  <FaStar className="text-amber-400" /> {service.rating}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-3xl font-black text-slate-900 mb-5 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
                  {service.description}
                </p>

                <div className="space-y-4 mb-10">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-slate-700 font-bold"
                    >
                      <div className="bg-teal-50 p-1 rounded-full">
                        <FaCheckCircle className="text-teal-500" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-4">
                  <Link
                    href={`/services/${service.id}`}
                    className="w-full text-center py-5 bg-teal-600 text-white font-black rounded-2xl hover:bg-teal-700 shadow-lg shadow-teal-100 flex items-center justify-center gap-3 transition-all active:scale-95"
                  >
                    Book This Service <FaArrowRight size={16} />
                  </Link>
                  <Link
                    href={`/service/${service.id}`}
                    className="w-full text-center py-5 bg-slate-50 text-slate-900 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all"
                  >
                    View Full Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-28 bg-slate-900 rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[100px] rounded-full"></div>

          <div className="text-center lg:text-left relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Need a Custom <br />
              Care Solution?
            </h2>
            <p className="text-slate-400 text-xl font-medium max-w-md">
              Contact our care coordination team for personalized plans tailored
              to your specific family needs.
            </p>
          </div>

          <button className="relative z-10 bg-teal-500 hover:bg-teal-400 text-slate-950 px-12 py-6 rounded-[2rem] font-black text-xl hover:shadow-2xl hover:shadow-teal-500/20 transition-all active:scale-95">
            Contact Specialist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;