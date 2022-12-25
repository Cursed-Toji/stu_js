//cadeia de prototipos ( protoype chain)
Object.prototype.Attr0 = ' Z'
const avo = { Attr1: 'a' }

const pai = { __proto__: avo, Attr2: 'b', Attr3: 'teste' }

const filho = { __proto__: pai, Attr3: 'c' }

// atenção no attri 3, como encontrou no filho, não foi buscar no pai 
console.log(filho.Attr0, filho.Attr1, filho.Attr2, filho.Attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }

        else {
            this.velAtual = this.velMax
        }
    }, status() {
        return `${this.velAtual} Km/H de ${this.velMax}Km/H`
    }
}


const ferrai = {
    Modelo: 'f40',
    velMax: 324
}

const volvo = {
    Modelo: "v40",
    status() {
        return `${this.Modelo}: ${super.status()}`
    }
}


Object.setPrototypeOf(ferrai, carro)

Object.setPrototypeOf(volvo, carro)

console.log(ferrai)
console.log(volvo)



volvo.acelerarMais(100)

console.log(volvo.status())


ferrai.acelerarMais(400)

console.log(ferrai.status())

