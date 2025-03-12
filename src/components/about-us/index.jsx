import React from "react"

// img
import img from "../../assets/img/about.png"

const AboutUs = () => {
    return (
        <section className="py-[30px] bg-[#f2f5f7]">
            <div className="container2 grid grid-cols-2 gap-[20px] items-center max-[930px]:grid-cols-1">
                <div className="flex justify-center items-center rounded-xl overflow-hidden h-[350px] max-[550px]:h-[250px] max-[290px]:h-[200px]">
                    <img
                        src={img}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="flex flex-col gap-[30px] justify-start items-start max-[980px]:gap-[20px]">
                    <h1 className="font-medium text-[30px] leading-[107%] text-black">
                        О нас
                    </h1>

                    <p className="font-medium text-[16px] leading-[150%] text-black max-[360px]:text-[14px] max-[360px]:font-normal">
                        Торговое или промышленное предприятие,
                        торгово-промышленное объединение предпринимателей, форма
                        организации предприятия, при которой
                        его правосубъектность отличается от правосубъектности
                        лиц, в нем участвующих.
                    </p>

                    <p className="font-medium text-[16px] leading-[150%] text-black max-[360px]:text-[14px] max-[360px]:font-normal">
                        Торговое или промышленное предприятие,
                        торгово-промышленное объединение предпринимателей, форма
                        организации предприятия
                    </p>

                    <button className="p-[8px_22px]  bg-[#212526] hover:bg-[#f05a00] rounded-md text-white !transition-colors !duration-[.2s] max-[360px]:w-full">
                        ПЕРЕЙТИ В КАТАЛОГ
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
