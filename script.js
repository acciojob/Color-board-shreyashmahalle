 const board = document.getElementById('board');
  const SQUARES = 800;

  // create 800 squares
  for (let i = 0; i < SQUARES; i++) {
    const sq = document.createElement('div');
    sq.className = 'square';
    sq.addEventListener('mouseenter', () => lightUp(sq));
    sq.addEventListener('touchstart', () => lightUp(sq), {passive:true});
    board.appendChild(sq);
  }

  function lightUp(el){
    // random bright-ish color
    const color = `hsl(${Math.floor(Math.random()*360)}, 70%, 55%)`;
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 10px ${color}, 0 0 25px ${color}`;
    el.classList.add('lit');

    // fade back smoothly after 1s
    setTimeout(() => {
      el.style.backgroundColor = '';
      el.style.boxShadow = '';
      el.classList.remove('lit');
      // transition defined in CSS handles the smooth disappearance
    }, 1000);
  }