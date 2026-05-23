let btn = document.getElementById('btnTarefa'); // Variável botão criar tarefa e seleciona o elemento do botão no DOM //
let viewT = document.getElementById('btnVisualizar'); // Variável botão Visualizar e seleciona o elemento do botão no DOM //
let caixa = document.getElementById('caixa'); // Variável da caixa de texto e seleciona o elemento do botão no DOM //
let texto = caixa.value; // Varável do texto digitado na caixa e captura o valor digitado nela para eventuais manipulações //

function CriarTarefa() {  
  //document.body.innerHTML = ""; // remove todo o conteúdo da página //                   // Define a função chamada CriarTarefa //
  //document.body.innerHTML += "<p>Nova tarefa criada!</p>";

  // cria um container novo
  const container = document.createElement("div");

  // cria a caixa de anotações
  const caixa = document.createElement("textarea");
  caixa.id = "caixa";
  container.appendChild(caixa);

  // cria o botão salvar logo abaixo
  const btnSalvar = document.createElement("button");
  btnSalvar.id = "btnSalvar";
  btnSalvar.textContent = "Salvar Tarefa";
  btnSalvar.onclick = SalvarTarefa; // chama a função de salvar
  container.appendChild(btnSalvar);

  // adiciona tudo ao body
  document.body.appendChild(container);
function Tarefas(){
    //alert("Aqui você verá suas tarefas criadas."); //
    document.body.innerHTML = ""; // remove todo o conteúdo da página //
    texto.innerHTML = ({caixa});
}
}
