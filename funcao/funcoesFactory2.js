function criarProduto(nome, preco) {
  return {
    nome, 
    preco, 
    descontro: 0.1
  }
}

console.log(criarProduto('Caneta', 2.0,))
console.log(criarProduto('Iphone', 6.999,))
console.log(criarProduto('Ipad', 1.999,))
console.log(criarProduto('Macbook', 14.999,))
console.log(criarProduto('Imac', 24.999,))