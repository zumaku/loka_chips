import { useEffect } from "react"
import gsap from "gsap"
import SplitType from 'split-type'

import style from "../styles"

const CTA = () => {

  useEffect(() => {
    const title = new SplitType("#titleCTA")
    gsap.to(title.chars, {
        duration:.1,
        stagger: .05,
        y:-5,
        scrollTrigger:{
            trigger:"#titleCTA .char",
            start:"top 90%"
        }
    })
  }, [])

  return (
    <div className="w-full flex flex-col justify-center items-center bg-primary py-16 my-20">
      <h1 id="titleCTA" className={`${style.headingS} text-4xl text-center mb-5 bg-clip-border overflow-hidden`}>TUNGGU APA LAGI?</h1>
      <p className={`${style.paragraph} max-w-sm sm:max-w-2xl text-center mb-12`}>Jangan Tunda Nikmatnya, Pesan Loka Chips Sekarang dan Rasakan Kelezatan Luar Biasa!</p>
      <button className={`${style.btnChocolate}`}>Order Sekarang</button>
    </div>
  );
}

export default CTA;