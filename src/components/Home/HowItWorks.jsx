import {
  FaUserPlus,
  FaSearchLocation,
  FaCalendarCheck,
  FaSmile,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      title: "Create Account",
      desc: "Sign up quickly with your NID and basic details to join our secure care network.",
      icon: <FaUserPlus />,
    },
    {
      title: "Find Service",
      desc: "Browse through verified specialists based on your specific needs and location.",
      icon: <FaSearchLocation />,
    },
    {
      title: "Book & Pay",
      desc: "Schedule your preferred time slot and confirm your booking with secure payment.",
      icon: <FaCalendarCheck />,
    },
    {
      title: "Peace of Mind",
      desc: "Relax while our expert caregiver arrives at your doorstep to provide quality service.",
      icon: <FaSmile />,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-teal-600 font-extrabold tracking-[0.2em] uppercase text-sm">
            Process
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Getting professional care for your family is now simpler than ever.
            Follow these four easy steps to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative group text-center">
              <div className="relative z-10 bg-white w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-teal-600 text-3xl shadow-[0_20px_50px_-15px_rgba(13,148,136,0.2)] group-hover:bg-teal-600 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-black border-4 border-white">
                  {i + 1}
                </div>
              </div>

              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                {step.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium px-4">
                {step.desc}
              </p>

              {i < 3 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-4 border-dotted border-slate-100 -z-0"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-slate-900 hover:bg-teal-600 text-white px-10 py-4 rounded-2xl font-extrabold transition-all shadow-xl active:scale-95">
            Start Your Journey Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
