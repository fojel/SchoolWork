/*
Hacer una clase llamada CPassword que siga las siguientes condiciones:
    Que tenga los atributos longitud y contraseña . Por defecto, la longitud será de 8
    Los métodos que implementa serán:  
    esFuerte(): 
    devuelve un booleano si es fuerte o no, para que sea fuerte debe tener mas de 2 mayúsculas, mas de 1 minúscula y mas de 5 números.
    o generarPassword():
    genera la contraseña con caracteres aleatorios con la longitud de 8 (se debe contemplar  mayúsculas, mas de 1 minúscula y mas de 5 números).
*/

class CPassword {
    constructor(longitud=8) {
        this.longitud = longitud;
        this.contrasenia = this.generarPassword();
    }
  
    esFuerte(){
        let mayusculas = 0;
        let minusculas = 0;
        let numeros = 0;
    
        for(let i=0; i<this.contrasenia.length; i++){
            if (this.contrasenia[i].match(/[A-Z]/)) 
                mayusculas++;
            else if (this.contrasenia[i].match(/[a-z]/)) 
                minusculas++;
            else if (this.contrasenia[i].match(/[0-9]/)) 
                numeros++;
        }
    
        return mayusculas > 2 && minusculas > 1 && numeros > 5;
    }
  
    generarPassword(){
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = "";
  
        for(let i=0; i<this.longitud; i++){
            const caracter = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            password += caracter;
        }
  
        return password;
    }
}

  const contrasenia1 = new CPassword();
  document.write("Contrasenia: " + contrasenia1.contrasenia);  
  document.write("<br> Es fuerte? " + contrasenia1.esFuerte());  
  
  const contrasenia2 = new CPassword(14);  
  document.write("</br> Contrasenia: " + contrasenia2.contrasenia);
  document.write("<br> Es fuerte? " + contrasenia2.esFuerte());
  
