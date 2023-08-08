// import { Navbar, Home, Product, Tips, Banner, Testimonials, Gallery, Cta, Contact, Footer } from "./components"
// import {Navbar} from "./components/navbar"
import style from "./styles"

function App() {
  return (
    <div className="my-[100px] mx-[100px]">
      <h1 className="text-[64px] font-bold">Heading 1</h1>
      <h2 className="text-4xl font-bold">Heading 2</h2>
      <h3 className="text-lg font-bold">Heading 3</h3>
      <p className={`${style.heading2}`}>Try Heading</p><br />
      <p className="font-gsub text-primary drop-shadow-[3px_3px_0_#341D12] text-stroke-4 text-6xl">SPECIAL </p>
      <p className={`${style.headingS} text-4xl`}>Try SF</p><br /><br />
      <div className="font-bold w-fit px-8 py-[18px] rounded-md bg-primary hover:drop-shadow-[0_4px_20px_rgba(240,201,26,.5)] hover:-translate-y-1 transition duration-150 ease-in">Yellow Btn Hovered</div><br />
      <div className="font-bold w-fit px-8 py-[18px] rounded-md bg-secondary text-white hover:-translate-y-1 transition duration-150 ease-in">Chocho Btn</div><br />
      <div className="font-bold w-fit px-8 py-[18px] rounded-md bg-white text-secondary hover:-translate-y-1 transition duration-150 ease-in">White Btn</div><br />
      <div className="font-bold w-fit px-8 py-[18px] rounded-md hover:bg-primary border-collapse text-secondary hover:-translate-y-1 transition duration-150 ease-in border-[3px] border-secondary">Transparant Btn</div><br />
      <div className={`${style.btnYellow}`}>TRY BTN</div><br />
    </div>
  )
}

export default App
