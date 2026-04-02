import Footer from "../components/Footer";

export default function MediaPage() {
  const videos = [
    "https://www.youtube.com/embed/VIDEO_ID1",
    "https://www.youtube.com/embed/VIDEO_ID2",
    "https://www.youtube.com/embed/VIDEO_ID3",
    "https://www.youtube.com/embed/VIDEO_ID4",
    "https://www.youtube.com/embed/VIDEO_ID5",
    "https://www.youtube.com/embed/VIDEO_ID6",
    "https://www.youtube.com/embed/VIDEO_ID7",
    "https://www.youtube.com/embed/VIDEO_ID8",
    "https://www.youtube.com/embed/VIDEO_ID9",
    "https://www.youtube.com/embed/VIDEO_ID10",
    "https://www.youtube.com/embed/VIDEO_ID11",
    "https://www.youtube.com/embed/VIDEO_ID12",
  ];

  return (
    <div className="bg-brand-cream">

      {/* HEADER */}
      <section className="bg-brand-navy py-8 sm:py-10 lg:py-12 text-center">
        <p className="text-brand-gold font-semibold text-xs sm:text-sm tracking-wider uppercase mb-1">Watch & Explore</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Media
        </h1>
      </section>

      {/* VIDEO GRID */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {videos.map((video, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="aspect-video">
                  <iframe
                    src={video}
                    title={`video-${i}`}
                    className="w-full h-full"
                    allowFullScreen
                    loading="lazy"
                  />
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
