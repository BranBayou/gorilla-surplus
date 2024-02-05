/* Handle more arraivals */
const newArrivalCards = document.querySelector('.new-arrival-cards');
const moreArrivals = document.querySelectorAll('.more-new-arraivals');
const showMoreNewArraivals = document.querySelector('.show-more-new-arrivals-btn');
const showLessNewArraivals = document.querySelector('.show-less-new-arrivals-btn');

showMoreNewArraivals.addEventListener('click', () => {
  moreArrivals.forEach(item => {
    item.classList.remove('d-none');
  });
  showMoreNewArraivals.classList.add('d-none');
  showLessNewArraivals.classList.remove('d-none');
});

showLessNewArraivals.addEventListener('click', () => {
  moreArrivals.forEach(item => {
    item.classList.add('d-none');
  });
  showMoreNewArraivals.classList.remove('d-none');
  showLessNewArraivals.classList.add('d-none');

  newArrivalCards.parentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

/* Handle more discounted products */

const discountedCards = document.querySelector('.discounted-cards');
const moreDiscounted = document.querySelectorAll('.more-discounted');
const showMoreDiscounted = document.querySelector('.show-more-discounted-btn');
const showLessDiscounted = document.querySelector('.show-less-discounted-btn');

showMoreDiscounted.addEventListener('click', () => {
  moreDiscounted.forEach(item => {
    item.classList.remove('d-none');
  });
  showMoreDiscounted.classList.add('d-none');
  showLessDiscounted.classList.remove('d-none');
});

showLessDiscounted.addEventListener('click', () => {
  moreDiscounted.forEach(item => {
    item.classList.add('d-none');
  });
  showMoreDiscounted.classList.remove('d-none');
  showLessDiscounted.classList.add('d-none');

  discountedCards.parentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});