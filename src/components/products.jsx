import { useRef, useEffect } from "react"
import gsap, {Back} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MainProduct, DetailProduct } from "./product/"

gsap.registerPlugin(ScrollTrigger)

const Product = () => {
  const halfCrRef = useRef(null)

  useEffect(() => {
    // half circle bg animation
    gsap.to(halfCrRef.current, {
      y:0,
      duration:1,
      ease:Back.easeOut,
      scrollTrigger:{
        trigger:halfCrRef.current,
        start:"-80% 80%",
      }
    })
    gsap.to(halfCrRef.current, {
      scale:1.2,
      scrollTrigger: {
        trigger: halfCrRef.current,
        start: "-50% 80%",
        scrub: true,
      },
    })
  }, [])

  return (
    <div className="relative w-full">
      
      {/* Half Circle */}
      <div ref={halfCrRef} className="absolute productCircle h-72 sm:h-[700px] lg:h-[650px] bg-white bottom-[-130px] sm:-bottom-1/2 -left-20 -right-20 lg:-right-32 lg:-left-32 rounded-[50%] z-[1] translate-y-full"></div>

      <MainProduct />

      <DetailProduct />
      
    </div>
  );
}

export default Product;