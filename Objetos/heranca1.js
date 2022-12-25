const ferrai = {
    modelo: 'f4',
    velMax: 324
}


const volvo = {
    modelo: 'v40',
    velMax: 200
}
//prototipo do objeto > pai> avo  assim vai
console.log(ferrai.__proto__)
console.log(ferrai.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)


function MeuObjeto() { }

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)