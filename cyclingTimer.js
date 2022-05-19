class CyclingTimer extends Timer{
	#maximumTime
	#timeBetweenTicks
	#currentTime
	#onTick

	constructor(maximumTime, timeBetweenTicks) {
		super();

		this.#maximumTime = maximumTime;
		this.#timeBetweenTicks = timeBetweenTicks;

		this.#currentTime = 1;
	}

	#validateBoundaries() {
		if(this.#currentTime > this.#maximumTime) this.#currentTime = 1;
		else if(this.#currentTime < 1) this.#currentTime = this.#maximumTime;
	}

	#tick() {
		this.#currentTime++;
		this.#validateBoundaries();
		
		this.#onTick();
	}

	startTimer() {
		let tick = this.#tick.bind(this);
		setInterval(tick, this.#timeBetweenTicks);
	}

	setOnTickFunction(callbackFunction) {
		this.#onTick = callbackFunction;
	}
}
