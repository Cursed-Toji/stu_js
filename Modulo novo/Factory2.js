function criarProduto(nome, preco, desconto = 0.1) {
    return {
        nome,
        preco,
        desconto
        //posso deixar o desconto no parametro caso queira.
        // ou retirar de xair no return desconto 0.1
    }
}


console.log(criarProduto('notebook', 2199))
console.log(criarProduto('celular', 1999))