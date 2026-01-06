import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Arifur Rahman",
      role: "Working Parent",
      text: "I am extremely satisfied with the nanny service for my child during office hours. She was highly skilled, patient, and truly caring. It gave me total peace of mind while I was at work.",
      img: "https://i.pravatar.cc/150?u=arif",
      rating: 5,
    },
    {
      name: "Sharmin Sultana",
      role: "Corporate Professional",
      text: "Finding a reliable nursing service for my elderly mother was a challenge until I found Care.xyz. Their professional caregivers are punctual, respectful, and very well-trained.",
      img: "https://i.pravatar.cc/150?u=sharmin",
      rating: 5,
    },
    {
      name: "Tanvir Ahmed",
      role: "Business Owner",
      text: "The post-hospitalization care my father received was exceptional. The caregiver was not only professional but also emotionally supportive during a very difficult time for our family.",
      img: "https://i.pravatar.cc/150?u=tanvir",
      rating: 5,
    },
    {
      name: "Nusrat Jahan",
      role: "Software Engineer",
      text: "The flexibility they offer is a lifesaver. Being able to book a trusted caregiver on short notice for my newborn has made my transition back to work so much easier.",
      img: "https://i.pravatar.cc/150?u=nusrat",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Trusted by Families
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Read real stories from families who have experienced our
            professional care services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col relative group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-8 right-10 text-teal-100 group-hover:text-teal-200 transition-colors">
                <Quote size={60} fill="currentColor" />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <img
                    src={r.img}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md"
                    alt={r.name}
                  />
                  <div className="absolute -bottom-2 -right-2 bg-teal-500 text-white p-1 rounded-lg shadow-lg">
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
                <div>
                  <h5 className="font-black text-slate-900 text-lg tracking-tight">
                    {r.name}
                  </h5>
                  <p className="text-sm font-bold text-teal-600 uppercase tracking-widest">
                    {r.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(r.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className="text-amber-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-slate-600 text-lg leading-relaxed font-medium italic relative z-10">
                "{r.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs mb-8">
            As featured in
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale group">
            <span className="text-2xl font-black text-slate-900">
              HEALTHCARE
            </span>
            <span className="text-2xl font-black text-slate-900">
              PARENTING
            </span>
            <span className="text-2xl font-black text-slate-900">
              DAILY NEWS
            </span>
            <span className="text-2xl font-black text-slate-900">
              LIFEGUIDE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
