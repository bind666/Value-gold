import { FaCalendarAlt, FaStoreAlt } from "react-icons/fa";
import Footer from "../components/Footer";

const events = [
  {
    title: "Events",
    desc: "Award ceremonies, corporate milestones, and public appearances that highlight Harshdeep Jewellers's leadership in the gold industry.",
    icon: <FaCalendarAlt />,
    img: "https://valuegold.com/wp-content/uploads/2025/09/Awards-3.webp",
  },
  {
    title: "Branch Openings",
    desc: "Expanding our reach across Telangana and Andhra Pradesh, bringing trusted gold buying services closer to you.",
    icon: <FaStoreAlt />,
    img: "https://valuegold.com/wp-content/uploads/2025/12/BRAND-LAUNCH-WITH-3-BRANCHES-1.webp",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-brand-cream min-h-screen">

      {/* HEADER */}
      <section className="bg-brand-navy py-8 sm:py-10 lg:py-12 text-center">
        <p className="text-brand-gold font-semibold text-xs sm:text-sm tracking-wider uppercase mb-1">Celebrations</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Events & Branch Openings</h1>
      </section>

      {/* CARDS */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {events.map((item, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer h-[250px] sm:h-[300px] lg:h-[350px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-brand-navy/70 group-hover:bg-brand-navy/80 transition duration-300 flex flex-col items-center justify-center text-white text-center p-6">
                  <div className="text-3xl sm:text-4xl text-brand-gold mb-3">{item.icon}</div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{item.title}</h2>
                  <p className="text-xs sm:text-sm text-gray-200 max-w-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
