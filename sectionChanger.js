const sectionManager = new SectionManager(5);
const progressBar = new ProgressBar(5, document.querySelector('.progress-wrapper'));

function slideSectionsToRight() {
	sectionManager.slideToRight();
	progressBar.updateProgressBar(sectionManager.getCurrentSectionIndex());
}

function slideSectionsToLeft() {
	sectionManager.slideToLeft();
	progressBar.updateProgressBar(sectionManager.getCurrentSectionIndex());
}
