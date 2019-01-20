// Função em JS é First-Class Object (Citzens)
// Higher-order funciton

// Criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) {return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {} 
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar uma função como parametro de outra função
function run(fun) {
  fun()
}

run(function () {console.log('Executando...')})

// Retornar uma função como parâmetro
function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

// Possibilidade de chamada 1
soma(2, 3)(4)

// Possibilidade de chamada 2
const cincoMais = soma(2, 3)
cincoMais(4)