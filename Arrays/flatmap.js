const escola = [{
    alunos: [{
        nome: 'gustavo',
        nota: 4
    },
    {
        nome: 'ana',
        nota: 9

    },
    {
        nome: 'cals',
        nota: 7
    }]
}, {
    nome: 'TURMA M2',
    alunos: [{
        nome: 'rebeca',
        nota: 8.9
    }, {
        nome: 'carlos',
        nota: 7
    }]


}]


const getNotaAluno = aluno => aluno.nota

const getNotaDaTurma = turma => turma.alunos.map(getNotaAluno)


const nota1 = escola.map(getNotaDaTurma)


console.log(nota1)

console.log([].concat([4, 9, 7], [8.9, 7]))


Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}


const nota2 = escola.flatMap(getNotaDaTurma)

console.log(nota2)