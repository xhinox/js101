// Pelea de Goku vs Vegeta a base de While
let vidaGoku = 100;
let vidaVegeta = 100;

const MIN_POWER = 5;
const MAX_POWER = 12;

let round = 0;

const bothStillAlive = () => vidaGoku > 0 && vidaVegeta > 0;

const calcularGolpe = () => Math.round(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);

const gokuSigueVivo = () => vidaGoku > 0;

while (bothStillAlive()) {
    round ++;

    console.log(`Round ${round}`);

    const golpeGoku = calcularGolpe();
    const golpeVegeta = calcularGolpe();

    if (golpeGoku > golpeVegeta) {
        //ataca goku
        vidaVegeta -= golpeGoku;
        console.log(`Goku ataca a Vegeta con un golpe de ${golpeGoku}`);
        console.log(`La vida de Vegeta es de  ${vidaVegeta}`);
    }
    else {
        //ataca vegeta
        vidaGoku -= golpeVegeta;
        console.log(`Vegeta ataca a Goku con un golpe de ${golpeVegeta}`);
        console.log(`La vida de Goku es de ${vidaGoku}`);
    }
}

if (gokuSigueVivo()) {
    console.log(`Goku GANO, su vida es de ${vidaGoku}`);
}
else {
    console.log(`Vegeta GANO, su vida es de ${vidaVegeta}`);
}
