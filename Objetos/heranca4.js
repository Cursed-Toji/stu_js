function meuobjeto() {}
    console.log(meuobjeto.prototype)

    const obj1 = new meuobjeto

    const obj2 = new meuobjeto


    console.log(obj1.__proto__ === obj2.__proto__)


    console.log(meuobjeto.prototype === obj1.__proto_)


    meuobjeto.prototype.nome = 'Anônimo'
meuobjeto.prototype.falar = function () {
    console.log(`bom dia. meu nome é ${this.nome}`)
}


obj1.falar()
obj2.nome = 'rafa'

obj2.falar()

const obj3 = {}
obj3.__proto__ = meuobjeto.prototype

obj3.nome = "obj3"
obj3.falar()

//resumo

console.log((new meuobjeto).__proto__ === meuobjeto.prototype)

console.log(meuobjeto.__proto__ === Function.prototype)

console.log(Function.prototype.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ === null)