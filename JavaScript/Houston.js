/*
    Esta operacion consiste en multiplicar los componentes de cada vector uno a uno y sumar sus resultados.
*/

let N = parseInt(prompt("Ingrese un numero", ''));
const array1 = new Array(N);
const array2 = new Array(N);

for(let i=0; i<N; i++) 
{
    array1[i] = Math.floor(Math.random() * 30000); 
}

for(let i=0; i<N; i++) 
{
    array2[i] = Math.floor(Math.random() * 30000); 
}

document.write("Array 1: " + array1 + "<br>");
document.write("Array 2: " + array2 + "<br>");
document.write("Suma de array1 * array2: " + SumaArray1PorArray2(array1, array2));

function SumaArray1PorArray2(array1, array2)
{
    let mult1y2 = [];
    let sum=0;
    
    for(let i=0; i<N; i++){
        mult1y2[i] = array1[i] * array2[i];
        sum = sum + mult1y2[i];
    }
    return sum;
}

