function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `Rs${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })

    return resultado.join('')
}


const preco = 29.99 
const precoParcela = 11.8796

console.log(real`1x de ${preco} ou 3x de ${precoParcela}. `) 