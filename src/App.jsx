import style from "./styles"
import { Navbar, Home } from "./components"

function App() {
  return (
    <div className="w-full overflow-hidden text-[18px] font-poppins">
      
      <Navbar />

      <div className={`${style.paddingX} w-full h-fit sl:h-screen bg-primary text-txtcolor`}>
        <Home />
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
