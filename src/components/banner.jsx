import { FaLocationDot } from 'react-icons/fa6'
import style from "../styles"
import { uinimg } from "../assets"

const Banner = () => {

  return (
    <div className={`${style.paddingX} h-[400px] !bg-no-repeat !bg-cover bg-fixed bg-center`} style={{ backgroundImage: `url(${uinimg})` }} >
      <div className="max-w-[1300px] h-full text-white m-auto flex flex-col justify-center items-start">
        <h2 className={`${style.heading2} mb-4`}>Gratis Ongkir</h2>
        <p className={`${style.paragraph} mb-10 max-w-[557px]`}>
          Nikmati Loka Chips dalam berbagai keadaan. Pengiriman <strong>
            gratis
          </strong> untuk daerah <strong>
            Samata
          </strong> dan sekitarnya. Dapatkan Loka Chips di kantin-kantin kampus UIN Alauddin Makassar.
        </p>
        <div className="flex font-bold justify-center items-center w-fit">
          <FaLocationDot className='text-3xl mr-4' />
          <p>Samata, Gowa. Indonesia</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
