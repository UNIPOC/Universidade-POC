// modulos.js

// Função para mostrar a fase selecionada e esconder as outras
function mostrarFase(id) {
  const todasFases = document.querySelectorAll('.fase');
  todasFases.forEach(fase => {
    fase.classList.add('escondida');
    fase.setAttribute('aria-hidden', 'true');
    fase.setAttribute('tabindex', '-1');
  });

  const faseAtiva = document.getElementById(id);
  faseAtiva.classList.remove('escondida');
  faseAtiva.setAttribute('aria-hidden', 'false');
  faseAtiva.setAttribute('tabindex', '0');
  faseAtiva.focus();
  window.scrollTo(0, 0);
}

// Função para responder questões de múltipla escolha
function responder(botao, correta) {
  const questao = botao.closest('.questao');
  const feedback = questao.querySelector('.feedback');
  if (correta) {
    feedback.textContent = "✅ Correto!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Incorreto. Tente novamente.";
    feedback.style.color = "red";
  }
  // Para melhorar a acessibilidade, mover o foco para o feedback
  feedback.setAttribute('tabindex', '-1');
  feedback.focus();
}

// Função para mostrar a resposta do flashcard
function mostrarResposta(botao) {
  const resposta = botao.nextElementSibling;
  const isHidden = resposta.classList.contains('escondida');

  if (isHidden) {
    resposta.classList.remove('escondida');
    botao.setAttribute('aria-expanded', 'true');
    botao.textContent = "Ocultar Resposta";
  } else {
    resposta.classList.add('escondida');
    botao.setAttribute('aria-expanded', 'false');
    botao.textContent = "Mostrar Resposta";
  }
  // Focar na resposta quando for exibida
  if (!isHidden) {
    botao.focus();
  } else {
    resposta.setAttribute('tabindex', '-1');
    resposta.focus();
  }
}

// Garante que ao carregar a página a primeira fase esteja visível e acessível
document.addEventListener('DOMContentLoaded', () => {
  mostrarFase('fase-1');
});
