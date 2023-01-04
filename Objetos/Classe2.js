class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo {
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}