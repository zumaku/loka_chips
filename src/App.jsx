// import { Navbar, Home, Product, Tips, Banner, Testimonials, Gallery, Cta, Contact, Footer } from "./components"
// import {Navbar} from "./components/navbar"
import style from "./styles"

function App() {
  return (
    <div className="my-[100px] mx-[100px]">
      <div className="font-bold w-fit px-8 py-[18px] rounded-md bg-primary hover:drop-shadow-[0_4px_20px_rgba(240,201,26,.5)] hover:-translate-y-1 transition duration-150 ease-in">Yellow Btn Hovered</div><br />
      <div className="font-bold w-fit px-8 py-[18px] rounded-md bg-secondary text-white hover:-translate-y-1 transition duration-150 ease-in">Chocho Btn</div><br />
      <div className="font-bold w-fit px-8 py-[18px] rounded-md bg-white text-secondary hover:-translate-y-1 transition duration-150 ease-in">White Btn</div><br />
      <div className="font-bold w-fit px-8 py-[18px] rounded-md hover:bg-primary border-collapse text-secondary hover:-translate-y-1 transition duration-150 ease-in border-[3px] border-secondary">Transparant Btn</div><br />
      <div className={`${style.btn_transparant}`}>TRY BTN</div><br />
    </div>
  )
}

export default App
