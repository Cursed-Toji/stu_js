const moduloA = require('../../moduloa')
console.log(moduloA.ola)


const saudacao = require('saudacao')

console.log(saudacao.ola)

const http = require('http')

http.createServer((req, res) => {
    res.write('bom dia')
    res.end()
}).listen(8080)


//http://localhost:8080