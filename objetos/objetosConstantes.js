// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
console.log(pessoa)
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'
delete pessoa.nome

console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Jose' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)