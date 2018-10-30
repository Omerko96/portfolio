// Let Arrow to be visible when browser comes more than 1000px
const arrow = document.querySelector('#arrow');

function showArrow() {
  if(window.scrollY < 1000) {
    arrow.classList.remove('animate-arrow');
  } else {
    arrow.classList.add('animate-arrow');
  }
}

window.addEventListener('scroll', showArrow);