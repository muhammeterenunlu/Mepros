const cardEls = document.querySelectorAll('.mepros-card');
const effect = 20; // max rotation in deg

cardEls.forEach(card => {
  card.style.transition = 'transform 0.2s';

  if (card.parentNode.style.perspective != '1000px') {
    card.parentNode.style.perspective = '1000px';
  }
});

let cardTop, cardBottom, cardLeft, cardRight, middleX, middleY;
let rotX, rotY;

cardEls.forEach(card => {
  card.addEventListener('mouseenter', e => {
    cardTop = card.getBoundingClientRect().top + window.scrollY;
    cardLeft = card.getBoundingClientRect().left + window.scrollX;
    cardBottom = cardTop + card.getBoundingClientRect().height;
    cardRight = cardLeft + card.getBoundingClientRect().width;
    middleX = (cardRight - cardLeft) / 2 + cardLeft;
    middleY = (cardBottom - cardTop) / 2 + cardTop;
  });
});

cardEls.forEach(card => {
  card.addEventListener('mousemove', e => {
    rotY =
      ((middleX - e.pageX) * effect) / (card.getBoundingClientRect().width / 2);

    rotX =
      ((e.pageY - middleY) * effect) /
      (card.getBoundingClientRect().height / 2);

    card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  });
});

cardEls.forEach(card => {
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotate(0deg)';
  });
});
