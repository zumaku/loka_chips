import style from "./styles"
import { Navbar } from "./components"

function App() {
  return (
    <div className="w-full overflow-hidden text-[18px] font-poppins">
      <div className={`${style.paddingX} bg-primary fixed w-full`}>
        <div className="max-w-[1160px] py-3 sm:py-4 m-auto">
          <Navbar />
          {/* <Home /> */}
        </div>
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
