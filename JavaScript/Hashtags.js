/*
    Escriba una función que recupere las tres palabras más largas del titular de un periódico y las transforme en hashtags.
    Si varias palabras tienen la misma longitud, recupere la palabra que aparece primero.
    Si el título tiene menos de 3 palabras, simplemente ordene las palabras del título por longitud en orden descendente.
    La puntuación no cuenta para la longitud de una palabra.
*/

let frase = "Ahora vamos a tomar cafe";
transformarFrase(frase);

function transformarFrase(frase){
    let max = PalabraMayor(frase);
    let nuevaFrase = frase.replace(max, "");    
    
    let max2 = PalabraMayor(nuevaFrase);
    let nuevaFrase2 = nuevaFrase.replace(max2, "");    

    let max3 = PalabraMayor(nuevaFrase2);

    document.write("#" + max + ", #" + max2 + ", #" + max3);
}

function PalabraMayor(frase){
    let palabrasSeparadas = frase.split(' ');
    let mayor=0;
    let palabraMayor;
    
    for(let i=0; i<palabrasSeparadas.length; i++){
        if(palabrasSeparadas[i].length > mayor){
            palabraMayor = palabrasSeparadas[i];
            mayor++;        
        }
    }

    return palabraMayor;
}