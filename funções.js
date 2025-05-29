/* styles.css - complemento para correções e melhorias */

/* Remove duplicidade da seção contato */
#contato {
  margin-top: 60px;
  padding: 25px 20px;
  background-color: var(--bege);
  border-radius: 10px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 15px rgba(124, 77, 255, 0.2);
}

/* Correção do menu: menos reflexo nos botões */
nav a {
  background: linear-gradient(135deg, var(--roxo) 0%, var(--roxo-escuro) 100%);
  box-shadow: none; /* Remover reflexos exagerados */
  transition: background 0.4s ease, color 0.3s ease;
}

nav a:hover, nav a:focus {
  background: linear-gradient(135deg, var(--lilas-claro), var(--roxo));
  color: var(--bege);
  box-shadow: 0 0 12px var(--roxo); /* reflexo mais sutil */
}

/* Ajustes botão modo claro/escuro */
#modo-toggle {
  background: var(--roxo-escuro);
  color: var(--bege);
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
  box-shadow: none;
}

#modo-toggle:hover {
  background-color: var(--roxo);
  box-shadow: 0 0 10px var(--roxo);
}

/* Ajustes para o modo escuro funcionar corretamente */
.dark-mode {
  --fundo: #121212;
  --texto: #eee;
  --roxo: #9575cd;
  --roxo-escuro: #512da8;
  --lilas-claro: #b39ddb;
  --bege: #2c2c2c;
  --rosa: #f48fb1;
  background-color: var(--fundo);
  color: var(--texto);
}

.dark-mode header,
.dark-mode footer,
.dark-mode nav,
.dark-mode section {
  background-color: var(--bege);
  color: var(--texto);
}

.dark-mode nav a {
  background: linear-gradient(135deg, var(--roxo-escuro) 0%, var(--roxo) 100%);
  color: var(--bege);
  box-shadow: none;
}

.dark-mode nav a:hover {
  background: linear-gradient(135deg, var(--lilas-claro), var(--roxo-escuro));
  color: var(--rosa);
  box-shadow: 0 0 12px var(--roxo-escuro);
}

.dark-mode #modo-toggle {
  background-color: var(--roxo);
  color: var(--bege);
}

.dark-mode #modo-toggle:hover {
  background-color: var(--roxo-escuro);
  box-shadow: 0 0 12px var(--roxo-escuro);
}

/* Pequenas correções gerais de espaçamento e responsividade */
@media (max-width: 700px) {
  nav a {
    font-size: 14px;
    padding: 8px 12px;
  }
  #contato {
    padding: 20px 15px;
    max-width: 90vw;
  }
}
