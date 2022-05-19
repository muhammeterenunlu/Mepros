const sectionManager = new SectionManager(5);
const progressBar = new ProgressBar(5, document.querySelector('.progress-wrapper'));
const cyclingTimer = new CyclingTimer(5, 4000);
cyclingTimer.setOnTickFunction(onTick);

function onTick() {
	sectionManager.slideToRight();
	progressBar.updateProgressBar(sectionManager.getCurrentSectionIndex());
}

function startSliding() {
	cyclingTimer.startTimer();
}

function slideSectionsToRight() {
	sectionManager.slideToRight();
	progressBar.updateProgressBar(sectionManager.getCurrentSectionIndex());
}

function slideSectionsToLeft() {
	sectionManager.slideToLeft();
	progressBar.updateProgressBar(sectionManager.getCurrentSectionIndex());
}
