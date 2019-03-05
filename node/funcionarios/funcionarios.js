const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
  const funcionarios = response.data

  const getPais = funcionarios => funcionarios.pais === 'China'
  const getGenero = funcionarios => funcionarios.genero === 'F'
  const getSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
  }
 

  const func = funcionarios
    .filter(getPais)
    .filter(getGenero)
    .reduce(getSalario)
    console.log(func);      
  
  //console.log(funcionarios);
  
})


