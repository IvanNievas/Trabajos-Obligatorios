"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("Ingrese la base: ");
var exponente = rls.questionInt("Ingrese el exponente: ");
var resultado = 1;
var i = 0;
function calcularExponente(numero1, numero2) {
    resultado = 1;
    for (i = 0; i < exponente; i++) {
        resultado = resultado * base;
    }
    return resultado;
}
if (exponente > 0) {
    resultado = calcularExponente(base, exponente);
    console.log("El resultado es: " + resultado);
}
else if (exponente == 0) {
    resultado = 1;
    console.log("El resultado es: " + resultado);
}
else if (exponente < 0) {
    console.log("Ingrese un exponente mayor o igual a 0");
    exponente = rls.questionInt("Ingrese el exponente: ");
    resultado = calcularExponente(base, exponente);
    console.log("El resultado es: " + resultado);
}
