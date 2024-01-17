/* Catalog popup */

const catalogBtn = document.getElementById('catalog');
const popupScreen = document.querySelector('.popup');
const overlay = document.querySelector('.overlay'); 

let isMouseOverButton = false;
let isMouseOverPopup = false;

catalogBtn.addEventListener('mouseover', () => {
  isMouseOverButton = true;
  showPopup();
});

catalogBtn.addEventListener('click', () => {
  isMouseOverButton = true;
  showPopup();
});


catalogBtn.addEventListener('mouseout', () => {
  isMouseOverButton = false;
  hidePopup();
});

popupScreen.addEventListener('mouseover', () => {
  isMouseOverPopup = true;
  showPopup();
});

popupScreen.addEventListener('mouseout', () => {
  isMouseOverPopup = false;
  hidePopup();
});

function showPopup() {
  if (isMouseOverButton || isMouseOverPopup) {
    popupScreen.classList.remove('d-none');
    overlay.classList.remove('d-none');
  }
}

function hidePopup() {
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