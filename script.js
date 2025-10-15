const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const audio = document.getElementById("audio-capitulo");
const timeDisplay = document.getElementById('time');
const textoCapitulo = document.getElementById("capitulo");
const totalCapitulos = 10;

let taTocando = false;
let capituloAtual = 1;

audio.ontimeupdate = function() {
  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60);
  timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

function tocarFaixa() {
  audio.play();
  taTocando = true;

  botaoPlayPause.classList.add("tocando");
}

function pausarFaixa() {
  audio.pause();
  taTocando = false;

  botaoPlayPause.classList.remove("tocando");
}

function tocarOuPausa() {
  if (taTocando) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

function proximoCapitulo() {
  pausarFaixa();

  if (capituloAtual < totalCapitulos) {
    capituloAtual++;
  } else {
    capituloAtual = 1;
  }

  audio.src = "./audios/" + capituloAtual + ".mp3";
  textoCapitulo.innerText = "Capítulo " + capituloAtual;
  tocarFaixa();
}

function capituloAnterior() {
  pausarFaixa();

  if (capituloAtual === 1) {
    capituloAtual = totalCapitulos;
  } else {
    capituloAtual--;
  }

  audio.src = "./audios/" + capituloAtual + ".mp3";
  textoCapitulo.innerText = "Capítulo " + capituloAtual;
  tocarFaixa();
}

botaoPlayPause.addEventListener("click", tocarOuPausa);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo);
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
