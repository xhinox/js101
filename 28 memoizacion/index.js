// secuencia de fibonachi
// la regla es a partir del tercer numero
// sera el resultante de la suma de sus dos predecesores

// function fibonacci(num) {
//     if (num == 1) return 0;
//     if (num == 2) return 1;
//
//     return fibonacci(num - 1) + fibonacci(num -2);
// }

// esta solucion consume mucha memoria
// ya que recalcula varias veces un
// mismo numero


function fibonacci(num, memoria = {}) {

    if (memoria[num]) return memoria[num];
    if (num == 1) return 0;
    if (num == 2) return 1;

    console.log(memoria);
    return memoria[num] = fibonacci(num - 1, memoria) + fibonacci(num -2, memoria);
}

// con memoizacoin la solucion radica
// en capturar los numeros ya calculado
// y evitar que se repitan
// esto se hace agregando a un objeto
// los valores
