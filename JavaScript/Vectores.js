/*
    Generar un vector llamado A de N elementos (N ingresado por teclado) con números aleatorios menores a 32000.
    Realizar y mostrar las siguientes funciones:
        -Calcular el promedio de los elementos del vector --- devuelve un float –
        -Generar un vector llamado B con los elementos mayores al promedio del vector A. -Devuelve un vector -
        -Contar la cantidad de elementos que son múltiplos a la vez de 2 y 3. --- devuelve un int –
        -Calcular la suma de todos los elementos del vector – devuelve un int –
        -Generar un vector llamado C con los elementos del vector A multiplicado por 2. --devuelve un vector -
        -Mostrar los resultados de todas las funciones y los vectores A, B y C.
*/

let N = parseInt(prompt("Ingrese un numero", ''));
const A = new Array(N);

for(let i=0; i<A.length; i++){
    A[i] = Math.floor(Math.random() * 32000); 
}

let prom = promedio(A);

document.write("A: " + A + "<br>");
document.write("Promedio: " + promedio(A) + "<br>");
document.write("B: " + mayoresAlPromedio(A, prom) + "<br>");
document.write("Multiplos de 2 y 3: " + multiplosDe2y3(A) + "<br>");
document.write("Suma de A: " + suma(A) + "<br>");
document.write("Vector C: " + APor2(A));

function promedio(A){
    let sum=0;
    let prom;

    for(let i=0; i<N; i++){
        sum = sum + A[i];        
    }

    prom = sum/N;

    return parseFloat(prom);
}

function mayoresAlPromedio(A, prom){
    const B = [];

    for(let i=0; i<N; i++){
        if(A[i] > prom){
            B[i] = A[i];
        }
    }
    
    return B;
}

function multiplosDe2y3(A){
    let mult2 = [];
    let mult3 = [];
    let multiplos = [];

    for(let i=0; i<N; i++){
        if(A[i]%2 == 0){
            mult2[i] = A[i]; 
        }
        
        if(A[i]%3 == 0){
            mult3[i] = A[i]; 
        }
        
        if(mult2[i] == mult3[i]){
            multiplos = mult2 + " " + mult3;
        }
    }

    return multiplos;
}

function suma(A){
    let sum=0;

    for(let i=0; i<N; i++){
        sum = sum + A[i];        
    }

    return sum;
}

function APor2(A){
    const C = [];

    for(let i=0; i<N; i++){
        C[i] = A[i]*2;
    }
    
    return C;
}
