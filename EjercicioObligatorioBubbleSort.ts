/* Ordenamiento. Implemente un algoritmo de ordenamiento con el método Bubble sort,
 para que ordene un arreglo de longitud N en orden descendente. */

 let arregloBur = [54, 44, 15, 22, 12, 21, 80];
 OrdenamientoDesc(arregloBur);
 console.log("Ordenar arreglo en orden descendente utilizando Bubble Sort:");
 console.log(arregloBur);


 function OrdenamientoDesc(arreglo) {
    let n = arreglo.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arreglo[j] < arreglo[j+1]) {
                let aux = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = aux ;
            }
        }
    }
}



