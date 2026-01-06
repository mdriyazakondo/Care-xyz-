import { FaShieldAlt, FaMapMarkedAlt, FaHeadset } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Features = () => {
  const points = [
    {
      title: "Verified Experts",
      desc: "Every caregiver undergoes rigorous NID verification and background checks for your safety.",
      icon: <FaShieldAlt className="text-teal-600 text-xl" />,
    },
    {
      title: "Flexible Scheduling",
      desc: "Book professional care on your terms, whether it is hourly, daily, or long-term support.",
      icon: <HiOutlineBadgeCheck className="text-teal-600 text-2xl" />,
    },
    {
      title: "Local Assistance",
      desc: "Connect with top-rated caregivers right in your neighborhood for faster response times.",
      icon: <FaMapMarkedAlt className="text-teal-600 text-xl" />,
    },
    {
      title: "Priority Support",
      desc: "Our dedicated customer success team is available 24/7 to assist with your requirements.",
      icon: <FaHeadset className="text-teal-600 text-xl" />,
    },
  ];

  return (
    <section className="py-24 bg-teal-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Why Choose Our <br /> Specialized Care?
            </h2>
            <p className="text-teal-100 mb-12 text-xl font-medium leading-relaxed max-w-lg">
              We prioritize safety, empathy, and professional excellence in
              every service we provide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((p, i) => (
                <div
                  key={i}
                  className="bg-white/10 p-6 rounded-[2rem] backdrop-blur-md border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-500 group"
                >
                  <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:rotate-6 transition-transform">
                    {p.icon}
                  </div>
                  <h4 className="text-white font-black mb-3 text-xl tracking-tight">
                    {p.title}
                  </h4>
                  <p className="text-teal-50 text-sm leading-relaxed font-medium opacity-90">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block group">
            <div className="absolute -inset-6 bg-amber-400/20 rounded-[3rem] blur-3xl group-hover:bg-amber-400/30 transition-colors"></div>
            <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576765608598-0735e2896c22?auto=format&fit=crop&q=80&w=800"
                className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Professional caregiver assisting a senior"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl">
                <p className="text-teal-900 font-black text-lg">
                  Trusted by 2,000+ Families
                </p>
                <p className="text-teal-700 text-sm font-bold uppercase tracking-widest mt-1">
                  Certified Home Care Agency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
