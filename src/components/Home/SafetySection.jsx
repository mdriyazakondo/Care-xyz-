import {
  MdVerifiedUser,
  MdLockOutline,
  MdHealthAndSafety,
} from "react-icons/md";

const SafetySection = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-500/5 blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <span className="text-amber-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">
            Safety First
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
            Your Security is Our <br />
            <span className="text-teal-400">Top Priority</span>
          </h2>
          <p className="text-slate-400 mb-12 text-lg leading-relaxed max-w-xl">
            We understand how valuable your loved ones are. That is why we
            implement a rigorous multi-step screening process for every
            caregiver joining our community.
          </p>

          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-teal-500/10 rounded-2xl text-teal-400 border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
                <MdVerifiedUser size={32} />
              </div>
              <div>
                <h5 className="font-black text-xl mb-2 tracking-tight text-white">
                  Rigorous Background Checks
                </h5>
                <p className="text-slate-400 leading-relaxed">
                  Comprehensive criminal records verification and NID
                  authentication are mandatory for all our specialists.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-amber-500/10 rounded-2xl text-amber-400 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                <MdHealthAndSafety size={32} />
              </div>
              <div>
                <h5 className="font-black text-xl mb-2 tracking-tight text-white">
                  Professional Training Standards
                </h5>
                <p className="text-slate-400 leading-relaxed">
                  Every caregiver is trained in first aid, emergency response,
                  and high-standard professional ethics.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="w-72 h-72 md:w-96 md:h-96 border-[16px] border-slate-800 rounded-[4rem] flex items-center justify-center relative z-10 bg-slate-900 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent"></div>
              <MdLockOutline
                size={140}
                className="text-teal-500 animate-bounce-slow"
              />

              <div className="absolute bottom-10 px-6 py-2 bg-teal-500 text-slate-900 rounded-full font-black text-sm uppercase tracking-widest">
                100% Encrypted
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-400 rounded-3xl flex items-center justify-center text-slate-900 shadow-xl rotate-12">
              <MdVerifiedUser size={40} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
