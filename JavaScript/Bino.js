/*
    Bino y Cino son amigos cercanos. A Bino le gusta crear desafios matematicos para que Cino los resuelva. Esta vez, Bino creo 
    una lista de numeros y le pregunto a Cino: Cuales numeros son multiplos de 2, 3, 4 y 5?
    Este desafio parece simple, pero si la lista contiene muchos numeros, Cino cometera algunos errores de calculo. 
    Para ayudar a Cino, haga un programa que resuelva el Desafio de Bino. Hacer una funcion para cada numero.
*/

let cant = prompt("Ingrese la cantidad de numeros en la lista de Bino", ' ');
let nro;

for (let i=0; i<cant; i++) 
{
    nro = parseInt(prompt("Ingrese los numeros en la lista de Bino", ' '));
    var array = new Array(cant);
    array.push([nro]);

    multiplos2(nro, cant);
    multiplos3(nro, cant);
    multiplos4(nro, cant);
    multiplos5(nro, cant);
}


function multiplos2(nro, cant)
{
    let multiploDe2;
    let comp;
        
    multiploDe2 = nro%2 == 0;
    
    if(multiploDe2 == true)
        comp = cant + "," + nro; 
            
    if(array == comp)
        document.write(nro + " (Multiplo de 2) <br>");
    else    
        document.write(nro + "<br>");
}

function multiplos3(nro, cant)
{    
    let multiploDe3;
    let comp;
        
    multiploDe3 = nro%3 == 0;
    
    if(multiploDe3 == true)
        comp = cant + "," + nro; 
            
    if(array == comp)
        document.write(nro + " (Multiplo de 3) <br>");
    else    
        document.write(nro + "<br>");
}

function multiplos4(nro, cant)
{    
    let multiploDe4;
    let comp;
        
    multiploDe4 = nro%4 == 0;
    
    if(multiploDe4 == true)
        comp = cant + "," + nro; 
            
    if(array == comp)
        document.write(nro + " (Multiplo de 4) <br>");
    else    
        document.write(nro + "<br>");
}

function multiplos5(nro, cant)
{    
    let multiploDe5;
    let comp;
        
    multiploDe5 = nro%5 == 0;
    
    if(multiploDe5 == true)
        comp = cant + "," + nro; 
            
    if(array == comp)
        document.write(nro + " (Multiplo de 5) <br>");
    else    
        document.write(nro + "<br>");
}