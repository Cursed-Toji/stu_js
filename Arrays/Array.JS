console.log(typeof Array, typeof new Array, typeof [])


let aprovados = new Array('bia', 'carlos', 'ana')

console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


aprovados[3] = 'paulo'

aprovados.push('abia')


console.log(aprovados.length)
console.log(aprovados)


aprovados[9] = 'rafa'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)


console.log(aprovados)
//.sort colocou em ordem alfabetica 
aprovados.sort()
console.log(aprovados)


delete aprovados[1]
console.log(aprovados)



aprovados = ['bia', 'victor', 'lucy']
//aprovados.splice(1, 1) < excluir 
aprovados.splice(1, 0, 'elemento 1', 'elemento 2') //<add
console.log(aprovados)