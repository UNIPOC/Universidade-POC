// calculadora.js - versão com 6 perguntas e cálculo mais complexo

document.addEventListener("DOMContentLoaded", () => {
  const etapas = Array.from(document.querySelectorAll(".etapa"));
  const resultadoSection = document.getElementById("resultado");
  const planetasQuantidade = document.getElementById("planetas-quantidade");
  const mensagemFinal = document.getElementById("mensagem-final");
  const listaDicas = document.getElementById("lista-dicas");
  const botaoReiniciar = document.getElementById("botao-reiniciar");
  const botaoVoltar = document.getElementById("voltar-btn");

  // Armazena respostas e pesos
  let respostas = {
    transporte: null,
    alimentacao: null,
    consumo: null,
    energia: null,
    lixo: null,
    agua: null,
  };

  // Dicas para diferentes níveis de impacto
  const dicas = [
    "Prefira caminhar, usar bicicleta ou transporte público.",
    "Reduza o consumo de carne e prefira alimentos vegetais.",
    "Evite produtos descartáveis, prefira reutilizáveis.",
    "Use fontes de energia renovável sempre que possível.",
    "Separe o lixo para reciclagem e compostagem.",
    "Economize e reutilize água sempre que puder.",
  ];

  // Função para mostrar só a etapa n
  function mostrarEtapa(n) {
    etapas.forEach((etapa) => {
      etapa.classList.toggle("escondido", Number(etapa.dataset.etapa) !== n);
    });
    resultadoSection.classList.add("escondido");
  }

  // Calcula resultado final com ponderações diferentes por categoria
  function calcularResultado() {
    // Pesos de importância para cada categoria (valores entre 1 e 2)
    const pesos = {
      transporte: 1.5,
      alimentacao: 1.8,
      consumo: 1.3,
      energia: 1.2,
      lixo: 1.0,
      agua: 1.0,
    };

    // Soma ponderada dos valores escolhidos
    let somaPonderada = 0;
    let pesoTotal = 0;
    for (const key in respostas) {
      if (respostas[key] === null) return; // Algo errado, pergunta não respondida
      somaPonderada += respostas[key] * pesos[key];
      pesoTotal += pesos[key];
    }

    // Normaliza para escala 1 a 5 (planetas)
    let mediaPonderada = somaPonderada / pesoTotal;

    // Mapeia para planetas entre 1 e 5 arredondado para cima
    let planetasNecessarios = Math.ceil(mediaPonderada);
    if (planetasNecessarios < 1) planetasNecessarios = 1;
    if (planetasNecessarios > 5) planetasNecessarios = 5;

    // Mensagens personalizadas
    let mensagem = "";
    switch (planetasNecessarios) {
      case 1:
        mensagem =
          "Parabéns! Seu estilo de vida é muito sustentável. O planeta agradece 🌎💜";
        break;
      case 2:
        mensagem =
          "Bom trabalho! Com algumas melhorias você pode reduzir ainda mais sua pegada.";
        break;
      case 3:
        mensagem =
          "Cuidado! Seu estilo de vida exige recursos de 3 planetas. Pense em mudanças!";
        break;
      case 4:
        mensagem =
          "Alerta vermelho! Você precisaria de 4 planetas para manter seu consumo.";
        break;
      case 5:
        mensagem =
          "Extremo impacto! Se todo mundo fosse como você, precisaríamos de 5 planetas 😱";
        break;
    }

    // Preenche lista de dicas, destacando as mais importantes conforme o resultado
    listaDicas.innerHTML = "";
    dicas.forEach((dica, i) => {
      const li = document.createElement("li");
      li.textContent = dica;
      // Realce progressivo a partir do 3 planetas
      if (planetasNecessarios >= 3 + i / 2) {
        li.style.fontWeight = "700";
        li.style.color = "#D9655F";
      }
      listaDicas.appendChild(li);
    });

    planetasQuantidade.textContent = planetasNecessarios;
    mensagemFinal.textContent = mensagem;

    resultadoSection.classList.remove("escondido");
  }

  // Configura opções para clicarem e avançar
  function configurarOpcoes() {
    const opcoes = document.querySelectorAll(".card-opcao");
    opcoes.forEach((opcao) => {
      opcao.addEventListener("click", () => {
        const pergunta = opcao.dataset.pergunta;
        const peso = Number(opcao.dataset.peso);
        respostas[pergunta] = peso;

        // Marca seleção visualmente, só um por pergunta
        document.querySelectorAll(`.card-opcao[data-pergunta="${pergunta}"]`).forEach((el) => {
          el.classList.remove("selected");
        });
        opcao.classList.add("selected");

        // Avança para próxima etapa ou calcula resultado
        const etapaAtual = Number(opcao.closest(".etapa").dataset.etapa);
        if (etapaAtual < etapas.length) {
          mostrarEtapa(etapaAtual + 1);
        } else {
          calcularResultado();
          etapas.forEach((e) => e.classList.add("escondido"));
        }
      });
    });
  }

  // Botão reiniciar
  botaoReiniciar.addEventListener("click", () => {
    respostas = {
      transporte: null,
      alimentacao: null,
      consumo: null,
      energia: null,
      lixo: null,
      agua: null,
    };
    // Remove seleções visuais
    document.querySelectorAll(".card-opcao.selected").forEach((el) => {
      el.classList.remove("selected");
    });
    mostrarEtapa(1);
  });

  // Botão voltar para página inicial
  botaoVoltar.addEventListener("click", () => {
    window.location.href = "index.html"; // Ajuste se necessário
  });

  mostrarEtapa(1);
  configurarOpcoes();
});
