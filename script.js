// Frases motivacionais do Pipo
const frases = [
  "Nunca desista dos seus sonhos! – Pipo",
  "Cada dia é uma nova oportunidade para aprender. – Pipo",
  "Estudar com alegria rende muito mais! – Pipo",
  "Você é capaz de tudo, acredite! – Pipo",
  "Paciência e foco são seus melhores amigos. – Pipo"
];

// Comentários positivos dos alunos
const comentarios = [
  "O UNIPOC mudou minha forma de estudar, super recomendo!",
  "Conteúdo bem organizado e fácil de entender, amo estudar aqui!",
  "Pipo é o melhor mascote, sempre motivando a gente!",
  "As videoaulas e resumos me ajudaram a passar no ENEM!",
  "Site muito interativo e agradável, estudo com prazer!"
];

// Função para atualizar frase motivacional aleatória
function atualizarFrase() {
  const fraseElemento = document.getElementById("frasePipo");
  const indice = Math.floor(Math.random() * frases.length);
  fraseElemento.textContent = frases[indice];
}

// Função para atualizar comentário aleatório
function atualizarComentario() {
  const comentarioElemento = document.getElementById("comentarioAluno");
  const indice = Math.floor(Math.random() * comentarios.length);
  comentarioElemento.textContent = comentarios[indice];
}

// Atualiza frase e comentário ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
  atualizarFrase();
  atualizarComentario();
});

// Atualiza frase e comentário a cada 10 segundos
setInterval(() => {
  atualizarFrase();
  atualizarComentario();
}, 10000);
