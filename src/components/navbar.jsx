import { useState } from "react"
import gsap from "gsap"
import {logo} from "../assets"
import {navLinks} from "../constants"
import style from "../styles";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    if(!toggle){
      gsap.to('.lclose1', {duration:.8, width:'30.8492'})
      gsap.to('.lclose2', {duration:.8, width:'30.8492'})
      gsap.to('.lmenu1', {duration:.8, x:'100%'})
      gsap.to('.lmenu2', {duration:.8, x:'120%'})
      gsap.to('.lmenu3', {duration:.4, x:'100%'})
    } else{
      gsap.to('.lclose1', {duration:.7, width:0})
      gsap.to('.lclose2', {duration:.7, width:0})
      gsap.to('.lmenu1', {duration:1, x:0})
      gsap.to('.lmenu2', {duration:.8, x:0})
      gsap.to('.lmenu3', {duration:1.4, x:0})
    }
    setToggle(() => !toggle)
  }

  return (
    <nav className="flex justify-between items-center">
      <div className="max-w-[141px] w-24">
        <a href="/"><img src={logo} alt="Loka Chips Logo" /></a>
      </div>
      
      <ul className="hidden sm:flex">{
        navLinks.map((nav, index)=>(
          <li
            key={nav.id}
            className={`
              ${index == navLinks.length - 1 ? 'mr-0' : 'mr-8'}
              mr-10 group 
            `}
          >
            <a className={`${style.navbar}`} href={nav.link}>{nav.title}</a>
            <div className="bg-secondary h-1 w-0 group-hover:w-3/4 transition-all duration-150"></div>
          </li>
        ))
      }</ul>

      <div className="flex sm:hidden w-6 h-6 relative">
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
    </nav>
  );
  
}

export default Navbar;