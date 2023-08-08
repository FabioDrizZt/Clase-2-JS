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
