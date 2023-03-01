// operador rest(juntar)/ spread(espalhar)
// usar resto com parâmetro de função 

// usar spread com objeto  

const funcionario = { nome: 'maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)


// usar spread com array

const grupoA = ['joão', 'pedro', 'gloria']

const grupoFinal = ['maria', ...grupoA, 'rafaela']

console.log(grupoFinal)