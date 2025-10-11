const parallax = document.querySelector(".parallax");
window.addEventListener("scroll", () => {
  parallax.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.1)`;
});
const faders = document.querySelectorAll(".card, .update-card, .news-item, footer");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("fade-in");
  });
}, { threshold: 0.2 });
faders.forEach(el => observer.observe(el));
