// secuencia de fibonachi
// la regla es a partir del tercer numero
// sera el resultante de la suma de sus dos predecesores

// con memoizacoin la solucion radica
// en capturar los numeros ya calculado
// y evitar que se repitan
// esto se hace agregando a un objeto
// los valores

// function fibonacci(num, memoria = {}) {
//
//     if (memoria[num]) return memoria[num];
//     if (num == 1) return 0;
//     if (num == 2) return 1;
//
//     console.log(memoria);
//     return memoria[num] = fibonacci(num - 1, memoria) + fibonacci(num -2, memoria);
// }


// con el iterador (Symbol.iterator)
// se pueden hacer listas infinitas
function fibonacci() {
    let a = 0, b = 1;
    return {
        next: function () {
            let f = a;
            a = b;
            b = f + a;
            return { value: f, done: false }
        }
    }
}

const fibo = {};
fibo[Symbol.iterator] = fibonacci;

let i = 0;
for (let value of fibo) {
    console.log(value);
    i++
    if (i > 20) break;
}
