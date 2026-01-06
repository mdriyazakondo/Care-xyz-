import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      q: "Can I choose my preferred caregiver?",
      a: "Yes, during the booking process, you can browse through caregiver profiles, read their specialized experience, and check their previous client ratings to find the perfect match.",
    },
    {
      q: "How do I process the service payments?",
      a: "We offer multiple secure payment options. You can pay online via Credit/Debit cards and digital wallets like bKash/Stripe, or choose cash on delivery after the service is completed.",
    },
    {
      q: "How quickly can I get a caregiver in an emergency?",
      a: "For urgent requirements, we strive to confirm and dispatch a verified caregiver within 2 to 4 hours of your booking request, depending on your location and service type.",
    },
    {
      q: "Are the caregivers trained for medical emergencies?",
      a: "Absolutely. All our caregivers undergo specialized training in basic life support, first aid, and emergency protocols to ensure the highest level of safety for your family.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">
            Help Center
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-500 font-medium">
            Find answers to common questions about our platform and services.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white border border-slate-100 rounded-[2rem] p-2 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] shadow-sm"
            >
              <summary className="flex items-center justify-between gap-4 p-6 outline-none">
                <h5 className="text-xl font-black text-slate-800 tracking-tight group-hover:text-teal-600 transition-colors">
                  {faq.q}
                </h5>
                <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-open:bg-teal-600 group-open:text-white transition-all duration-300">
                  <FaChevronDown className="group-open:rotate-180 transition-transform duration-300" />
                </div>
              </summary>
              <div className="px-6 pb-8 pt-2">
                <div className="h-px w-full bg-slate-50 mb-6"></div>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-16 bg-teal-600 rounded-[2.5rem] p-10 text-center relative overflow-hidden group shadow-2xl shadow-teal-200">
          <div className="relative z-10">
            <h3 className="text-2xl font-black text-white mb-2">
              Still have questions?
            </h3>
            <p className="text-teal-50 mb-8 opacity-90">
              We are here to help you 24/7. Reach out to our support team.
            </p>
            <button className="bg-white text-teal-700 px-8 py-4 rounded-2xl font-black hover:bg-slate-900 hover:text-white transition-all active:scale-95 shadow-lg">
              Contact Support
            </button>
          </div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 h-64 w-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
