// Clousures

// function saludarFerriz(nombre) {
//     console.log(`Hola ${nombre} Ferriz`);
// }
//
// function saludarBojorquez(nombre) {
//     console.log(`Hola ${nombre} Bojorquez`);
// }


function saludarFamilia(apellido) {
    return function saludarMiembro (nombre){
        console.log(`Hola ${nombre} ${apellido}`);
    }
}

const saludarFerriz = saludarFamilia('Ferriz');
const saludarBojorquez = saludarFamilia('Bojorquez');

saludarFerriz('Magda');
saludarFerriz('Manuel');
saludarFerriz('Sofia');

saludarBojorquez('Liliana');
saludarBojorquez('Chito');
saludarBojorquez('Dany');
