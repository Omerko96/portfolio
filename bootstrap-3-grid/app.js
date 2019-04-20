// Elements
const containerBtn = document.querySelector('.btn-primary');
const fluidBtn = document.querySelector('.btn-info');
const blocks = document.querySelectorAll('.container' && '.container-fluid')

// Functions
function setContainer() {
  blocks.forEach(block => {
    block.classList.remove('container-fluid');
    block.classList.add('container');
  });  
}
function setFluid() {
  blocks.forEach(block => {
    block.classList.remove('container');
    block.classList.add('container-fluid');
  }); 
}

// Events
containerBtn.addEventListener('click', setContainer);
fluidBtn.addEventListener('click', setFluid);