function pushElementToList(list, element) {
  list.appendChild(element);
}

function createListElement(content) {
  let element = document.createElement('li');
  element.appendChild(document.createTextNode(content));

  return element;
}
