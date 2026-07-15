// Pega a linha e a bolinha que já existem no HTML
const linha = document.getElementById('linha1');
const bolinha = document.getElementById('bolinha');

// Descobre o "comprimento total" dessa linha
const comprimento = linha.getTotalLength();

// Essa variável guarda o progresso atual (começa em 0, vai até 1)
let progresso = 0;

function animar() {
  // Aumenta um pouquinho o progresso a cada execução
  progresso += 0.005;

  // Quando chega no fim da linha (progresso = 1), volta pro começo (0)
  if (progresso > 1) {
    progresso = 0;
  }

  // Pergunta pra linha: "qual ponto (x,y) fica em X% do caminho?"
  const ponto = linha.getPointAtLength(progresso * comprimento);

  // Move a bolinha pra esse ponto
  bolinha.setAttribute('cx', ponto.x);
  bolinha.setAttribute('cy', ponto.y);
  bolinha.style.opacity = 1;

  // Pede pro navegador chamar essa mesma função de novo, no próximo quadro (frame)
  requestAnimationFrame(animar);
}

// Começa a animação
animar();