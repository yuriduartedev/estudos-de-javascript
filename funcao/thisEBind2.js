function Pessoa() {
  this.idade = 0

  const self = this // Usando a const self você consegue driblar o fato do this mudar de acordo com o local em que foi descrito.
  setInterval(function() {
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/, 50) 
}

new Pessoa