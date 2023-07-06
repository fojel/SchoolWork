
let carac1 = prompt("Ingrese el caracter numero 1", ' ');
let carac2 = prompt("Ingrese el caracter numero 2", ' ');

let frase = prompt("Ingrese la frase infectada",' ');

document.write(Antivirus(carac1,carac2,frase));


function Antivirus(carac1,carac2,frase){
    
    for(let i=0; i<frase.length; i++){

        if((frase.charAt(i) && frase.charAt(i+2)) == carac1){
            if(frase.charAt(i+1) == carac2){
            frase=frase.split('');
            frase[i+1]="";
            frase=frase.join("");
        }
    }
    }
    
  return frase;
}