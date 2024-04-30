const carrinho = JSON.parse(localStorage.getItem("carrinho"));

const body = document.querySelector("body");

let total = 0;
carrinho.forEach((item) => {
  const div = document.createElement("div");

  const h2Nome = document.createElement("h2");
  h2Nome.textContent = item.nome;

  const h3Quantidade = document.createElement("h3");
  h3Quantidade.textContent = item.quantidade;

  const h3Valor = document.createElement("h3");
  h3Valor.textContent = item.valor;

  div.appendChild(h2Nome);
  div.appendChild(h3Quantidade);
  div.appendChild(h3Valor);
  body.appendChild(div);

  total += (item.valor * item.quantidade)
});

const h1Total = document.createElement('h1');
h1Total.textContent = total.toFixed(2);

body.appendChild(h1Total)


const btnFinalizarCompra = document.querySelector("#finalizarCompra");
btnFinalizarCompra.addEventListener("click", finalizarCompra);
