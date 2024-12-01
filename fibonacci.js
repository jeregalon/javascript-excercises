class Fibonacci {
    constructor(range = Infinity) {
        this.range = range;
    }
    [Symbol.iterator] = function* (){
        let pen = 1     // penúltimo valor de la sucesión
        let last = 1    // último valor
        for(let index = 0; index < this.range; index++){
            let next
            if (index === 0) next = 0
            else if (index < 3) next = 1
            else {
                next = last + pen   // próximo valor de la sucesión
                let temp = last
                last = next
                pen = temp
            }
            yield next
        }        
    }
}
let fibo = new Fibonacci(16);
console.log([...fibo]);
// let it = fibo[Symbol.iterator]();
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);