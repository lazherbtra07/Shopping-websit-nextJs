import Image from "next/image"
import { RiStarSFill , RiStarSLine  } from "react-icons/ri"

interface propsType{
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: number;
}

export const ProductCard:React.FC<propsType> = ({img, title, desc, rating, price }) => {

const generateRating = (rating: number) => {
  switch (rating) {
    case 1 :
      return(
        <div className=" flex gap-1 text-[20px] text-[#ff9529]">
          <RiStarSFill />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
        </div>
      );
    case 2 :
      return(
        <div className=" flex gap-1 text-[20px] text-[#ff9529]">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSLine />
          <RiStarSLine />
          <RiStarSLine />
        </div>
      );
    case 3 :
      return(
        <div className=" flex gap-1 text-[20px] text-[#ff9529]">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSLine />
          <RiStarSLine />
        </div>
      );
    case 4 :
      return(
        <div className=" flex gap-1 text-[20px] text-[#ff9529]">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSLine />
        </div>
      );
    case 5 :
      return(
        <div className=" flex gap-1 text-[20px] text-[#ff9529]">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </div>
      );
  
    default:
      return null
  }
}

  return (
    <div className=" px-4 border border-gray-200 rounded-xl ">
      <div>
        <Image
          className=" w-auto h-auto"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>
      <div className=" space-y-2 py-2">
        <h2 className=" text-accent font-medium uppercase">{title}</h2>
        <p className=" text-gray-500 w-[50px]:">{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className=" font-bold flex gap-4">
          ${price}
          <del className=" text-gray-500 font-normal">${parseInt(`${price}`) + 50}.00</del>
        </div>
      </div>
    </div>
  )
}
