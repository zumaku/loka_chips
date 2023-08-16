import { original1, original2, chocholate1, chocholate2, balado1, balado2, enjoy1, enjoy2, enjoy3, gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, location, email, world, instagram, whatsapp } from "../assets";

export const navLinks = [
    {
        id: "home",
        title: "Home",
        link: "#"
    },
    {
        id: "produk",
        title: "Produk",
        link: "#produk"
    },
    {
        id: "testimoni",
        title: "Testimoni",
        link: "#testimoni"
    },
    {
        id: "galeri",
        title: "Galeri",
        link: "#galeri"
    },
    {
        id: "kontak",
        title: "Kontak",
        link: "#kontak"
    },
];

export const produks = [
    {
        id: "original",
        title: "Original",
        tagline: "Rasa Asli dan Autentik, Kerenyahan Pisang Sejati",
        img: original1,
        detail: {
            desc:
                "Loka Chips Rasa Original, pilihan utama pencinta kerupuk yang menghargai kesederhanaan rasa. Terbuat dari pisang pilihan Selayar yang diolah hati-hati, setiap kerupuk hadir dengan cita rasa autentik pisang segar yang sulit ditolak. Tanpa campuran apa pun, Loka Chips Rasa Original memberikan pengalaman kerupuk pisang murni, menawarkan kelezatan Selayar dalam bentuk sederhana namun memikat. Cocok untuk segala kesempatan, menjadi teman setia mereka yang mencari cita rasa pisang otentik dan khas dalam setiap gigitan.",
            img: original2
        }
    },
    {
        id: "chocholate",
        title: "Chocolate",
        tagline: "Manisnya Kelezatan dengan Sentuhan Coklat",
        img: chocholate1,
        detail: {
            desc:
                "Loka Chips Rasa Coklat mengajakmu merasakan kelezatan manis yang memikat, memadukan kerupuk renyah dengan coklat yang menggoda. Rasakan perpaduan kekenyalan pisang Selayar dan sensasi coklat lezat yang melumer di mulutmu. Dengan coklat cair yang memeluk setiap kerupuk, Loka Chips Rasa Coklat cocok dinikmati sendiri atau dibagikan, membawa manisnya kelezatan dalam setiap momen. Terhanyut dalam kelezatan manis dan renyah yang tak tertandingi, setiap gigitan membawamu pada perjalanan rasa yang memikat dan menggugah selera.",
            img: chocholate2
        }
    },
    {
        id: "balado",
        title: "Balado",
        tagline: "Gelora Pedas Berpadu dengan Kenikmatan Pisang",
        img: balado1,
        detail: {
            desc:
                "Loka Chips Rasa Balado mengajakmu merasakan petualangan pedas yang menggairahkan. Terbuat dengan bubuk balado pilihan, produk ini menggabungkan keunikan pisang Selayar dengan sentuhan pedas. Setiap gigitan kerupuk renyah dihiasi lapisan rasa balado yang membara, memadukan kelezatan pisang dan kegilaan pedas. Cocok bagi pecinta pedas atau yang ingin mencoba hal baru, Loka Chips Rasa Balado adalah pilihan tepat. Rasakan sensasi pedas dan kenikmatan pisang dalam setiap gigitan, biarkan rasa balado ini memanjakan lidahmu dalam petualangan rasa yang menggetarkan.",
            img: balado2
        }
    },
];

export const enjoy = [
    {
        id: "enjoy1",
        img: enjoy1,
        title: "Teman Belajar",
        content:
            "Tingkatkan fokus dan kreativitasmu bersama Loka Chips. Cemilan yang cocok menemani saat belajar dan mengerjakan tugas."
    },
    {
        id: "enjoy2",
        img: enjoy2,
        title: "Kumpul Bersama",
        content:
            "Jadikan saat-saat berbagi dengan orang terkasih lebih istimewa bersama Loka Chips. Nikmati kelezatan yang menggoda saat tertawa dan berbagi cerita bersama."
    },
    {
        id: "enjoy3",
        img: enjoy3,
        title: "Saat Bekerja",
        content:
            "Bawa semangat pada pekerjaanmu bersama Loka Chips. Kerenyahannya  membuat waktu produktifmu semakin berharga."
    },
];

export const testimonials = [
    {
        id: "testi1",
        by: "Indra S.",
        an: "Mahasiswa Teknik Informatika",
        content:
            "Loka Chips adalah teman setia saat sesi belajarku. Rasanya yang autentik dan renyah membantu menghilangkan kejenuhan. Dengan Loka Chips, aku merasa lebih termotivasi untuk menyelesaikan tugas-tugas kuliahku."
    },
    {
        id: "testi2",
        by: "Prof. Anita W.",
        an: "Dosen Matematika",
        content:
            "Sebagai seorang dosen, saya mengapresiasi Loka Chips sebagai pilihan cemilan yang sehat dan lezat bagi mahasiswa. Saya sering melihat mahasiswa saya membawa Loka Chips saat kelas atau konsultasi. Produk ini memberikan kelezatan dan energi yang dibutuhkan."
    },
    {
        id: "testi3",
        by: "Dara M.",
        an: "Mahasiswa Desain Grafis",
        content:
            "Bersantai dengan teman-teman jadi lebih seru dengan Loka Chips. Rasanya yang unik dan praktisnya membuat kami jadi ketagihan. Bukan hanya cemilan biasa, tapi juga teman akrab di setiap momen berbagi."
    },
    {
        id: "testi4",
        by: "Adi K.",
        an: "Konsultan Keuangan",
        content:
            "Loka Chips adalah pilihan sempurna untuk membantu saya tetap produktif di tengah jadwal yang padat. Rasanya yang autentik dan teksturnya yang renyah memberikan kepuasan luar biasa saat bekerja."
    },
    {
        id: "testi5",
        by: "Rina P",
        an: "Pecinta Pedas",
        content:
            "Saya seorang pecinta pedas sejati, dan Loka Chips Rasa Balado adalah jawaban atas keinginan saya. Pedasnya pas dan nikmat, dengan sentuhan pisang Selayar yang unik. Sungguh pilihan cemilan yang tepat!"
    },
];

export const gallerys = [
    {
        id: "gallery1",
        img: gallery1,
        alt: "Loka Chips Image",
        link: "https://www.instagram.com/keripikpisangslyr/"
    },
    {
        id: "gallery2",
        img: gallery2,
        alt: "Loka Chips Image",
        link: "https://www.instagram.com/keripikpisangslyr/"
    },
    {
        id: "gallery3",
        img: gallery3,
        alt: "Loka Chips Image",
        link: "https://www.instagram.com/keripikpisangslyr/"
    },
    {
        id: "gallery4",
        img: gallery4,
        alt: "Loka Chips Image",
        link: "https://www.instagram.com/keripikpisangslyr/"
    },
    {
        id: "gallery5",
        img: gallery5,
        alt: "Loka Chips Image",
        link: "https://www.instagram.com/keripikpisangslyr/"
    },
    {
        id: "gallery6",
        img: gallery6,
        alt: "Loka Chips Image",
        link: "https://www.instagram.com/keripikpisangslyr/"
    },
    {
        id: "gallery7",
        img: gallery7,
        alt: "Loka Chips Image",
        link: "https://www.instagram.com/keripikpisangslyr/"
    },
    {
        id: "gallery8",
        img: gallery8,
        alt: "Loka Chips Image",
        link: "https://www.instagram.com/keripikpisangslyr/"
    },
    {
        id: "gallery9",
        img: gallery9,
        alt: "Loka Chips Image",
        link: "https://www.instagram.com/keripikpisangslyr/"
    },
];

export const footer = [
    {
        id: "location",
        icon: location,
        content: "Samata, Gowa. Indonesia.",
        link: "https://www.google.com/maps/place/Samata,+Somba+Opu,+Gowa+Regency,+South+Sulawesi/@-5.1962145,119.5008564,14z/data=!3m1!4b1!4m6!3m5!1s0x2dbee3f25e9a8bb9:0x139ad8e6521423fe!8m2!3d-5.1958966!4d119.5020698!16s%2Fg%2F1hc0hkl6r?entry=ttu"
    },
    {
        id: "email",
        icon: email,
        content: "lokachips@gmail.com",
        link: "#"
    },
    {
        id: "website",
        icon: world,
        content: "lokachips.netlify.com",
        link: "#"
    },
    {
        id: "instagram",
        icon: instagram,
        content: "lokachips.netlify.com",
        link: "https://www.instagram.com/keripikpisangslyr/"
    },
    {
        id: "whatsapp",
        icon: whatsapp,
        content: "+62 822-1677-4837",
        link: "#"
    },
];