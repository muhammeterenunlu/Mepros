document
  .querySelector('.mepros-hamburger-menu')
  .addEventListener('click', toggleHamburgerMenu);

function toggleHamburgerMenu() {
  document.querySelector('.mepros-container').classList.toggle('change');
}
