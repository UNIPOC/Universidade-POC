// Frases motivacionais do Pipo
const frases = [
  "Nunca desista dos seus sonhos! – Pipo",
  "Cada dia é uma nova oportunidade para aprender. – Pipo",
  "Estudar com alegria rende muito mais! – Pipo",
  "Você é capaz de tudo, acredite! – Pipo",
  "Paciência e foco são seus melhores amigos. – Pipo",
  "Ei! Você já estudou hoje? Bora garantir aquela vaga!",
  "A preguiça é minha, mas a aprovação é sua!",
  "Devagar e sempre… mas com foco no ENEM!",
  "Dormir é bom, mas passar no vestibular é melhor!",
  "Confia, uma horinha de estudo por dia e você chega lá!",
  "Respira fundo… agora vai estudar!",
  "Não precisa correr, só não pare!",
  "O importante é não desistir… nem que seja estudando deitado.",
  "Se eu, uma preguiça, tô aqui motivando… você consegue!",
  "Hoje você planta esforço, amanhã colhe aprovação.",
  "Lembre-se: até uma preguiça consegue aprender, imagina você!",
  "Bora revisar aquele conteúdo? Você vai agradecer depois.",
  "Prova chegando… é agora ou agora!",
  "Você é mais forte do que parece, e mais esperto do que imagina.",
  "Entre um cochilo e outro, revise uma matéria!",
  "Passar no ENEM > Rolê hoje. Confia!",
  "Pausa o TikTok e dá play nos estudos.",
  "Não estuda muito não… estuda bem!",
  "A diferença entre o sonho e a realidade é o esforço.",
  "Apenas vá no seu ritmo, mas vá!"
];

// Comentários positivos dos alunos
const comentarios = [
  "O UNIPOC mudou minha forma de estudar, super recomendo!",
  "Conteúdo bem organizado e fácil de entender, amo estudar aqui!",
  "Pipo é o melhor mascote, sempre motivando a gente!",
  "As videoaulas e resumos me ajudaram a passar no ENEM!",
  "Site muito interativo e agradável, estudo com prazer!",
  "Estudar com o Pipo mudou minha rotina! Agora até gosto de revisar!",
  "Passei pra UECE com a ajuda do UNIPOC. Obrigado, Pipo!",
  "Amei os resumos! Tudo muito organizado e fácil de entender.",
  "Nunca pensei que estudar seria tão divertido… Pipo, te amo!",
  "Com o UNIPOC, aprendi a estudar de verdade!",
  "As videoaulas são maravilhosas. Super recomendo!",
  "É muito bom ter um site feito pra gente, do nosso jeito!",
  "Consegui melhorar minhas notas rapidinho só usando o UNIPOC.",
  "Adorei os exercícios interativos. Estudar virou até passatempo.",
  "O mascote Pipo me lembra todos os dias de não desistir.",
  "A melhor plataforma pra quem quer passar no ENEM de forma leve!",
  "Minha mãe até se surpreendeu com minha dedicação agora!",
  "Depois do UNIPOC, virei fã de Biologia!",
  "As dicas que o Pipo dá são exatamente o que eu precisava.",
  "Aqui a gente estuda com leveza e eficiência!",
  "Já indiquei pra vários colegas. UNIPOC é top demais!",
  "Achei o site por acaso e não largo mais.",
  "Tudo é feito com carinho. Dá pra ver!",
  "Não achei que fosse conseguir, mas com o UNIPOC eu fui longe!",
  "O diferencial são os resumos curtos, direto ao ponto!"
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
