import React from "react";
import Footer from "../components/Footer";

const team = [
  {
    name: "Mr. Chanda Abhishek",
    role: "Managing Director",
    img: "https://valuegold.com/wp-content/uploads/2025/08/Mr.-Abhishek-Chanda-Director-768x768.webp",
    reverse: false,
    desc: `Inspired by a rich family legacy, Mr. Abhishek Chanda joined the business in 2011, bringing in change management and technological advancements.

Recognizing the need for diversification, he played a pivotal role in establishing Kalasha Fine Jewels.

With a vision to redefine trust and transparency, he introduced Harshdeep Jewellers with automated processes.`,
  },
  {
    name: "Mr. Chanda Akhil",
    role: "Director",
    img: "https://valuegold.com/wp-content/uploads/2025/08/Mr.-Akhil-Chanda-Director.webp",
    reverse: true,
    desc: `Chanda Akhil joined Caps Gold in 2020 and led major transformations to make the business more user-friendly and accessible.

He played a key role in expanding branches across multiple cities.

He contributes to modern and customer-centric gold buying solutions.`,
  },
  {
    name: "Mrs. Sowmya Chanda",
    role: "Director",
    img: "https://valuegold.com/wp-content/uploads/2025/08/Ms.-Sowmya-Chanda-Director.webp",
    reverse: false,
    desc: `Sowmya Chanda is a dynamic leader known for her vision and innovation.

She spearheads HR and IT divisions, strengthening organizational culture and growth.

Her leadership blends modern strategy with traditional values.`,
  },
  {
    name: "Mrs. Ashika Chanda",
    role: "Director",
    img: "https://valuegold.com/wp-content/uploads/2026/02/Ashika-Chanda-768x768.webp",
    reverse: true,
    desc: `Ashika Chanda leads digital marketing and brand-building initiatives.

She drives innovation in customer engagement and online presence.

Her approach ensures Harshdeep Jewellers stays ahead in the digital landscape.`,
  },
];

const Management = () => {
  return (
    <div className="bg-brand-cream">

      {/* HEADER */}
      <section className="bg-brand-navy py-8 sm:py-10 lg:py-12 text-center">
        <p className="text-brand-gold font-semibold text-xs sm:text-sm tracking-wider uppercase mb-1">Our Leadership</p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Management
        </h1>
      </section>

      {/* TEAM */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="section-container space-y-12 sm:space-y-16 lg:space-y-20">
          {team.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12 ${
                member.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="w-full md:w-5/12">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg hover:scale-[1.02] transition duration-300"
                />
              </div>

              {/* TEXT */}
              <div className="w-full md:w-7/12">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-1">
                  {member.name}
                </h2>

                <p className="text-brand-gold font-medium text-sm sm:text-base mb-4">
                  {member.role}
                </p>

                <p className="text-gray-700 text-sm sm:text-base leading-7 whitespace-pre-line">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GROUP IMAGE */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="section-container">
          <img
            src="https://valuegold.com/wp-content/uploads/2025/08/Directors.webp"
            alt="Harshdeep Jewellers Directors"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Management;
