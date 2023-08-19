
import style from "../styles"
import { uinimg, white_location } from "../assets"

const Banner = () => {
  return (
    <div className={`${style.paddingX} h-[400px] overflow-hidden w-full bg-no-repeat bg-cover bg-center relative `} style={{ backgroundImage: `url(${uinimg})` }}>
      <div className="max-w-[1300px] h-full text-white m-auto flex flex-col justify-center items-center">
        <h2 className={`${style.heading2} mb-4`}>Gratis Ongkir</h2>
        <p className={`${style.paragraph} mb-10 sm:w-2/3 text-center`}>
          Nikmati Loka Chips dalam berbagai keadaan. Pengiriman
          <span className="font-bold"> gratis </span>
          untuk daerah
          <span className="font-bold"> Samata </span>
          dan sekitarnya. Dapatkan Loka Chips di kantin-kantin kampus UIN Makassar
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
