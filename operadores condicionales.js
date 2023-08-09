const edadMinima = 12;
const edadMaxima = 19;

let edad = edadMinima + Math.random() * (edadMaxima - edadMinima);
edad = Math.round(edad);

if (edad >= 18) {
  console.log(`Tiene  ${edad}  años, tiene la obligación votar`);
} else if (edad >= 16) {
  console.log(`Tiene  ${edad}  años, si quiere puede votar`);
} /* if (edad<16) no poner*/ else {
  console.log(`Con ${edad} años, no tiene suficientes edad para votar.`);
}

if (edad < 16) {
  console.log(`Con ${edad} años, no tiene suficientes edad para votar.`);
} else if (edad < 18) {
  console.log(`Tiene  ${edad}  años, si quiere puede votar`);
} else {
  console.log(`Tiene  ${edad}  años, tiene la obligación votar`);
}

/* userDB = "admin";
passDB = "123456";
user = prompt("Ingrese usuario");
pass = prompt("Ingrese password");
if (user == userDB) {
  if (pass == passDB) {
    alert("Bienvenido");
  } else {
    alert("Contraseña Incorrecta");
  }
} else {
  alert("Usuario incorrecta");
}
 */

// --------------------------------
// -- Ternario
// --------------------------------

/*

(expresión) ? resultado1 : resultado2

La expresión ------ (expresión) ? resultado1 : resultado2 ----- evalúa a resultado1
si la expresión es TRUE, y result2 si la expresión es FALSE.

 */
let min = 17;
let max = 25;
edad = min + Math.random() * (max - min);
edad = Math.round(edad);

if (edad >= 21) {
  console.log(`Usted es mayor de edad, tiene: ${edad}`);
} else {
  console.log(`Usted es menor de edad, tiene: ${edad}`);
}

console.log(
  edad >= 21
    ? `Usted es mayor de edad, tiene: ${edad}`
    : `Usted es menor de edad, tiene: ${edad}`
);

console.log(
  `Usted es ${edad >= 21 ? "mayor" : "menor"} de edad, tiene: ${edad}`
);

// --------------------------------
// -- Declaración de switch - Según
// --------------------------------

/*

Similar a una serie de sentencias if.

switch (expression) {
case 0:
    //code
    break;
case 1:
case 2:
    //code
    break;
default: (opcional)
}


La expresión sólo se evalúa una vez y el resultado se compara con cada una de las sentencias case.
Si coincide, entonces se ejecuta el código hasta el break;

- la sentencia case puede estar vacía
- si no se utiliza la sentencia break, entonces se ejecuta el siguiente bloque de código.


 */
min = 0;
max = 7;
let diaSemana = min + Math.random() * (max - min);
diaSemana = Math.round(diaSemana);

console.log("dia ingresado: " + diaSemana);
switch (diaSemana) {
  case 6:
    console.log("sabado");
  case 7:
    console.log("domingo");
  case 1:
    console.log("lunes");
  case 2:
    console.log("martes");
  case 3:
    console.log("miercoles");
  case 4:
    console.log("jueves");
  case 5:
    console.log("viernes");
    break;
  default:
    console.error("día de la semana invalido");
    break;
}

let pelotita = "vlanca";
let montoTotal = 1_000_000;

switch (pelotita) {
  case "naranja":
    console.log(`solo debe pagar ${montoTotal * 0.9}`);
    break;
  case "roja":
    console.log(`solo debe pagar ${montoTotal * 0.5}`);
    break;
  case "blanca":
    console.log(`solo debe pagar ${montoTotal}`);
    break;
  default:
    console.error("El color de la pelotita es invalido");
    break;
}
