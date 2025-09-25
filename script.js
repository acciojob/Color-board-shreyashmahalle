let container = document.querySelector('.container');
for (let i = 0; i < 800; i++) {
	let square = document.createElement('div');
	square.classList.add('square');
	square.addEventListener('mouseover',()=>{
		square.style.backgroundColor = "greenyellow";
		square.style.transition = "none";
	})
	square.addEventListener('mouseout',()=>{
		square.style.backgroundColor = "rgb(29, 29, 29)";
		square.style.transition = "background-color 1s ease";
	})
	container.appendChild(square);
}