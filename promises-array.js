/** Función que recibe un array con elementos de todo tipo y devuelve un array de promesas.
 * Si el elemento 'ar' es un entero positivo, resuelve la promesa en un lapso de tiempo de 'ar' 
 * segundos. Sino, devuelve un error.
 */

function getPromiseArray(arr) {
    let promises = []
    for (let ar of arr) {
        promises.push(new Promise((resolve, reject) => {
            if (ar > 0 && Math.floor(ar) === ar) { // si 'ar' es un entero positivo
                setTimeout(() => { resolve(ar); console.log(`${ar} es un entero positivo`) }, ar * 1000);
            } else {
                reject(new Error(`${ar} NO es un entero positivo`));
            }
        }))
    }
    return promises
}

let promises1 = getPromiseArray([2, 3, 4.5, 1, "azucaa", 7])
Promise.all(promises1).then(a => console.log(`all: ${a}`))
.catch(e => console.log(`all: ${e.message}`))
Promise.any(promises1).then(a => console.log(`any: ${a}`))
.catch(e => console.log(`any: ${e.message}`))