/*
    Ingresar un valor N. Generar un vector de numeros aleatorios (menores a 600) llamado A de N elementos. Ordenar el vector. Realizar una funcion que calcule la moda del vector (el valor que mas se repite). Mostrar vector y moda.
*/

let N = parseInt(prompt("Ingrese un numero", ''));
const A = new Array(N);
let array;

for(let i=0; i<A.length; i++) 
{
    A[i] = Math.floor(Math.random() * 600); 

    function comparar(n1, n2) 
    {
      return n1 - n2;
    }
    
    array = A.join();  
    array = A.sort();  
    array = A.sort(comparar);  
}

let moda = Moda(array);

if(moda == 0)
    moda = "no se repite ningun numero";
    
document.write("Vector: " + array + "<br>");
document.write("Moda: " + moda);

function Moda(array)
{
    let moda=0;
    
    for(let i=0; i<array.length; i++)
    {
        for(let x=0; x<array.length; x++)
        {
            if(array[i] == array[x] && i!=x)
            {
                moda = array[i];
            }    
        }
    } 

    return moda;
}