// Função para formatar o tempo restante em dias, horas, minutos e segundos
function formatarTempo(ms) {
  const totalSegundos = Math.floor(ms / 1000);
  const dias = Math.floor(totalSegundos / (3600 * 24));
  const horas = Math.floor((totalSegundos % (3600 * 24)) / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  return { dias, horas, minutos, segundos };
}

// Atualiza o contador de um vestibular
function atualizarContador(idContador, dataAlvo) {
  const contadorElem = document.getElementById(idContador);

  function atualizar() {
    const agora = new Date();
    const diff = dataAlvo - agora;

    if (diff <= 0) {
      contadorElem.textContent = "Já passou!";
      clearInterval(intervalo);
      return;
    }

    const { dias, horas, minutos, segundos } = formatarTempo(diff);

    contadorElem.innerHTML =
      `<span>${dias}d</span> ` +
      `<span>${horas}h</span> ` +
      `<span>${minutos}m</span> ` +
      `<span>${segundos}s</span>`;
  }

  atualizar();
  const intervalo = setInterval(atualizar, 1000);
}

// Datas oficiais mais recentes dos vestibulares

// ENEM 2025 - Primeira prova: 3 e 4 de novembro (domingo e segunda-feira)
// Para contagem regressiva, considere o primeiro dia da prova, 3 de novembro de 2025 às 13:00
const enem2025 = new Date('2025-11-03T13:00:00-03:00'); // Horário de Brasília (UTC-3)

// UECE 2025 - Vestibular de Inverno 2025
// Data provável da primeira prova: 8 de dezembro de 2025 às 8:00
const uece2025 = new Date('2025-12-08T08:00:00-03:00');

// Inicia os contadores
atualizarContador('contador-enem', enem2025);
atualizarContador('contador-uece', uece2025);

// Botão voltar para a última seção acessada
const btnVoltar = document.getElementById('btn-voltar');

// Função para rolar para a última seção salva
function rolarParaUltimaSecao() {
  const ultimaSecaoId = localStorage.getItem('ultimaSecaoVestibulares');
  if (ultimaSecaoId) {
    const secao = document.getElementById(ultimaSecaoId);
    if (secao) {
      secao.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Atribui a função ao botão voltar
btnVoltar.addEventListener('click', rolarParaUltimaSecao);

// Salva no localStorage a seção atual ao rolar a página
const secoes = document.querySelectorAll('.vestibular');

window.addEventListener('scroll', () => {
  let secaoAtual = null;
  const topoJanela = window.scrollY + window.innerHeight / 3;

  secoes.forEach(secao => {
    const topoSecao = secao.offsetTop;
    if (topoSecao <= topoJanela) {
      secaoAtual = secao.id;
    }
  });

  if (secaoAtual) {
    localStorage.setItem('ultimaSecaoVestibulares', secaoAtual);
  }
});
