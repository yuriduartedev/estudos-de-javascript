// Closures é o escopo criado quanndo você define uma função declarada.
// Esse escopo permite a função acessar ae manipular variáveis externas à função.

// Contexto léxico em ação

const x = 'Global'

function fora() {
  const x = 'Local'
  function dentro() {
    return x
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())