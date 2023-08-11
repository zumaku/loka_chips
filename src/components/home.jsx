import style from "../styles"
import {heroimg} from "../assets"

const Home = () => {
  return (
    <div className="w-full max-w-[1300px] m-auto py-16 h-full flex flex-col-reverse sl:flex-row-reverse justify-start sl:justify-between items-center" id="home">
      <img src={heroimg} alt="2 Loka Chips Products" className="w-full xs:max-w-[490px] sm:translate-x-10"/>
      <div className="flex flex-col mb-10 md:pt-10">
        <h3 className={`${style.heading2}`}>Jelajahi Rasanya!</h3>
        <h1 className={`${style.heading1} mb-[17px] max-w-[700px]`}><span className="text-white">Loka Chips</span>, Cemilan Wajib Mahasiswa</h1>
        <p className={`${style.paragraph} mb-10 md:mb-14 max-w-[541px]`}>Kembangkan cita rasa dan semangatmu dengan setiap gigitan Loka Chips. Kami hadir untuk mengiringi perjalanan inspirasimu, menjadi pilihan cemil wajib bagi mahasiswa yang berani mengeksplorasi rasa.</p>
        <div className="buttons">
          <button className={`${style.btnWhite} mr-3 sm:mr-5`}>Order Sekarang</button>
          <a href="/kotak" className={`${style.btnChocolate} inline-block`}>Kontak Kami</a>
          {/* <button className={`${style.btnChocolate}`}>Kontak Kami</button> */}
        </div>
      </div>
    </div>
  );
}

export default Home;