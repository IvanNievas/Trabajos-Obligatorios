"use strict";
/* Desarrollar un algoritmo que me informe si el numero ingresado
por el usuario es par o impar */
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Ingrese un numero: ");
if (numero === 0) {
    console.log("El numero ingresado es cero");
}
else if (numero % 2 === 0) {
    console.log("El numero " + numero + " es par");
}
else {
    console.log("El numero" + numero + " es impar");
}


/*
-Leer un número ingresado por el usuario
-Si el número es igual a cero:
-Se informa al usuario que el número es 0
-Si el número módulo 2 es igual a 0:
-Informar al usuario que el número es par
-De lo contrario:
-Se informa al usuario que el númeor es impar
*/
