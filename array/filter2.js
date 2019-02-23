Array.prototype.filter2 = function(callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i])
    }    
  }
  return newArray
}

const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'Ipad Pro', preco: 4499, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.99, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

const fragil = produtos => produtos.fragil === true
const caro = produtos => produtos.preco >= 2500

const resultado = produtos.filter2(fragil).filter2(caro)
console.log(resultado);