import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import swiper from '../Assets/Swiper.json';
import Lottie from 'lottie-react';

import pythonCertificate from '../Assets/PythonCertificate.png';
import pythonCertificate1 from '../Assets/PythonCertificate1.png';
import pythonCertificate2 from '../Assets/PythonCertificate2.png';
import hackFestCertificate from '../Assets/HackFestCertificate.png';
import miniCompCertificate from '../Assets/MiniCompCertificate.png';
import flCertificate from '../Assets/FLCertificate.png';

function Sertificate() {
  return (
    <section id='certificate' className='flex mx-14 justify-center xl:mb-10'>
      <div className="container mx-auto mt-28">
        <h1 className="font-jetBrains text-4xl font-bold mb-14 text-center">Certificate Gallery</h1>

        <Lottie
          animationData={swiper}
          className='w-[50px] h-[150px] top-64 absolute left-1/3 z-10 md:top-80 md:w-[70px] lg:top-2/4 lg:w-[100px] xl:w-[150px] xl:h-[100px] xl:top-2/3'
        />

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1.5,
            slideShadows: false,
          }}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={pythonCertificate} alt="Python Certificate" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pythonCertificate1} alt="Python Certificate 1" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pythonCertificate2} alt="Python Certificate 2" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hackFestCertificate} alt="HackFest Certificate" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={miniCompCertificate} alt="Mini Competition Certificate" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={flCertificate} alt="FL Certificate" className="w-full h-auto object-cover rounded-lg shadow-lg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Sertificate;
