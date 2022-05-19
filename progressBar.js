class ProgressBar {
	#max
	#domElement
	#progress
	#circles
	
	constructor(max, domElement) {
		this.#max = max;
		this.#domElement = domElement;
		this.#progress = domElement.querySelector('.progress h2');
		this.#circles = domElement.querySelectorAll('.circle');
	}

	updateProgressBar(currentIndex) {
		this.#progress.textContent = `${currentIndex}/${this.#max}`;

		Array.from(this.#circles).forEach(circle => {
			circle.style.backgroundColor = 'transparent';
		});

		const currentCircle = this.#domElement.querySelector(`.circle-${currentIndex}`);
		currentCircle.style.backgroundColor = '#ddd';
	}
}
