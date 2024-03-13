import Image from "next/image";
import { HeaderTop } from "./components/HeaderTop";
import { HeaderMain } from "./components/HeaderMain";
import { Hero } from "./components/Hero";
import { NewProduct } from "./components/NewProduct";
import { ProductCard } from "./components/ProductCard";
import { Testimonials } from "./components/Testimonials";
import { Fotter } from "./components/Fotter";

export default function Home() {
  return (
<>
  <Hero/>
  <NewProduct/>
  <Testimonials/>
  
  
  
</>
  );
}
