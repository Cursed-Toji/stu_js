const obj1 = {}
console.log(obj1)

console.log(typeof Object, typeof new Object)

const obj2 = new Object

console.log(obj2)

function produto(nome, preco, desc) {
    // colocando o this o atributo fica publica 
    this.nome = nome
    this.getPrecoComDesconto = () => {
        // encapsulados
        return preco * (1 - desc)
    }
}

const p1 = new produto('caneta', 7.99, .015)

const p2 = new produto('notebook', 2999.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


//Função factory

function CriaFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }

}


const f1 = CriaFuncionario('joao', 7980, 4)
const f2 = CriaFuncionario('maria', 13330, 1)

console.log(f1.getSalario(), f2.getSalario())


//OBJ create


const filha = Object.create(null)

filha.nome = 'ana'

console.log(filha)



//Função famosa

const fromJSON = JSON.parse('["info: Sou um json"]')
console.log(fromJSON)
