import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination} from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import CardItem from "../card-item"
import {products} from "../../utils"

// icons
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6"

const NewProducts = () => {
    return (
        <section className="py-[30px] bg-[#212526]">
            <div className="container2">
                <div className="flex justify-between items-center mb-[20px] gap-[20px]">
                    <button className="h-[40px] flex-1/10 w-[40px] rounded-full flex justify-center items-center bg-white max-[500px]:hidden text-black shadow-md new-products-prev">
                        <FaAngleLeft />
                    </button>
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={4}
                        navigation={{
                            nextEl: ".new-products-next",
                            prevEl: ".new-products-prev",
                        }}
                        pagination={{
                            clickable: true,
                            el: ".custom-pagination",
                        }}
                        loop
                        breakpoints={{
                            200: {slidesPerView: 1},
                            600: {slidesPerView: 2},
                            1024: {slidesPerView: 4},
                        }}
                        modules={[Navigation, Pagination]}>
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <CardItem product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className="h-[40px] flex-1/10 w-[40px] rounded-full flex justify-center items-center bg-white max-[500px]:hidden text-black shadow-md new-products-next">
                        <FaAngleRight />
                    </button>
                </div>

                <div className="custom-pagination mt-4 flex justify-center items-center !gap-[5px]"></div>
            </div>
        </section>
    )
}

export default NewProducts
