import React from "react"

// img
import card1 from "../../assets/img/news/1.png"
import card2 from "../../assets/img/news/2.png"

const News = () => {
    return (
        <section className="py-[30px] bg-[#f2f5f7]">
            <div className="container2 flex justify-between items-start gap-[40px] max-[900px]:flex-col">
                <div className="flex flex-col gap-[15px] flex-1">
                    <h1 className="font-medium text-[30px] leading-[107%] text-black">
                        Новости
                    </h1>

                    <p className="font-medium text-[16px] leading-[150%] text-black max-[360px]:text-[14px] max-[360px]:font-normal max-[400px]:text-justify">
                        Торговое или промышленное предприятие,
                        торгово-промышленное объединение предпринимателей, форма
                        организации предприятия, при которой
                        его правосубъектность отличается от правосубъектности
                        лиц, в нем участвующих.
                    </p>

                    <button className="p-[8px_22px]  bg-[#f05a00] hover:bg-[#212526]  rounded-md text-white !transition-colors !duration-[.2s] max-[360px]:w-full">
                        ПЕРЕЙТИ В КАТАЛОГ
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-[20px] flex-1/4 max-[580px]:grid-cols-1 max-[580px]:w-full">
                    <div className="flex flex-col gap-[10px]">
                        <img src={card1} alt="" />
                        <div className="flex flex-col">
                            <p className="font-medium leading-[120%] text-black">
                                Название новости
                            </p>
                            <p className="text-[13px] opacity-70">
                                12 января 2023
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <img src={card2} alt="" />
                        <div className="flex flex-col">
                            <p className="font-medium leading-[120%] text-black">
                                Название новости
                            </p>
                            <p className="text-[13px] opacity-70">
                                12 января 2023
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <img src={card2} alt="" />
                        <div className="flex flex-col">
                            <p className="font-medium leading-[120%] text-black">
                                Название новости
                            </p>
                            <p className="text-[13px] opacity-70">
                                12 января 2023
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[10px]">
                        <img src={card1} alt="" />
                        <div className="flex flex-col">
                            <p className="font-medium leading-[120%] text-black">
                                Название новости
                            </p>
                            <p className="text-[13px] opacity-70">
                                12 января 2023
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News
