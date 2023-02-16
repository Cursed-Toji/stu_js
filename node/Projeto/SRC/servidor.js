const porta = 3003

const express = require('express')
const app = express()



//http://localhost:3003/produtos
//teste do postman


app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'notebook', preco: 123.45 })
})

app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta} `)
})