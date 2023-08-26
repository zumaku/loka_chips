import { useState } from "react"
import style from "../styles"
import { logo } from "../assets"
import { infos } from "../constants"

const Footer = () => {

  const [currentYear] = useState(new Date().getFullYear());

  return (
    <div className={`${style.paddingX} max-w-[1300px] mx-auto flex flex-col`}>
      <div className="w-full h-1 mb-8 bg-secondary"></div>
      <div className="flex flex-col ss:flex-row-reverse ss:justify-between mb-8">
        <div className={`${style.paragraph} flex flex-col xs:flex-row xs:justify-between`}>
          <ul className="mb-4 ss:mb-0 ss:mr-1 sm:mr-6 md:mr-10">{
            infos.map(info => {
              if(info.id !== "whatsapp"){
                return(
                  <li
                    className="mb-4 w-fit"
                    key={info.id}
                  >
                    <a
                      href={info.link}
                      className="flex items-center"
                    >
                      {setIcon(info.id)}
                      <p className="ml-4">{info.content}</p>
                    </a>
                  </li>
                )
              }
            })
          }</ul>
          <div className="flex flex-col mb-12 ss:mb-0">
            <p className="mb-4 ">Hubungi Kimi di Whatsapp</p>
            <a
              href={infos[infos.length - 1].link}
              className="flex items-center mb-4"
            >
              <div className="w-8">
                {setIcon(infos[infos.length - 1].id)}
              </div>
              <p className="ml-2">{infos[infos.length - 1].content}</p>
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
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_64_6730)">
                  <path d="M16 0C9.91857 0 5 5.008 5 11.2C5 13.984 5.78571 16.592 7.21571 18.944C8.70857 21.408 10.6729 23.52 12.1814 25.984C12.92 27.184 13.4543 28.304 14.02 29.6C14.4286 30.48 14.7586 32 16 32C17.2414 32 17.5714 30.48 17.9643 29.6C18.5457 28.304 19.0643 27.184 19.8029 25.984C21.3114 23.536 23.2757 21.424 24.7686 18.944C26.2143 16.592 27 13.984 27 11.2C27 5.008 22.0814 0 16 0ZM16 15.6C13.8314 15.6 12.0714 13.808 12.0714 11.6C12.0714 9.392 13.8314 7.6 16 7.6C18.1686 7.6 19.9286 9.392 19.9286 11.6C19.9286 13.808 18.1686 15.6 16 15.6Z" fill="#F0C91A"/>
              </g>
              <defs>
                  <clipPath id="clip0_64_6730">
                      <rect width="32" height="32" fill="white"/>
                  </clipPath>
              </defs>
          </svg>
        )
      case 'email':
        return(
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_64_6734)">
                  <path d="M28.8 3H3.2C1.44 3 0.016 4.4625 0.016 6.25L0 25.75C0 27.5375 1.44 29 3.2 29H28.8C30.56 29 32 27.5375 32 25.75V6.25C32 4.4625 30.56 3 28.8 3ZM28.8 9.5L16 17.625L3.2 9.5V6.25L16 14.375L28.8 6.25V9.5Z" fill="#F0C91A"/>
              </g>
              <defs>
                  <clipPath id="clip0_64_6734">
                      <rect width="32" height="32" fill="white"/>
                  </clipPath>
              </defs>
          </svg>
        )
      case 'website':
        return(
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.98915 14.4002C8.18132 8.84501 9.36248 3.96261 11.1129 0.757812C5.11302 2.66101 0.642444 7.96821 0 14.4002H7.98915Z" fill="#FFC727"/>
              <path d="M7.98915 17.6001H0C0.642444 24.0321 5.11302 29.3393 11.1129 31.2425C9.36248 28.0377 8.18132 23.1553 7.98915 17.6001Z" fill="#FFC727"/>
              <path d="M24.0109 14.4002H32C31.3576 7.96821 26.887 2.66101 20.8871 0.757812C22.6375 3.96261 23.8187 8.84501 24.0109 14.4002Z" fill="#FFC727"/>
              <path d="M24.0109 17.6001C23.8187 23.1553 22.6375 28.0377 20.8871 31.2425C26.887 29.3393 31.3576 24.0321 32 17.6001H24.0109Z" fill="#FFC727"/>
              <path d="M20.7905 17.6001H11.2094C11.5503 27.0521 14.8252 32.0001 15.9999 32.0001C17.1747 32.0001 20.4496 27.0521 20.7905 17.6001Z" fill="#FFC727"/>
              <path d="M16 0C14.8253 0 11.5503 4.948 11.2094 14.4H20.7906C20.4497 4.948 17.1747 0 16 0Z" fill="#FFC727"/>
          </svg>
        )
      case 'instagram':
        return(
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.5667 0H6.43333C2.88 0 0 2.92262 0 6.52854V25.4715C0 29.0774 2.88 32 6.43333 32H25.5667C29.12 32 32 29.0774 32 25.4715V6.52854C32 2.92262 29.12 0 25.5667 0ZM16 23.6448C11.84 23.6448 8.46667 20.2216 8.46667 16C8.46667 11.7784 11.84 8.35518 16 8.35518C20.16 8.35518 23.5333 11.7784 23.5333 16C23.5333 20.2216 20.16 23.6448 16 23.6448ZM25.7133 8.15899C24.8267 8.15899 24.1067 7.42833 24.1067 6.52854C24.1067 5.62875 24.8267 4.8981 25.7133 4.8981C26.6 4.8981 27.32 5.62875 27.32 6.52854C27.32 7.42833 26.6 8.15899 25.7133 8.15899Z" fill="#FFC727"/>
          </svg>
        )
      case "whatsapp":
        return(
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.004 0H15.996C7.17402 0 2.09938e-05 7.17599 2.09938e-05 16C-0.0054572 19.37 1.06132 22.6544 3.04602 25.378L1.05202 31.322L7.20202 29.356C9.81075 31.0867 12.8734 32.0067 16.004 32C24.826 32 32 24.822 32 16C32 7.17799 24.826 0 16.004 0ZM25.314 22.594C24.928 23.684 23.396 24.588 22.174 24.852C21.338 25.03 20.246 25.172 16.57 23.648C11.868 21.7 8.84001 16.922 8.60401 16.612C8.37802 16.302 6.70402 14.082 6.70402 11.786C6.70402 9.48999 7.87002 8.37199 8.34002 7.89199C8.72601 7.49799 9.36401 7.31799 9.97601 7.31799C10.174 7.31799 10.352 7.32799 10.512 7.33599C10.982 7.35599 11.218 7.38399 11.528 8.12599C11.914 9.05599 12.854 11.352 12.966 11.588C13.08 11.824 13.194 12.144 13.034 12.454C12.884 12.774 12.752 12.916 12.516 13.188C12.28 13.46 12.056 13.668 11.82 13.96C11.604 14.214 11.36 14.486 11.632 14.956C11.904 15.416 12.844 16.95 14.228 18.182C16.014 19.772 17.462 20.28 17.98 20.496C18.366 20.656 18.826 20.618 19.108 20.318C19.466 19.932 19.908 19.292 20.358 18.662C20.678 18.21 21.082 18.154 21.506 18.314C21.938 18.464 24.224 19.594 24.694 19.828C25.164 20.064 25.474 20.176 25.588 20.374C25.7 20.572 25.7 21.502 25.314 22.594Z" fill="#FFC727"/>
          </svg>
        )
      default:
        return false
    }
  }
}

export default Footer;