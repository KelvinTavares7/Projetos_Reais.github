// Referências globais
const ct = document.getElementById("Criar-Tarefa");
const mt = document.getElementById("Tarefas");
const st = document.getElementById("Salvar");
const container = document.getElementById("container");
const lista = document.getElementById("listaTarefas");

// Inicialmente esconde o botão salvar
st.classList.remove("visivel");

// Função para criar a caixa de texto
function criarTarefa() {
  ct.addEventListener("click", () => {
    // Remove caixa anterior se existir
    const existente = document.getElementById("caixaTexto");
    if (existente) existente.remove();

    // Cria nova caixa
    const caixaTexto = document.createElement("input");
    caixaTexto.type = "text";
    caixaTexto.id = "caixaTexto";
    caixaTexto.placeholder = "Digite algo aqui...";
    caixaTexto.style.cssText = `
      width: 300px;
      height: 30px;
      margin: 20px;
      border: 2px solid #000;
      border-radius: 7px;
    `;

    container.innerHTML = ""; // limpa container
    container.appendChild(caixaTexto);
    container.appendChild(st); // botão logo abaixo da caixa

    // Esconde lista ao criar nova tarefa
    lista.innerHTML = "";
    lista.style.display = "none";
    st.classList.remove("visivel");

    // Só mostra o botão salvar quando começar a digitar
    caixaTexto.addEventListener("input", () => {
      if (caixaTexto.value.trim() !== "") {
        st.classList.add("visivel");
      } else {
        st.classList.remove("visivel");
      }
    });
  });
}

// Função para salvar tarefa
function salvarTarefa() {
  st.addEventListener("click", () => {
    const caixaTexto = document.getElementById("caixaTexto");
    if (!caixaTexto) return;

    const valor = caixaTexto.value.trim();
    if (valor !== "") {
      let tarefas = JSON.parse(localStorage.getItem("Tarefas")) || [];
      tarefas.push({ texto: valor, concluida: false });
      localStorage.setItem("Tarefas", JSON.stringify(tarefas));
      alert("Tarefa salva: " + valor);

      // Remove caixa e oculta botão salvar
      caixaTexto.remove();
      st.classList.remove("visivel");
    }
  });
}

// Função para mostrar tarefas
function mostrarTarefas() {
  mt.addEventListener("click", () => {
    // Remove a caixa de texto se existir
    const existente = document.getElementById("caixaTexto");
    if (existente) existente.remove();
    st.classList.remove("visivel");

    let tarefas = JSON.parse(localStorage.getItem("Tarefas")) || [];
    lista.innerHTML = "";
    lista.style.display = "block";

    if (tarefas.length > 0) {
      tarefas.forEach((tarefaObj, index) => {
        const li = document.createElement("li");

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefaObj.concluida;

        // Texto da tarefa
        const span = document.createElement("span");
        span.textContent = tarefaObj.texto;
        span.style.marginLeft = "10px";
        if (tarefaObj.concluida) {
          span.style.textDecoration = "line-through";
        }

        checkbox.addEventListener("change", () => {
          tarefas[index].concluida = checkbox.checked;
          localStorage.setItem("Tarefas", JSON.stringify(tarefas));
          span.style.textDecoration = checkbox.checked ? "line-through" : "none";
        });

        // Botão excluir
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "❌";
        btnExcluir.style.marginLeft = "10px";
        btnExcluir.addEventListener("click", () => {
          tarefas.splice(index, 1);
          localStorage.setItem("Tarefas", JSON.stringify(tarefas));
          li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(btnExcluir);
        lista.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = "Nenhuma tarefa salva ainda.";
      lista.appendChild(li);
    }
  });
}

// Inicializa
criarTarefa();
salvarTarefa();
mostrarTarefas();