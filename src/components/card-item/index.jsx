import React from "react"

// icons
import {PiShoppingCartSimpleLight} from "react-icons/pi"

const CardItem = ({product}) => {
    const getStatusBgColor = (status) => {
        switch (status) {
            case "Новинка":
                return "bg-[#180a3e]"
            case "Акция":
                return "bg-[#fc573b]"
            case "Под заказ":
                return "bg-green-600"
            default:
                return ""
        }
    }

    return (
        <div className="p-3 rounded-[7px] bg-white shadow-[0_15px_20px_0_rgba(0,0,0,0.05)] relative flex flex-col justify-between gap-[10px] h-[350px]">
            {product.status && (
                <span
                    className={`${getStatusBgColor(
                        product.status
                    )} text-white px-2 py-1 rounded-[3px] text-[10px] absolute`}>
                    {product.status}
                </span>
            )}
            <div className="flex justify-center items-center py-[10px] h-fit">
                <img
                    src={product.img}
                    alt={product.title}
                    className="h-[170px] object-contain"
                />
            </div>
            <h3 className="font-medium text-[16px] leading-[125%] text-black">
                {product.title}
            </h3>

            <div className="flex justify-between items-center gap-[10px]">
                <div className="flex flex-col leading-[130%]">
                    <p className="text-gray-400 line-through">
                        {product.oldPrice} ₽
                    </p>
                    <p className="font-semibold text-[20px] leading-[120%] text-center text-black">
                        {product.price} ₽
                    </p>
                </div>

                <button className=" h-[40px] w-[40px] flex justify-center items-center text-[20px] rounded-[5px_0_5px_0] border border-[#f05a00] text-[#f05a00] hover:text-white hover:bg-[#f05a00] transition duration-[.2s]">
                    <PiShoppingCartSimpleLight />
                </button>
            </div>
        </div>
    )
}

export default CardItem
