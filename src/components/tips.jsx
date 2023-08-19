import { useEffect, useRef } from "react"
import gsap, { Back } from "gsap"
import style from "../styles"
import { enjoy } from "../constants"

const Tips = () => {
  const tipsRef = useRef(null)

  useEffect(() => {
    gsap.to(tipsRef.current, {
      y:0,
      duration: .8,
      ease: Back.easeOut,
      scrollTrigger: {
        trigger: tipsRef.current,
        start: "-200px 80%"
      }
    })
  }, [])

  return (
    <div className={`${style.paddingX}w-full`}>
      <div className="max-w-[1300px] m-auto flex flex-col items-center">
        <h1 className={`${style.heading2} my-10 sm:my-16`}>Enjoy Loka Chips</h1>
        <div
          ref={tipsRef}
          className="flex flex-col sl:flex-row justify-between translate-y-52"
        >
          {enjoy.map((tips) => (
            <div
              key={tips.id}
              className={`${
                tips.id === "enjoy2" ? "w-1/3" : "w-1/4"
              } flex flex-col items-center text-center`}
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