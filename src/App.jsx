import { Navbar, Home, Product, Tips, Banner, Testimonials } from "./components"

function App() {

  return (
    <div className="w-full overflow-hidden text-[18px] font-poppins h-fit">
      <Navbar />
      <Home />
      <Product />
      <Tips />
      <Banner />
      <Testimonials />

      <br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div className="h-screen min-w-full bg-secondary flex flex-col justify-center items-center text-white">
        <h1 className="font-bold text-3xl text-center mb-4">Situs ini masih dalam pengembangan!</h1>
        <p>Harap Bersabar.</p>
      </div>

    </div>
  )
}

export default App
