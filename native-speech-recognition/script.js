// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

const words = document.getElementById('words');
let p = document.createElement('p');
words.appendChild(p);

recognition.addEventListener('result', (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
});

recognition.addEventListener('end', recognition.start);

recognition.start();

recognition.addEventListener('error', (event) => {
  console.error(`Speech recognition error detected: ${event.error}`);
});
