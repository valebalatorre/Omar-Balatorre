document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');

  function setActiveLink() {
    const fromTop = window.scrollY + 80;
    sections.forEach(section => {
      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const targetId = (evt.currentTarget.getAttribute('href') || '').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const contactForm = document.getElementById('contact-form');
  const message = document.getElementById('message-box');

  contactForm?.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (message) {
      message.textContent = 'Gracias, tu mensaje ha sido enviado (simulado).';
      message.style.display = 'block';
    }
    const form = evt.target;
    if (form && form.reset) {
      form.reset();
    }
  });
});