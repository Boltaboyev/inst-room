import React, {useState} from "react"

// img
import logo from "../../assets/img/logo.png"
import instagram from "../../assets/icons/instagram.png"
import vk from "../../assets/icons/vk.png"
import facebook from "../../assets/icons/facebook.png"

// icons
import {FaRegHeart} from "react-icons/fa6"
import {FiBarChart2, FiSearch} from "react-icons/fi"
import {PiUserCircleLight} from "react-icons/pi"
import {PiShoppingCartSimpleLight} from "react-icons/pi"
import {RiMenu2Line} from "react-icons/ri"
import {LuMenu} from "react-icons/lu"
import Sidebar from "../sidebar"

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    return (
        <header>
            {/* top navbar */}
            <nav className=" bg-[#212526]">
                <nav className="container2 flex justify-between items-center gap-[20px] h-[60px]">
                    <img src={logo} alt="" className=" cursor-pointer" />

                    <p className="text-sm leading-[1.25] text-white max-[1100px]:hidden">
                        Время работы: 10:00–20:00
                    </p>

                    <nav className="flex flex-col max-[1100px]:hidden">
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
                    </nav>

                    <nav className="flex justify-center items-center h-full">
                        <nav className="h-full border-r max-[560px]:hidden border-[#212526] flex justify-center items-center px-[30px] text-[20px] text-white cursor-pointer bg-[#3b3b3b] hover:bg-[#f05a00] transition duration-[.2s] select-none">
                            <FaRegHeart />
                        </nav>

                        <nav className="h-full border-r max-[560px]:hidden border-[#212526] flex justify-center items-center px-[30px] text-[20px] text-white cursor-pointer bg-[#3b3b3b] hover:bg-[#f05a00] transition duration-[.2s] select-none">
                            <FiBarChart2 />
                        </nav>

                        <nav className="h-full border-r max-[560px]:hidden border-[#212526] flex justify-center items-center px-[30px] text-[20px] text-white cursor-pointer bg-[#3b3b3b] hover:bg-[#f05a00] transition duration-[.2s] select-none">
                            <PiUserCircleLight />
                        </nav>

                        <nav className="h-full border-r max-[560px]:hidden border-[#212526] flex justify-center items-center px-[30px] text-[20px] text-white cursor-pointer bg-[#3b3b3b] hover:bg-[#f05a00] transition duration-[.2s] select-none">
                            <PiShoppingCartSimpleLight />
                        </nav>

                        <LuMenu
                            className="text-white mx-[20px] text-[30px] hidden max-[1100px]:block cursor-pointer"
                            onClick={toggleSidebar}
                        />
                    </nav>

                    <nav className="flex flex-col max-[1100px]:hidden">
                        <p className="text-sm leading-[1.25] text-white">
                            Товаров на сумму
                        </p>
                        <p className="font-medium text-md leading-[1.11] text-white">
                            2 000 ₽
                        </p>
                    </nav>
                </nav>
            </nav>

            {/* bottom navbar */}
            <nav className=" bg-[#000] py-[10px] max-[1100px]:hidden">
                <nav className="container2 flex justify-between items-center gap-[20px]">
                    <button className="flex justify-center items-center gap-[4px] p-[8px_22px] border border-[#f05a00] rounded-md text-white">
                        <RiMenu2Line />
                        Каталог товаров
                    </button>
                    <ul className="flex justify-center items-center gap-[20px] text-white *:cursor-pointer *:hover:text-[#f05a00]">
                        <li>О компании</li>
                        <li>Акции</li>
                        <li>Хиты сезона</li>
                        <li>Новинки</li>
                    </ul>

                    <nav className="flex justify-center items-center gap-[15px] *:cursor-pointer *:active:scale-95">
                        <img src={instagram} alt="" />
                        <img src={vk} alt="" />
                        <img src={facebook} alt="" />
                    </nav>

                    <nav className="flex justify-between items-center gap-[10px] overflow-hidden rounded-md bg-white text-[#8a8a8a] h-[40px] px-[10px]">
                        <FiSearch className="cursor-pointer h-full" />
                        <input
                            type="search"
                            placeholder="Поиск по каталогу"
                            className="h-full"
                        />
                    </nav>
                </nav>
            </nav>

            {/* mobile navbar */}
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </header>
    )
}

export default Header
