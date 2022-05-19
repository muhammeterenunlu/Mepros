class SectionManager {
	#index
	#max
	#domElement

	constructor(max) {
		this.#index = 1;
		this.#max = max;
		this.#domElement = document.querySelector(`.section-${this.#index}`);
	}

	#changeIndex(newIndex) {
		this.#index = newIndex;
		this.#validateBoundaries();
		this.#domElement = document.querySelector(`.section-${this.#index}`);
	}

	#validateBoundaries() {
		if(this.#index < 1) this.#index = 1;
		else if(this.#index > this.#max) this.#index = this.#max;
	}

	#increaseIndex() {
		this.#changeIndex(this.#index+1);
	}

	#decreaseIndex() {
		this.#changeIndex(this.#index-1);
	}

	#returnToFirstSection() {
		for(let i = 1; i <= this.#max; ++i) {
			this.#decreaseIndex();
			this.#moveToLeft();
		}
	}

	#returnToLastSection() {
		for(let i = 1; i < this.#max; ++i) {
			this.#moveToRight();
			this.#increaseIndex();
		}
	}

	#moveToLeft() {
	 this.#domElement.style.left = '0px';

		this.#updateScale(this.#index, 1);
		this.#updateScale(this.#index+1, 1.5);
	}

	#moveToRight() {
		this.#domElement.style.left = '-100vw';

		this.#updateScale(this.#index+1, 1);
		this.#updateScale(this.#index, 1.5);
	}

	slideToRight() {
		if(this.#index === this.#max) this.#returnToFirstSection();
		else {
			this.#moveToRight();
			this.#increaseIndex();
		}
	}

	slideToLeft() {
		if(this.#index === 1) this.#returnToLastSection();
		else {
			this.#decreaseIndex();
			this.#moveToLeft();
		}
	}

	getCurrentSectionIndex() {
		return this.#index;
	}
	
	#updateScale(sectionIndex, newScale) {
		const element = document.querySelector(`.section-${sectionIndex}-wrapper`);
		element.style.transform = `scale(${newScale})`;
	}
}
