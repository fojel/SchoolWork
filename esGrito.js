/*Hacer una función llamada EsGrito(texto) que devuelva el valor que solicita el problema.*/
let entrada,count1=0,count2=0;

entrada=prompt('Ingrese una palabra: ',' ');
    esGrito(entrada);


function esGrito(entrada){
for(let i=1;i<entrada.length;i++){
  if(entrada.charAt(i)=='!'){
        count1++;
    }else{
        count2++;
    }
}

if(count2>count1){
    document.write('Escrito');
}else{
    document.write('Esgrito');
}
}