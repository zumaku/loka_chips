import { useState, useEffect } from "react"
import gsap, {Power4} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import useScrollBlock from "../custonhooks/useScrollBlock"
import {logo} from "../assets"
import {navLinks} from "../constants"
import style from "../styles";

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [blockScroll, allowScroll] = useScrollBlock()
  const tl = gsap.timeline({ease: Power4.easeOut})

  useEffect(()=>{
    const showNav = gsap.to('.navContainer', {
      y:-100,
      duration:.7,
      delay: .3,
      ease:Power4.easeInOut
    })

    showNav.pause()
    
    ScrollTrigger.create({
      start: "top top",
      onUpdate: (self) => {
        self.direction === +1 ? showNav.play() : showNav.reverse()
      }
    });
  }, [])

  const handleToggle = () => {
    if(!toggle){
      gsap.to('.lclose1', {duration:.8, width:'30.8492'})
      gsap.to('.lclose2', {duration:.8, width:'30.8492'})
      gsap.to('.lmenu1', {duration:.8, x:'100%'})
      gsap.to('.lmenu2', {duration:.8, x:'120%'})
      gsap.to('.lmenu3', {duration:.4, x:'100%'})
      tl.fromTo('.mobileMenu', {borderRadius:'100%'}, {borderRadius:0, y:0, duration:.5})
      navLinks.map((nav)=>{
        tl.fromTo("#nav-" + nav.id, {opacity:0, y:'20px'}, {duration:.3, opacity:1, y:0})
      })
      blockScroll()
    } else{
      gsap.to('.lclose1', {duration:.7, width:0})
      gsap.to('.lclose2', {duration:.7, width:0})
      gsap.to('.lmenu1', {duration:1, x:0})
      gsap.to('.lmenu2', {duration:.8, x:0})
      gsap.to('.lmenu3', {duration:1.4, x:0})
      tl.to(".nav-item", {opacity:0, y:'20px', duration:.3})
      .to('.mobileMenu', {borderRadius:'6%',y:'-100%', duration:.5})
      allowScroll()
    }
    setToggle(() => !toggle)
  }

  return (
    <div className={`${style.paddingX} fixed w-full bg-primary navContainer z-40`} id="navbar-container">
      <nav className="flex justify-between items-center relative max-w-[1300px] py-3 sm:py-4 m-auto">
        <div className="w-24 z-10 max-w-7xl">
          <a href="/"><img src={logo} alt="Loka Chips Logo" /></a>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex">{
          navLinks.map((nav, index)=>(
            <li
              key={nav.id}
              className={`
                ${index == navLinks.length - 1 ? 'mr-0' : 'mr-8'}
                group
              `}
            >
              <a className={`${style.navbar}`} href={nav.link}>{nav.title}</a>
              <div className="bg-secondary h-1 w-0 group-hover:w-3/4 transition-all duration-200"></div>
            </li>
          ))
        }</ul>

        {/* Hamburger Menu */}
        <div className="flex md:hidden w-6 h-6 relative z-10">
          {/* Toggle */}
          <div className="toggle w-full h-full cursor-pointer absolute z-20" onClick={handleToggle}></div>

          {/* Close Icon */}
          <svg className="close w-full h-full absolute z-10"viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className="lclose1" x="0.101562" y="22.7291" height="3.85615" rx="1" transform="rotate(-45 0.101562 22.7291)" fill="#341D12"/>
            <rect className="lclose2" x="3.72656" y="1" height="3.85615" rx="1" transform="rotate(45 3.72656 1)" fill="#341D12"/>
          </svg>

          {/* Humb Icon */}
          <svg className="menu w-full h-full" width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className="lmenu1" width="32" height="4" rx="1" fill="#341D12"/>
            <rect className="lmenu2" x="6" y="10" width="26" height="4" rx="1" fill="#341D12"/>
            <rect className="lmenu3" y="20" width="32" height="4" rx="1" fill="#341D12"/>
          </svg>
        </div>

        {/* Mobile Menu */}
        {/*Aku pikir untuk menggunakan layout ini untuk mobile navbarnya,
          tapi aku tidak yakin dengan user experiens nya.
          Soalnya, saat user mengklik humb menunya, itu di pojok kanan atas,
          sedangkan nav itemnya akan muncul di sudut kiri bawah.
        */}
        <ul className="mobileMenu -translate-y-[300%] h-screen md:hidden pl-5 pb-8 flex flex-col justify-end absolute bg-primary top-0 -left-6 w-screen">{
            navLinks.map((nav, index)=>(
              <li
                key={nav.id}
                className={`
                  ${index == navLinks.length - 1 ? 'mb-0' : 'mb-3'}
                  nav-item ml-3 group w-fit font-gsub text-[35px] uppercase
                `}
                id={'nav-' + nav.id}
              >
                <a className={`${style.navbar}`} href={nav.link}>{nav.title}</a>
                <div className="bg-secondary h-1 w-0 group-hover:w-3/4 transition-all duration-200"></div>
              </li>
            ))
          }</ul>
      </nav>
    </div>
  );
  
}

export default Navbar;