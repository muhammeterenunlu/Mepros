document
  .querySelector('.mepros-hamburger-menu')
  .addEventListener('click', toggleHamburgerMenu);

function toggleHamburgerMenu(event) {
  document.querySelector('.mepros-container').classList.toggle('change');
}

document.onclick = function(event) {
		console.log(event.target.classList)
	if(!event.target.classList.contains('mepros-sidebar') &&
		!event.target.classList.contains('mepros-hamburger-menu') &&
		document.querySelector('.mepros-container').classList.contains('change')
	) {
  	document.querySelector('.mepros-container').classList.toggle('change');
	}
}
