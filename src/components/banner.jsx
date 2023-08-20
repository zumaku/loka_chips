import { useEffect, useRef } from "react"
import gsap, {ScrollTrigger, SlowMo} from "gsap/all"

import style from "../styles"
import { uinimg, white_location } from "../assets"

gsap.registerPlugin(ScrollTrigger)

const Banner = () => {

  const bgRef = useRef(null)

  useEffect(() => {
    gsap.to(bgRef.current,{
      backgroundPosition: '50% 100%',
      duration: 5,
      delay: 1,
      ease: SlowMo.easeOut,
      scrollTrigger: {
        trigger: bgRef.current,
        start: "-10% 60%",
        scrub: true,
      }
    })
  }, [])

  return (
    <div ref={bgRef} className={`${style.paddingX} h-[400px] overflow-hidden w-full bg-no-repeat bg-cover bg-top relative `} style={{ backgroundImage: `url(${uinimg})` }}>
      <div className="max-w-[1300px] h-full text-white m-auto flex flex-col justify-center items-center">
        <h2 className={`${style.heading2} mb-4`}>Gratis Ongkir</h2>
        <p className={`${style.paragraph} mb-10 sm:w-2/3 text-center`}>
          Nikmati Loka Chips dalam berbagai keadaan. Pengiriman
          <span className="font-bold"> gratis </span>
          untuk daerah
          <span className="font-bold"> Samata </span>
          dan sekitarnya. Dapatkan Loka Chips di kantin-kantin kampus UIN Alauddin Makassar.
        </p>
        <div className="flex font-bold justify-center items-center w-fit">
          <img src={white_location} alt="Icon Lokasi" className="mr-5" />
          <p>Samata, Gowa. Indonesia</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
