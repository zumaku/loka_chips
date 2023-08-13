import style from "./styles"
import { Navbar, Home, Product } from "./components"

function App() {
  return (
    <div className="w-full overflow-hidden text-[18px] font-poppins h-fit">
      
      <Navbar />

      <div className={`${style.paddingX} w-full h-fit sl:h-screen bg-primary text-txtcolor`}>
        <Home />
      </div>

      <div className={`${style.paddingX}  py-10 w-full h-fit bg-primary text-txtcolor overflow-hidden`}>
        <Product />
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      Halo

      <div className="max-w-[1160px]">
      </div>
    </div>
  )
}

export default App
