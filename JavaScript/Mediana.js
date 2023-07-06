/*
    Calcular la mediana de un array. 
*/

var vector = new Array(7, 10, 15, 23, 56, 2, 9);
let mediana = calcularMediana(vector);

console.log(vector);
console.log(mediana);

function calcularMediana(vector)
{
    vector.sort((a,b) => a-b);

    var mediana = vector.length;

    if(mediana%2 == 0)
        mediana = vector.slice(mediana/2-1, mediana/2+1).reduce((a,b) => a+b)/2
    else
        mediana = vector.slice((mediana/2), mediana/2+1)[0];

    return mediana;
}
