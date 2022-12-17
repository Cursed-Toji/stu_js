function fun1() {

}

//armazenar em uma variavel

const fun2 = function () { }
//armazenar dentro de um array


const array = [function (a, b) { return a + b }, fun1, fun2]

console.log(array[0](2, 3))

const obj = {}

obj.falar = function () { return 'opa' }

console.log(obj.falar())


//passar func como param

function run(fun) {
    fun()
}

run(function () { console.log("executando") })

// Uma função pode retornar/conter uma função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)


const cincoMais = soma(2, 4)

cincoMais(4)

const teste = 1