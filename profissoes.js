// Seleciona todos os botões das abas e os conteúdos das abas
const botoesAbas = document.querySelectorAll(".abas button");
const conteudosAbas = document.querySelectorAll(".conteudo-aba");

// Função para ativar a aba selecionada
function ativarAba(indice) {
  botoesAbas.forEach((botao, i) => {
    if (i === indice) {
      botao.classList.add("ativo");
      conteudosAbas[i].style.display = "block";
    } else {
      botao.classList.remove("ativo");
      conteudosAbas[i].style.display = "none";
    }
  });
}

// Inicializa ativando a primeira aba
ativarAba(0);

// Adiciona evento de clique para cada botão de aba
botoesAbas.forEach((botao, i) => {
  botao.addEventListener("click", () => ativarAba(i));
});
