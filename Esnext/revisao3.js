// es8 objetc.values / objec.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhorias na notação literal 

const nome = 'carla'
const pessoa = {
    nome,
    ola() {
        return 'oi gente'
    }
}


console.log(pessoa.nome, pessoa.ola())

//class

class animal { }
class cachorro extends animal {
    falar() {
        return 'auau'
    }
}

console.log(new cachorro().falar())