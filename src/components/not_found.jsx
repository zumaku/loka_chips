import style from "../styles"
import { not_found } from "../assets"

const NotFound = () => {
    return (
        <div className={`${style.paddingX} py-10 max-w-[1300px] mx-auto flex flex-col justify-center items-center`}>
            <h1 className={`${style.headingS} text-4xl sm:text-5xl md:text-6xl text-center mb-5`}>Not Found!</h1>
            <p className={`${style.paragraph} text-center mb-10`}>Sorry.. Halaman ini tidak ada. Seperti halnya cintanya padamu hehe..</p>
            <img src={not_found} className="w-full max-w-[550px] sm:w-3/4 lg:w-1/2 mb-2" alt="Not Found" />
            <a className="text-base text-center hover:underline mb-10" href="http://www.freepik.com">Designed by stories / Freepik</a>
            <a className={`${style.btnYellow} block`} href="/">Kembali ke Home</a>
        </div>
    );
}

export default NotFound;