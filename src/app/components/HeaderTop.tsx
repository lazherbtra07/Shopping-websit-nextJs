import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";


export const HeaderTop = () => {
  return (
    <div className=" border-b border-gray-200 hidden sm:block ">
      <div className="container py-4 ">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header-icon ">
              <FaFacebook/>
            </div>
            <div className="header-icon">
              <FaInstagram/>
            </div>
            <div className="header-icon">
              <FaTwitter/>
            </div>
            <div className="header-icon">
              <FaLinkedin/>
            </div>
          </div>
          <div className=" text-gray-500 test-[12px]">
            <b>FREE SHOPPING</b>THIS WEEK ORDER OVER - $55 
          </div>
          <div className="flex gap-4">
            <select className=" border border-gray-400 rounded-md cursor-pointer text-gray-500 test-[12px] w-[70px]" name="currency" id="currency">
              <option value="USD ">USD $</option>
              <option value="EUR">EUR €</option>
              <option value="AED ">AED</option>
              <option value="INR">INR</option>
            </select>
            <select className=" border border-gray-400 rounded-md cursor-pointer text-gray-500 test-[12px] w-[80px]" name="language" id="language">
              <option value="English">English</option>
              <option value="Franch">Franch </option>
              <option value="Arabic">Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
