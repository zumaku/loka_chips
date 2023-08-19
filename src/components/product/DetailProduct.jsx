import { useEffect, useRef } from "react"
import gsap, {Back, Power4} from "gsap"
import style from "../../styles"

const DetailProduct = (props) => {
    const container = useRef(null)
    const title = useRef(null)
    const subTitle = useRef(null)
    const paragraph1 = useRef(null)
    const paragraph2 = useRef(null)
    const btn = useRef(null)
    const img = useRef(null)

    const detailTl = gsap.timeline({defaults:{duration:1, ease:Back.easeOut}})
    
    useEffect(()=>{
        if(props.isDetailActive){
            detailTl.to(container.current, {opacity: 1, y: 0, ease:Power4.easeOut})
                    .to(title.current, {opacity: 1, x: 0, ease:Power4.easeOut})
                    .to(subTitle.current, {opacity: 1, ease:Power4.easeOut})
                    .to(img.current, {scale:1, ease:Back.easeOut}, "-=1.5")
                    .to(paragraph1.current, {y:0, opacity:1}, "-=.8")
                    .to(paragraph2.current, {y:0, opacity:1}, "-=.8")
                    .to(btn.current, {scale:1, duration:1}, "-=1")
        } else{
            detailTl.to(container.current, {opacity: 0, y: "100%"})
        }
    }, [props.isDetailActive])

    const setTitleColor = () => {
        if (props.product.id === "chocholate") return "text-chocholate"
        else if (props.product.id === "balado") return "text-balado"
        else return "text-primary"
    }

    return(
        <div
            ref={container}
            className="absolute top-0 left-0 right-0 bottom-0 bg-white overflow-y-scroll w-full z-30 flex translate-y-full opacity-full"
        >
            <div className={`max-w-[1300px] m-auto p-6 flex flex-col sm:flex-row sm:py-10 lg:py-18 w-full ${style.paddingX}`}>
                <div className="mb-10 sm:mr-6 max-w-xl">
                    <h1
                        ref={title}
                        className={`${style.heading1} mb-4 opacity-0 -translate-x-10`}
                    >
                        Varian 
                        <span
                            ref={subTitle}
                            className={`${setTitleColor()} opacity-50 overflow-hidden`}
                        > {props.product.title}</span>
                    </h1>
                    <p
                        ref={paragraph1}
                        className={`${style.paragraph} mb-6 translate-y-10 opacity-0`}
                    >{props.product.detail.desc1}</p>
                    <p
                        ref={paragraph2}
                        className={`${style.paragraph} mb-6 lg:mb-10 translate-y-10 opacity-0`}
                    >{props.product.detail.desc2}</p>
                    <button
                        ref={btn}
                        className={`${style.btnChocolate} scale-0 hover:cursor-pointer`}
                        onClick={() => props.setIsDetailActive(false)}
                    >Kembali</button>
                </div>
                <img ref={img} className="w-1/2 sm:w-1/3 lg:w-72 m-auto scale-0" src={props.product.detail.img} alt="" />
            </div>
        </div>
    )
}

export default DetailProduct