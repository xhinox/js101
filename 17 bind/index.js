// el metodo bind devuelve otra funcion, con el contexto cambiado
// apuntando al contexto padre de la funcion

// bind(contexto, valor defaul);

class Toggable  {
    constructor (el) {
        // iniciar estado interno
        this.el = el
        this.el.innerHtml = 'Off'
        this.activated = false
        this.el.addEventListener('click', this.onClick.bind(this))
    }

    onClick() {
        // cambiar estado interno
        // on a off y viceversa
        this.activated = !this.activated;
        this.toggleText()
    }

    toggleText() {
        // cambiar el texto
        this.el.innerHTML = this.activated ? 'On' : 'Off';
    }
}

const button = document.getElementById('boton');

const miBoton = new Toggable(button);

function saludar(name, middle) {
    console.log(`hola ${name} ${middle}`);
}

saludar('sofia', 'ferriz');

const saludarManuel = saludar.bind(null, 'manuel')

saludarManuel('ferriz');
saludarManuel('jose');
