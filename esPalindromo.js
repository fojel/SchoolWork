/* Por cada caso de prueba se escribir ́a SI si la palabra o frase es pal ́ındroma y NO en caso contrario. */
let entrada,count1=0,count2=0,ult=0;

    entrada=prompt('Ingrese una palabra: ',' ');
        esPalindromo(entrada);


    function esPalindromo(entrada){
    for(let i=entrada.length-1;i>=0;i--){
      if(entrada.charAt(i)==entrada.charAt(ult)){
            count1++;
        }
        ult++;
    }

    if(entrada.length==count1){
        document.write('SI');
    }else{
        document.write('NO');
    }
    }