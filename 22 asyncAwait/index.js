// ASYNC & AWAIT
// estas funciones complementarias funcionan
// como una promesa sin usar los then
// 1. se determina la funcion ASYNC con un nombre
// que sera llamado por separado
// luego dentro de esa funcion se hace llamado al
// fetch, pero este se debe meter dentro de una variable
// anteponiendo la palabra AWAIT
// ej. const res = await fetch(url);
// cada linea de codigo dentro de ASYNC debe tener su await
// para poder funcionar como un punto rojo en vb

function handleError(err) {
    console.log(`request failed: ${err}`);
}

/*
let luke;
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
*/

// el codigo de arriba se resume en
async function getLuke() {
    try {
        const response = await fetch('https://swapi.co/api/people/1/');
        const luke = await response.json();
        const responseHomeWorld = await fetch(luke.homeworld)
        luke.homeworld = await responseHomeWorld.json();
        console.log(`${luke.name} nacio en ${luke.homeworld.name}`);
    }
  	catch (err) {
        handleError(err);
	}
}


// transpilado con BabelJs se convierte en
// y utilzando el polyfill
// https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js
// se puede usar el siguiente codigo

/*
'use strict';

var getLuke = function () {
    var _ref = _asyncToGenerator( regeneratorRuntime.mark(function _callee() {
        var response, luke, responseHomeWorld;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return fetch('https://swapi.co/api/people/1/');

                    case 3:
                        response = _context.sent;
                        _context.next = 6;
                        return response.json();

                    case 6:
                        luke = _context.sent;
                        _context.next = 9;
                        return fetch(luke.homeworld);

                    case 9:
                        responseHomeWorld = _context.sent;
                        _context.next = 12;
                        return responseHomeWorld.json();

                    case 12:
                        luke.homeworld = _context.sent;

                        console.log(luke.name + ' nacio en ' + luke.homeworld.name);
                        _context.next = 19;
                        break;

                    case 16:
                        _context.prev = 16;
                        _context.t0 = _context['catch'](0);

                        handleError(_context.t0);

                    case 19:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 16]]);
    }));

    return function getLuke() {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function handleError(err) {
    console.log('request failed: ' + err);
}

getLuke()
*/
