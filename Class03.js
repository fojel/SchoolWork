/*
   Hacer una clase llamada CPassword que siga las siguientes condiciones:
    Que tenga los atributos longitud y contraseña . Por defecto, la longitud será de 8
     Los métodos que implementa serán:  
    esFuerte(): 
    devuelve un booleano si es fuerte o no, para que sea fuerte debe tener mas de 2 mayúsculas, mas de 1 minúscula y mas de 5 números.
    o generarPassword(): 
    genera la contraseña con caracteres aleatorios con la longitud de 8 (se debe contemplar  mayúsculas, mas de 1 minúscula y mas de 5 números).
*/

class CPersona{
    constructor(nombre, fecha_nac, dni, genero, peso, altura, edad){
        this.nombre = nombre;
        this.fecha_nac = fecha_nac;
        this.dni = dni;
        this.genero = genero;
        this.peso = peso;
        this.altura = altura;
        this.edad = edad;
    }

    calcularIMC(){
        if(this.peso / (this.altura * this.altura) < 20)
            return -1;
        else if(this.peso / (this.altura * this.altura) >= 20 && this.peso / (this.altura * this.altura) <= 25)
            return 0;
        else if(this.peso / (this.altura * this.altura) > 25)
            return 1;
    }

    esMayorDeEdad(){
        return this.edad > 17;
    }
    
    comprobarGenero(){
        if(this.genero == 'F' || this.genero == 'M' || this.genero == 'X')
            return "El genero es correcto.";
        else
            return "El genero es incorrecto.";
    }

    calcularIMC2(peso){
        if(peso == -1)
            return "Esta por debajo de su peso ideal";
        else if(peso == 0)
            return "Posee un peso ideal";
        else if(peso == 1)
            return"Tiene sobrepeso";
    }
}

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event){
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const fecha_nac = document.getElementById('fecha_nac').value;
  const dni = document.getElementById('dni').value;
  const genero = document.getElementById('genero').value;
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  const edad = document.getElementById('edad').value;

  const persona = new CPersona(nombre, fecha_nac, dni, genero, peso, altura, edad);

  const datosPersona = document.getElementById('datosPersona');

  datosPersona.innerHTML = (persona.esMayorDeEdad() ? 'Es mayor de edad' : 'Es menor de edad')
                           + "<br>" + persona.comprobarGenero() + "<br>" + 
                           persona.calcularIMC2(persona.calcularIMC());
}
);

