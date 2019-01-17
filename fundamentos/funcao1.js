// Funcao sem retorno
function imprimirSoma(n1, n2){
  result = n1 + n2
  console.log(result)
}

imprimirSoma(2, 5)
imprimirSoma(2)
imprimirSoma(2, 30, 4, 5, 6, 7)
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1){
  return a + b
}

console.log(soma(2,12))
console.log(soma(1))
console.log(soma())