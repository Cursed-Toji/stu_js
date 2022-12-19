function principal(valor1, valor2) {
    let resultado = valor1 / valor2
    let resto = valor1 % 2

    return resultado, resto
}


console.log(principal(11, 2))

function principal2(valor3, valor4) {
    console.log('resultado' + Math.floor(valor3 / valor4))
    console.log(`sobra ${valor3 % valor4}`)

}

principal2(11, 4)


