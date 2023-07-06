/*
 Diseñar en Javascript que se ingrese una fecha.
            a) Hacer una función que calcule la cantidad de días que falta para año nuevo. Con una función llamada 
              CantidadDiasAnioNuevo($fecha).
              b) Hacer una función que calcule la cantidad de días que somos campeones del Mundo de futbol con una 
              función llamada CantidadDiasCatar2022($fecha).
              c) Hacer una función que reciba dos fechas y calcule la cantidad de años completos transcurridos entre ambas.
              d) Hacer una función que reciba una fecha  y determine si es un día laborable (de lunes a viernes) o no.
*/

let fecha = new Date();
let fecha1 = new Date(2015, 6, 4);
let fecha2 = new Date(2020, 5, 7);

document.write("Faltan " + Cantidadnewyear(fecha) + " días para Año Nuevo. <br>"); 
document.write("Somos campeones del mundo hace " + CantidadCatar2022(fecha) + " días. <br>"); 
document.write("Entre el 4 de julio del 2015 y el 7 de junio del 2020 hubo " + CantidadEntreAmbas(fecha1, fecha2) + " años completos. <br>"); 

if(esDiaLaborable(fecha) == true){
    document.write("Hoy es día laborable");
}else{    
    document.write("Hoy no es día laborable");
}
function Cantidadnewyear(fecha){
    fecha = new Date(2024, 00, 1, 0, 0, 0, 0);

    let ahora = new Date();
    let diasFaltan = fecha.getTime() - ahora.getTime();
    diasFaltan = Math.round(diasFaltan / (1000*60*60*24)); 

    return diasFaltan;
}

function CantidadCatar2022(fecha){
    fecha = new Date(2022, 11, 18);

    let ahora = new Date();

    let diasDesdeEntonces = ahora.getTime() - fecha.getTime();
    
    diasDesdeEntonces = Math.round(diasDesdeEntonces / (1000*60*60*24)); 

    return diasDesdeEntonces;    
}

function CantidadEntreAmbas(fecha1, fecha2){
    let diastranscurridos = new Date(fecha2.getTime() - fecha1.getTime());
    diastranscurridos = Math.round(diastranscurridos / (1000*60*60*24*31*12)); 

    return diastranscurridos;    
}

function esDiaLaborable(fecha){
    if((fecha.getDay() == 0) || (fecha.getDay() == 6)){
        return false;
    }else{
        return true;
    }
}