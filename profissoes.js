// Seleção dos botões das abas e conteúdo das abas
const botoesAbas = document.querySelectorAll(".abas button");
const conteudosAbas = document.querySelectorAll(".conteudo-aba");

// Função para trocar abas
function trocarAba(event) {
  const botaoSelecionado = event.currentTarget;
  const abaAlvo = botaoSelecionado.getAttribute("data-aba");

  // Remove classe ativo de todos botões e conteúdos
  botoesAbas.forEach(botao => botao.classList.remove("ativo"));
  conteudosAbas.forEach(conteudo => conteudo.classList.remove("ativo"));

  // Adiciona classe ativo no botão e conteúdo selecionado
  botaoSelecionado.classList.add("ativo");
  document.getElementById(abaAlvo).classList.add("ativo");
}

// Adiciona evento de clique em todos os botões das abas
botoesAbas.forEach(botao => {
  botao.addEventListener("click", trocarAba);
});

// Define a aba inicial ativa (primeira)
if (botoesAbas.length > 0 && conteudosAbas.length > 0) {
  botoesAbas[0].classList.add("ativo");
  conteudosAbas[0].classList.add("ativo");
}

// Botão voltar para página inicial
const botaoVoltar = document.getElementById("voltar-btn");
if (botaoVoltar) {
  botaoVoltar.addEventListener("click", e => {
    e.preventDefault();
    window.location.href = "index.html"; // ajuste se necessário
  });
}
