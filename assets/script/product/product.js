const moreDetailBtn = document.getElementById('details-link-btn');
const specializationsBtn = document.getElementById('specializations-link-btn');
const addToBtn = document.getElementById('addto-link-btn');

const detailsPart = document.querySelector('.details-part');
const specializationsPart = document.querySelector('.specializations-part');
const addToPart = document.querySelector('.add-to-part');

moreDetailBtn.addEventListener('click', (e) => {
  e.preventDefault();
  detailsPart.classList.remove('d-none');
  specializationsPart.classList.add('d-none'); 
  addToPart.classList.add('d-none'); 
});

specializationsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  specializationsPart.classList.toggle('d-none');
  detailsPart.classList.add('d-none'); 
  addToPart.classList.add('d-none'); 
});

addToBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addToPart.classList.toggle('d-none');
  detailsPart.classList.add('d-none'); 
  specializationsPart.classList.add('d-none'); 
});

/* Handle product size */
const sizeOfProducts = document.querySelectorAll('.size-of-product');
const showSize = document.querySelector('.show-size');
sizeOfProducts.forEach(sizeOfProduct => {
  sizeOfProduct.addEventListener('click', () =>{
    showSize.innerHTML = sizeOfProduct.innerHTML;
  })
})


/* Handle Input type number */
const decrement = document.getElementById('decrement');
  const increment = document.getElementById('increment');
  const numberInput = document.getElementById('quantity');
  let min = parseInt(numberInput.getAttribute('min'));
  let max = parseInt(numberInput.getAttribute('max'));
  let step = parseInt(numberInput.getAttribute('step'));
  let value = parseInt(numberInput.getAttribute('value'));

  decrement.addEventListener('click', () => {
    let calStep = step * -1;
    let newValue = value + calStep;
    if (newValue >= min && newValue <= max) {
      value = newValue;
      numberInput.setAttribute('value', newValue);
    }
  });

  increment.addEventListener('click', () => {
    let calStep = step * 1;
    let newValue = value + calStep;
    if (newValue >= min && newValue <= max) {
      value = newValue;
      numberInput.setAttribute('value', newValue);
    }
  });
