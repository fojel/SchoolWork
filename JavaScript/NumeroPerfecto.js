/*Realizar un programa que liste TODOS los números perfectos hasta un numero ingresado */
let numero,n;

numero=parseInt(prompt('Ingrese un numero: ',' '));
 
 for(let i=1;i<numero;i++){
     if(esPerfecto(i))
     document.write(i);
 }


function esPerfecto(n){
 
     let a=0;
     for(let j=1;j<n;j++){
         if(n % j ==0){
             a+=j;
         }
     }
     if(a==n){
     return true;
     }
     else{
         return false;
     }
}