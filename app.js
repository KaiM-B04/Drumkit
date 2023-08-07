window.addEventListener("keydown", "onclick", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return;
  audio.play();
});
