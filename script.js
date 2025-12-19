const sound = document.getElementById("sound");
sound.src = "pou-estourado_zIWCpMy.mp3";
sound.loop = true;

let started = false;
document.addEventListener("click", () => {
  if (started) return;
  started = true;
  sound.volume = 1;
  sound.play();
});
