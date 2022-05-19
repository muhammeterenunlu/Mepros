startSliding();

document.querySelector('.hamburger-menu').addEventListener('click', toggleHamburgerMenu);

document.querySelector('.left-btn').addEventListener('click', slideSectionsToLeft);

document.querySelector('.right-btn').addEventListener('click', slideSectionsToRight);

menu.addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('change');
});
