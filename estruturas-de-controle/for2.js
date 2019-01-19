const notas = [7.6, 5.3, 3.5, 7.3, 2.7,]

for(let i in notas) {
  console.log(i,'=', notas[i])
}

const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 20,
  peso: 62
}

for(let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}
