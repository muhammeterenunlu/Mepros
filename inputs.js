startSliding();

document
  .querySelector('.mepros-hamburger-menu')
  .addEventListener('click', toggleHamburgerMenu);

document
  .querySelector('.mepros-left-btn')
  .addEventListener('click', slideSectionsToLeft);

document
  .querySelector('.mepros-right-btn')
  .addEventListener('click', slideSectionsToRight);

menu.addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('change');
});
