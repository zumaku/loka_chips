import {useRef, useEffect} from 'react'
import { gsap } from 'gsap'
import style from "./styles"
import { Navbar } from "./components"

function App() {

  const squareRef = useRef(null);
  useEffect(()=>{
    const e = squareRef.current
    gsap.fromTo(e, {rotation: 0}, {rotation: 360, duration: 3})
  }, [])

  return (
    <div className="bg-bgcolor w-full overflow-hidden text-[18px] font-poppins">
      <div className={`${style.paddingX} bg-primary`}>
        <div className="max-w-[1160px] py-3 sm:py-4 m-auto">
          <Navbar />
          {/* <Home /> */}
        </div>
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="square h-[60px] w-[60px] bg-primary"  ref={squareRef}></div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div className="max-w-[1160px]">
      </div>
    </div>
  )
}

export default App
