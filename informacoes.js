// Controle das abas
const botoesAbas = document.querySelectorAll(".abas button");
const conteudosAbas = document.querySelectorAll(".conteudo-aba");

botoesAbas.forEach((botao, i) => {
  botao.addEventListener("click", () => {
    // Remove ativo de todos
    botoesAbas.forEach(b => b.classList.remove("ativo"));
    conteudosAbas.forEach(c => (c.style.display = "none"));

    // Ativa o clicado e mostra o conteúdo
    botao.classList.add("ativo");
    conteudosAbas[i].style.display = "block";
  });
});

// Inicializa mostrando a primeira aba
if (botoesAbas.length > 0) {
  botoesAbas[0].classList.add("ativo");
  conteudosAbas[0].style.display = "block";
}

// FAQ - Toggle perguntas frequentes
const faqs = document.querySelectorAll(".faq-question");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    const resposta = faq.nextElementSibling;
    const aberto = resposta.style.display === "block";

    // Fecha todas as respostas abertas
    document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");

    // Alterna a resposta clicada
    resposta.style.display = aberto ? "none" : "block";
  });
});

// Formulário de contato
const formContato = document.getElementById("form-contato");
const statusEnvio = document.getElementById("status-envio");

formContato.addEventListener("submit", (e) => {
  e.preventDefault();

  // Dados do formulário
  const nome = formContato.nome.value.trim();
  const email = formContato.email.value.trim();
  const mensagem = formContato.mensagem.value.trim();

  // Validação simples
  if (!nome || !email || !mensagem) {
    statusEnvio.textContent = "Por favor, preencha todos os campos.";
    statusEnvio.style.color = "red";
    return;
  }

  // Construir corpo do email (para mailto)
  const assunto = encodeURIComponent(`Mensagem do site UNIPOC - ${nome}`);
  const corpo = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`);

  // Usar mailto para abrir o cliente de email do usuário
  const mailtoLink = `mailto:seuemail@unipoc.com?subject=${assunto}&body=${corpo}`;

  window.location.href = mailtoLink;

  statusEnvio.textContent = "Seu cliente de email foi aberto para enviar a mensagem.";
  statusEnvio.style.color = "#5d3b8c";

  // Opcional: limpar campos após abrir email
  formContato.reset();
});
