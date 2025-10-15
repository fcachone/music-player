const botaoPlayPause = document.getElementById("play-pause");
const audio = document.getElementById("audio-capitulo");

let taTocando = false;

function tocarFaixa() {
  audio.play();
  taTocando = true;
}

function pausarFaixa() {
  audio.pause();
  taTocando = false;
}

function tocarOuPausa() {
  if (taTocando) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

botaoPlayPause.addEventListener("click", tocarOuPausa);
