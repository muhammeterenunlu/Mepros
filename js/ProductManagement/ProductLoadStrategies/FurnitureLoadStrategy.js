class FurnitureLoadStrategy extends LoadStrategy {
  loadProduct(product) {
    const productData = product.getData();

    this.#setProductLabel(productData.name.toUpperCase());
    this.#setTechnicalDataLabel(productData.name.toUpperCase());

    this.#setColors(productData.colorsImagesDictionary);

    this.#createAndPushTags(productData.tags);
    this.#createAndPushMaterials(productData.materials);

    this.#setInstructions(productData.instructions);
  }

  #setProductLabel(label) {
    let productLabel = document.getElementById('product-label');

    productLabel.innerHTML = label;
  }

  #setTechnicalDataLabel(label) {
    let technicalDataLabel = document.getElementById(
      'product-technical-data-label'
    );

    technicalDataLabel.innerHTML = label.toUpperCase();
  }

  #setColors(colorImageDictionary) {
    let colorContainer = document.getElementById('mepros-color-container');

    colorContainer.innerHTML = '';

    for (const color in colorImageDictionary) {
      let colorElement = document.createElement('div');
      colorElement.classList.add('box');
      colorElement.onclick = function () {
        setChosenColorFromHtml(colorElement);
      };
      colorElement.style.backgroundColor = color;

      colorContainer.appendChild(colorElement);
    }

    this.#setImages(colorImageDictionary);
  }

  #setImages(colorImageDictionary) {
    let images = document.querySelectorAll('.product-image');

    if (typeof globalInformations.productColorInfo.chosenColor === 'undefined')
      globalInformations.productColorInfo.chosenColor =
        Object.keys(colorImageDictionary)[0];

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
    let descriptionList = document.getElementById('description-tab-body');

    descriptionList.innerHTML = '';
  }

  #createAndPushATag(tagContent) {
    this.#pushTag(createListElement(tagContent));
  }

  #pushTag(tag) {
    let descriptionList = document.getElementById('description-tab-body');

    pushElementToList(descriptionList, tag);
  }

  #createAndPushMaterials(listOfMaterialContents) {
    this.#clearMaterials();

    listOfMaterialContents.forEach(materialContent => {
      this.#createAndPushAMaterial(materialContent);
    });
  }

  #clearMaterials() {
    let materialList = document.getElementById('materials-tab-body');

    materialList.innerHTML = '';
  }

  #createAndPushAMaterial(materialContent) {
    this.#pushMaterial(createListElement(materialContent));
  }

  #pushMaterial(material) {
    let materialList = document.getElementById('materials-tab-body');

    pushElementToList(materialList, material);
  }

  #setInstructions(instructions) {
    let instructionsSection = document.getElementById('instructions-tab-body');

    instructionsSection.innerHTML = instructions;
  }
}
