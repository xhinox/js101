// Inventar un idioma manipulando strings
// Funciones que se pueden usar con cadena de textos

// Reglas del idioma inventado
/*
    1. si la palabra termina con "ar", se le quitan esas dos letras
    2. si la palabra inicia con "z", se le añade "pe" al final
    3. si la palabra traducida tiene mas 10 o mas letras, se debe partir en dos por la mitad
    y unir con un guion medio.
    4. si la palabra es un palindromo (que se leen igual al derecho y al reves),
    ninguna regla anterior cuenta y se devuelve la misma palabra
    pero intercalanado letras mayusculas y minusculas
*/

function platzom (str) {
    let translation = str;

    // si la palabra termina con "ar", se le quitan esas dos letras
    if ( str.toLowerCase().endsWith('ar') ) {
        translation = str.slice(0, -2);
    }

    // si la palabra inicia con "z", se le añade "pe" al final
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    // si la palabra traducida tiene mas 10 o mas letras
    // se debe partir en dos por la mitad
    // y unir con un guion medio.
    const ancho = str.length;
    if (ancho >= 10) {
        const firstHalf = translation.slice(0, Math.round(ancho / 2));
        const secondHalf = translation.slice(Math.round(ancho / 2));
        translation = `${firstHalf}-${secondHalf}`;
    }

    // si la palabra es un palindromo
    // ninguna regla anterior cuenta y se devuelve la misma palabra
    // pero intercalanado letras mayusculas y minusculas

    const reverse = (str) => str.split('').reverse().join('');

    function minMay (str) {
        const ancho = str.length;
        let translation = '';
        let capitalize = true;

        for (let i = 0; i < ancho; i++) {
            const char = str.charAt(i);

            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }

        return translation;
    }

    if (str === reverse(str)) {
        return minMay(str);
    }

    return translation;
}

console.log(platzom ('Programar'));
console.log(platzom ('Zorro'));
console.log(platzom ('Zarpar'));
console.log(platzom ('abecedario'));
console.log(platzom ('sometemos'));
