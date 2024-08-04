async function makeSound() {
  const audioContext = new AudioContext();

  const gain = new GainNode(audioContext);
  gain.connect(audioContext.destination);
  gain.gain.value = 0.1;

  const oscillator = new OscillatorNode(audioContext);
  oscillator.connect(gain);
  oscillator.frequency.value = 440;
  oscillator.start();
  oscillator.stop(1);
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#sound-button").addEventListener("click", (e) => {
    e.preventDefault();
    makeSound();
  });
});
