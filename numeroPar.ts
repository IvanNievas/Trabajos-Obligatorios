/* Desarrollar un algoritmo que me informe si el numero ingresado
por el usuario es par o impar */

import * as readlineSync from "readline-sync" ;

let numero: number= readlineSync.questionInt("Ingrese un numero: ") ;

if (numero === 0) {console.log ("El numero ingresado es cero") ;

}
    else if (numero % 2 === 0) {console.log ("El numero " + numero + " es par") ;
}
    else { 
        console.log ("El numero" + numero + " es impar") ;
}


