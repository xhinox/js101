// las promesas son objetos
// tiene tres estados
// pending: pendiente, asociada a una tarea asincronica
// fullfiled: aprobado
// rejected: rechazado
/*
const promise = new Promise(function (resolve, reject){
  setTimeout(function(){
    resolve();
    //o reject(new Error());
  }, 1000);
});

promise
  .then(function (){

  })
  .catch(function (err){

});
*/

/*
function get(URL) {
  return new Promise((resolve, reject) =>{
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        const DONE = 4;
        const OK = 200;

        if (this.readyState === DONE) {
            if (this.status === OK) {
                // Todo OK
                resolve(JSON.parse(this.responseText));
            }
            else {
                // hubo un error
                reject(new Error(`Se produjo un error al hacer el request: ${this.status}`));
            }
        }
    }

    xhr.open('GET', URL);
    xhr.send(null);
  })
}

let luke;

get('https://swapi.co/api/people/1/')
  .then((response) => {
    luke = response;

    console.log('request succede');
    console.log('luke', luke);

    return get(luke.homeworld);
  })
  .then((homeworld) => {
    luke.homeworld = homeworld;
        console.log(`${luke.name} nacio en ${luke.homeworld.name}`);
  })
  .catch((err) => handleError(err));
*/

function handleError(err) {
    console.log(`request failed: ${err}`);
}

// fetch se esta usando como nuevo metodo
// para hacer tareas asincronicas
// en ves de la funcion GET
fetch('https://swapi.co/api/people/1/')
  .then(response => response.json())
  .then((json) => {
    luke = json;
    return fetch(luke.homeworld);
  })
  .then(response => response.json())
  .then((json) => {
    luke.homeworld = json;
        console.log(`${luke.name} nacio en ${luke.homeworld.name}`);
  })
  .catch(err => handleError(err))
