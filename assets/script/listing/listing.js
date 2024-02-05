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

// const filterBtn = document.querySelector('.filter-btn');
// const filterSection = document.querySelector('.filter-section');

// const filterdCards = document.querySelector('.filtered-cards');

// filterBtn.addEventListener('click', () => {
//   filterSection.classList.toggle('d-none');
//   filterBtn.innerHTML = filterBtn.innerHTML === 'Open Filter' ? 'Clear Filter' : 'Open Filter';
// });
const clearFilterBtn = document.querySelector('.clear-filter-btn');
clearFilterBtn.addEventListener('click', () => {
  location.reload();
});

/* Handle view more cards */

const viewMoreCardsBtn = document.querySelector('.view-more-cards-btn');
const moreProducts = document.querySelectorAll('.when-more');

viewMoreCardsBtn.addEventListener('click', () => {
  moreProducts.forEach(product => {
    product.classList.remove('d-none');
  })
});

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