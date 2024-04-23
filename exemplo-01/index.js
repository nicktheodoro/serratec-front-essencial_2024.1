function carregarMensagem() {
  let mensagem = document.getElementById("container-msg");

  let data = new Date();
  let hora = data.getHours();
  console.log(hora);

  mensagem.innerText = `Agora são ${hora} horas.`;
}

function carregarImagem() {
  let imagem = document.getElementById("img");

  let data = new Date();
  let hora = 18;

  if (hora >= 0 && hora < 12) {
    imagem.src = "./img/manha.jpg";
  } else if (hora >= 12 && hora < 18) {
    imagem.src = "./img/dia.jpg";
  } else {
    imagem.src = "./img/noite.jpg";
  }
}

carregarMensagem();
carregarImagem();
