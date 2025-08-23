var edad = parseInt(prompt("Ingrese su edad "));
    if (edad<16){
        alert("LO SIENTO, su edad no es apta para conducir");
    } else if (edad>=16 && edad<18){
        alert("Puede conducir pero con permiso especial");
    }else if(edad>=18){
        alert("PERFECTO, eres mayor de edad, conduce libremente");
    }
