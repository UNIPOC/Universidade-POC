// script.js

// Menu Mobile Toggle
const menuBtn = document.getElementById('menu-mobile-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navLinks.classList.toggle('mobile-active');
});

// Frases do Pipo
const frasesPipo = [
  "“Estudar é o passaporte para o futuro, e o Pipo te acompanha nessa jornada!”",
  "“Com calma e foco, você chega lá! Pipo acredita em você.”",
  "“Cada dia é uma nova oportunidade para aprender algo incrível.”",
  "“Não desista, o sucesso começa com uma boa dose de persistência.”",
  "“Aqui no Unipoc, o conhecimento é o seu melhor amigo.”",
  "“Pipo diz: relaxe, respire e estude com carinho!”",
];

const fraseElement = document.getElementById('frase-pipo');

function mudarFrase() {
  const index = Math.floor(Math.random() * frasesPipo.length);
  fraseElement.textContent = frasesPipo[index];
}

// Muda a frase a cada 10 segundos
mudarFrase();
setInterval(mudarFrase, 10000);

// Muda a frase ao carregar a página
window.addEventListener('load', mudarFrase);

// Contato: envio de formulário simulado (sem backend)
const formContato = document.getElementById('form-contato');

formContato.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = formContato.nome.value.trim();
  const email = formContato.email.value.trim();
  const mensagem = formContato.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos antes de enviar.');
    return;
  }

  // Validação básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um email válido.');
    return;
  }

  // Simulação do envio (exibir alerta)
  alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.\nResponderemos em breve para ${email}.`);

  // Resetar formulário
  formContato.reset();
});

// Alternar Modo Claro/Escuro
const modoToggle = document.getElementById('modo-toggle');

function aplicarModoSalvo() {
  const modoSalvo = localStorage.getItem('modoUnipoc');
  if (modoSalvo === 'dark') {
    document.body.classList.add('dark-mode');
    modoToggle.textContent = 'Modo Claro';
  } else {
    document.body.classList.remove('dark-mode');
    modoToggle.textContent = 'Modo Escuro';
  }
}

modoToggle.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    modoToggle.textContent = 'Modo Escuro';
    localStorage.setItem('modoUnipoc', 'light');
  } else {
    document.body.classList.add('dark-mode');
    modoToggle.textContent = 'Modo Claro';
    localStorage.setItem('modoUnipoc', 'dark');
  }
});

// Aplica o modo salvo ao carregar
window.addEventListener('DOMContentLoaded', aplicarModoSalvo);
