function Aula (nome, videoID){
    this.nome = nome
    this.videoID = videoID
}


const aula1 = new Aula('Bem vindo', 1)
const aula2 = new Aula('Tchau', 2)


console.log(aula1, aula2)


//simulando new 


function novo (f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    
    return obj
}


const aula3 = novo(Aula, 'Bem vindo', 3)

const aula4 = novo(Aula, 'ate breve', 4)


console.log(aula3, aula4)