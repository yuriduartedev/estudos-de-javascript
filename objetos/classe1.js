class Lancamento {
  constructor(nome = 'Genérico', valor = 0){
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano){
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l))
  }

  sumario(){
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new Lancamento('Salario', 2359)
const claro = new Lancamento('Claro', -50)
const wagner = new Lancamento('Wagner', -150)
const aluguel = new Lancamento('Aluguel', -730)
const agiBank = new Lancamento('Agibank', -483)
const estacio = new Lancamento('Estacio', -316)
const internet = new Lancamento('Internet', -80)
const seguro = new Lancamento('Seguro', -95)
const contaDeLuz = new Lancamento('Luz', -120)
const agua = new Lancamento('Água', -30)
const manutencao = new Lancamento('Manutenção Moto', -50)

const contas = new CicloFinanceiro(2, 2019)
contas.addLancamentos(salario, claro, wagner, aluguel, 
agiBank, estacio, internet, seguro, contaDeLuz, agua, manutencao)
console.log('Você recebeu esse mês: ' + salario.valor);
console.log(`Após pagar todas as suas contas, você tem: ${contas.sumario()}`);
