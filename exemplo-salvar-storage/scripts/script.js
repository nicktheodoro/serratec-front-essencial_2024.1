const btnAdicionarCarrinho = document.querySelector("button");
btnAdicionarCarrinho.addEventListener("click", adicionarAoCarrinho);

function adicionarAoCarrinho() {
  const nome = document.querySelector("h2").textContent;
  const valorString = document.querySelector("#valorTenisNike").textContent;
  const valor = Number(valorString);
  const quantidadeString = document.querySelector("input").value;
  const quantidade = Number(quantidadeString);

  const produto = {
    nome,
    valor,
    quantidade,
  };
  
  const carrinhoString = localStorage.getItem('carrinho')
  const carrinho = JSON.parse(carrinhoString);

  carrinho.push(produto);
  carrinho.push(produto);

  localStorage.setItem('carrinho', carrinho)
}

