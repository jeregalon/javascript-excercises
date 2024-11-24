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
        }
        let numbersArray = []
        if (besorted) {
            numbers.forEach(n => numbersArray.push(n))
            numbersArray.sort((a, b) => a - b)
            return numbersArray
        } else return numbers
    }    
}
    

console.log(repeat(5, 6, true, false))


