function inicio(capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function fim(capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(inicio(100, 10 / 100, 2));
console.log(fim(100, 10 / 100, 2));
