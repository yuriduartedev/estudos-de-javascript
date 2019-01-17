function tratarErroELancar(erro) {
  //throw new Error('Ocorreu um erro inesperado, nossa equipe técnica já foi acionada para resolve-lo!')
  // throw 10
  // throw true
  // throw 'messagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}

function imprimirNomeGritado(obg) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  }  catch (e) {
    tratarErroELancar(e)
  } finally {
    console.log('final')
  }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)