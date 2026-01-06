import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaUserShield,
  FaHeartbeat,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Header Section */}
      <section className="bg-[#F8FAFC] py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-500/5 skew-x-12 transform origin-right"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-teal-600 font-black uppercase tracking-[0.4em] text-xs mb-4 block">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
            We are{" "}
            <span className="text-teal-600 border-b-8 border-teal-100">
              Care.xyz
            </span>
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            We believe every family member deserves the highest standard of
            care. Our mission is to build a trusted bridge between professional
            caregivers and families through modern technology and human empathy.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] group hover:bg-teal-600 transition-all duration-700">
            <div className="bg-teal-50 w-20 h-20 rounded-[2rem] flex items-center justify-center mb-10 shadow-inner group-hover:bg-white/20 group-hover:scale-110 transition-all">
              <FaBullseye className="text-teal-600 text-3xl group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-white tracking-tight">
              Our Mission
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed group-hover:text-teal-50 font-medium">
              To make professional caregiving accessible, safe, and affordable
              for every family in the country. we focus on creating skilled
              employment while elevating the standards of home-based healthcare
              services.
            </p>
          </div>

          <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] group hover:bg-amber-500 transition-all duration-700">
            <div className="bg-amber-50 w-20 h-20 rounded-[2rem] flex items-center justify-center mb-10 shadow-inner group-hover:bg-white/20 group-hover:scale-110 transition-all">
              <FaEye className="text-amber-500 text-3xl group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-white tracking-tight">
              Our Vision
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed group-hover:text-amber-50 font-medium">
              We envision a future where no family has to worry about the
              well-being of their loved ones. By leveraging technology, we aim
              to become the nation's number one platform for reliable and
              compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Values Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-slate-400 font-medium text-lg italic">
              The pillars that define our service excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-teal-500 hover:bg-white/10 transition-all duration-500">
              <FaUserShield className="text-teal-400 text-5xl mb-8" />
              <h4 className="text-2xl font-black mb-4 tracking-tight">
                Reliability
              </h4>
              <p className="text-slate-400 leading-relaxed font-medium">
                100% verification and rigorous background checks for every
                caregiver to ensure absolute family safety.
              </p>
            </div>

            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-teal-500 hover:bg-white/10 transition-all duration-500">
              <FaHandshake className="text-teal-400 text-5xl mb-8" />
              <h4 className="text-2xl font-black mb-4 tracking-tight">
                Compassion
              </h4>
              <p className="text-slate-400 leading-relaxed font-medium">
                Beyond professionalism, we believe in deep human connection,
                kindness, and emotional support.
              </p>
            </div>

            <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-teal-500 hover:bg-white/10 transition-all duration-500">
              <FaHeartbeat className="text-teal-400 text-5xl mb-8" />
              <h4 className="text-2xl font-black mb-4 tracking-tight">
                24/7 Availability
              </h4>
              <p className="text-slate-400 leading-relaxed font-medium">
                Our support team and caregivers are ready day and night to
                assist you in any emergency situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Team Image / CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200"
            alt="Professional Care Team"
            className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent flex items-end">
            <div className="p-10 md:p-20 text-white w-full">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                  Together we care better
                </h3>
                <p className="text-slate-200 text-xl font-medium leading-relaxed opacity-90 mb-8">
                  Our dedicated and humane team works tirelessly every day to
                  bring smiles and comfort to your family members.
                </p>
                <button className="bg-teal-500 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white transition-all shadow-xl active:scale-95">
                  Meet Our Specialist Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
