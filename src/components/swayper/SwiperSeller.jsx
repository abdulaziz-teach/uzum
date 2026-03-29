import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const SwiperSeller = () => {
    return (
        <div className="max-w-4xl mx-auto mt-10">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                className="mySwiper w-full h-75"
            >
                <SwiperSlide className=" p-10 rounded-xl text-center ">
                    <iframe className='w-75 h-full' width="641" height="360" src="https://www.youtube.com/embed/MhOaVaZkjFM" title="Tovarlarni tayyorlash va omborga jo‘natish" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide className=" p-10 rounded-xl text-center">
                    <iframe className='w-75 h-full' width="641" height="360" src="https://www.youtube.com/embed/B1uTgujSb4A" title="Uzum Marketda qanday qilib ishni boshlash: qadam-baqadam qo‘llanma" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide className="p-10 rounded-xl text-center">
                    <iframe className='w-75 h-full' width="641" height="360" src="https://www.youtube.com/embed/9OJUokPLhyo" title="Qanday qilib Uzum Marketda FBS modeli bilan samarali ishlash" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide className=" p-10 rounded-xl text-center">
                    <iframe className='w-75 h-full' width="641" height="360" src="https://www.youtube.com/embed/mUDpuVNYD0s" title="Uzum Marketda qanday qilib ishni boshlash: qadam-baqadam qo‘llanma" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </SwiperSlide>
                <SwiperSlide className=" p-10 rounded-xl text-center">
                    <iframe className='w-75 h-full' width="641" height="360" src="https://www.youtube.com/embed/9OJUokPLhyo" title="Qanday qilib Uzum Marketda FBS modeli bilan samarali ishlash" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default SwiperSeller;
