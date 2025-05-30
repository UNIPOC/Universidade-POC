// Função para formatar tempo restante em dias, horas, minutos e segundos
function formatarTempo(restante) {
  const dias = Math.floor(restante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((restante % (1000 * 60)) / 1000);

  return `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// Atualiza o contador com base na data alvo e no id do elemento
function atualizarContador(id, dataAlvo) {
  const agora = new Date().getTime();
  const alvo = new Date(dataAlvo).getTime();
  const restante = alvo - agora;
  const elemento = document.getElementById(id);

  if (restante <= 0) {
    elemento.textContent = 'Evento já ocorreu!';
  } else {
    elemento.textContent = formatarTempo(restante);
  }
}

// Inicializa os contadores e botão voltar
function inicializar() {
  // Datas oficiais aproximadas dos vestibulares 2025
  // ENEM 2025: 3 e 10 de novembro 2025
  // Usaremos 3 de novembro como referência para o contador
  const dataEnem = '2025-11-03T00:00:00-03:00';

  // UECE 2025: primeira fase prevista em 8 de dezembro 2025
  const dataUece = '2025-12-08T00:00:00-03:00';

  // Atualizar os contadores imediatamente
  atualizarContador('contador-enem', dataEnem);
  atualizarContador('contador-uece', dataUece);

  // Atualizar a cada 1 segundo
  setInterval(() => {
    atualizarContador('contador-enem', dataEnem);
    atualizarContador('contador-uece', dataUece);
  }, 1000);

  // Botão voltar - volta para última posição salva ou para topo
  const btnVoltar = document.getElementById('btn-voltar');
  btnVoltar.addEventListener('click', () => {
    const ultimaPosicao = localStorage.getItem('ultimaPosicao') || 0;
    window.scrollTo({ top: parseInt(ultimaPosicao, 10), behavior: 'smooth' });
  });

  // Salvar a posição do scroll sempre que o usuário rolar a página
  window.addEventListener('scroll', () => {
    localStorage.setItem('ultimaPosicao', window.scrollY.toString());
  });
}

// Espera o DOM estar completamente carregado para rodar a inicialização
document.addEventListener('DOMContentLoaded', inicializar);
