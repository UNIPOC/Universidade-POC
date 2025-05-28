document.addEventListener("DOMContentLoaded", () => {
  // Frases do Pipo - muda a cada carregamento
  const frasesPipo = [
    "Estudar é uma aventura incrível!",
    "Com foco e dedicação, você vai longe!",
    "Aprender é o primeiro passo para o sucesso!",
    "Cada dia é uma nova chance de aprender!",
    "Vamos juntos rumo à aprovação!",
    "A preguiça do Pipo é só pra dar risada, bora estudar!",
    "Pipo acredita em você, pode confiar!",
    "O conhecimento é o seu maior superpoder!",
    "Pequenos passos levam a grandes conquistas!",
    "Estudar com alegria é o segredo do sucesso!"
  ];
  const fraseElemento = document.getElementById("frase-pipo");
  if(fraseElemento) {
    const indice = Math.floor(Math.random() * frasesPipo.length);
    fraseElemento.textContent = frasesPipo[indice];
  }

  // Reviews dos alunos - troca automática com fade
  const reviews = [
    { nome: "Ana Silva", texto: "O site do Pipo mudou minha forma de estudar, muito didático!" },
    { nome: "Lucas Oliveira", texto: "Conteúdo super organizado e fácil de entender." },
    { nome: "Mariana Souza", texto: "Recomendo para todos que querem passar no ENEM!" },
    { nome: "Pedro Lima", texto: "A interação com o Pipo torna o estudo divertido!" },
    { nome: "Juliana Costa", texto: "Aprendi muito com as explicações claras e exemplos." }
  ];
  const reviewTexto = document.getElementById("review-texto");
  const reviewNome = document.getElementById("review-nome");
  let reviewIndex = 0;

  function mostrarReview(index) {
    if(reviewTexto && reviewNome) {
      reviewTexto.style.opacity = 0;
      reviewNome.style.opacity = 0;
      setTimeout(() => {
        reviewTexto.textContent = `"${reviews[index].texto}"`;
        reviewNome.textContent = `- ${reviews[index].nome}`;
        reviewTexto.style.opacity = 1;
        reviewNome.style.opacity = 1;
      }, 500);
    }
  }
  mostrarReview(reviewIndex);
  setInterval(() => {
    reviewIndex = (reviewIndex + 1) % reviews.length;
    mostrarReview(reviewIndex);
  }, 7000);

  // Animação da logo - pulse e leve rotação
  const logo = document.querySelector(".logo img");
  if(logo){
    let pulse = true;
    setInterval(() => {
      if(pulse){
        logo.style.transform = "scale(1.05) rotate(5deg)";
      } else {
        logo.style.transform = "scale(1) rotate(0deg)";
      }
      pulse = !pulse;
    }, 3000);
  }

  // Menu recolhível para dispositivos móveis
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector("nav ul");
  if(menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("ativo");
      menuBtn.classList.toggle("ativo");
    });

    // Fecha menu ao clicar em link (mobile)
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if(navMenu.classList.contains("ativo")){
          navMenu.classList.remove("ativo");
          menuBtn.classList.remove("ativo");
        }
      });
    });
  }

  // Botões com animação de reflexo ao passar mouse
  const botoes = document.querySelectorAll("button, .botao-destaque, .botao-enviar");
  botoes.forEach(botao => {
    botao.addEventListener("mouseenter", () => {
      botao.style.transition = "all 0.3s ease";
      botao.style.boxShadow = "0 8px 20px rgba(128, 0, 255, 0.6), inset 0 0 30px rgba(255,255,255,0.5)";
      botao.style.transform = "scale(1.1)";
    });
    botao.addEventListener("mouseleave", () => {
      botao.style.boxShadow = "none";
      botao.style.transform = "scale(1)";
    });
  });

  // Suaviza scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if(target){
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Botão "Voltar ao topo" - aparece após rolar 300px
  const btnTopo = document.getElementById("btn-topo");
  if(btnTopo){
    window.addEventListener("scroll", () => {
      if(window.scrollY > 300){
        btnTopo.style.opacity = 1;
        btnTopo.style.pointerEvents = "auto";
      } else {
        btnTopo.style.opacity = 0;
        btnTopo.style.pointerEvents = "none";
      }
    });
    btnTopo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});
