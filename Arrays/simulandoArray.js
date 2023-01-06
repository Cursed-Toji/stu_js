const quaseArray = { 0: 'rafaela', 1: 'ana', 2: 'bia' }
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])