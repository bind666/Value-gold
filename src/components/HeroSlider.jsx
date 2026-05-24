import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/banner-1.jpeg",
  "/banner-2.jpeg",
  "/banner-3.jpeg",
  "/banner-4.jpeg",
  "/banner-5.jpeg",
];

export default function HeroSlider() {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt="banner"
              className={`w-full h-screen block ${
                img === "/banner-3.jpeg"
                  ? "object-contain bg-black"
                  : img === "/banner-1.jpeg"
                  ? "object-cover object-[center_60%]"
                  : "object-cover object-[center_10%]"
              }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}