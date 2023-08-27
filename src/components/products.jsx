import { useRef, useEffect, useState } from "react"
import gsap, {Back} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MainProduct, DetailProduct } from "./product/"
import style from "../styles"
import { produks } from "../constants"

gsap.registerPlugin(ScrollTrigger)

const Product = () => {
  const [curIndex, setCurIndex]  = useState(0)
  const product = produks[curIndex]
  const [isDetailActive, setIsDetailActive] = useState(false)

  const halfCrRef = useRef(null)

  useEffect(() => {
    // half circle bg animation
    gsap.to(halfCrRef.current, {
      y:0,
      duration:1,
      ease:Back.easeOut,
      scrollTrigger:{
        trigger:halfCrRef.current,
        start:"-80% 100%",
      }
    })
    gsap.to(halfCrRef.current, {
      scale:1.2,
      scrollTrigger: {
        trigger: halfCrRef.current,
        start: "-50% 100%",
        scrub: true,
      },
    })
  }, [])

  return (
    <div className={`${style.paddingX} relative overflow-hidden py-20 w-full h-fit bg-primary text-txtcolor`}>
      <div className="relative w-full">
        <div ref={halfCrRef} className="absolute productCircle h-72 sm:h-[700px] lg:h-[650px] bg-white bottom-[-130px] sm:-bottom-1/2 -left-20 -right-20 lg:-right-32 lg:-left-32 rounded-[50%] z-[1] translate-y-full"></div>
        <MainProduct product={product} setCurIndex={setCurIndex} setIsDetailActive={setIsDetailActive} />
      </div>
      <DetailProduct product={product} isDetailActive={isDetailActive} setIsDetailActive={setIsDetailActive} />
    </div>
  );
}

export default Product;
