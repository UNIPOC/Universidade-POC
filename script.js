// === FRASES DO PIPO ===
const frasesPipo = [
  "Estudar é o primeiro passo para alcançar seus sonhos!",
  "Uma preguiça que estuda voa mais alto do que muitos que correm.",
  "Com calma e foco, você conquista tudo!",
  "A sabedoria também dorme cedo. Não vire noites!",
  "Você consegue, jovem gafanhoto!",
  "Relaxa, respira, e bora entender esse conteúdo.",
  "Todo mundo começa de algum lugar. Continue!",
  "Não é sobre velocidade, é sobre consistência!",
];

function atualizarFrasePipo() {
  const index = Math.floor(Math.random() * frasesPipo.length);
  document.getElementById("frase-pipo").textContent = frasesPipo[index];
}

// === COMENTÁRIOS DOS ALUNOS ===
const comentarios = [
  "“Esse site me ajudou muito nos estudos pro ENEM!” – Ana L.",
  "“As dicas do Pipo são tudo! Nota 10!” – João M.",
  "“Achei super divertido estudar por aqui.” – Carla T.",
  "“Melhor site que já vi na escola!” – Lucas P.",
  "“Passei na UECE estudando com a Unipoc!” – Vitória S.",
  "“O conteúdo é completo e bem explicado.” – Felipe G.",
  "“O Pipo me motivou a estudar todos os dias.” – Letícia R.",
];

let comentarioIndex = 0;

function atualizarComentario() {
  const box = document.getElementById("comentario");
  box.style.opacity = 0;

  setTimeout(() => {
    box.textContent = comentarios[comentarioIndex];
    box.style.opacity = 1;
    comentarioIndex = (comentarioIndex + 1) % comentarios.length;
  }, 300);
}

// === MENU MOBILE TOGGLE ===
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

// === INICIALIZAÇÃO ===
document.addEventListener("DOMContentLoaded", () => {
  atualizarFrasePipo();
  atualizarComentario();
  setInterval(atualizarFrasePipo, 10000); // troca a cada 10s
  setInterval(atualizarComentario, 8000); // troca a cada 8s
});
