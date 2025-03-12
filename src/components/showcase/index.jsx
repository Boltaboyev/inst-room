import React from "react"

// icons
import {FaArrowRight} from "react-icons/fa6"

const Showcase = () => {
    return (
        <section className="py-[20px] bg-[#212526]">
            <div className="container2">
                <div className="grid grid-cols-2 gap-[20px] max-[820px]:grid-cols-1 max-[500px]:gap-[10px]">
                    <div className="relative flex flex-col gap-[30px] justify-start items-start p-[20px] overflow-hidden bg-[url(./assets/img/showcase/1.png)] bg-center bg-cover bg-no-repeat h-[450px] max-[820px]:h-[300px]">
                        <h1 className="font-normal text-4xl leading-[1.2] text-white max-[945px]:text-[25px] max-[350px]:text-[16px]">
                            DeWALT - Инструмент с настоящим характером
                        </h1>

                        <button className="flex justify-center items-center gap-[4px] p-[8px_22px]  bg-[#f05a00] rounded-md text-white">
                            ПЕРЕЙТИ В КАТАЛОГ
                        </button>

                        <button className="h-[40px] w-[40px] absolute bottom-0 left-0 bg-black hover:bg-[#f05a00] text-white flex justify-center items-center">
                            <FaArrowRight />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-[20px] max-[500px]:gap-[10px]">
                        <div className="relative flex flex-col gap-[30px] justify-start items-start p-[10px] overflow-hidden bg-[url(./assets/img/showcase/2.png)] bg-center bg-cover bg-no-repeat max-[820px]:h-[300px] max-[350px]:h-[250px]">
                            <p className="text-white">Акции</p>

                            <button className="h-[40px] w-[40px] absolute bottom-0 left-0 bg-black hover:bg-[#f05a00] text-white flex justify-center items-center">
                                <FaArrowRight />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-[20px] max-[500px]:gap-[10px]">
                            <div className="relative flex flex-col gap-[30px] justify-start items-start p-[10px] overflow-hidden bg-[url(./assets/img/showcase/3.png)] bg-center bg-cover bg-no-repeat">
                                <p className="text-white">Новое поступление</p>

                                <button className="h-[40px] w-[40px] absolute bottom-0 left-0 bg-black hover:bg-[#f05a00] text-white flex justify-center items-center">
                                    <FaArrowRight />
                                </button>
                            </div>
                            <div className="relative flex flex-col gap-[30px] justify-start items-start p-[10px] overflow-hidden bg-[url(./assets/img/showcase/4.png)] bg-center bg-cover bg-no-repeat">
                                <p className="text-white">Акции на сверла</p>

                                <button className="h-[40px] w-[40px] absolute bottom-0 left-0 bg-black hover:bg-[#f05a00] text-white flex justify-center items-center">
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase
