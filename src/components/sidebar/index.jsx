import React from "react"

// img
import logo from "../../assets/img/logo.png"
import instagram from "../../assets/icons/instagram.png"
import vk from "../../assets/icons/vk.png"
import facebook from "../../assets/icons/facebook.png"

// icons
import {CgClose} from "react-icons/cg"
const Sidebar = ({isOpen, onClose}) => {
    return (
        <>
            <div
                className={`w-[80%] max-[390px]:w-full h-screen bg-[#212526] fixed left-0 top-0 z-[999] p-[20px] flex flex-col gap-[10px] justify-between items-start transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                <CgClose
                    className="text-white absolute right-[20px] top-[20px] text-[25px] cursor-pointer"
                    onClick={onClose}
                />

                <img src={logo} alt="logo" />

                <ul className="flex flex-col justify-start items-start border-t border-b border-[#ffffff1f] py-[10px] gap-[20px] w-full text-white *:cursor-pointer *:hover:text-[#f05a00]">
                    <li>О компании</li>
                    <li>Акции</li>
                    <li>Хиты сезона</li>
                    <li>Новинки</li>
                </ul>

                <div className="flex flex-col gap-[20px]">
                    <div className="flex flex-col">
                        <a
                            className="font-medium text-md leading-[1.11] text-white"
                            href="tel:+7 495 120-32-14">
                            +7 495 120-32-14
                        </a>
                        <a
                            href="#!"
                            className="text-sm leading-[1.14] underline text-[#f05a00]">
                            Заказать звонок
                        </a>
                    </div>
                    <div className="flex justify-center items-center gap-[15px] *:cursor-pointer *:active:scale-95">
                        <img src={instagram} alt="instagram" />
                        <img src={vk} alt="vk" />
                        <img src={facebook} alt="facebook" />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="h-screen w-full bg-[#00000031] z-[888] fixed top-0 left-0 backdrop-blur-[4px] transition-opacity duration-300 opacity-100"
                    onClick={onClose}></div>
            )}
        </>
    )
}

export default Sidebar
