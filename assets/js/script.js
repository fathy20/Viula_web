document.addEventListener('DOMContentLoaded', function () {
  // دخول الهيرو
  const tlHero = gsap.timeline({ defaults: { ease: "power3.out" } });
  tlHero
    .from(".hero-logo", { duration: 1, y: 60, opacity: 0 })
    .from(".hero-slogan", { duration: 0.8, y: 40, opacity: 0 }, "-=0.6")
    .from(".scroll-down", { duration: 1, y: -30, opacity: 0 }, "-=0.4");

  // تعويم بسيط للشعار
  gsap.to(".hero-logo", {
    y: -12, rotation: 1.5, duration: 2.2, yoyo: true, repeat: -1, ease: "sine.inOut",
  });

  // بارالاكس خفيف مع الماوس
  const hero = document.querySelector(".hero-content");
  if (hero) {
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(".hero-logo", { x: dx * 12, y: dy * 12, rotation: dx * 3, duration: 0.3 });
    });
  }

  // تصغير الهيدر مع التمرير
  const header = document.querySelector(".main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  });

  // إظهار الأقسام عند الظهور
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add("visible")),
    { threshold: 0.1 }
  );
  sections.forEach((s) => observer.observe(s));
});
