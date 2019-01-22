console.log(soma(3, 4))

// function declaration 
function soma(x, y) {
  return x + y
}

function subtrai(a, b) {
  return a - b
}
console.log(subtrai(10, 2))

// função expression
const sub = function (x, y) {
  return x - y
}
console.log(sub(3, 4))

const divide = function (a, b) {
  return a / b
}
console.log(divide(10, 2))

const multiplica = function (a, b) {
  return a * b
}
console.log(multiplica(10, 2))

// named function expression
const mult = function mult(x, y) {
  return x * y
}
console.log(mult(3, 4))