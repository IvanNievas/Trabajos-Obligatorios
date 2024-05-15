import * as rls from 'readline-sync';

let base : number = rls.questionInt ("Ingrese la base: ");
let exponente : number = rls.questionInt ("Ingrese el exponente: ");
let resultado : number = 1;
let i : number = 0

function calcularExponente (numero1 : number, numero2 : number) {
    resultado = 1;
    for (i=0 ; i<exponente; i++) {
        resultado = resultado * base
    }

    return resultado;
}

if (exponente >0) {
    resultado = calcularExponente (base, exponente) ;
    console.log ("El resultado es: " + resultado) ;
    } else if (exponente ==0) {
        resultado = 1
        console.log ("El resultado es: " + resultado)
    } else if (exponente <0) {
        console.log ("Ingrese un exponente mayor o igual a 0")
        exponente = rls.questionInt ("Ingrese el exponente: ") ;
        resultado = calcularExponente (base, exponente) ;
        console.log ("El resultado es: " + resultado) ;
    }