import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Autoplay} from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

import {products} from "../../utils"
import CardItem from "../card-item"

// icons
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6"

const Products = () => {
    const renderSwiper = (
        productList,
        title,
        uniqueClass,
        autoplayDirection
    ) => (
        <div>
            <div className="flex justify-between items-center gap-[20px] mb-[20px] max-[620px]:flex-col max-[620px]:items-start">
                <h1 className="font-medium text-[30px] leading-[107%] text-black max-[620px]:text-[20px]">
                    {title}
                </h1>
                <div className="flex justify-center items-center gap-[15px]">
                    <button
                        className={`h-[40px] w-[40px] rounded-full flex justify-center items-center bg-white text-black shadow-md ${uniqueClass}-prev`}>
                        <FaAngleLeft />
                    </button>
                    <button
                        className={`h-[40px] w-[40px] rounded-full flex justify-center items-center bg-white text-black shadow-md ${uniqueClass}-next`}>
                        <FaAngleRight />
                    </button>
                </div>
            </div>

            <Swiper
                spaceBetween={15}
                slidesPerView={4}
                navigation={{
                    nextEl: `.${uniqueClass}-next`,
                    prevEl: `.${uniqueClass}-prev`,
                }}
                autoplay={{
                    delay: 4000,
                    reverseDirection: autoplayDirection === "left",
                }}
                breakpoints={{
                    240: {slidesPerView: 1},
                    600: {slidesPerView: 2},
                    1024: {slidesPerView: 3},
                    1280: {slidesPerView: 4},
                }}
                loop={true}
                modules={[Navigation, Autoplay]}>
                {productList.map((value) => (
                    <SwiperSlide key={value.id}>
                        <CardItem product={value} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )

    return (
        <section className="py-[40px] bg-[#f2f5f7]">
            <div className="container2 flex flex-col gap-[30px]">
                {renderSwiper(
                    products,
                    "Популярные товары",
                    "popular-1",
                    "right"
                )}
                {renderSwiper(
                    [...products].reverse(),
                    "Обычные товары",
                    "popular-2",
                    "left"
                )}
                {renderSwiper([...products], "Для дома", "popular-3", "right")}
            </div>
        </section>
    )
}

export default Products
