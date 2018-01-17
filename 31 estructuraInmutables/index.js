// inmutabilidad

let manuel = {
    nombre:'manuel',
    apellido:'ferriz',
    edad: 37
}

let tocayo = manuel;
tocayo === manuel;
tocayo.edad = 38;

tocayo;
