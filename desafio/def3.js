function pessoa(nome) {
    this.nome = nome
    this.falar = function () {
        console.log(`Seu nome é ${this.nome}`)
    }
}

const p1 = new pessoa("cals")
p1.falar()