class ProductLoader {
  #colorInfo
  #currentProduct

  constructor(colorInfo) {
    this.#colorInfo = colorInfo;
  }

  loadProduct(product) {
    this.#currentProduct = product;

    const productData = product.getData();

    this.#setProductLabel(productData.name.toUpperCase());
    this.#setTechnicalDataLabel(productData.name.toUpperCase());

    this.#setColors(productData.colorsImagesDictionary);

    this.#createAndPushTags(productData.tags);
    this.#createAndPushMaterials(productData.materials);

    this.#setInstructions(productData.instructions);
  }

  getCurrentProduct() {
    return this.#currentProduct;
  }

  #setProductLabel(label) {
    let productLabel = document.getElementById("product-label");

    productLabel.innerHTML = label;
  }

  #setTechnicalDataLabel(label) {
    let technicalDataLabel = document.getElementById("product-technical-data-label");

    technicalDataLabel.innerHTML = label.toUpperCase();
  }

  #setColors(colorImageDictionary) {
    let colorContainer = document.getElementById("mepros-color-container");

    colorContainer.innerHTML = '';

    for (const color in colorImageDictionary) {
      let colorElement = document.createElement('div');
      colorElement.classList.add('box');
      colorElement.onclick = function() { setChosenColor(colorElement); };
      colorElement.style.backgroundColor = color;

      colorContainer.appendChild(colorElement);
    }

    this.#setImages(colorImageDictionary);
  }

  #setImages(colorImageDictionary) {
    let firstImage = document.getElementById("first-image");
    let secondImage = document.getElementById("second-image");
    let thirdImage = document.getElementById("third-image");

    if (typeof this.#colorInfo.chosenColor === 'undefined')
      this.#colorInfo.chosenColor = Object.keys(colorImageDictionary)[0];

    if (this.#colorInfo.chosenColor in colorImageDictionary) {
      firstImage.src = colorImageDictionary[this.#colorInfo.chosenColor][0];
      secondImage.src = colorImageDictionary[this.#colorInfo.chosenColor][1];
      thirdImage.src = colorImageDictionary[this.#colorInfo.chosenColor][2];
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

  #createAndPushMaterials(listOfMaterialContents) {
    this.#clearMaterials();

    listOfMaterialContents.forEach(materialContent => {
      this.#createAndPushAMaterial(materialContent);
    });
  }

  #clearMaterials() {
    let materialList = document.getElementById("materials-tab-body");

    materialList.innerHTML = '';
  }

  #createAndPushAMaterial(materialContent) {
    this.#pushMaterial(createListElement(materialContent));
  }

  #pushMaterial(material) {
    let materialList = document.getElementById("materials-tab-body");

    pushElementToList(materialList, material);
  }

  #setInstructions(instructions) {
    let instructionsSection = document.getElementById("instructions-tab-body");

    instructionsSection.innerHTML = instructions;
  }
}
