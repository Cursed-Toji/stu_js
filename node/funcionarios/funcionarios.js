const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'

const menorSalario = (func, funcionarioAtual) => {
    return func.salario < funcionarioAtual.salario ? func : funcionarioAtual


    //  ? << O operador condicional é o único operador JavaScript que
    // utiliza três operandos. O operador pode ter um de dois valores baseados 
    //em uma condição. A sintaxe é:
    // condicao ? valor1 : valor2

}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)


    console.log(func)
})