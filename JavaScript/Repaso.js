/*
Cree una función que devuelva un número entero correspondiente a la cantidad de dígitos en el número entero dado.
*/
let numero = parseInt(prompt("Ingrese un numero", ''));

document.write(numDigitos(numero));

function numDigitos(numero){

    return numero.toString().length;
}
