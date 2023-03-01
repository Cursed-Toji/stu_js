const anonimo = process.argv.indexOf('-a') !== -1


if (anonimo) {
    process.stdout.write('fala anonima')
}
else {
    process.stdout.write('informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString() //.replace('\n', '')

        process.stdout.write(`fala ${nome}!!\n`)
        process.exit()
    })
}