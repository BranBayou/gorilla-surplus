/* Handle show more introduction text */

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

/* Handle filter section */ 

const filterBtn = document.querySelector('.filter-btn');
const filterSection = document.querySelector('.filter-section');
const filterdCards = document.querySelector('.filtered-cards');
var directChildren = filterdCards.children;

let isFilterApplied = filterSection.classList.contains('d-none') === false;

filterBtn.addEventListener('click', () => {
  filterSection.classList.toggle('d-none');
  filterBtn.innerHTML = filterBtn.innerHTML === 'Open Filter' ? 'Clear Filter' : 'Open Filter';
  isFilterApplied = !isFilterApplied;
  toggleFilterSection();
});


const clearFilterBtn = document.querySelector('.clear-filter-btn');
clearFilterBtn.addEventListener('click', () => {
  filterSection.classList.toggle('d-none');
  filterBtn.innerHTML = filterBtn.innerHTML === 'Open Filter' ? 'Clear Filter' : 'Open Filter';
  isFilterApplied = !isFilterApplied;
  toggleFilterSection();
  
});

const toggleFilterSection = () => {
  if (window.matchMedia("(min-width: 992px)").matches) {
    let styleElement = document.getElementById('dynamicStyle');

    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'dynamicStyle';
      document.head.appendChild(styleElement);
    }

    if (directChildren.length > 3){
      styleElement.innerHTML = isFilterApplied
      ? `
        @media screen and (min-width: 992px) {
          .filtered-cards .card {
            flex: 1 0 calc(33.333% - 10px);
            min-width: 0; 
            max-width: calc(33.333% - 10px); 
            padding: 10px;
            margin: 3px 2px;
          }
        }
      `
      : `
        @media screen and (min-width: 992px) {
          .filtered-cards .card {
            flex: 1 0 calc(25% - 10px);
            min-width: 0; 
            max-width: calc(25% - 10px); 
            padding: 10px;
            margin: 3px 2px;
          }
        }
      `;
    }
    else {
      styleElement.innerHTML = isFilterApplied
      ? `
        @media screen and (min-width: 992px) {
          .filtered-cards .card {
            flex: 1 0 calc(33.333% - 10px);
            min-width: 0; 
            // max-width: calc(33.333% - 10px); 
            padding: 10px;
            margin: 3px 2px;
          }
        }
      `
      : `
        @media screen and (min-width: 992px) {
          .filtered-cards .card {
            flex: 1 0 calc(25% - 10px);
            min-width: 0; 
            // max-width: calc(25% - 10px); 
            padding: 10px;
            margin: 3px 2px;
          }
        }
      `;
    }
  }
};

/* Handle view more cards */

const viewMoreCardsBtn = document.querySelector('.view-more-cards-btn');
// const moreProducts = document.querySelectorAll('.when-more');
const viewLessCardsBtn = document.querySelector('.show-less-cards-btn');
const filteredCards = document.querySelector('.filtered-cards');

viewMoreCardsBtn.addEventListener('click', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.classList.remove('d-none');
    viewLessCardsBtn.classList.remove('d-none');
    viewMoreCardsBtn.classList.add('d-none');
  })
});

viewLessCardsBtn.addEventListener('click', () => {
  const cards = filteredCards.children;
  if (cards.length >= 8) {
    for (let i = 8; i < cards.length; i++) {
      cards[i].classList.add('d-none');
    }
  }
  viewMoreCardsBtn.classList.remove('d-none');
  viewLessCardsBtn.classList.add('d-none');
  filteredCards.parentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

// viewMoreCardsBtn.addEventListener('click', () => {
//   moreProducts.forEach(product => {
//     product.classList.remove('d-none');
//   })
// });



/* Handle filter buttons for all conditions */

document.addEventListener("DOMContentLoaded", function () {
  const minusIcons = document.querySelectorAll(".minus-icon");
  const plusIcons = document.querySelectorAll(".plus-icon");
  const filterDivs = document.querySelectorAll(".filter-div");

  function toggleFilterButtons(categoryDiv) {
    const filterButtons = categoryDiv.querySelector(".filter-btns");
    if (filterButtons) {
      filterButtons.classList.toggle("d-none");

      const minusIcon = categoryDiv.querySelector(".minus-icon");
      const plusIcon = categoryDiv.querySelector(".plus-icon");

      if (minusIcon && plusIcon) {
        minusIcon.classList.toggle("d-none");
        plusIcon.classList.toggle("d-none");
      }
    }
  }

  function closeOtherFilters(currentCategoryDiv) {
    filterDivs.forEach(function (filterDiv) {
      if (filterDiv !== currentCategoryDiv) {
        const filterButtons = filterDiv.querySelector(".filter-btns");
        if (filterButtons) {
          filterButtons.classList.add("d-none");
          
          const minusIcon = filterDiv.querySelector(".minus-icon");
          const plusIcon = filterDiv.querySelector(".plus-icon");
          
          if (minusIcon && plusIcon) {
            minusIcon.classList.add("d-none");
            plusIcon.classList.remove("d-none");
          }
        }
      }
    });
  }

  function handleFilterClick(event) {
    const categoryDiv = event.target.closest(".filter-div");

    if (categoryDiv) {
      closeOtherFilters(categoryDiv);
      toggleFilterButtons(categoryDiv);
    }
  }

  minusIcons.forEach(function (minusIcon) {
    minusIcon.addEventListener("click", handleFilterClick);
  });

  plusIcons.forEach(function (plusIcon) {
    plusIcon.addEventListener("click", handleFilterClick);
  });
});

/* Handle togle category */

const categoryLists = document.querySelectorAll('.category-list');

categoryLists.forEach(categoryList => {
  categoryList.addEventListener('click', event => {
    if (event.target.classList.contains('category-list')) {
      const ul = categoryList.querySelector('ul');
      ul.classList.toggle('d-none');
    }
  });
});