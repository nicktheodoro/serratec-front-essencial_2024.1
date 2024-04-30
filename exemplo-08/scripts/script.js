const btnCadastrar = document.getElementById("btn-cadastrar");

btnCadastrar.addEventListener("click", validarFormulario);

function validarFormulario(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const curso = document.getElementById("curso").value;
  const dataNascimento = document.getElementById("idade").value;

  if (curso === "") {
    alert("escolhe um curso pelo menos");
  }

  const telefoneRegex = /^\d{10,}$/; // formato simplificado, pode ser ajustado conforme necessário
  if (!telefoneRegex.test(telefone)) {
    alert("Por favor, insira um número de telefone válido.");
    return false;
  }

  const form = {
    nome,
    email,
    telefone,
    curso,
    dataNascimento,
  };
}
