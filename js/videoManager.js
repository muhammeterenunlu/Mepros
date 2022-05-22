const video = document.querySelector('.mepros-about-us-video');
const btn = document.querySelector('.mepros-about-us-buttons button i');
const bar = document.querySelector('.mepros-about-us-video-bar');

const playPause = () => {
  if (video.paused) {
    video.play();
    btn.className = 'far fa-pause-circle';
    video.style.opacity = '.7';
  } else {
    video.pause();
    btn.className = 'far fa-play-circle';
    video.style.opacity = '.3';
  }
};

btn.addEventListener('click', () => {
  playPause();
});

video.addEventListener('timeupdate', () => {
  console.log(video.currentTime, video.duration);
  const barWidth = video.currentTime / video.duration;
  bar.style.width = `${barWidth * 100}%`;
  if (video.ended) {
    btn.className = 'far fa-play-circle';
    video.style.opacity = '.3';
  }
});
