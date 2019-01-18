function soBoaNoticia(nota) {
  if(nota >= 7) {
    console.log('Aprovado com ' + nota)
  }
}

soBoaNoticia(6.5)
soBoaNoticia(8.5)

function seForVerdadeEuFalo(valor) {
  if(valor) {
    console.log('É veradde... ' + valor)
  }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})