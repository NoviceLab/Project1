import {company1,company2,company3,company4,company5,company6,company7,company8,company9,company10} from "./../../utils/AboutUs/AboutUs"
import { Swiper, SwiperSlide } from 'swiper/react';
import './../../../node_modules/swiper/swiper-bundle.min.css';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

SwiperCore.use([Autoplay]);

function OurServices() {
    const comparr:Array<string> =[company1,company2,company3,company4,company5,company6,company7,company8,company9,company10];
  return (
    <div className="w-full mt-16">
        <h1 className="text-center text-[42px] font-sans font-bold text-[#fcc519]">Clients we have worked with.</h1>
        <div className="w-full mt-6">
            <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 1700,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
            className="mySwiper"
            >
                {comparr.map((photo,index)=>(
                    <SwiperSlide key={index} className="h-[300px] flex justify-center items-center">
                        <img src={photo} alt="company logo" height="200px" width="270px" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default OurServices