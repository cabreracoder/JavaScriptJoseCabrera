let numero = parseInt (prompt("Ingresa el numero a consultar"));
    if(numero%3==0 && numero%5==0){
        alert("el numero " + numero + " es divisible entre 3 y 5");
    }else {
        alert("El numero " + numero + "NO es divisible entre los dos numeros");
    }
