// variables
// no son fuertemente tipadas
// pueden declararse como string, luego igualarse
// a numerico y luego a objeto
// ej
var random = "cualquier";
random = 12;
random = new Date();

// variables no tan variables
const edad = 12
edad ++ // este tendra un error porque
// una variable const no puede modificarse
