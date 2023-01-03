const pai = {nome: 'pedro', corCarbelo: 'preto'}


const filha1 = Object.create(pai)
filha1.nome - 'ana'

console.log(filha1.corCarbelo)


const filha2 = Object.create(pai, {
    nome: {value: 'bia', writable: false, enumerable:true}

})


console.log(filha2.nome)

filha2.nome = 'carla'

console.log(`${filha2.nome} tem cabelo ${filha2.corCarbelo}`)

console.log(Object.keys(filha1))

console.log(Object.keys(filha2))

for(let key in filha2){
    // console.log(key)

    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`veio por herança ${key}`)
}


