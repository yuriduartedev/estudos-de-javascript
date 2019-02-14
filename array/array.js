console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo'
aprovados.push('Pedro')
console.log(aprovados[3]);
console.log(aprovados[4]);
console.log(aprovados.length);
aprovados[9]= 'Rafael'
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort()
console.log(aprovados);

delete aprovados[1]
console.log(aprovados);
console.log(aprovados[1]);

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // Primeiro parâmetro é o índice do array, Segundo parâmetro é a quantidade que deseja excluir e caso queira adicionar basta colocar depois do segundo parâmetro separados por vírgula.
console.log(aprovados);


