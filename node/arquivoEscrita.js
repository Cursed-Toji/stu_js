const fs = require('fs')


const produto = {
    nome: 'celular',
    preco: 129.90,
    desconto: 0.15
}

//gerar o arquivo
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'arquivo salvo ')
})
