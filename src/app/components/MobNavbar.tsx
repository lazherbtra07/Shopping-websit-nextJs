import { MdMenu } from "react-icons/md";
import { FaShoppingCart, FaHome, FaHeart } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";

export const MobNavbar = () => {
  return (
    <div className="container flex justify-center items-center ">
      <div className=" lg:hidden fixed bottom-0 w-full bg-white rounded-md   max-w-[500px] mob-navbar px-8">
      <div className=" flex justify-between text-[28px] py-2 px-1">
        <div className=" cursor-pointer"><MdMenu /></div>
        <div className=" relative">
          <div className=" cursor-pointer"><FaShoppingCart /></div>
          <div className=" bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">0</div>
        </div>
        <div className=" cursor-pointer"><FaHome /></div>
        <div className=" relative">
          <div className=" cursor-pointer"><FaHeart /></div>
          <div className=" bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">1</div>
        </div>
        <div className=" cursor-pointer"><AiOutlineAppstore /></div>
      </div>
      </div>
    </div>
  )
}
