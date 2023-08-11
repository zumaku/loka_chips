import { useEffect } from "react"
import style from "../styles"
import {heroimg} from "../assets"
import gsap, {Power4} from "gsap"

const Home = () => {
  const tl = gsap.timeline({ease: Power4.easeIn, repeat: -1, yoyo: true, delay:.5})

  useEffect(() => {
    tl.to(".circle", {y:35})
  }, [])

  // const mouseEnter = () => {
  //   tl.pause()
  //   gsap.to(".circle", {y:16, width:50, height:50, scale:1.5, duration:.3, repeat:0, yoyo:false})
  //   gsap.to(".scrollTxt", {opacity:100, fontSize:"8px"})
  // }

  return (
    <div className="w-full max-w-[1300px] m-auto py-16 h-full flex flex-col-reverse sl:flex-row-reverse justify-start sl:justify-between items-center relative" id="home">
      <img src={heroimg} alt="2 Loka Chips Products" className="w-full xs:max-w-[490px] sm:translate-x-10"/>
      <div className="flex flex-col mb-10 md:pt-10">
        <h3 className={`${style.heading2}`}>Jelajahi Rasanya!</h3>
        <h1 className={`${style.heading1} mb-[17px] max-w-[700px]`}><span className="text-white">Loka Chips</span>, Cemilan Wajib Mahasiswa</h1>
        <p className={`${style.paragraph} mb-10 md:mb-14 max-w-[541px]`}>Kembangkan cita rasa dan semangatmu dengan setiap gigitan Loka Chips. Kami hadir untuk mengiringi perjalanan inspirasimu, menjadi pilihan cemil wajib bagi mahasiswa yang berani mengeksplorasi rasa.</p>
        <div className="buttons">
          <button className={`${style.btnWhite} mr-3 sm:mr-5`}>Order Sekarang</button>
          <a href="/kotak" className={`${style.btnChocolate} inline-block`}>Kontak Kami</a>
        </div>
      </div>
      <a href="#produk"
        className="scrollAnim w-[29px] h-[67px] rounded-[19px] border-2 border-secondary absolute bottom-5 inset-x-1/2 py-1 flex justify-center"
        // onMouseEnter={mouseEnter}
      >
        <div className="circle rounded-full bg-white w-[19px] h-[19px] grid place-items-center">
          <p className="scrollTxt opacity-0 text-[8px] text-poppins">Scroll</p>
        </div>
      </a>
    </div>
  );
}

export default Home;