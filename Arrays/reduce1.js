const alunos = [
    { nome: 'joao', notas: 7.3, bolsista: false },
    { nome: 'vonei', notas: 5.2, bolsista: true },
    { nome: 'victor', notas: 9.3, bolsista: false },
    { nome: 'mateus', notas: 6.3, bolsista: true }

]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})