const alunos = [
    { nome: 'joao', nota: 7.9 },
    { nome: 'will', nota: 9.9 },
    { nome: 'cals', nota: 5.9 },
    { nome: 'vitor', nota: 3.9 }
]


//imperativo
let total1 = 0

for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)



//delcarativo 
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)