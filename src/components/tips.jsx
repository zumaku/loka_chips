import { useEffect, useRef } from "react"
import gsap, { Back } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import style from "../styles"
import { enjoy } from "../constants"

gsap.registerPlugin(ScrollTrigger)

const Tips = () => {
  
  const startAnimating = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      duration: .5,
      ease: Back.easeOut,
      scrollTrigger: {
        trigger: startAnimating.current,
        start: "top 50%"
      }
    })

    enjoy.map((e, index) => {
      tl.to("#" + e.id, {y: "0", opacity: 1}, index === 0 ? "" : "-=.3")
    })
  }, [])

  return (
    <div className={`${style.paddingX} w-full mb-20`}>
      <div className="max-w-[1300px] m-auto flex flex-col items-center">
        <h1
          ref={startAnimating}
          className={`${style.heading2} my-10 sm:my-16`}
        >Enjoy Loka Chips</h1>
        <div className="flex flex-col sl:flex-row items-center justify-between">
          {enjoy.map((tips) => (
            <div
              key={tips.id}
              className={`${
                tips.id === "enjoy2" ? "sl:w-1/3" : "sl:w-1/4"
              } w-full flex flex-col items-center text-center opacity-0 translate-y-10`}
              id={tips.id}
            >
              <img src={tips.img} className="mb-5 sl:mb-12" alt="Enjoy Loka Chips" />
              <h3 className={style.heading3}>{tips.title}</h3>
              <p className={`w-11/12 mb-12 ${style.paragraph}`}>{tips.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tips;