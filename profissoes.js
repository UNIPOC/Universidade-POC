// Seleção dos botões das abas e conteúdos
const botoesAbas = document.querySelectorAll(".aba-btn");
const conteudosAbas = document.querySelectorAll(".conteudo-aba");

// Função para ativar aba clicada
function ativarAba(indice) {
  botoesAbas.forEach((botao, i) => {
    if (i === indice) {
      botao.classList.add("ativo");
      conteudosAbas[i].classList.add("ativo");
    } else {
      botao.classList.remove("ativo");
      conteudosAbas[i].classList.remove("ativo");
    }
  });
}

// Inicializa com a primeira aba ativa
ativarAba(0);

// Adiciona evento de clique para os botões das abas
botoesAbas.forEach((botao, i) => {
  botao.addEventListener("click", () => ativarAba(i));
});

// Botão voltar para página inicial
const botaoVoltar = document.getElementById("voltar-btn");
if (botaoVoltar) {
  botaoVoltar.addEventListener("click", e => {
    e.preventDefault();
    window.location.href = "index.html"; // Ajuste o caminho conforme necessário
  });
}
