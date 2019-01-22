const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem o uso de CallBack
const notasBaixas = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}
console.log(notasBaixas)

// Com o uso de CallBack
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})
console.log(notasBaixas2)

// Com o uso de CallBack com Arrow Function
const notasMenorQue7 = nota => nota < 7 // Essa variável é dispensável, só utilizamos para o código ficar mais claro!
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)
