const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'Ipad Pro', preco: 4499, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.99, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

console.log(produtos.filter(function(p){
  return false
}));

const fragil = produtos => produtos.fragil === true
const caro = produtos => produtos.preco >= 500

const resultado = produtos.filter(fragil).filter(caro)
console.log(resultado);