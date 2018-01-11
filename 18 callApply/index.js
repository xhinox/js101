// call y apply

const manuel = {
    nombre: 'manuel',
    apellido: 'ferriz'
}

function saludar(veces, mayus) {
    let str = `hola ${this.nombre} ${this.apellido}`;
    str = mayus ? str.toUpperCase() : str;
    for (let i = 0; i < veces; i++) {
        console.log(str);
    }
}

// saludar.bind(manuel,3)
// usar una funcion con el metodo .bind() solo hara llamar la funcion
// como si fuera un texto, osea no la ejecutaria

// call es un metodo para llamar una funcion y hacer referencia al
// this que debe agarrar como contexto general y de ahi los parametros
// ej. saludar.call(this, ...parametros);
// saludar.call(manuel, 3, true);

// apply, hace lo mismo que Call, pero con la diferencia
// reside en como pasa los parametros
saludar.apply(manuel, [5, true]);
