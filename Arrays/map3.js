Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; 1 < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "cardeno", "preco": 12.90}',
    '{"nome": "lapis", "preco": 1.15}',
    '{"nome": "caneta", "preco": 7.15}'
]


const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

/*OBSERVAÇÃO MUITO IMPORTANTE
#####################################
Se eu colocar preço na const/json lá em cima vai dar erro/ puxar  undefined,
 deixar igual a uma variavel
 */
const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)