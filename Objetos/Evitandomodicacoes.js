
// Object.preventExtensions > não da pra aumentar a quantidade de atributos
const produto = Object.preventExtensions({
    nome :'qualquer' , preco: 1.99, tag: 'promotion'
})

console.log('extensível', Object.isExtensible(produto))


produto.nome = 'borracha'
produto.descricao = ' borracha escolar'

delete produto.tag
console.log(produto)

//objetc.seal selar objetos 
// não consegue adicionar/excluir atributos do objeto > possível modificar os atributos existentes


const pessoa = {nome: 'Juliana', idade: 35} 
Object.seal(pessoa)
console.log('selado', Object.isSealed(pessoa))


pessoa.sobrenome = 'silvia'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)

//Object.freeze = selado + valores constantes 
