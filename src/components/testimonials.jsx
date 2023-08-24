import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import style from "../styles"
import { testimonials } from "../constants"

const Testimonials = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1700, min: 1060 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1060, min: 930 },
      items: 1
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
    <div className={`w-full py-20`} id="testimoni">
      <h1 className={`${style.heading1} text-center`}>Apa Kata Mereka</h1>
      <Carousel
        className="h-fit py-20 sl:h-[500px] max-w-[1500px] mx-auto"
        responsive={responsive}
        showDots={true}
        infinite={true}
        draggable={false}
      >
        {testimonials.map((testimoni) => {
          return (
            <div
              key={testimoni.id}
              className="flex flex-col sl:flex-row w-5/6 rounded-xl border-4 border-b-8 border-r-8 border-secondary mx-auto relative"
            >
              <div className="lg:w-2/3 sl:w-9/12 p-6 sl:p-8 flex flex-col justify-center text-center sl:text-start">
                <p className={`${style.paragraph} mb-10`}>{testimoni.content}</p>
                <p className="font-bold text-accent">{testimoni.by}</p>
                <p className="text-base text-gray-400">{testimoni.an}</p>
              </div>
              <div  className="lg:w-1/3 flex items-end justify-center">
                <img src={testimoni.img} alt="Image Testimonials" />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Testimonials;