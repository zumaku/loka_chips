import { useEffect, useState } from "react";
import style from "../styles"

const Contact = () => {

  const [text, setText] = useState('');

  const adjustTextareaHeight = () => {
    const textarea = document.getElementById('pesan');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [text]);

  return (
    <div className={`${style.paddingX} py-20 text-center`}>
      <h1 className={`${style.heading1} mb-10`}>Kontak Kami</h1>
      <p className={`${style.paragraph} max-w-3xl mx-auto mb-20`}>Jika Anda memiliki saran atau masukan untuk meningkatkan pengalaman dengan Loka Chips, jangan ragu untuk mengirimkan pesan. Kami sangat antusias untuk mendengar pandangan Anda dan terus mengembangkan produk kami untuk kepuasan Anda.</p>
      <form
        className="max-w-4xl mx-auto flex flex-col items-start"
        action=""
        autoComplete="off"
      >
        <label className={`${style.heading3} mb-2`} htmlFor="name">Nama</label>
        <input className={`${style.input}`} type="text" id="name" required />
        
        <label className={`${style.heading3} mb-2`} htmlFor="email">Email</label>
        <input className={`${style.input}`} type="email" id="email" required />

        <label className={`${style.heading3} mb-2`} htmlFor="pesan">Pesan</label>
        {/* <input className={`${style.input}`} type="text" id="name" /> */}
        <textarea
          className={`${style.input} resize-none overflow-hidden`}
          id="pesan"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button className={style.btnYellow}>Kirim</button>
      </form>
    </div>
  );
}

export default Contact;