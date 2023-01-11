
let numeral = [5, 3, 91, 33, 65, 12, 87, 34]

numeral.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
})


console.log(numeral)

