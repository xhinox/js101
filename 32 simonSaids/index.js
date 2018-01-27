const niveles = 1;

let keys = generateKeys(niveles);

function siguienteNivel(nivelActual) {
    if (nivelActual == niveles) {
        return swal({
          title: "Ganaste!",
          icon: "success",
        });
    }

    swal({
        timer: 1000,
        title: `Nivel ${nivelActual + 1}`,
        buttons: false
    });

    for (let i = 0; i <= nivelActual; i++) {
        setTimeout(function (){
            activate(keys[i]);
        }, 1000 * (i + 1) + 1000);
    }

    let i = 0;
    let keyActual = keys[i];
    window.addEventListener('keydown', onkeydown)

    function onkeydown(ev) {
        if (ev.keyCode == keyActual) {
            activate(keyActual, {success: true})
            i++;
            if (i > nivelActual) {
                window.removeEventListener('keydown', onkeydown);
                setTimeout(function(){
                    siguienteNivel(i);
                }, 1500);
            }
            keyActual = keys[i];
        }
        else {
            activate(ev.keyCode, {fail: true});
            window.removeEventListener('keydown', onkeydown);
            swal({
              title: "Perdiste!",
              text: "Quieres intentarlo de nuevo?",
              icon: "error",
              buttons: true,
              dangerMode: true
          })
          .then((jugar) => {
              if (jugar) {
                  let keys = generateKeys(niveles);
                  siguienteNivel(0);
              }
          });
        }
    }
}

siguienteNivel(0);

function generateKeys(niveles) {
    return new Array(niveles).fill(0).map(
        generateRandomKey
    )
}

function generateRandomKey() {
    const min = 65;
    const max = 90;
    return Math.round(Math.random() * (max - min) + min);
}

function getElementByKeyCode(key) {
    return document.querySelector(`[data-key="${key}"]`);
}

function activate(key, opts = {}) {
    const el = getElementByKeyCode(key);
    el.classList.add('active');

    if (opts.success) {
        el.classList.add('success');
    }
    else if (opts.fail) {
        el.classList.add('fail');
    }

    setTimeout(function (){
        deactivate(el);
    }, 500);
}

function deactivate(el) {
    el.className = 'key';
}
