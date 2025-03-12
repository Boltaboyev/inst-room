import React from "react"

// img
import logo from "../../assets/img/logo.png"

// icons
import instagram from "../../assets/icons/instagram.png"
import vk from "../../assets/icons/vk.png"
import facebook from "../../assets/icons/facebook.png"

const Footer = () => {
    return (
        <footer className="py-[40px] bg-[#212526]">
            <div className="container2 grid grid-cols-3 gap-[20px] max-[730px]:grid-cols-2 max-[730px]:gap-[40px_20px] max-[400px]:grid-cols-1">
                <ul className="flex flex-col gap-[10px] *:w-fit *:cursor-pointer *:hover:text-[#f05a00] text-white *:transition duration-[.2s] *:hover:translate-x-[4px] max-[400px]:border-b border-[#fff3] max-[400px]:pb-[20px]">
                    <li>Малярные товары</li>
                    <li>Электрооборудование</li>
                    <li>Спецодежда</li>
                    <li>Для дома и дачи</li>
                    <li>Сезонное</li>
                    <li>Инструмент</li>
                </ul>

                <ul className="flex flex-col gap-[10px] *:w-fit *:cursor-pointer *:hover:text-[#f05a00] text-white *:transition duration-[.2s] *:hover:translate-x-[4px] max-[400px]:border-b border-[#fff3] max-[400px]:pb-[20px]">
                    <li>О компании</li>
                    <li>Контакты</li>
                    <li>Новинки</li>
                    <li>Хиты сезона</li>
                    <li>Распродажи</li>
                </ul>

                <div className="flex flex-col gap-[20px] justify-start items-start">
                    <img src={logo} alt="" />

                    <div className="flex flex-col gap-[5px]">
                        <a
                            className="font-medium text-md leading-[1.11] text-white"
                            href="tel:+7 495 120-32-14">
                            +7 495 120-32-14
                        </a>
                        <a
                            className="font-medium text-md leading-[1.11] text-white"
                            href="tel:+7 495 120-32-14">
                            +7 495 120-33-15
                        </a>
                    </div>

                    <div className="flex justify-center items-center gap-[15px] *:cursor-pointer *:active:scale-95 *:h-[25px]">
                        <img src={instagram} alt="" />
                        <img src={vk} alt="" />
                        <img src={facebook} alt="" />
                    </div>

                    <p className="font-normal text-[14px] leading-[114%] text-white">
                        Соглашение пользователя <br /> «Copyright © Название
                        2023»
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
