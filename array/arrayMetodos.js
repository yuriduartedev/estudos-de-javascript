const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento do Array!
console.log(pilotos);

pilotos.push('Verstappen') // Adiciona um elemento no final do Array.
console.log(pilotos);

pilotos.shift() // Remove o primeiro elemento do Array!
console.log(pilotos);

pilotos.unshift('Hamilton') // Adiciona um elemento no início da lista
console.log(pilotos);

// splice pode adicionar e remover elementos do Array
// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);
// Remover
pilotos.splice(4, 1)
console.log(pilotos);
// Adicionar e Remover 
pilotos.splice(2, 1, 'Raikkonen')
console.log(pilotos);

const algunsPilotos = pilotos.slice(2) // Gera um novo Array a partir do índice especificado como parâmetro.
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4) // Gera um novo Array a partir do índice especificado como parâmetro até o indice final especificado -1.
console.log(algunsPilotos2);

