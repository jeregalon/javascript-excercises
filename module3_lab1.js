/*Crea una lista de m números que van desde el 0 al n-1. Mediante las
variables berepeated y besorted se puede obtener la lista ordenada
y/o sin números repetidos*/

function repeat(n, m, berepeated, besorted) {
    if (berepeated) {
        let numbers = []
        while (numbers.length < m) {
            numbers.push(Math.floor(Math.random() * n))
        }
        numbers = besorted ? numbers.sort((a, b) => a - b) : numbers
        return numbers
    } else {
        let numbers = new Set()
        if (m <= n) {
            while (numbers.size < m) {
                numbers.add(Math.floor(Math.random() * n))
            }
        } else console.log("Tamaño del array demasiado largo")
        let numbersArray = []
        if (besorted) {
            numbers.forEach(n => numbersArray.push(n))
            numbersArray.sort((a, b) => a - b)
            return numbersArray
        } else return numbers
    }    
}
    

console.log(...repeat(4, 5, true, false))


