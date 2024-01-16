import { overlay } from './popup.js';

const hamburgurMenu = document.getElementById('hamburger-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgurMenu.addEventListener('click', (e) => {
  mobileMenu.classList.toggle('d-none');
  overlay.classList.toggle('d-none');
});

overlay.addEventListener('click', (e) => {
  mobileMenu.classList.add('d-none');
  overlay.classList.add('d-none');
});

const mobileCatalogBtn = document.getElementById('mobile-catalog-btn');
const mobileNavSection = document.getElementById('mobile-nav-section');
const mobileCatalog = document.querySelector('.mobile-catalog');

mobileCatalogBtn.addEventListener('click', () => {
  mobileNavSection.classList.toggle('d-none');
  mobileCatalog.classList.toggle('d-none');
});