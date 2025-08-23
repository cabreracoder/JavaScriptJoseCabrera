var num1 = parseFloat (prompt("Ingrese el primer numero"));
let num2 = parseFloat (prompt("Ingrese el segundo numero"));
var resultado;
var operador = prompt("Digite la operacion que desea realizar");

    if(operador == "+"){
        resultado=num1+num2
        alert("El resultado de la suma es : " + resultado);
    }else if(operador=="-"){
         resultado=num1-num2
        alert("El resultado de la resta es : " + resultado);
    }if(operador=="*"){
        resultado=num1*num2
        alert("El resultado de la multiplicacion es : " + resultado);
    }else if(operacion=="/"){
        resultado=num1*num2
        alert("El resultado de la division es : " + resultado);
    }