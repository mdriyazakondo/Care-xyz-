import { Baby, HeartPulse, UserRoundCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "baby-care",
    title: "Baby Care",
    desc: "Expert nannies providing a safe, nurturing, and playful environment for your little ones to thrive in.",
    icon: <Baby size={40} className="text-teal-600" />,
    price: "$15/hr",
    tag: "Most Popular",
  },
  {
    id: "elderly-care",
    title: "Elderly Service",
    desc: "Dedicated support and companionship for seniors, ensuring their comfort, health, and daily well-being.",
    icon: <UserRoundCheck size={40} className="text-amber-600" />,
    price: "$25/hr",
    tag: "Full-time Available",
  },
  {
    id: "sick-care",
    title: "Patient Care",
    desc: "Professional caregivers providing specialized medical support and assistance for recovering patients at home.",
    icon: <HeartPulse size={40} className="text-rose-600" />,
    price: "$20/hr",
    tag: "24/7 Support",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-teal-600 font-extrabold tracking-widest uppercase text-sm">
            What We Offer
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Premium Care Solutions
          </h2>
          <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Discover our range of professional home care services tailored to
            provide your family with peace of mind and exceptional support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-10 border border-slate-100 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(13,148,136,0.15)] transition-all duration-500 flex flex-col h-full"
            >
              <div className="absolute top-6 right-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                  {service.tag}
                </span>
              </div>

              <div className="mb-8 inline-block p-5 bg-white rounded-3xl shadow-sm group-hover:shadow-md group-hover:-translate-y-2 transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                {service.title}
              </h3>

              <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                {service.desc}
              </p>

              <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Starts From
                  </p>
                  <span className="text-2xl font-black text-teal-600">
                    {service.price}
                  </span>
                </div>

                <Link
                  href={`/service/${service.id}`}
                  className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-teal-600 transition-all group-hover:scale-110 shadow-lg active:scale-95"
                >
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
