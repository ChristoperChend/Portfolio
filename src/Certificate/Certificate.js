import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import pythonCertificate from '../Assets/PythonCertificate.png';
import pythonCertificate1 from '../Assets/PythonCertificate1.png';
import pythonCertificate2 from '../Assets/PythonCertificate2.png';
import hackFestCertificate from '../Assets/HackFestCertificate.png';
import miniCompCertificate from '../Assets/MiniCompCertificate.png';
import flCertificate from '../Assets/FLCertificate.png';

function Sertificate() {
  return (
    <section id='certificate'>
      <div className="container w-full max-w-[1200px] mx-auto py-10 mt-10">
        <h1 className="font-jetBrains text-4xl font-bold mb-7">Certificate Gallery</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={pythonCertificate} alt="Python Certificate" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pythonCertificate1} alt="Python Certificate 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pythonCertificate2} alt="Python Certificate 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hackFestCertificate} alt="HackFest Certificate" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={miniCompCertificate} alt="Mini Competition Certificate" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={flCertificate} alt="FL Certificate" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Sertificate;
