import { useEffect, useState, useRef } from "react";
import gsap, {Power4, Back} from "gsap/all";

import style from "../styles"

const Contact = () => {

  const desc = useRef(null)
  const form = useRef(null)

  const [text, setText] = useState('');

  const adjustTextareaHeight = () => {
    const textarea = document.getElementById('pesan');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [text]);

  useEffect(() => {
    gsap.to(desc.current, {
      y: 0,
      opacity: 1,
      ease: Power4.easeInOut,
      duration: .5,
      scrollTrigger: {
        trigger: desc.current,
        start: "-180px 80%",
      }
    })

    const tl = gsap.timeline({
      defaults:{
        ease: Power4.easeIn,
        duration: .3
      },
      scrollTrigger: {
        trigger: desc.current,
        start: "top 90%"
      }
    })
    tl.to(form.current.querySelector("#nama"), {opacity: 1, y: 0})
      .to(form.current.querySelector("#nama"), {width: "100%"})
      .to(form.current.querySelector("#email"), {opacity: 1, y: 0}, "-=.1")
      .to(form.current.querySelector("#email"), {width: "100%"})
      .to(form.current.querySelector("#pesan"), {opacity: 1, y: 0}, "-=.3")
      .to(form.current.querySelector("#pesan"), {width: "100%"})
      .to(".label", {duration: .8, ease: Power4.easeOut, opacity: 1, x: 0})

  }, [])

  return (
    <div className={`${style.paddingX} py-20 text-center`}>
      <h1 className={`${style.heading1} mb-10`}>Kontak Kami</h1>
      <p
        ref={desc}
        className={`${style.paragraph} max-w-3xl mx-auto mb-20 translate-y-52 opacity-0`}
      >Jika Anda memiliki saran atau masukan untuk meningkatkan pengalaman dengan Loka Chips, jangan ragu untuk mengirimkan pesan. Kami sangat antusias untuk mendengar pandangan Anda dan terus mengembangkan produk kami untuk kepuasan Anda.</p>
      <form
        ref={form}
        className="max-w-4xl mx-auto flex flex-col items-center"
        action=""
        autoComplete="off"
      >
        <label className={`${style.heading3} w-full text-start mb-2 label -translate-x-20 opacity-0`} htmlFor="name">Nama</label>
        <input className={`${style.input} -translate-y-28 opacity-0 w-28`} type="text" id="nama" required />
        
        <label className={`${style.heading3} w-full text-start mb-2 label -translate-x-20 opacity-0`} htmlFor="email">Email</label>
        <input className={`${style.input} -translate-y-28 opacity-0 w-28`} type="email" id="email" required />

        <label className={`${style.heading3} w-full text-start mb-2 label -translate-x-20 opacity-0`} htmlFor="pesan">Pesan</label>
        <textarea
          className={`${style.input} resize-none w-28 overflow-hidden -translate-y-28 opacity-0`}
          id="pesan"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button className={`${style.btnYellow} self-start`}>Kirim</button>
      </form>
    </div>
  );
}

export default Contact;