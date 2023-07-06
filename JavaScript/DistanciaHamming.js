/*
    Realizar una función que calcule la diferencia de Hamming. Mostrar vectores y diferencia.
*/

let string = "1001010";
let string2 = "0110010";

document.write("La distancia de Hamming que hay entre <br>");
document.write(string + " y <br>" + string2 + " es de " + distanciaHamming(string, string2));

function distanciaHamming(string, string2){
    let distancia = 0;
    
    for(let i=0; i<string.length; i++){
        if (string[i] !== string2[i]){
            distancia++;
        }
    }
    
    return distancia;
}