//closure é o espoco criado quando uma função é delcarada
// esse escopo permite a função acessar e manipular variaveis externas à função 


const x = 'global'
function fora() {
    const x = 'local'
    function dentro() {
        return x
    }

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())