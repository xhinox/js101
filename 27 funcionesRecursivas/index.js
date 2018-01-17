// secuencia de fibonachi
// la regla es a partir del tercer numero
// sera el resultante de la suma de sus dos predecesores

function fibonacci(num) {
    if (num == 1) return 0;
    if (num == 2) return 1;

    return fibonacci(num - 1) + fibonacci(num -2);
}
