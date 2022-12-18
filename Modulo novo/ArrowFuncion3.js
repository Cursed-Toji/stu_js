let comprarComThis = function (params) {
    console.log(this === params)

}

comprarComThis(global)


const obj = {}
comprarComThis = comprarComThis.bind(obj)
comprarComThis(global)
comprarComThis(obj)


let comprarComThisArrow = params => console.log(this === params)

comprarComThisArrow(global)
comprarComThisArrow(module.exports)


comprarComThisArrow = comprarComThisArrow.bind(obj)
comprarComThisArrow(obj)
comprarComThisArrow(module.exports)