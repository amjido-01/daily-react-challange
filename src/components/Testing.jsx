import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import img_1 from "../assets/img_1.jpg";
import img_2 from "../assets/img_2.jpg";
import img_3 from "../assets/img_3.jpg";
import img_4 from "../assets/img_4.jpg";
import img_5 from "../assets/img_5.jpg";
import img_6 from "../assets/img_6.jpg";
import img_7 from "../assets/img_7.jpg";

export const Testing = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={img_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_7} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
