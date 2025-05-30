// Função para alternar abas
function mostrarAba(abaId) {
  const conteudos = document.querySelectorAll('.conteudo-aba');
  conteudos.forEach(div => div.style.display = 'none');

  document.getElementById(abaId).style.display = 'block';

  const botoes = document.querySelectorAll('.abas button');
  botoes.forEach(btn => btn.classList.remove('ativo'));

  document.querySelector(`[data-aba="${abaId}"]`).classList.add('ativo');
}

// Inicializa exibindo a aba padrão "escola"
document.addEventListener('DOMContentLoaded', () => {
  mostrarAba('escola');

  // Configura toggle das perguntas frequentes
  const perguntas = document.querySelectorAll('.faq-question');
  perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
      const resposta = pergunta.nextElementSibling;
      const aberta = resposta.style.display === 'block';
      
      // Fecha todas as respostas
      document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');

      // Abre a clicada se estava fechada
      if (!aberta) {
        resposta.style.display = 'block';
      }
    });
  });

  // Botão voltar
  const botaoVoltar = document.getElementById('voltar-btn');
  if (botaoVoltar) {
    botaoVoltar.addEventListener('click', e => {
      e.preventDefault();
      window.location.href = 'index.html'; // Ajuste se a página principal tiver outro nome
    });
  }

  // Envio do formulário
  const formContato = document.getElementById('form-contato');
  const statusEnvio = document.getElementById('status-envio');

  formContato.addEventListener('submit', e => {
    e.preventDefault();

    const nome = formContato.nome.value.trim();
    const email = formContato.email.value.trim();
    const mensagem = formContato.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      statusEnvio.textContent = 'Por favor, preencha todos os campos.';
      statusEnvio.style.color = 'red';
      return;
    }

    // Monta o link para envio de email
    const destinatario = 'universidadepoc@gmail.com'; // Coloque seu email aqui
    const assunto = encodeURIComponent('Contato via formulário do site');
    const corpo = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);

    // Abre o cliente de email com os campos preenchidos
    window.location.href = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;

    // Mostra mensagem de sucesso
    statusEnvio.textContent = 'Abrindo seu cliente de email para envio da mensagem...';
    statusEnvio.style.color = '#5A3A8B';

    formContato.reset();
  });
});
