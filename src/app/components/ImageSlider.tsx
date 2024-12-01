// components/ImageSlider.js

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


export default function ImageSlider() {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // Auto slide every 3 seconds
          disableOnInteraction: false,
        }}
        navigation={true}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="./assert/images/scrap_holder_img.jpg"
              alt="Slide 1"
              className="w-full h-80 sm:h-80 md:h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Welcome to Our Service</h2>
                <p className="text-lg mb-6">We provide the best solutions for your needs.</p>
                <button className="bg-yellow-500 text-black py-2 px-6 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="./assert/images/scrap_holder_img.jpg"
              alt="Slide 2"
               className="w-full h-80 sm:h-80 md:h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Innovative Solutions</h2>
                <p className="text-lg mb-6">Helping you achieve your business goals.</p>
                <button className="bg-yellow-500 text-black py-2 px-6 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="./assert/images/scrap_holder_img.jpg"
              alt="Slide 3"
              className="w-full h-80 sm:h-80 md:h-96 lg:h-[500px] object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
                <p className="text-lg mb-6">Join us and take your business to the next level.</p>
                <button className="bg-yellow-500 text-black py-2 px-6 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
