const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa']
//pop retira o ultimo item do array
pilotos.pop()

console.log(pilotos)

pilotos.push('verstappen')
console.log(pilotos)

pilotos.shift()//remove o primeiro item do array
console.log(pilotos)

pilotos.unshift('Hamilton')

console.log(pilotos)

//splice pode adicionar ou remover


//adicionar

pilotos.splice(2, 0, 'botas', 'massa')
console.log(pilotos)

//remover

pilotos.splice(3, 1)

console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2)// cria um novo array

console.log(algunsPilotos1)


const algunsPilotos2 = pilotos.slice(1, 4)

console.log(algunsPilotos2)