/*
    Hacer un programa que muestre mediante una función llamada function EsFeliz (n) muestre el listado de los números felices hasta el número ingresado. 
*/

let nro = prompt("Ingrese un numero", '');

if(esFeliz(nro) == 1) 
    document.write(nro + " es un numero feliz");

function esFeliz(nro)
{
        let acum=0;

        if(nro == 1)
        {
            return nro;
        }            

        for(let i=0; i<nro.length; i++)
        {
            cuadrado = nro[i] * nro[i];
            acum = acum + cuadrado;
        }

        if(acum == 1)
        {
            return acum;
        }    
        
        nro = acum.toString();
        
        return esFeliz(nro);
}
