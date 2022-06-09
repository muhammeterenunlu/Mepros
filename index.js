// typewriter text
const typewriter_text = [
  'FURNITURE SOLUTIONS',
  'LIGHTING SOLUTIONS',
  'AND SHADING SOLUTIONS',
  'BY MEPROS',
];
let textIter = 0;

// sleep function
function sleep(milliseconds) {
  let timeStart = new Date().getTime();
  while (true) {
    let elapsedTime = new Date().getTime() - timeStart;
    if (elapsedTime > milliseconds) {
      break;
    }
  }
}

// typewriter effect - text deletion
function deletingEffect() {
  let word = typewriter_text[textIter].split('');
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById('typewriter-text').innerHTML = word.join('');
    } else {
      if (typewriter_text.length > textIter + 1) {
        textIter++;
      } else {
        textIter = 0;
      }

      typingEffect();
      return false;
    }

    setTimeout(loopDeleting, 150);
  };

  loopDeleting();
}

// typewriter effect - text writing
function typingEffect() {
  let word = typewriter_text[textIter].split('');
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById('typewriter-text').innerHTML += word.shift();
    } else {
      sleep(1000);
      deletingEffect();
      return false;
    }

    setTimeout(loopTyping, 150);
  };

  loopTyping();
}
// calling functions
typingEffect();
