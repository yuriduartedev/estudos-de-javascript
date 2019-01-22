// Factory é uma função que retorna um objeto.
// Factory simples
function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}

console.log(criarPessoa())

function criarProduto(nome, preco) {
  return {
    nome: nome,
    preco: preco,
    desconto: '10%'
  }
}

console.log(criarProduto('Caneta', 2))