const sectionManager = new SectionManager(6);
const progressBar = new ProgressBar(
  6,
  document.querySelector('.mepros-progress-wrapper')
);
const cyclingTimer = new CyclingTimer(6, 10000);
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
