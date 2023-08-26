import { Navbar, Home, Product, Tips, Banner, Testimonials, Gallery, CTA, Contact, Footer } from "./components"

function App() {

  return (
    <div className="w-full overflow-hidden text-[18px] font-poppins h-fit">
      <Navbar />
      <Home />
      <Product />
      <Tips />
      <Banner />
      <Testimonials />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
