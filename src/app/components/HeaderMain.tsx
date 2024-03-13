import { FaSearch,FaRegUser, FaHeart, FaShopify } from "react-icons/fa";


export const HeaderMain = () => {
  return (
    <div className=" border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className=" font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          <span className=" text-accent">LR</span>.SHOP
        </div>
        <div className=" w-full sm:w-[300px] md:w-[70%] relative">
          <input className=" border-gray-200 border p-2 px-4 rounded-lg w-full" type="text" placeholder="Enter any product name..."/>
          <div className="absolute right-0 top-0 mr-3 mt-3 text-gray-400 cursor-pointer"><FaSearch/></div>
        </div>
        <div className=" cursor-pointer  hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <FaRegUser/>
          <div className=" relative">
            <FaHeart />
            <div className=" cursor-pointer absolute bg-red-600 rounded-full top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">1</div>
          </div>
          <div className=" relative">
          <FaShopify />
            <div className=" cursor-pointer absolute bg-red-600 rounded-full top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">3</div>
          </div>
        </div>
      </div>
    </div>
  )
}
