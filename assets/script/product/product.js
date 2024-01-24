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
