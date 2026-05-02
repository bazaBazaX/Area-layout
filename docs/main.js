const section = document.querySelectorAll("section");
const footer = document.querySelector("footer");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

section.forEach((section) => observer.observe(section));
observer.observe(footer);
