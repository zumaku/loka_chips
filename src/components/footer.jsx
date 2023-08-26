import { useState } from "react"
import style from "../styles"
import { logo } from "../assets"
import { footers } from "../constants"

const Footer = () => {

  const [currentYear] = useState(new Date().getFullYear());

  return (
    <div className={`${style.paddingX} flex flex-col`}>
      <div className="w-full h-1 mb-8 bg-secondary"></div>
      <div className="flex flex-col ss:flex-row-reverse ss:justify-between mb-8">
        <div className={`${style.paragraph} flex flex-col xs:flex-row xs:justify-between`}>
          <ul className="mb-4 ss:mb-0 ss:mr-1 sm:mr-6 md:mr-10">{
            footers.map(footer => {
              if(footer.id !== "whatsapp"){
                return(
                  <li
                    className="mb-4 w-fit"
                    key={footer.id}
                  >
                    <a
                      href={footer.link}
                      className="flex items-center"
                    >
                      {setIcon(footer.id)}
                      <p className="ml-2">{footer.content}</p>
                    </a>
                  </li>
                )
              }
            })
          }</ul>
          <div className="flex flex-col mb-12 ss:mb-0">
            <p className="mb-4 ">Hubungi Kimi di Whatsapp</p>
            <a
              href={footers[footers.length - 1].link}
              className="flex items-center mb-4"
            >
              <div className="w-8 ">
                {setIcon(footers[footers.length - 1].id)}
              </div>
              <p className="ml-4">{footers[footers.length - 1].content}</p>
            </a>
            <button className={style.btnYellow}>Hubungi Sekarang</button>
          </div>
        </div>
        {/* <div className="w-56"> */}
        <div className="w-fit ss:w-44 sm:w-fit flex flex-col justify-between">
          <img className="w-44  sm:w-52 " src={logo} alt="" />
          <p className={style.paragraph}>&copy; {currentYear} Loka Chips. All rights reserved.</p>
        </div>
      </div>
    </div>
  );

  function setIcon(id){
    switch (id) {
      case 'location':
        return (
          <svg className="w-fit" width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_64_6730)">
              <path fill="#F0C91A" d="M20 3.3335C13.55 3.3335 8.33334 8.55016 8.33334 15.0002C8.33334 17.9002 9.16668 20.6168 10.6833 23.0668C12.2667 25.6335 14.35 27.8335 15.95 30.4002C16.7333 31.6502 17.3 32.8168 17.9 34.1668C18.3333 35.0835 18.6833 36.6668 20 36.6668C21.3167 36.6668 21.6667 35.0835 22.0833 34.1668C22.7 32.8168 23.25 31.6502 24.0333 30.4002C25.6333 27.8502 27.7167 25.6502 29.3 23.0668C30.8333 20.6168 31.6667 17.9002 31.6667 15.0002C31.6667 8.55016 26.45 3.3335 20 3.3335ZM20 19.5835C17.7 19.5835 15.8333 17.7168 15.8333 15.4168C15.8333 13.1168 17.7 11.2502 20 11.2502C22.3 11.2502 24.1667 13.1168 24.1667 15.4168C24.1667 17.7168 22.3 19.5835 20 19.5835Z" />
            </g>
          </svg>
        )
      case 'email':
        return(
        <svg className="w-fit" width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_64_6734)">
            <path fill="#F0C91A" d="M33.3333 6.6665H6.66668C4.83334 6.6665 3.35001 8.1665 3.35001 9.99984L3.33334 29.9998C3.33334 31.8332 4.83334 33.3332 6.66668 33.3332H33.3333C35.1667 33.3332 36.6667 31.8332 36.6667 29.9998V9.99984C36.6667 8.1665 35.1667 6.6665 33.3333 6.6665ZM33.3333 13.3332L20 21.6665L6.66668 13.3332V9.99984L20 18.3332L33.3333 9.99984V13.3332Z"/>
          </g>
        </svg>
        )
      case 'website':
        return(
          <svg className="w-fit" width="32" height="32" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" >
            <g id="Shopicon">
                <path fill="#F0C91A" d="M14.037,22c0.239-6.944,1.708-13.047,3.885-17.053C10.46,7.326,4.9,13.96,4.101,22H14.037z"/>
                <path fill="#F0C91A" d="M14.037,26H4.101C4.9,34.04,10.46,40.674,17.922,43.053C15.745,39.047,14.276,32.944,14.037,26z"/>
                <path fill="#F0C91A" d="M33.963,22h9.936C43.1,13.96,37.54,7.326,30.078,4.947C32.255,8.953,33.724,15.056,33.963,22z"/>
                <path fill="#F0C91A" d="M33.963,26c-0.239,6.944-1.708,13.047-3.885,17.053C37.54,40.674,43.1,34.04,43.899,26H33.963z"/>
                <path fill="#F0C91A" d="M29.958,26H18.042C18.466,37.815,22.539,44,24,44S29.534,37.815,29.958,26z"/>
                <path fill="#F0C91A" d="M24,4c-1.461,0-5.534,6.185-5.958,18h11.916C29.534,10.185,25.461,4,24,4z"/>
            </g>
          </svg>
        )
      case 'instagram':
        return(
          <svg className="w-fit" width="32" height="32" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512" id="instagram">
            <path  fill="none" d="M401.7,91.9c-13.3,0-24.1,10.8-24.1,24.1c0,13.3,10.8,24.1,24.1,24.1c13.3,0,24.1-10.8,24.1-24.1 C425.8,102.7,415,91.9,401.7,91.9z"></path>
            <circle cx="256" cy="256" r="113" fill="none"></circle>
            <path fill="#F0C91A" d="M399.5,19.5h-287C59.2,19.5,16,62.7,16,116v280c0,53.3,43.2,96.5,96.5,96.5h287c53.3,0,96.5-43.2,96.5-96.5 V116C496,62.7,452.8,19.5,399.5,19.5z M256,369c-62.4,0-113-50.6-113-113s50.6-113,113-113s113,50.6,113,113S318.4,369,256,369z M401.7,140.1c-13.3,0-24.1-10.8-24.1-24.1c0-13.3,10.8-24.1,24.1-24.1c13.3,0,24.1,10.8,24.1,24.1 C425.8,129.3,415,140.1,401.7,140.1z"></path>
          </svg>
        )
      case "whatsapp":
        return(
          <svg className="w-fit" width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="whatsapp">
              <path fill="#F0C91A" d="M8.002 0h-.004C3.587 0 0 3.588 0 8a7.94 7.94 0 0 0 1.523 4.689l-.997 2.972 3.075-.983A7.93 7.93 0 0 0 8.002 16C12.413 16 16 12.411 16 8s-3.587-8-7.998-8zm4.655 11.297c-.193.545-.959.997-1.57 1.129-.418.089-.964.16-2.802-.602-2.351-.974-3.865-3.363-3.983-3.518-.113-.155-.95-1.265-.95-2.413s.583-1.707.818-1.947c.193-.197.512-.287.818-.287.099 0 .188.005.268.009.235.01.353.024.508.395.193.465.663 1.613.719 1.731.057.118.114.278.034.433-.075.16-.141.231-.259.367-.118.136-.23.24-.348.386-.108.127-.23.263-.094.498.136.23.606.997 1.298 1.613.893.795 1.617 1.049 1.876 1.157.193.08.423.061.564-.089.179-.193.4-.513.625-.828.16-.226.362-.254.574-.174.216.075 1.359.64 1.594.757.235.118.39.174.447.273.056.099.056.564-.137 1.11z"></path>
          </svg>
        )
      default:
        return false
    }
  }
}

export default Footer;