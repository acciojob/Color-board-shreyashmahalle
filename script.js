const board = document.getElementById('board');
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const sq = document.createElement('div');
  sq.className = 'square';
  // use mouseover because the tests trigger 'mouseover'
  sq.addEventListener('mouseover', () => lightUp(sq));
  sq.addEventListener('mouseout', () => dim(sq));
  board.appendChild(sq);
}

function lightUp(el){
  const color = `hsl(${Math.floor(Math.random()*360)},70%,55%)`;
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 10px ${color}, 0 0 25px ${color}`;
}

function dim(el){
  // revert to base; CSS transition handles smooth 1s fade
  el.style.backgroundColor = '';
  el.style.boxShadow = '';
}
