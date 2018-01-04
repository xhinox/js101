// Quien puede pasar a ver una pelicula (resolver a base de condiciones)

const movie = 'DEADPOOL', pgMovie = 18;

const nameYo = 'Manuel', ageYo = 37;

const nameSofy = 'Sofia', ageSofy = 3;


const canWatchMovie = (name, age, isWithAdult = false) => {
    if (age >= pgMovie) {
        alert(`${name} puede pasar a ver ${movie}`)
    }
    else if (isWithAdult) {
        alert(`${name} puede pasar a ver ${movie}.
        Aunque su edad es de ${age}, se encuentra acompañada/o por un adulto`)
    }
    else {
        alert(`${name} no puede pasar a ver ${movie}.
        Tiene ${age} años y necesita tener ${pgMovie}`);
    }
}

canWatchMovie(nameYo, ageYo);
canWatchMovie(nameSofy, ageSofy, true);
