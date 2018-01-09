// formas de recorrer un array para sumar
function suma(...numbers) {

    // 1.
    // let acum = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     acum += numbers[i];
    // }
    // return acum;

    // 2.
    return numbers.reduce(function (acum, number){
        acum += number;
        return acum;
    }, 0);

}

suma (4, 8, 12, 8954, 7);

// formas de recorrer un elemento dentro de un array
// para efectuar una funcion
function dobles(...numbers) {
    // const res = [];
    // for (let i = 0; i < numbers.length; i++) {
    //     res.push(numbers[i] * 2);
    // }
    //
    // return res;

    return numbers.map(numero => numero * 2);
}

dobles(3,6,9);

// forma de recorrer un array haciendo un filtrado mediante
// una funcion con cierta operacion matematica
function pares(...numbers) {
    // const res = [];
    // for (let i = 0; i < numbers.length; i++) {
    //     const numero = numbers[i];
    //
    //     if (numero % 2 == 0) {
    //         res.push(numero)
    //     }
    // }
    //
    // return res;

    return numbers.filter(numero => numero % 2 == 0);
}
