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

  document.addEventListener('click', function (event) {
    const navbar = document.getElementById('navbarNavDropdown');
    const isNavbarOpen = navbar.classList.contains('show');
    const toggleButton = document.querySelector('.navbar-toggler');

    // Verifica se o menu está aberto, a tela é menor e o clique foi fora do menu e do botão
    if (isNavbarOpen && window.innerWidth < 992 && !navbar.contains(event.target) && !toggleButton.contains(event.target)) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbar);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  });