const alunos = [
    { nome: 'joao', notas: 7.3, bolsista: true },
    { nome: 'vonei', notas: 5.2, bolsista: true },
    { nome: 'victor', notas: 9.3, bolsista: false },
    { nome: 'mateus', notas: 6.3, bolsista: true }

]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


const algumbolsista = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a => a.bolsista).reduce(algumbolsista))