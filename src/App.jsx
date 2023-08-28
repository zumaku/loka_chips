import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom"
import { Navbar, Home, Product, Tips, Banner, Testimonials, Gallery, CTA, Contact, Footer, NotFound } from "./components"

function App() {

  return (
    <Router>
      <div className="w-full overflow-hidden text-[18px] font-poppins h-fit">
        <Switch>
          <Route exact path="/">
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
          </Route>
          <Route path="*">
              <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
