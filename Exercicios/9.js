
function ajudar(nota)
{
    if ( nota <= 38){
        return nota  + 2
    }

    else if(nota <= 40)
    {
        return nota
    }
    else{
        return nota
    }

}

function final(nota) {
    let AjudarNota = ajudar(nota)
    if (AjudarNota >= 40) {
     return `Aprovado com nota ${AjudarNota}`
    } else {
        return `Reprovado com nota ${AjudarNota}`
    }
}

console.log(final(37))
console.log(final(100))



// metodo correto
function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {s
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)



