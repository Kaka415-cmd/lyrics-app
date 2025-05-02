const lyrics = [
  /*...lirik seperti sebelumnya...*/
];

const lyricsContainer = document.getElementById("lyrics");
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");

let index = 0;
let timeoutId = null;
let isPlaying = false;

function showNextWord() {
  if (index < lyrics.length && isPlaying) {
    const wordSpan = document.createElement("span");
    wordSpan.textContent = lyrics[index] + " ";
    wordSpan.classList.add("fade-in");
    lyricsContainer.appendChild(wordSpan);
    index++;
    timeoutId = setTimeout(showNextWord, 500);
  }
}

audio.addEventListener("play", () => {
  if (!isPlaying) {
    isPlaying = true;
    lyricsContainer.innerHTML = "";
    index = 0;
    showNextWord();
    playPauseBtn.textContent = "Pause";
  }
});

audio.addEventListener("pause", () => {
  isPlaying = false;
  clearTimeout(timeoutId);
  playPauseBtn.textContent = "Putar";
});

// Tombol play/pause
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
