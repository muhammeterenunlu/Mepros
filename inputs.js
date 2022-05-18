document.querySelector('.hamburger-menu').addEventListener('click', toggleHamburgerMenu);

document.querySelector('.left-btn').addEventListener('click', slideSectionsToLeft);

document.querySelector('.right-btn').addEventListener('click', slideSectionsToRight);

document.querySelector('.grapes-img').addEventListener('mouseover', () => {
  document.querySelector('.section-3-wrapper').style.opacity = '.5';
});

document.querySelector('.grapes-img').addEventListener('mouseout', () => {
  document.querySelector('.section-3-wrapper').style.opacity = '1';
});

menu.addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('change');
});
