/* Catalog popup */

const catalogBtn = document.querySelector('.catalog');
const popupScreen = document.querySelector('.popup');
const overlay = document.querySelector('.overlay'); 

let isMouseOverButton = false;
let isMouseOverPopup = false;

catalogBtn.addEventListener('mouseover', () => {
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

const gunsRiflesBtn = document.getElementById('guns-and-rifles-btn');

const gunsRiflesList = document.getElementById('guns-and-rifles');

let isMouseOverSubButton = false;
let isMouseOverSubPopup = false;

gunsRiflesBtn.addEventListener('mouseover', () => {
  isMouseOverSubButton = true;
  showGunsPopup();
});

gunsRiflesBtn.addEventListener('mouseout', () => {
  isMouseOverSubButton = false;
  hideGunsPopup();
});

gunsRiflesList.addEventListener('mouseenter', () => {
  isMouseOverSubPopup = true;
  showGunsPopup();
});

gunsRiflesList.addEventListener('mouseleave', () => {
  isMouseOverSubPopup = false;
  hideGunsPopup();
});

function showGunsPopup() {
  if (isMouseOverSubButton || isMouseOverSubPopup) {
    gunsRiflesList.classList.remove('d-none');
    overlay.classList.remove('d-none');
  }
}
function hideGunsPopup() {
  if (!isMouseOverSubButton && !isMouseOverSubPopup) {
    gunsRiflesList.classList.add('d-none');
    overlay.classList.add('d-none');
  }
}