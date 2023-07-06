/*Hacer un programa que muestre mediante una función llamada function EsDefectivo 
(n) muestre el listado de los números defectivos hasta el número ingresado*/

let numero,n;

    numero=parseInt(prompt('Ingrese un numero: ',' '));
     
     for(let i=1;i<=numero;i++){
         if(esDeficiente(i))
         document.write("<br>",i);
     }


 function esDeficiente(n){
     
         let a=0;
         for(let j=1;j<n;j++){
             if(n % j ==0){
                 a+=j;
             }
         }
         if(a<n){
         return true;
         }
         else{
             return false;
         }
 }