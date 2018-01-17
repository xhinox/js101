// secuencia de fibonachi
// la regla es a partir del tercer numero
// sera el resultante de la suma de sus dos predecesores

// con el iterador (Symbol.iterator)
// se pueden hacer listas infinitas
// el iterador depende mucho de la funcion NEXT
// function fibonacci() {
//     let a = 0, b = 1;
//     return {
//         next: function (reset) {
//             if (reset) a=0, b=1;
//             let f = a;
//             a = b;
//             b = f + a;
//             return { value: f, done: false }
//         }
//     }
// }
//
// const fibo = {};
// fibo[Symbol.iterator] = fibonacci;
//
// let i = 0;
// for (let value of fibo) {
//     console.log(value);
//     i++
//     if (i > 20) break;
// }

// fibo.next().value; //0
// fibo.next().value; //1
// fibo.next().value; //1
// fibo.next().value; //2
//
// fibo.next(true).value; //0

// generador
// para que sea un generador ocupa un asterisco
// seguido de la palabra function
// funciona como async / await
// yield funciona como un stop til
function* fibonacci() {
    let a = 0, b = 1;

    while (true) {
        let f = a;
        a = b;
        b = f + a;
        let reset = yield f;
        if (reset) a = 0, b = 1;
    }
}

const fibo = fibonacci();
fibo.next() // 0
fibo.next() // 1
fibo.next() // 1
fibo.next() // 2
fibo.next(true) // 0
