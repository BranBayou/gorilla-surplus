const catalogBtn = document.querySelector('.catalog');
const popupScreen = document.querySelector('.popup');
const overlay = document.querySelector('.overlay'); // Add this line

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
    overlay.classList.remove('d-none'); // Show the overlay
  }
}

function hidePopup() {
  if (!isMouseOverButton && !isMouseOverPopup) {
    popupScreen.classList.add('d-none');
    overlay.classList.add('d-none'); // Hide the overlay
  }
}
