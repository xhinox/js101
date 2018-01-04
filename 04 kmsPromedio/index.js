// Cuantos km corre una persona en una semana

const nombre = 'Manuel';
const dias = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo'
];

function correr() {
    const min = 5;
    const max = 15;
    return Math.round(Math.random() * (max - min) + min);
}

let acumKms = 0;
const l = dias.length;

for (let i = 0; i < l; i++) {
    const kms = correr();
    acumKms += kms;
    console.log(`el dia ${i+1} es el ${dias[i]} y corrio ${acumKms} kms`);
}

const promedioKms = acumKms / l;
console.log(`en promedio, ${nombre} corrio ${promedioKms.toFixed(2)} kms en la semana`);
