Array.prototype.forEach2 = function (callback) {
    for (let i = 0; 1 < this.length; i++) {
        callback(this[i], i, this)
    }
}


const aprovados = ['agatha', 'aldo', 'daniel', 'rafaela']
aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)


})
