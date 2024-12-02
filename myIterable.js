/**Creación de una clase que instancia objetos iterables */

class MyIterable {
    constructor() {
        this.data = []
    }
    add(element) {
        if (this.data.indexOf(element) === -1) this.data.push(element)
    }
    del(element) {
        if (this.data.indexOf(element) !== -1) this.data.splice(this.data.indexOf(element), 1)
    }
    has(element) {
        return this.data.indexOf(element) !== -1 
    }
    deleteAll() {
        this.data = []
    }
    join(character) {
        return this.data.join(character)
    }
    get length() {
        return this.data.length
    }
    [Symbol.iterator] = function* () {
        for(let element of this.data) {
            yield element;
        }
    }
}

let it = new MyIterable()
it.data = [3, 4, 2, 1]
console.log(...it)
it.add(7)
console.log(...it)
it.del(3)
console.log(...it)
console.log(it.has(2))
it.del(2)
console.log(it.has(2))
console.log(...it)
console.log(it.length)

let sum = function(...args) {
    let retVal = 0;
    for (let arg of args) {
        retVal += arg
    }
    return retVal
}

/** Función que toma como argumento otra función e imprime en pantalla los
 * argumentos que ya han sido pasados como parámetros de dicha función en el
 * pasado
 */

let myDecorator = function(fn) {
    let usedArgs = new MyIterable
    return function(...args) {
        let usedArgsNow = new MyIterable
        for (let arg of args) {
            if (usedArgs.has(arg)) usedArgsNow.add(arg)
            else usedArgs.add(arg)
        }
        console.log(`Already used args: ${usedArgsNow.join(", ")}`)
        return fn(...args)
    }
}

let decor = myDecorator(sum)
decor(2, 3, 4)
decor(2, 3, 5)
decor(2, 3, 5)
decor(3, 5, 6)
console.log(decor(3, 5, 6))