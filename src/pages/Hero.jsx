import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import Navbar from './Navbar';

export default function Hero() {
  const images = [
    "/images/iron1.png",
    "/images/capt-amr1.png",
    "/images/natasha.png",
    "/images/hulk.png",
    "/images/spiderman.png",
    "/images/thor.png",
    "/images/dr-strange.png",
    "/images/clint-arrow.png",
  ];

  return (
    <>
    {/* <Navbar /> */}
    <Swiper
      slidesPerView={4}
      spaceBetween={40}
      loop={true}
      keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      className="w-full h-screen bg-gradient-to-br from-[#0a0f2c] to-[#1e1e3c];
"
    >
      {images.map((img, index) => (
        // <SwiperSlide key={index} className="flex justify-center items-center h-full mt-22">
        //   <img
        //     src={img}
        //     alt={`avenger-${index}`}
        //     className="max-h-[85vh] max-w-[90%] object-contain transition-transform duration-300 hover:scale-110 "
        //   />
        // </SwiperSlide>
        <SwiperSlide key={index} className="flex flex-col justify-center items-center h-full mt-22">
                <div className="relative">
                    <img
                        src={img}
                        alt={`avenger-${index}`}
                        className="max-h-[85vh] max-w-[90%] object-contain transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute bottom-0 w-full h-4 bg-gradient-to-t from-black/40 to-transparent blur-md transform translate-y-5 scale-75"></div>
                </div>
            </SwiperSlide>
      ))}
    </Swiper>
    
  </>);
}
