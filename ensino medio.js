// Botão de voltar
const botaoVoltar = document.getElementById("voltar-btn");
if (botaoVoltar) {
  botaoVoltar.addEventListener("click", e => {
    e.preventDefault();
    window.location.href = "index.html"; // Altere conforme necessário
  });
}
