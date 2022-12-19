//toFixed(2)

function fun3(valor1, valor2) {
    const valor3 = valor1 + valor2
    const total = valor3.toFixed(2)
    return total
}

console.log(fun3(0.30000000000000004, 3))


//metodo do professor 
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)