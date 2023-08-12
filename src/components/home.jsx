import { useState, useEffect } from "react"
import style from "../styles"
import {heroimg} from "../assets"
import gsap, {Power4, Back} from "gsap"

const Home = () => {
  const [lebarWin, setLebarWin] = useState(window.innerWidth);
  const scrollTl = gsap.timeline({ease: Power4.easeIn, repeat: -1, yoyo: true, delay:.5})
  
  const handleResize = () => {
    setLebarWin(window.innerWidth);
  };

  useEffect(() => {
    scrollTl.to(".circle", {y:35})
    
    const homeTl = gsap.timeline({defaults:{duration:.8, ease:Back.easeOut}})
    homeTl.fromTo(".imgHero", {scale:.5, opacity:0}, {scale:1, opacity:1})
          .fromTo(".heroContent", {duration:.3, ease:Power4.easeIn, x:-10, opacity:0}, {x:0, opacity:1})
          // .fromTo(".scrollAnim", {duration:.3, y:20, opacity:0}, {y:0, opacity:1})

    window.addEventListener("resize", handleResize);

    lebarWin <= 930 ? homeTl.to(".scrollAnim", {opacity:0}) : homeTl.fromTo(".scrollAnim", {duration:.3, y:10, opacity:0}, {y:0, opacity:1})

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])

  return (
    <div className="w-full max-w-[1300px] m-auto py-16 h-full flex flex-col-reverse sl:flex-row-reverse justify-start sl:justify-between items-center relative" id="home">
      <img src={heroimg} alt="2 Loka Chips Products" className="imgHero w-full xs:max-w-[490px] sm:translate-x-10"/>
      <div className="heroContent flex flex-col mb-10 md:pt-10">
        <h3 className={`${style.heading2}`}>Jelajahi Rasanya!</h3>
        <h1 className={`${style.heading1} mb-[17px] max-w-[700px]`}><span className="text-white">Loka Chips</span>, Cemilan Wajib Mahasiswa</h1>
        <p className={`${style.paragraph} mb-10 md:mb-14 max-w-[541px]`}>Kembangkan cita rasa dan semangatmu dengan setiap gigitan Loka Chips. Kami hadir untuk mengiringi perjalanan inspirasimu, menjadi pilihan cemil wajib bagi mahasiswa yang berani mengeksplorasi rasa.</p>
        <div className="buttons">
          <button className={`${style.btnWhite} mr-3 sm:mr-5`}>Order Sekarang</button>
          <a href="#kontak" className={`${style.btnChocolate} inline-block`}>Kontak Kami</a>
        </div>
      </div>
      <a href="#produk" className="scrollAnim w-[29px] h-[67px] rounded-[19px] border-2 border-secondary absolute bottom-5 inset-x-1/2 py-1 flex justify-center opacity-0 sl:opacity-100">
        <div className="circle rounded-full bg-white w-[19px] h-[19px] grid place-items-center">
          <p className="scrollTxt opacity-0 text-[8px] text-poppins">Scroll</p>
        </div>
      </a>
    </div>
  );
}

export default Home;