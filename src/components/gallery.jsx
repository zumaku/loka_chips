
import style from "../styles"
import { gallerys } from "../constants"

const Gallery = () => {

  return (
    <div className={`${style.paddingX} w-full`}>
      <div className="max-w-[1300px] mx-auto text-center">
        <h1 className={`${style.heading2} mb-20`}>Galeri</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:grid-rows-4">
          {gallerys.map((gallery) => (
            <a
              key={gallery.id}
              href={gallery.link}
              className={`
                ${gallery.id === "gallery1" ? "col-span-2 sm:col-span-2 sm:row-span-2" : ""} 
                ${gallery.id === "gallery4" ? "col-span-2 relative" : ""}
                group hover:cursor-pointer overflow-hidden
              `}
              target="blank"
            >
              {gallery.id === "gallery4" ? playIcon() : ""}
              <img src={gallery.img} className={`w-full ${gallery.id === "gallery4" ? "" : "group-hover:scale-110"} transition-all ease-out duration-500 overflow-hidden bg-red-200`} alt={gallery.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  function playIcon() {
    return <div className="absolute w-full h-full flex justify-center items-center group-hover:scale-150 transition-all ease-out duration-500">
      <svg className="absolute" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="42" cy="42" r="42" fill="#FFC727" />
        <path d="M60.0041 38.0564C62.6691 39.5989 62.6648 43.4479 59.9964 44.9846L35.2306 59.2466C32.5623 60.7832 29.2311 58.8551 29.2345 55.7759L29.2661 27.197C29.2695 24.1178 32.6049 22.197 35.2699 23.7396L60.0041 38.0564Z" fill="#341D12" />
      </svg>
    </div>;
  }
}

export default Gallery;