/* Catalog popup */

const catalogBtn = document.getElementById('catalog');
const popupScreen = document.querySelector('.popup');
const overlay = document.querySelector('.overlay'); 

catalogBtn.addEventListener('click', (e) => {
  showPopup();
});

catalogBtn.addEventListener('mouseover', () => {
  showPopup();
});

catalogBtn.addEventListener('mouseout', (e) => {
  showPopup();
});

popupScreen.addEventListener('mouseover', (e) => {
  showPopup();
});

popupScreen.addEventListener('mouseout', (e) => {
  hidePopup();
});

overlay.addEventListener('click', (e) => {
  hidePopup();
});

function showPopup(e) {
    popupScreen.classList.remove('d-none');
    overlay.classList.remove('d-none');
  
}

function hidePopup(e) {
    popupScreen.classList.add('d-none');
    overlay.classList.add('d-none');
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