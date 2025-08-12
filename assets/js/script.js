// لو بتستخدم GSAP للهيرو، سيبه زي ما هو
document.addEventListener('DOMContentLoaded', function () {
  // --- Hero animations (كما كانت) ---
  if (window.gsap) {
    const tlHero = gsap.timeline({ defaults: { ease: "power3.out" } });
    tlHero
      .from(".hero-logo", { duration: 1, y: 60, opacity: 0 })
      .from(".hero-slogan", { duration: 0.8, y: 40, opacity: 0 }, "-=0.6")
      .from(".scroll-down", { duration: 1, y: -30, opacity: 0 }, "-=0.4");

    gsap.to(".hero-logo", {
      y: -12, rotation: 1.5, duration: 2.2, yoyo: true, repeat: -1, ease: "sine.inOut",
    });
  }

  // --- Header shrink on scroll ---
  const header = document.querySelector(".main-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    });
  }

  // --- Reveal sections ---
  const sections = document.querySelectorAll(".section");
  if (sections.length) {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sections.forEach((s) => observer.observe(s));
  }

  // ==========================
  // Swiper (سلايدر الكتالوج)
  // ==========================
  if (window.Swiper && document.querySelector('.catalog-swiper')) {
    const swiper = new Swiper('.catalog-swiper', {
      loop: true,
      speed: 700,
      spaceBetween: 24,

      // يدعم السحب بالموبايل تلقائيًا
      allowTouchMove: true,
      grabCursor: true,
      touchRatio: 1.1,
      touchAngle: 45,
      threshold: 4, // مسافة صغيرة قبل البدء بالسحب

      // عدد العناصر الظاهرة
      slidesPerView: 1.1,
      breakpoints: {
        640:  { slidesPerView: 2 },
        992:  { slidesPerView: 3 },
        1280: { slidesPerView: 4 }
      },

      // تشغيل تلقائي (يتحرك لليمين مع RTL)
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        reverseDirection: true
      },

      // عناصر التحكم
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
});
