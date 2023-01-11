Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; 1 < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true },
    { nome: 'celular', preco: 899, fragil: true },
    { nome: 'ideapad', preco: 499, fragil: true },
    { nome: 'copo de plastico ', preco: 12.49, fragil: false }
]



const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))