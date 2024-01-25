const showMoreIntro = document.querySelector('.show-more-intro-text-btn');
const showLessIntro = document.querySelector('.show-less-intro-text-btn');
const moreIntroText = document.querySelector('.more-intro-text');

showMoreIntro.addEventListener('click', () => {
  moreIntroText.classList.remove('d-none');
  showMoreIntro.classList.add('d-none');
});

showLessIntro.addEventListener('click', () => {
  moreIntroText.classList.add('d-none');
  showMoreIntro.classList.remove('d-none');
});

const filterBtn = document.querySelector('.filter-btn');
const filterSection = document.querySelector('.filter-section');
const clearFilterBtn = document.querySelector('.clear-filter-btn');

filterBtn.addEventListener('click', () => {
  filterSection.classList.toggle('d-none');
});

clearFilterBtn.addEventListener('click', () => {
  filterSection.classList.add('d-none');
});

const viewMoreCardsBtn = document.querySelector('.view-more-cards-btn');
const moreProducts = document.querySelectorAll('.when-more');

viewMoreCardsBtn.addEventListener('click', () => {
  moreProducts.forEach(product => {
    product.classList.remove('d-none');
  })
});