const music = document.getElementById("bgMusic");
const button = document.getElementById("musicToggle");
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    button.textContent = "🎵 Play Music";
  } else {
    music.play();
    button.textContent = "⏸️ Pause Music";
  }
  isPlaying = !isPlaying;
}