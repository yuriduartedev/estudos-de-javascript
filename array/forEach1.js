const aprovados = ['Rafael', 'Ana', 'Paulo', 'Pedro']

aprovados.forEach(function(nome, indice) { // A função callback que você passa no forEach ela recebe 3 parâmetros (Nome, indice e Array)
  console.log(`${indice + 1}) ${nome}`);   
})

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados)
