import { useRef, useEffect } from "react"
import gsap, {Back, Power4} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from 'split-type'

import style from "../../styles"

gsap.registerPlugin(ScrollTrigger)

const MainProduct = (props) => {

    const imgPdtRef = useRef(null)
    const listRef = useRef(null)
    const ropeRef = useRef(null)
    const taglineRef1 = useRef(null)
    const taglineRef2 = useRef(null)

    useEffect(() => {

        const title = new SplitType("#titleProduct")
        gsap.to(title.chars, {
            duration:.1,
            stagger: .05,
            y:-5,
            scrollTrigger:{
                trigger:".char",
                start:"top 80%"
            }
        })

        // Img1 Products annimation
        gsap.to(imgPdtRef.current, {
            duration:.5,
            opacity:1,
            y:0,
            ease:Back.easeOut,
            scrollTrigger: {
                trigger:imgPdtRef.current,
                start:"top 80%",
            }
        })

        // List on the right section animation
        gsap.to(listRef.current, {
            y:0,
            scrollTrigger: {
                trigger:imgPdtRef.current,
                start:"120px center",
            }
        })
    
        // Tagline Animation
        const tglnTl = gsap.timeline({
            duration:.3,
            ease:Power4.easeOut,
            scrollTrigger:{
            trigger:taglineRef1.current,
            start:"top 90%",
            }
        })
        tglnTl.to(taglineRef1.current, {width:"100%"})
                .to(taglineRef1.current, {x:"100%"})
                .to(taglineRef2.current, {opacity:1})
    
        // Rope shape animation
        const animateSVG = () => {
            const path = ropeRef.current.querySelector("path");
    
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
    
            gsap.to(path, {
            strokeDashoffset: 0,
            duration: 3,
            ease: "power1.out",
            scrollTrigger: {
                trigger: path,
                start: "top 80%",
                end: "bottom center",
                scrub: true,
            },
            });
        };
    
        animateSVG();
    }, [])

    const prevImg = () => {
        props.setCurIndex((prevIndex) => (prevIndex === 0 ? 3 - 1 : prevIndex - 1))
        handleShake(imgPdtRef)
    };

    const nextImg = () => {
        props.setCurIndex((prevIndex) => (prevIndex === 3 - 1 ? 0 : prevIndex + 1))
        handleShake(imgPdtRef)
    };

    const handleShake = (e) => {
        gsap.to(e.current, {
            x: -15,
            duration: 0.05,
            repeat: 5,
            yoyo: true,
            onComplete: () => {
                gsap.set(e.current, { x: 0 }); // Reset the position after shaking
            },
        })
    }

    return(
        <div className={`max-w-[1300px] m-auto py-10`} id="produk">

            <div className="secTitle text-center mb-5">
                <h3 className={`${style.heading2} invertSelection`}>Varian Produk</h3>
                <h1 id="titleProduct" className={`${style.headingS} text-5xl sm:text-[64px] bg-clip-border overflow-hidden`}>{props.product.title}</h1>
            </div>

            <div className="slide1 grid sm:grid-cols-3 grid-cols-1">

                {/* Left */}
                <div className="left sm:pt-20 text-center sm:text-start z-[2]">
                    <div className="tagline mb-8 sm:max-w-sm overflow-hidden relative">
                    <div ref={taglineRef1} className="w-0 h-full bg-yellow-300 absolute"></div>
                    <p ref={taglineRef2} className="opacity-0 invertSelection">{props.product.tagline}</p>
                    </div>
                    <button
                        className={`${style.btnChocolate} mb-10 sm:mb-0`}
                        onClick={() => props.setIsDetailActive(true)}
                    >Lihat Detail</button>
                </div>

                {/* Mid */}
                <div className="mid p-5 flex flex-col justify-center items-center z-[2]">
                    <div
                        ref={imgPdtRef}
                        className="opacity-0 translate-y-28"
                    >
                        <img className="max-w-[247px] mb-10 sm:mb-16 hover:scale-105 transition-all duration-1000 hover:-rotate-1" src={props.product.img} alt="Loka Chips Rasa original" />
                    </div>
                    <div className="arrows w-full flex justify-center items-center">
                    <div
                        className="arrLeft hover:cursor-pointer group"
                        onClick={prevImg}
                    >
                        <svg className={`arrLeft ${style.arrow}`} height="30" viewBox="0 0 91 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.585785 13.5858C-0.195259 14.3668 -0.195259 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585785 13.5858ZM91 13L2 13V17L91 17V13Z" fill="#341D12"/>
                        </svg>
                    </div>
                    <div className="arrCircle mx-6 w-10 h-10 bg-primary rounded-full border-[3px] border-secondary"></div>
                    <div
                        className="arrRight hover:cursor-pointer group"
                        onClick={nextImg}
                    >
                        <svg className={`arrRight ${style.arrow}`} height="30" viewBox="0 0 91 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M90.4142 16.4142C91.1953 15.6332 91.1953 14.3668 90.4142 13.5858L77.6863 0.857864C76.9052 0.0768156 75.6389 0.0768156 74.8579 0.857864C74.0768 1.63891 74.0768 2.90524 74.8579 3.68629L86.1716 15L74.8579 26.3137C74.0768 27.0948 74.0768 28.3611 74.8579 29.1421C75.6389 29.9232 76.9052 29.9232 77.6863 29.1421L90.4142 16.4142ZM0 17H89V13H0V17Z" fill="#341D12"/>
                        </svg>
                    </div>
                    </div>
                </div>

                {/* Right */}
                <div className="right relative flex justify-center items-center z-[2]">
                    <div className="w-fit hidden sm:block sm:absolute md:static bottom-0 lg:static">
                    <svg ref={ropeRef} className="rope_shape" width="127" height="114" viewBox="0 0 127 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125 17.8615C119.352 10.3592 106.053 -2.93804 98.0435 3.89166C88.0311 12.4288 116.528 27.9508 111.137 40.3685C105.745 52.7861 73.3975 10.8766 65.6956 20.9659C57.9937 31.0552 101.894 60.5471 91.1118 72.1887C80.3292 83.8302 25.6459 10.1005 17.944 33.3835C10.2422 56.6666 81.8695 83.8302 63.385 106.337C44.9005 128.844 17.9441 77.6214 1 68.3082" stroke="#341D12" strokeWidth="4" />
                    </svg>
                    </div>
                    <div ref={listRef} className="hidden sm:flex -rotate-90 space-x-6 absolute top-1/4 -right-1/3 translate-y-32">
                    <p>Autentik</p>
                    <p>Renyah</p>
                    <p>Kriuk</p>
                    <p>Pedas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProduct