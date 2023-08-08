/*
&&  --> Ambos lados son verdaderos
________________________________________
| and(true, true) = true
| and(true, false) = false
| and(false, true) = false
| and(false, false) = false
________________________________________
1*1=1
1*0=0
0*1=0
0*0=0

|| --> Cualquiera de los dos lados sólo tiene que ser verdadero

________________________________________
| or(true, true) = true
| or(true, false) = true
| or(false, true) = true
| or(false, false) = false
________________________________________

1+1=10
1+0=1
0+1=1
0+0=0

Operador de Negación
!   -->  Verdadero si el valor no es verdadero
_______________________________________
| !(true) = false
| !(false) = true
_______________________________________
*/

comparacion = 6 > 7; // false
igualdad = 8 == "8.0"; // true
console.log(true && igualdad);
console.log(false && igualdad);
console.log(true && comparacion);

/* userDB = "admin";
passDB = "123456";
user = prompt("Ingrese usuario");
pass = prompt("Ingrese password");
console.log(user == userDB && pass == passDB); */

ingrediente1 = true;
ingrediente2 = false;
ingrediente3 = true;
console.log(ingrediente1 && ingrediente2 && ingrediente3);

console.log(true || comparacion);
console.log(false || comparacion);

totalCompra = 5000
cantArticulos = 11
descuento = totalCompra > 5000 || cantArticulos > 10;
console.log(descuento)

console.log(!comparacion);
console.log(!igualdad);

/* ejercitación:
  a. A es positivo y B es negativo.
  b. A, B y C son diferentes.
  c. E es no nulo y F no es mayor que G.
  d. B está estrictamente entre A y C.
  e. F es negativo o E es no negativo, pero no ambos a la vez.
*/