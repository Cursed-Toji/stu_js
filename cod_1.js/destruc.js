const pessoa ={
    nome: 'Jin',
    idade: 21,
    endereco: {
        log: 'rua',
        numero: 2245
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, ben = true} = pessoa
console.log(sobrenome, ben)

const { endereco: { log, numero, ceep} } = pessoa
console.log(log, numero, ceep)

// erro > const { conta: { ag, num} } = pessoa
// console.log(ag, num)