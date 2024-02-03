import { overlay } from './popup.js';

/* Mobile hamburger menu */

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

/* Handle mobile menu show navigation section */

const mobileCatalogBtn = document.getElementById('mobile-catalog-btn');
const mobileNavSection = document.getElementById('mobile-nav-section');
const mobileCatalog = document.querySelector('.mobile-catalog');

mobileCatalogBtn.addEventListener('click', () => {
  mobileNavSection.classList.toggle('d-none');
  mobileCatalog.classList.toggle('d-none');
});

/* Handle rotate arrow on mobile menu */
const summaryDivs = document.querySelectorAll('.details-summary');
    summaryDivs.forEach(summaryDiv => {
    summaryDiv.addEventListener('click', event => {
        const clickedDiv = event.currentTarget;
        const arrow = clickedDiv.querySelector('.summary-arrow');
        arrow.classList.toggle('rotate-arrow');
      });
    });

/* Handle show more and less catalogs in mebile menu */

const details = document.querySelectorAll('.main-detail');
details.forEach(detail => {
  const moreCategories = detail.querySelector('.more-categories');
  const showMoreCategoriesBtn = detail.querySelector('.show-more-categories-btn');
  const showLessCategoriesBtn = detail.querySelector('.show-less-categories-btn');

  showMoreCategoriesBtn.addEventListener('click', () => {
    moreCategories.style.display = 'block';
    showMoreCategoriesBtn.style.display = 'none';
  });

  showLessCategoriesBtn.addEventListener('click', () => {
    moreCategories.style.display = 'none';
    showMoreCategoriesBtn.style.display = 'block';

    showMoreCategoriesBtn.parentElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
