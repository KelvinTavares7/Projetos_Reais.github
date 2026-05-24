// Seleciona os elementos principais do HTML
const btnCriar = document.getElementById("btnTarefa");
const btnVisualizar = document.getElementById("btnVisualizar");
const btnSalvar = document.getElementById("btnSalvar");
const caixa = document.getElementById("caixa");
const tarefasContainer = document.getElementById("tarefasContainer");

// Array para armazenar as tarefas digitadas
let tarefas = [];

/**
 * Função para criar uma nova tarefa
 * Exibe a caixa de texto para digitar a anotação
 */
function CriarTarefa() {
  caixa.style.display = "block"; // mostra a caixa
  caixa.value = "";              // limpa o conteúdo anterior
  btnSalvar.style.display = "none"; // botão salvar só aparece quando digitar
}

/**
 * Função para salvar a tarefa digitada
 * Adiciona ao array e oculta a caixa
 */
function SalvarTarefa() {
  const texto = caixa.value.trim();

  if (texto !== "") {
    tarefas.push(texto); // adiciona ao array
    alert("Tarefa salva com sucesso!");
    caixa.style.display = "none"; // esconde a caixa
    btnSalvar.style.display = "none"; // esconde o botão salvar
  } else {
    alert("Digite uma tarefa antes de salvar.");
  }
}

/**
 * Função para visualizar todas as tarefas salvas
 * Mostra em lista dentro do container
 */
function Tarefas() {
  // limpa o container antes de mostrar
  tarefasContainer.innerHTML = "";

  if (tarefas.length === 0) {
    tarefasContainer.innerHTML = "<p>Nenhuma tarefa salva ainda.</p>";
    return;
  }

  // cria uma lista de tarefas
  const lista = document.createElement("ul");
  tarefas.forEach((tarefa) => {
    const item = document.createElement("li");
    item.textContent = tarefa;
    lista.appendChild(item);
  });

  tarefasContainer.appendChild(lista);
}

/**
 * Evento para mostrar o botão salvar somente quando digitar algo
 */
caixa.addEventListener("input", () => {
  if (caixa.value.trim() !== "") {
    btnSalvar.style.display = "inline-block";
  } else {
    btnSalvar.style.display = "none";
  }
});