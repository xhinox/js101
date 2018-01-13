// callback(null, this.responseText);
// callback recibe dos parametros
// 1. si es un error y se representa con:
// new Error('some text' +  this.status);
//  - si no es un error el primero parametro se pone NULL
// 2. el segundo parametro es el resultado de la operacion
// y se obtiene con this.responseText o xhr.responseText

function get(URL, callback) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        const DONE = 4;
        const OK = 200;

        if (this.readyState === DONE) {
            if (this.status === OK) {
                // Todo OK
                callback(null, JSON.parse(this.responseText));
            }
            else {
                // hubo un error
                callback(new Error(`Se produjo un error al hacer el request: ${this.status}`));
            }
        }
    }

    xhr.open('GET', URL);
    xhr.send(null);
}

function _handleError(err) {
    console.log(`request failed: ${err}`);
}

get('https://swapi.co/api/people/1/', function onResponse(err, luke){
    if (err) return _handleError(err);

    get(luke.homeworld, function onHomeWorldResponse(err, homeworld) {
        if (err) return _handleError(err);

        luke.homeworld = homeworld;
        console.log(`${luke.name} nacio en ${luke.homeworld.name}`);
    });

    console.log('request succede');
    console.log('luke', luke);
});
