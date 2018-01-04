// Cuanto tiempo paso desde tu fecha de nacimiento

//crear objeto de tipo fecha
const birth = new Date(1980,5,10);

const hoy = new Date();

// diferencia entre fechas en milisegundos
const tiempo = hoy - birth;

// diferencia entre fechas en segundos
const tiempoSeg = tiempo / 1000;

// diferencia entre fechas en minutos
const tiempoMin = tiempo / 60;
