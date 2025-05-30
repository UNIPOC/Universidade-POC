// Datas oficiais
const dataEnem = new Date("2025-11-09T00:00:00");
const dataUece = new Date("2025-12-01T00:00:00");

function atualizarContadores() {
  const agora = new Date();
  const contadorEnem = document.getElementById("contador-enem");
  const contadorUece = document.getElementById("contador-uece");

  function calcularTempoRestante(dataFutura) {
    const total = dataFutura - agora;

    if (total <= 0) {
      return null;
    }

    const segundos = Math.floor((total / 1000) % 60);
    const minutos = Math.floor((total / 1000 / 60) % 60);
    const horas = Math.floor((total / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(total / (1000 * 60 * 60 * 24));

    return { dias, horas, minutos, segundos };
  }

  const tempoEnem = calcularTempoRestante(dataEnem);
  const tempoUece = calcularTempoRestante(dataUece);

  if (!tempoEnem) {
    contadorEnem.textContent = "ENEM já aconteceu";
  } else {
    contadorEnem.textContent = `${tempoEnem.dias}d ${tempoEnem.horas}h ${tempoEnem.minutos}m ${tempoEnem.segundos}s`;
  }

  if (!tempoUece) {
    contadorUece.textContent = "UECE já aconteceu";
  } else {
    contadorUece.textContent = `${tempoUece.dias}d ${tempoUece.horas}h ${tempoUece.minutos}m ${tempoUece.segundos}s`;
  }
}

// Atualiza imediatamente
atualizarContadores();

// Atualiza a cada segundo
setInterval(atualizarContadores, 1000);

// Botão de voltar
const botaoVoltar = document.getElementById("voltar-btn");

if (botaoVoltar) {
  botaoVoltar.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "index.html"; // ajuste se necessário
  });
}
