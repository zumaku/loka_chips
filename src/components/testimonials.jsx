import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import style from "../styles"
import { testimonials } from "../constants"

const Testimonials = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1700, min: 1200 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1200, min: 930 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 930, min: 620 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 620, min: 0 },
      items: 1
    }
  };

  return (
    <div className={`w-full py-20`}>
      <h1 className={`${style.heading1} text-center`}>Apa Kata Mereka</h1>
      <Carousel
        className="h-[500px] max-w-[1500px] mx-auto"
        responsive={responsive}
        showDots={true}
        infinite={true}
        draggable={false}
      >
        {testimonials.map((testimoni) => {
          return (
            <div className="p-6 bg-primary text-center w-11/12 rounded-xl border-4 border-b-8 border-r-8 border-secondary mx-auto" key={testimoni.id}>
              <p className={`${style.paragraph} mb-6`}>{testimoni.content}</p>
              <p className="font-bold">{testimoni.by}, {testimoni.an}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Testimonials;