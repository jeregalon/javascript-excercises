class Pascal {
    constructor(range = Infinity) {
        this.range = range;
    }
    [Symbol.iterator] = function* (){
        let first = 1     // primer valor del triángulo
        let last = [1, 1]    // último array del triángulo
        for(let index = 0; index < this.range; index++){
            let next    // próximo array del triángulo
            if (index === 0) next = first
            else if (index === 1) next = last
            else {
                next = [1]
                for (let e = 0; e < last.length - 1; e++) {
                    next.push(last[e] + last[e + 1])
                }
                next.push(1)
                last = next
            }
            yield next
        }        
    }
}
let pasc = new Pascal(10);
let it = pasc[Symbol.iterator]();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);