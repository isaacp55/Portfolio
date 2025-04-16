document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // anima apenas uma vez
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-section').forEach(section => {
      observer.observe(section);
    });
  });