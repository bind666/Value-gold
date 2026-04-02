import Footer from "../components/Footer";

const pressData = [
  { title: "LAUNCH OF 7 BRANCHES IN AP", img: "https://valuegold.com/wp-content/uploads/2025/12/LAUNCH-OF-7-BRANCHES-IN-AP.webp" },
  { title: "LAUNCH IN MANIKONDA AND AS RAO NAGAR", img: "https://valuegold.com/wp-content/uploads/2025/12/LAUNCH-IN-MANIKONDA-AND-AS-RAO-NAGAR.webp" },
  { title: "ROAD SHOW AT WARANGAL", img: "https://valuegold.com/wp-content/uploads/2025/12/ROAD-SHOW-AT-WARANGAL.webp" },
  { title: "MOBILE GOLD BUYING SERVICE LAUNCHED", img: "https://valuegold.com/wp-content/uploads/2025/12/MOBILE-GOLD-BUYING-SERVICE-LAUNCHED.webp" },
  { title: "BRAND LAUNCH WITH 3 BRANCHES", img: "https://valuegold.com/wp-content/uploads/2025/12/BRAND-LAUNCH-WITH-3-BRANCHES-1.webp" },
  { title: "TIMES BUSINESS AWARDS 2023", img: "https://valuegold.com/wp-content/uploads/2025/12/TIMES-BUSINESS-AWARDS-2023.webp" },
];

export default function PressReleases() {
  return (
    <div className="bg-brand-cream">

      {/* HEADER */}
      <section className="bg-brand-navy py-8 sm:py-10 lg:py-12 text-center">
        <p className="text-brand-gold font-semibold text-xs sm:text-sm tracking-wider uppercase mb-1">In The News</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Press Releases</h1>
      </section>

      {/* GRID */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {pressData.map((item, i) => (
              <div key={i} className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-semibold text-brand-navy leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-brand-gold text-xs sm:text-sm font-medium hover:underline">Read More</p>
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
