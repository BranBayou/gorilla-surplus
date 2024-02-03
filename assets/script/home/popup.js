/* Catalog popup */

const catalogBtn = document.getElementById('catalog');
const popupScreen = document.querySelector('.popup');
const overlay = document.querySelector('.overlay'); 
const inputTypeSearch = document.querySelector('.search-input');

let isMouseOverButton = false;
let isMouseOverPopup = false;

catalogBtn.addEventListener('mouseover', (e) => {
  isMouseOverButton = true;
  showPopup();
});

// catalogBtn.addEventListener('click', () => {
//   isMouseOverButton = true;
//   showPopup();
// });

catalogBtn.addEventListener('mouseout', (e) => {
  e.preventDefault();
  isMouseOverButton = false;
  hidePopup();
});

popupScreen.addEventListener('mouseover', (e) => {
  e.preventDefault();
  isMouseOverPopup = true;
  showPopup();
});

popupScreen.addEventListener('mouseout', (e) => {
  e.preventDefault();
  isMouseOverPopup = false;
  hidePopup();
});

function showPopup(e) {
  if (isMouseOverButton || isMouseOverPopup) {
    popupScreen.classList.remove('d-none');
    overlay.classList.remove('d-none');
  }
}

function hidePopup(e) {
  if (!isMouseOverButton && !isMouseOverPopup) {
    popupScreen.classList.add('d-none');
    overlay.classList.add('d-none');
  }
}


/* Catalog sub popup for every button hover */

const subPopupBtns = document.querySelectorAll('.popup-button');
const bottomSections = document.querySelectorAll('.bottom-section');

subPopupBtns.forEach((button, index) => {
  button.addEventListener('mouseover', () => {
    bottomSections.forEach(section => {
      section.classList.add('d-none');
    });
    bottomSections[index].classList.remove('d-none');
  });
});


export { overlay };