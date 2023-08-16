import { useEffect } from "react"
import gsap, {Back, Power4} from "gsap"
import style from "../../styles"


const DetailProduct = (props) => {
    const product = props.product

    useEffect(()=>{

    }, [])

    // Mengirim nilai null kembali
    const sendObject = () => {
        props.handleDetailActive(null)
    }

    const settitleColor = () => {
        if(product.id === "original") return "text-primary"
        else if(product.id === "chocholate") return "text-chocholate"
        else if(product.id === "balado") return "text-balado"
        else return "text-black"
    }

    return(
        <div className="w-full h-full absolute top-0 shadow-xl z-30 transition-all bg-white">
            <div className="max-w-[1300px p-6 flex flex-col sm:flex-row justify-between items-end sm:items-start">
                <div className="sm:w-2/3 sm:mr-5">
                    <h1 className={`${style.heading1 } mb-6`}>
                        Varian
                        <span className={settitleColor()}> {product.title}</span>
                    </h1>
                    <p className={`${style.paragraph}`}>{product.detail.desc}</p>
                    <button className={`${style.btnChocolate}`} onClick={sendObject}>Kembali</button>
                </div>
                <div className="w-40 ss:w-48 sm:w-1/2 ">
                    <img className="m-auto drop-shadow-lg" src={product.detail.img} alt={`Loka Chips ${product.title}`} />
                </div>
            </div>
        </div>
    )
}

export default DetailProduct