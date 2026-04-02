import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "https://valuegold.com/wp-content/uploads/2025/12/banner.webp",
  "https://valuegold.com/wp-content/uploads/2024/07/02-Desktop-Banner-1.webp",
  "https://valuegold.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-18-at-5.47.39-PM.webp",
  "https://valuegold.com/wp-content/uploads/2025/12/banner-1.webp",
  "https://valuegold.com/wp-content/uploads/2025/11/Value-bnr.webp",
];

export default function HeroSlider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt="banner"
              className="w-full h-auto block"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}