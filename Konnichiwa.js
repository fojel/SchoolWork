/* La salida consiste en n l ́ıneas siguiendo el formato “Konnichi wa, NOMuBuRE-san”, donde
NOMuBuRE es la japonizaci  ́on del NOMBRE le ́ıdo. Hay que respetar la capitalizaci  ́on del
nombre le ́ıdo, pero las letras ‘u’ que se a  ̃nadan deben ser siempre min  ́usculas. */

let string="";
let entrada = prompt("Ingrese una palabra", ' ');
esKonichiwa(entrada);

function esKonichiwa(entrada)
{

    for(let i=0;i<entrada.length;i++)
    {
        if(!vocal(entrada.charAt(i)) && !vocal(entrada.charAt(i+1)) && entrada[i]!='n')
        {
            console.log('hola');

            string += entrada[i];
            string += "u";
           
            continue;
        }
        string += entrada[i];
       
    }
    document.write(string);
    return string;
}

function vocal(char){
switch(char){
    case 'a':
        return true;
    case 'e':
        return true;
    case 'i':
        return true;
    case 'o':
        return true;
    case 'u':
        return true;
    default: 
        return false;
   
}
}
