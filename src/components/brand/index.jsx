import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Autoplay} from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

// img
import brand1 from "../../assets/img/brand/1.png"
import brand2 from "../../assets/img/brand/2.png"
import brand3 from "../../assets/img/brand/3.png"
import brand4 from "../../assets/img/brand/4.png"
import brand5 from "../../assets/img/brand/1.png"
import brand6 from "../../assets/img/brand/2.png"
import brand7 from "../../assets/img/brand/3.png"

// icons
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6"

const Brand = () => {
    const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7]

    return (
        <section className="py-[30px] bg-[#212526]">
            <div className="container2">
                <div className="flex justify-between items-center gap-[20px] mb-[20px] max-[620px]:flex-col max-[620px]:items-start">
                    <h1 className="font-medium text-[30px] leading-[107%] text-white max-[620px]:text-[20px]">
                        Наши бренды
                    </h1>
                    <div className="flex justify-center items-center gap-[15px] max-[550px]:hidden">
                        <button className="h-[40px] w-[40px] rounded-full flex justify-center items-center bg-white text-black shadow-md brand-prev">
                            <FaAngleLeft />
                        </button>
                        <button className="h-[40px] w-[40px] rounded-full flex justify-center items-center bg-white text-black shadow-md brand-next">
                            <FaAngleRight />
                        </button>
                    </div>
                </div>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={6}
                    navigation={{
                        nextEl: ".brand-next",
                        prevEl: ".brand-prev",
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        200: {slidesPerView: 2},
                        480: {slidesPerView: 3},
                        768: {slidesPerView: 4},
                        1024: {slidesPerView: 6},
                    }}
                    loop
                    modules={[Navigation, Autoplay]}>
                    {brands.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <img src={brand} alt={`brand-${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Brand
