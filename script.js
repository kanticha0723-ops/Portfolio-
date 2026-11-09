
// 1. แสดงข้อความต้อนรับ
window.addEventListener("load", function () {
    console.log("Welcome to my Portfolio!");
});

// 2. เลื่อนหน้าเว็บอย่างนุ่มนวล
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 3. แสดงวันที่ปัจจุบัน
const dateElement = document.getElementById("current-date");

if (dateElement) {
    dateElement.textContent =
        new Date().toLocaleDateString("th-TH", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
}

// 4. เอฟเฟกต์แสดงเนื้อหาเมื่อเลื่อนหน้าจอ
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

cards.forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
});

// 5. ปุ่มกลับขึ้นด้านบน
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", function () {
        backToTop.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
