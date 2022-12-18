const notas = [7.7, 9.5, 6.5, 8.9, 7.1, 3.2, 4.5, 1, 0]


// sem usar callback

let notasBaixas = []

for (let i in notas) {
    if (notas[i] <= 7) {
        notasBaixas.push(notas[i])

    }
}


console.log(notasBaixas)

// com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota <= 7
})

console.log(notasBaixas2)

const MenorQueSete = nota => nota < 7

const notasBaixas3 = notas.filter(MenorQueSete)
console.log(notasBaixas3)