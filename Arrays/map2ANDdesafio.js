const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "cardeno", "preco": 12.90}',
    '{"nome": "lapis", "preco": 1.15}',
    '{"nome": "caneta", "preco": 7.15}'
]

//retornar um array apenas com os preços.

// carrinho.splice(1, 2)


// const Object = JSON.parse(carrinho)

// delete carrinho.nome
// console.log(carrinho)

// carrinho = JSON.stringify(carrinho)


// function RemoverNome(nome) {
//     return nome.map(function (obj) {
//         if (obj.nome != nome) {
//             return obj
//         }
//         else {
//             return false
//         }
//     }).filter(Boolean)
// }


// console.log(RemoverNome(carrinho))





// metodo do professor > metodo correto 


const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

/*OBSERVAÇÃO MUITO IMPORTANTE
#####################################
Se eu colocar preço na const/json lá em cima vai dar erro/ puxar  undefined,
 deixar igual a uma variavel
 */
const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)