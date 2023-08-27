import { useEffect, useState, useRef } from "react"
import gsap, { Power4 } from "gsap/all"

import style from "../styles"

const Contact = () => {
    const desc = useRef(null)
    const form = useRef(null)

    const [namaValue, setNamaValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [pesanValue, setPesanValue] = useState("")
    const adjustTextareaHeight = () => {
        const textarea = document.getElementById("pesan")
        textarea.style.height = "auto"
        textarea.style.height = textarea.scrollHeight + "px"
    }

    useEffect(() => {
        adjustTextareaHeight()
    }, [pesanValue])

    useEffect(() => {
        gsap.to(desc.current, {
            y: 0,
            opacity: 1,
            ease: Power4.easeInOut,
            duration: 0.5,
            scrollTrigger: {
                trigger: desc.current,
                start: "-180px 80%",
            },
        })

        const tl = gsap.timeline({
            defaults: {
                ease: Power4.easeIn,
                duration: 0.3,
            },
            scrollTrigger: {
                trigger: desc.current,
                start: "top 90%",
            },
        })
        tl.to(form.current.querySelector("#nama"), { opacity: 1, y: 0 })
            .to(form.current.querySelector("#nama"), { width: "100%" })
            .to(
                form.current.querySelector("#email"),
                { opacity: 1, y: 0 },
                "-=.2"
            )
            .to(form.current.querySelector("#email"), { width: "100%" })
            .to(
                form.current.querySelector("#pesan"),
                { opacity: 1, y: 0 },
                "-=.4"
            )
            .to(form.current.querySelector("#pesan"), { width: "100%" })
            .to(".label", {
                duration: 0.8,
                ease: Power4.easeOut,
                opacity: 1,
                x: 0,
            })
    }, [])

    const [isSending, setIsSending] = useState(false)
    const [isSendSuccess, setIsSendSuccess] = useState(null)
    const scriptURL = import.meta.env.VITE_CONTACT_FORM_SHEEDS

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSending(true)

        try {
            const form = e.target
            const formData = new FormData(form)

            const response = await fetch(scriptURL, {
                method: "POST",
                body: formData,
            })

            setIsSendSuccess(true)
            console.log("Success!", response)
        } catch (error) {
            setIsSendSuccess(false)
            console.error("Error!", error.message)
        }

        setNamaValue("")
        setEmailValue("")
        setPesanValue("")
        setIsSending(false)
    }

    return (
        <div className={`${style.paddingX} py-20 text-center`} id="kontak">
            <h1 className={`${style.heading1} mb-10`}>Kontak Kami</h1>
            <p
                ref={desc}
                className={`${style.paragraph} max-w-3xl mx-auto mb-20 translate-y-52 opacity-0`}
            >
                Jika Anda memiliki saran atau masukan untuk meningkatkan
                pengalaman dengan Loka Chips, jangan ragu untuk mengirimkan
                pesan. Kami sangat antusias untuk mendengar pandangan Anda dan
                terus mengembangkan produk kami untuk kepuasan Anda.
            </p>

            {isSendSuccess !== null ? (
                <div
                    className={`${
                        isSendSuccess
                            ? "bg-primaryHalf border-primary"
                            : "bg-baladoHalf border-balado"
                    } border-t-4 rounded-b text-secondary px-4 py-3 shadow-md flex justify-between items-center mb-8 relative`}
                >
                    <div className="flex items-center">
                        <p className="font-bold mr-4">
                            {isSendSuccess ? "Yoos!" : "Oh Noo!"}
                        </p>
                        <p className="text-sm">
                            {isSendSuccess
                                ? "Pesan Berhasil Dikirim"
                                : "Pesan Tidak Dapat Dikirim"}
                        </p>
                    </div>
                    <div onClick={() => setIsSendSuccess(null)}>
                        <svg
                            className="fill-current h-6 w-6"
                            role="button"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                        </svg>
                    </div>
                </div>
            ) : null}

            <form
                ref={form}
                className="max-w-4xl mx-auto flex flex-col items-center"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <label
                    className={`${style.heading3} w-full text-start mb-2 label -translate-x-20 opacity-0`}
                    htmlFor="name"
                >
                    Nama
                </label>
                <input
                    className={`${style.input} -translate-y-28 opacity-0 w-2 ${
                        isSending === true
                            ? "hover:cursor-not-allowed bg-white"
                            : ""
                    }`}
                    type="text"
                    id="nama"
                    name="nama"
                    value={namaValue}
                    onChange={(e) => setNamaValue(e.target.value)}
                    disabled={isSending === true}
                    required
                />

                <label
                    className={`${style.heading3} w-full text-start mb-2 label -translate-x-20 opacity-0`}
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    className={`${style.input} -translate-y-28 opacity-0 w-2 ${
                        isSending === true
                            ? "hover:cursor-not-allowed bg-white"
                            : ""
                    }`}
                    type="email"
                    id="email"
                    name="email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    disabled={isSending === true}
                    required
                />

                <label
                    className={`${style.heading3} w-full text-start mb-2 label -translate-x-20 opacity-0`}
                    htmlFor="pesan"
                >
                    Pesan
                </label>
                <textarea
                    className={`${
                        style.input
                    } resize-none w-2 overflow-hidden -translate-y-28 opacity-0 ${
                        isSending === true
                            ? "hover:cursor-not-allowed bg-white"
                            : ""
                    }`}
                    id="pesan"
                    name="pesan"
                    value={pesanValue}
                    onChange={(e) => setPesanValue(e.target.value)}
                    disabled={isSending === true}
                    required
                ></textarea>
                {isSending === true ? (
                    <button
                        type="submit"
                        className={`${style.btnSending} self-start flex justify-center items-center`}
                        disabled
                    >
                        <div className="w-5 mr-2 animate-spin">
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 111.35 69.66"
                            >
                                <path
                                    fill="#fff"
                                    stroke="#341d11"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                    d="M493,414.8a50.68,50.68,0,0,1-101.35,0c0-28,22.68,18.34,50.67,18.34S493,386.81,493,414.8Z"
                                    transform="translate(-386.64 -400.81)"
                                />
                            </svg>
                        </div>
                        Mengirim
                    </button>
                ) : (
                    <button
                        type="submit"
                        className={`${style.btnYellow} self-start`}
                    >
                        Kirim
                    </button>
                )}
            </form>
        </div>
    )
}

export default Contact
