// inmutabilidad

let manuel = {
    nombre:'manuel',
    apellido:'ferriz',
    edad: 37
}

let tocayo = manuel;
tocayo === manuel;
tocayo.edad = 38;

// function birth (persona) {
//     persona.edad++;
// }

// birth(manuel);

birth function (persona) {
    const clone = Object.assign({}, persona);
    clone.edad++;
    return clone;
}
