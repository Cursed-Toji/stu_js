const prodruto = new Object
prodruto.nome = 'cadeira'
prodruto['marca do produto'] = 'generica'
prodruto.preco = 230

console.log(prodruto)
delete prodruto.preco
delete prodruto['marca do produto']

console.log(prodruto)


const carro = {
    modelo: 'audi',
    valor: 56000,
    dono: {
        nome: 'victor',
        idade: 22,
        enndereco: {
            rua: "estrada",
            numero: 2245
        }
    },

    condutores: [{
        nome: 'junior',
        idade: 19,
    },
    {
        nome: 'ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        //..
    }
}

carro.dono.enndereco.numero = 1000

console.log(carro)

delete carro.dono.enndereco
delete carro.condutores
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)