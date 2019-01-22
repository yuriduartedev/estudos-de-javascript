function Pessoa() {
  this.idade = 0

  setInterval(() => {
    this.idade++
		console.log('​Pessoa -> this.idade', this.idade)
  }, 1000)
}

new Pessoa