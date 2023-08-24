import { useState, useEffect, useRef } from 'react'
import gsap, {ScrollTrigger, Power4} from 'gsap/all'
import useScrollBlock from '../custonhooks/useScrollBlock'

import style from '../styles'
import { gallerys } from '../constants'

gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
  
  const [selectedImage, setSelectedImage] = useState(null)
  const [blockScroll, allowScroll] = useScrollBlock()

  const trigRef = useRef(null)

  
  useEffect(() => {
    const tl = gsap.timeline({
      duration: .3,
      ease: Power4.easeOut,
      scrollTrigger:{
        trigger: trigRef.current,
        start: "10px 50%"
      }
    })

    gallerys.map((gallery) => {
      tl.to(".coverFront" + gallery.id, {x: 0}, "-=.3")
    })
    tl.to(".coverBack", {opacity: 0})
    tl.to(".coverFrontAll", {x: "100%"}, "-=.4")
  }, [])

  const openImage = (galleryId) => {
    setSelectedImage(galleryId)
    blockScroll()
  }

  const closeImage = () => {
    setSelectedImage(null)
    allowScroll()
  }

  return (
    <div className={`${style.paddingX} w-full py-20`} id='galeri'>
      <div 
        ref={trigRef}
        className="max-w-[1300px] mx-auto text-center"
      >
        <h1 className={`${style.heading1} mb-20`}>Galeri</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:grid-rows-3">
          {gallerys.map((gallery) => (
            <div
              key={gallery.id}
              onClick={() => openImage(gallery.id)}
              className={`${
                  gallery.id === 'gallery1' ? 'col-span-2 sm:col-span-2 sm:row-span-2' : ''
                } ${
                  gallery.id === 'gallery4' ? 'col-span-2 relative' : ''
                } group hover:cursor-pointer overflow-hidden relative`}
            >
              {gallery.id === 'gallery4' ? playIcon() : ''}
              <img
                src={gallery.thumb}
                alt={gallery.alt}
                className={`w-full ${
                  gallery.id === 'gallery4' ? '' : 'group-hover:scale-110'
                } transition-all ease-out duration-500 overflow-hidden`}
              />
              <div className="coverBack absolute w-full h-full top-0 left-0 bg-gray-200"></div>
              <div className={`${"coverFront" + gallery.id} coverFrontAll absolute w-full h-full top-0 left-0 -translate-x-full bg-primary`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* img preview */}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50 p-10">
          {selectedImage !== "gallery4" ? 
            <img src={gallerys.find((gallery) => gallery.id === selectedImage).preview} alt="" className="max-h-full max-w-full" /> : 
            <>
              <video controls controlsList='nodownload'>
                <source src={gallerys.find((gallery) => gallery.id === selectedImage).preview} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </>
          }
          <div
            className="x w-9 h-9 absolute right-4 top-4 sm:right-7 sm:top-7 hover:cursor-pointer hover:scale-105"
            onClick={closeImage}
          >
            <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
              <path fill='#fff' d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  )

  function playIcon() {
    return (
      <div className="absolute w-full h-full flex justify-center items-center group-hover:scale-150 transition-all ease-out duration-500">
        <svg className="absolute" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="42" cy="42" r="42" fill="#FFC727" />
          <path d="M60.0041 38.0564C62.6691 39.5989 62.6648 43.4479 59.9964 44.9846L35.2306 59.2466C32.5623 60.7832 29.2311 58.8551 29.2345 55.7759L29.2661 27.197C29.2695 24.1178 32.6049 22.197 35.2699 23.7396L60.0041 38.0564Z" fill="#341D12" />
        </svg>
      </div>
    )
  }
}

export default Gallery
