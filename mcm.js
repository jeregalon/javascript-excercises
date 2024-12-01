/*Calcula el mínimo común múltiplo de dos o más números utilizando el
algoritmo de Euclides. Los números deben ser proporcionados dentro de un arreglo*/

function MCD(n1, n2) {
    let numbers = [n1, n2]
    numbers = numbers.sort((a, b) => b - a)
    n2 = numbers[0]
    n1 = numbers[1]
    if (n2 % n1 === 0) return n1
    else return MCD(n1, n2 % n1) 
}

function MCM(numbers) {
    if (numbers instanceof Array && numbers.length >= 2) {
        let n1 = numbers[0]
        let n2 = numbers[1]
        if (numbers.length === 2) return Math.abs(n1 * n2) / MCD(n1, n2)
        else {
            return MCM([MCM([n1, n2]), ...numbers.slice(2, numbers.length)])
        }
    }
}

console.log(MCM([4, 6]))
console.log(MCM([8, 12, 18]))
console.log(MCM([15, 25]))
console.log(MCM([6, 8, 14]))
console.log(MCM([9, 28]))
console.log(MCM([5, 10, 15, 20]))