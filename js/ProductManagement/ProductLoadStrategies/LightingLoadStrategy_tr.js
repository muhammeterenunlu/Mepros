class LightingLoadStrategy_tr extends LoadStrategy{
  loadProduct(product) {
    const productData = product.getData();

    this.#setProductLabel(productData.name.toUpperCase());

    this.#setColors(productData.colorsImagesDictionary);

    this.#createAndPushTags(productData.tags_tr);
  }

  #setProductLabel(label) {
    let productLabel = document.getElementById("product-label");

    productLabel.innerHTML = label;
  }

  #setColors(colorImageDictionary) {
    let colorContainer = document.getElementById("mepros-color-container");

    colorContainer.innerHTML = '';

    for (const color in colorImageDictionary) {
      let colorElement = document.createElement('div');
      colorElement.classList.add('box');
      colorElement.onclick = function() { setChosenColorFromHtml(colorElement); };
      colorElement.style.backgroundColor = color;

      colorContainer.appendChild(colorElement);
    }

    this.#setImages(colorImageDictionary);
  }

  #setImages(colorImageDictionary) {
    let images = document.querySelectorAll(".product-image");

    if (typeof globalInformations.productColorInfo.chosenColor === 'undefined')
      globalInformations.productColorInfo.chosenColor = Object.keys(colorImageDictionary)[0];

    const chosenColor = globalInformations.productColorInfo.chosenColor;

    if (chosenColor in colorImageDictionary) {
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        
        image.src = colorImageDictionary[chosenColor][i];
      }
    }
  }

  #createAndPushTags(listOfTagContents) {
    this.#clearTags();

    listOfTagContents.forEach(tagContent => {
      this.#createAndPushATag(tagContent);
    });
  }

  #clearTags() {
    let descriptionList = document.getElementById("description-tab-body");

    descriptionList.innerHTML = '';
  }

  #createAndPushATag(tagContent) {
    this.#pushTag(createListElement(tagContent));
  }

  #pushTag(tag) {
    let descriptionList = document.getElementById("description-tab-body");

    pushElementToList(descriptionList, tag);
  }
}
