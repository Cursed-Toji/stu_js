const pessoa = { nome: 'Joao' }

pessoa.nome = 'pedro'

console.log(pessoa)

// pessoa = { nome: 'ana' }
//Se freezar não da pra mudar + nd
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = ' rua 123'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ Nome: 'joao' })
console.log(pessoaConstante)