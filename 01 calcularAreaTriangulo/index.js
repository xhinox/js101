// area de un triangulo base 5 altura 7
//1. console.log('El area de un triangulo de base 5, altura 7 es:' + 5 * 7 / 2);
//2. console.log(`El area de un triangulo de base 5, altura 7 es:  ${5 * 7 / 2}`);

//3. let base = 5, height = 7;
//
// console.log(`El area de un triangulo de base ${base}, altura ${height} es:  ${base * height / 2}`);

//4. let base = 5, height = 7;
//
// function triangleArea (base, height) {
//     return base * height / 2
// }
//
// console.log(`El area de un triangulo
// de base ${base}, altura ${height} es: ${triangleArea(base,height)} `);

// FINAL VERSION
let base = 5, height = 7;
// cuando es una linea de codigo
//se puede quitar las llaves y la palabra return, haciendo el codigo mas legible
const triangleArea = (base, height) => base * height / 2
// al hacerlo una variable const, ya puede ser usada por cualquier tipo de dato
// ex: triangleArea(17,84) = 714

console.log(`El area de un triangulo
de base ${base}, altura ${height} es: ${triangleArea(base,height)} `);
