import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500 }}
      className="w-full max-w-xl h-72 rounded-xl shadow-lg"
    >
      <SwiperSlide>
        <img src="https://www.uhamka.ac.id/static/media/FKIP.73a225f609e63ab24aca.jpg" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://uhamka.ac.id/static/media/FEB.94011c44541da0fc4ef5.webp" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://uhamka.ac.id/static/media/FT.e3ae1a5100a597d3085a.jpg" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://uhamka.ac.id/static/media/FAI_FIKES_FISIP_FPsi.3ffa482f8ef7a313ecf2.jpg" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://uhamka.ac.id/static/media/FK_FFS.c655025c14df1acea0eb.jpg" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://uhamka.ac.id/static/media/FK_NEW.c58ebcaeeeada9a1c07e.jpeg" className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}
