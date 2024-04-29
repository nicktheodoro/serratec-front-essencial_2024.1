const botaoLigar = document.querySelector("#botao-alternador");
botaoLigar.addEventListener("click", altenador);

function altenador() {
  let fundoAlternador = document.querySelector(".ligar-desligar");
  fundoAlternador.classList.toggle("luz-ligada");

  if (this.innerHTML.trim() == "Ligar") {
    this.innerHTML = "Desligar";
  } else {
    this.innerHTML = "Ligar";
  }
}

const campoNome = document.querySelector("#form-nome");
campoNome.addEventListener("keydown", ativaBotao);

function teste() {
  alert("oi");
}

function ativaBotao() {
  const botaoEnviar = document.querySelector("#botao-enviar");

  if (this.value.length >= 5) {
    botaoEnviar.classList.remove("desabilitado");
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.classList.add("desabilitado");
    botaoEnviar.disabled = true;
  }
}

const botaoGirar = document.getElementById("botao-girar");
botaoGirar.addEventListener("click", girarTela);

function girarTela() {
  const telaInteira = document.querySelector("body");

  telaInteira.style.transform = "rotate(360deg)";
  telaInteira.style.transition = "all 1.5s linear";
}

function trocaFundo(imagemfundo) {
  console.log(imagemfundo);
  let fundoModulo = document.querySelector("#fundo-imagens");
  fundoModulo.style.backgroundImage = `url(./img/${imagemfundo})`;
}
