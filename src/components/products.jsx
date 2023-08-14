// import { useState } from "react"
import style from "../styles"
import {original1, chocholate1, balado1} from "../assets"
// import {produks} from "../constants"

const Product = () => {
  // const [img1, setImg1] = useState(original1)

  return (
    <div className="relative w-full">
      {/* Half Circle */}
      <div className="absolute productCircle h-72 sm:h-[700px] lg:h-[650px] bg-white bottom-[-130px] sm:-bottom-1/2 -left-20 -right-20 lg:-right-32 lg:-left-32 rounded-[50%] z-[1]"></div>

      {/* Main Content */}
      <div className={`max-w-[1300px] m-auto`} id="produk">
        {/* Title */}
        <div className="secTitle text-center mb-5">
          <h3 className={`${style.heading2}`}>Varian Produk</h3>
          <h1 className={`${style.headingS} text-5xl sm:text-[64px]`}>ORIGINAL</h1>
        </div>

        {/* 1st Slide */}
        <div className="slide1 grid sm:grid-cols-3 grid-cols-1">
          {/* Left Part */}
          <div className="left sm:pt-20 text-center sm:text-start z-[2]">
            <p className="mb-8">Rasa Autentik, Kerenyahan Sejati.</p>
            <button className={`${style.btnChocolate} mb-10 sm:mb-0`}>Lihat Detail</button>
          </div>

          {/* Mid Part */}
          <div className="mid p-5 flex flex-col justify-center items-center z-[2]">
            <img className="max-w-[247px] mb-10 sm:mb-16" src={original1} alt="Loka Chips Rasa original" />
            <div className="arrows w-full flex justify-center items-center">
              <svg className="arrLeft hover:cursor-pointer" width="91" height="30" viewBox="0 0 91 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.585785 13.5858C-0.195259 14.3668 -0.195259 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585785 13.5858ZM91 13L2 13V17L91 17V13Z" fill="#341D12"/>
              </svg>
              <div className="arrCircle mx-6 w-10 h-10 bg-primary rounded-full border-[3px] border-secondary"></div>
              <div className="hover:cursor-pointer">
                <svg className="arrRight" width="91" height="30" viewBox="0 0 91 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M90.4142 16.4142C91.1953 15.6332 91.1953 14.3668 90.4142 13.5858L77.6863 0.857864C76.9052 0.0768156 75.6389 0.0768156 74.8579 0.857864C74.0768 1.63891 74.0768 2.90524 74.8579 3.68629L86.1716 15L74.8579 26.3137C74.0768 27.0948 74.0768 28.3611 74.8579 29.1421C75.6389 29.9232 76.9052 29.9232 77.6863 29.1421L90.4142 16.4142ZM0 17H89V13H0V17Z" fill="#341D12"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Part */}
          <div className="right relative flex justify-center items-center z-[2]">
            <div className="w-fit hidden sm:block sm:absolute md:static bottom-0 lg:static">
              <svg className="rope_shape" width="127" height="114" viewBox="0 0 127 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M125 17.8615C119.352 10.3592 106.053 -2.93804 98.0435 3.89166C88.0311 12.4288 116.528 27.9508 111.137 40.3685C105.745 52.7861 73.3975 10.8766 65.6956 20.9659C57.9937 31.0552 101.894 60.5471 91.1118 72.1887C80.3292 83.8302 25.6459 10.1005 17.944 33.3835C10.2422 56.6666 81.8695 83.8302 63.385 106.337C44.9005 128.844 17.9441 77.6214 1 68.3082" stroke="#341D12" stroke-width="4" />
              </svg>
            </div>
            <div className=" hidden sm:flex -rotate-90 space-x-6 absolute top-1/4 -right-1/3">
              <p>Autentik</p>
              <p>Renyah</p>
              <p>Kriuk</p>
              <p>Pedas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;