// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    // Adicionar uma classe que mostra o menu
    navLinks.classList.toggle('nav-active'); 
  });
});
