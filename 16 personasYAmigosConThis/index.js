// this, ._this, bind, arrow function

// solucion 1:
// const _this = this;

// solucion 2:
// usar el metodo bind, que sirve para setear el valor de this para esa funcion
// es lo mismo que hacer const _this = this;
// pero usando el metodo .bind(valor a meter en contexto)
// ej this.familia.forEach(function (fam){}.bind(this))

// solucion 3:
// las arrow function, tienen una segunda propiedad que hace el bind de manera
// automatica, la arrow toma el valor de this, fuera del contexto en el que fue
// declarada la funcion

class Familia {

    constructor(nombre, familia = []) {
        this.nombre = nombre;
        this.familia = familia;
    }

    listarFamilia() {
        // this --> tiene el contesto del metodo, no del constructor

        this.familia.forEach((fam) =>{
            console.log(`hola mi nombre es ${this.nombre} y soy familiar de ${fam}`);
        });
    }

}

const manuel = new Familia('Manuel', ['Magda', 'Lily', 'Babis']);
