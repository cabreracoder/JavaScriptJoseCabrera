var edad = parseInt (prompt ("Ingresa tu edad"));
    if(edad< 0){
        alert("escribe por favor una edad CORRECTA");
    }
    if(edad>0 && edad<=12){
        alert("Tienes " + edad + " años "+", Tu rango es INFANTIL");
    }
    if(edad>12 && edad<=17){
        alert("Tienes " + edad + " años "+", Tu rango es ADOLESCENTE");
    }
    if(edad>17 && edad <=59){
        alert("Tienes " + edad + " años "+", Tu rango es ADULTO");
    }
    if(edad>59){
        alert("Tienes " + edad + " años "+", Tu rango es ADULTO MAYOR");
    }

    //OPERADOR TERNARIO

    (edad>0 && edad<=12)?alert("Tienes " + edad + " años "+", Tu rango es INFANTIL"):
    (edad>12 && edad<=17)?alert("Tienes " + edad + " años "+", Tu rango es ADOLESCENTE"):
    (edad>17 && edad <=59)?alert("Tienes " + edad + " años "+", Tu rango es ADULTO"):
    (edad>59)?alert("Tienes " + edad + " años "+", Tu rango es ADULTO MAYOR"):alert("escribe por favor una edad CORRECTA");