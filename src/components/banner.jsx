import { useEffect, useRef } from "react"
import gsap, {ScrollTrigger, SlowMo} from "gsap/all"

import style from "../styles"
import { uinimg } from "../assets"

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
          <svg className="mr-5" width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 0C4.695 0 0 4.695 0 10.5C0 13.11 0.75 15.555 2.115 17.76C3.54 20.07 5.415 22.05 6.855 24.36C7.56 25.485 8.07 26.535 8.61 27.75C9 28.575 9.315 30 10.5 30C11.685 30 12 28.575 12.375 27.75C12.93 26.535 13.425 25.485 14.13 24.36C15.57 22.065 17.445 20.085 18.87 17.76C20.25 15.555 21 13.11 21 10.5C21 4.695 16.305 0 10.5 0ZM10.5 14.625C8.43 14.625 6.75 12.945 6.75 10.875C6.75 8.805 8.43 7.125 10.5 7.125C12.57 7.125 14.25 8.805 14.25 10.875C14.25 12.945 12.57 14.625 10.5 14.625Z" fill="white"/>
          </svg>
          <p>Samata, Gowa. Indonesia</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
