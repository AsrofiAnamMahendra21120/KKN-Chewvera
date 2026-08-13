document.addEventListener("DOMContentLoaded", function () {
    // Inisialisasi AOS dengan animasi berulang (bisa ke bawah dan ke atas)
    AOS.init({ 
        once: false,   // Animasi akan berulang setiap kali elemen dilewati
        mirror: true,  // Animasi terpicu kembali saat scroll ke atas
        offset: 80,    // Jarak piksel sebelum animasi mulai
        duration: 800  // Kecepatan animasi dalam milidetik
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Efek menu otomatis aktif saat di-scroll
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 250) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
    
    // Auto tutup menu hamburger di HP setelah diklik
    const navBar = document.querySelector(".navbar-collapse");
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(navBar.classList.contains('show')) {
                var bsCollapse = new bootstrap.Collapse(navBar);
                bsCollapse.hide();
            }
        });
    });
});