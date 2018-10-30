const hero = document.querySelector('.hero');
const text = document.querySelector('.hero h1');
const walk = 100;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 #28a7e9,
    ${xWalk * -1}px ${yWalk * -1}px 0 #28a7e9
  `;
}

function removeShadow() {
  text.style.textShadow = '5px 5px 0 rgba(0,0,0,0.5)';
}

hero.addEventListener('mousemove', shadow);
hero.addEventListener('mouseout', removeShadow);