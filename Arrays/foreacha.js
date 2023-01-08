const aprovados = ['agatha', 'aldo', 'daniel', 'rafaela']
aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)

})

aprovados.forEach(nome => console.log(nome))


const exibir = aprovados => console.log(aprovados)
aprovados.forEach(exibir)